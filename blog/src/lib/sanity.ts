import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = import.meta.env.SANITY_PROJECT_ID || ''
const isConfigured = !!projectId && projectId !== 'placeholder'

export const client = isConfigured
  ? createClient({
      projectId,
      dataset: 'production',
      apiVersion: '2026-02-16',
      useCdn: true,
    })
  : null

const builder = client ? imageUrlBuilder(client) : null

export function urlFor(source: any) {
  if (!builder) return { width: () => ({ height: () => ({ format: () => ({ url: () => '' }) }) }) } as any
  return builder.image(source)
}

async function safeFetch<T>(query: string, params?: Record<string, any>): Promise<T> {
  if (!client) return [] as unknown as T
  try {
    return await client.fetch(query, params)
  } catch (e) {
    console.warn('[sanity] Query failed:', (e as Error).message)
    return [] as unknown as T
  }
}

// Fetch all published posts
export async function getAllPosts() {
  return safeFetch<any[]>(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      coverImage,
      publishedAt,
      "category": category->{ title, slug },
      tags,
      "readTime": round(length(pt::text(body)) / 1200)
    }
  `)
}

// Fetch a single post by slug
export async function getPost(slug: string) {
  if (!client) return null
  try {
    return await client.fetch(
      `
      *[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        excerpt,
        coverImage,
        body,
        publishedAt,
        seoTitle,
        seoDescription,
        "category": category->{ title, slug },
        tags,
        "readTime": round(length(pt::text(body)) / 1200)
      }
    `,
      { slug }
    )
  } catch (e) {
    console.warn('[sanity] getPost failed:', (e as Error).message)
    return null
  }
}

// Fetch related posts (same category first, fall back to recent)
export async function getRelatedPosts(categorySlug: string | null, currentId: string) {
  if (categorySlug) {
    const sameCat = await safeFetch<any[]>(
      `
      *[_type == "post" && category->slug.current == $categorySlug && _id != $currentId] | order(publishedAt desc) [0...3] {
        _id, title, slug, excerpt, coverImage, publishedAt,
        "category": category->{ title, slug },
        "readTime": round(length(pt::text(body)) / 1200)
      }
    `,
      { categorySlug, currentId }
    )
    if (sameCat.length >= 2) return sameCat
  }
  // Fall back to most recent posts
  return safeFetch<any[]>(
    `
    *[_type == "post" && _id != $currentId] | order(publishedAt desc) [0...3] {
      _id, title, slug, excerpt, coverImage, publishedAt,
      "category": category->{ title, slug },
      "readTime": round(length(pt::text(body)) / 1200)
    }
  `,
    { currentId }
  )
}

// Fetch all categories
export async function getAllCategories() {
  return safeFetch<any[]>(`
    *[_type == "category"] | order(title asc) {
      _id,
      title,
      slug,
      description
    }
  `)
}

// Fetch posts by category
export async function getPostsByCategory(categorySlug: string) {
  return safeFetch<any[]>(
    `
    *[_type == "post" && category->slug.current == $categorySlug] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      coverImage,
      publishedAt,
      "category": category->{ title, slug },
      tags,
      "readTime": round(length(pt::text(body)) / 1200)
    }
  `,
    { categorySlug }
  )
}

// Get all post slugs (for static generation)
export async function getAllSlugs() {
  return safeFetch<any[]>(`*[_type == "post"]{ "slug": slug.current }`)
}
