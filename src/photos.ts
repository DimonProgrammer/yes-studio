/* ═══════════════════════════════════════════════════════
   YES STUDIO — Photo Configuration

   All photos are sourced from references/faces/
   Served from public/photos/
   ═══════════════════════════════════════════════════════ */

export const photos = {
  hero: '/photos/hero.jpg',

  gallery: [
    '/photos/gallery-1.jpg',
    '/photos/gallery-2.jpg',
    '/photos/gallery-3.jpg',
    '/photos/gallery-4.jpg',
  ],

  requirements: '/photos/requirements.jpg',
  conditions: '/photos/conditions.jpg',
  bentoPhoto: '/photos/bento-photo.jpg',
  strip: ['/photos/strip-1.jpg', '/photos/strip-2.jpg'],
  ctaBg: '/photos/cta-bg.jpg',

  // Новые блоки — placeholder
  videoPoster: '/photos/hero.jpg', // TODO: заменить на кадр из видео
  testimonials: [
    '/photos/gallery-1.jpg', // TODO: фото Алина
    '/photos/gallery-2.jpg', // TODO: фото Дарья
    '/photos/gallery-3.jpg', // TODO: фото Кристина
  ],
  transformation: '/photos/bento-photo.jpg', // TODO: lifestyle-фото
  successStories: [
    '/photos/gallery-1.jpg', // TODO: фото Кристина
    '/photos/gallery-2.jpg', // TODO: фото Мария
    '/photos/gallery-3.jpg', // TODO: фото Анна
  ],
} as const;
