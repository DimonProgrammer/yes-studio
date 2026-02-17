import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PROJECT_ID = 'n2knh3st'
const DATASET = 'production'
const TOKEN = 'skydUYsEaShjJHnDH9RnhVwqQHuooC050s8yJw8IOsJ5nqxaYYAHoOvLkdz5Zw3Dz87vd28jve11q6S6I'

const articles = [
  {
    id: 'l7WTgaKsd0OV3Uer30zY9h',
    title: 'Удалённая работа для девушек',
    image: path.join(__dirname, '..', 'public', 'photos', 'lifestyle-1.png'),
    contentType: 'image/png',
    alt: 'Девушка работает удалённо — лайфстайл стрим-модели'
  },
  {
    id: 'Er97N1YUQyKFCGa79FZ4vQ',
    title: 'Сколько зарабатывает вебкам-модель',
    image: path.join(__dirname, '..', 'public', 'photos', 'desert-vibe.jpg'),
    contentType: 'image/jpeg',
    alt: 'Стильная модель — доход и лайфстайл в YES Studio'
  }
]

async function uploadImage(filePath, contentType) {
  const data = fs.readFileSync(filePath)
  const filename = path.basename(filePath)

  const res = await fetch(
    `https://${PROJECT_ID}.api.sanity.io/v2024-01-01/assets/images/${DATASET}?filename=${filename}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': contentType,
        Authorization: `Bearer ${TOKEN}`
      },
      body: data
    }
  )

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Upload failed: ${res.status} ${text}`)
  }

  const json = await res.json()
  return json.document._id // e.g. "image-abc123-800x600-png"
}

async function patchArticle(articleId, imageAssetId, alt) {
  const res = await fetch(
    `https://${PROJECT_ID}.api.sanity.io/v2024-01-01/data/mutate/${DATASET}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN}`
      },
      body: JSON.stringify({
        mutations: [{
          patch: {
            id: articleId,
            set: {
              coverImage: {
                _type: 'image',
                alt,
                asset: {
                  _type: 'reference',
                  _ref: imageAssetId
                }
              }
            }
          }
        }]
      })
    }
  )

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Patch failed: ${res.status} ${text}`)
  }

  return res.json()
}

async function main() {
  for (const article of articles) {
    console.log(`\n📸 Uploading cover for: ${article.title}`)
    console.log(`   File: ${path.basename(article.image)}`)

    const assetId = await uploadImage(article.image, article.contentType)
    console.log(`   ✓ Uploaded: ${assetId}`)

    const result = await patchArticle(article.id, assetId, article.alt)
    console.log(`   ✓ Patched article: ${article.id}`)
  }

  console.log('\n✅ All covers uploaded and linked!')
}

main().catch(err => {
  console.error('Error:', err.message)
  process.exit(1)
})
