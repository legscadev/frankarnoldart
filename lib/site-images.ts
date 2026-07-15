/**
 * Hotlinked image URLs from frankarnoldart.com — for preview/staging only.
 * Replace with your own CDN paths (and remove the remotePattern in
 * next.config.ts) before shipping to production.
 */

const BASE = "https://frankarnoldart.com/wp-content/uploads";

export const siteImages = {
  hero: {
    portrait: `${BASE}/2026/07/img_0760.jpg`,
    studioVilla: `${BASE}/2026/04/frank_studio_villa_720.jpg`,
    artistInCabo: `${BASE}/2021/03/frank-arnold-artist-in-cabo2.jpg`,
  },
  featured: {
    artwork1: `${BASE}/2021/03/frank-arnold-artwork1.jpg`,
    artwork2: `${BASE}/2021/03/frank-arnold-artwork2.jpg`,
    artwork4: `${BASE}/2021/03/frank-arnold-artwork4.jpg`,
    artwork5: `${BASE}/2021/03/frank-arnold-artwork5.jpg`,
    artwork6: `${BASE}/2021/03/frank-arnold-artwork6.jpg`,
    artwork7: `${BASE}/2021/03/frank-arnold-artwork7.jpg`,
    galleryCabo1: `${BASE}/2021/03/frank-arnold-art-gallery-cabo1.jpg`,
  },
  emblems: {
    galleryDistrictSeal: `${BASE}/2021/03/gallery-district-san-jose-del-cabo-seal.png`,
  },
  studios: {
    cabo: [
      `${BASE}/2021/03/frank-arnold-art-gallery-cabo-slide1.jpg`,
      `${BASE}/2021/03/frank-arnold-art-gallery-cabo-slide2.jpg`,
      `${BASE}/2021/03/frank-arnold-art-gallery-cabo-slide3.jpg`,
      `${BASE}/2021/03/frank-arnold-art-gallery-cabo-slide4.jpg`,
      `${BASE}/2021/03/frank-arnold-art-gallery-cabo-slide5.jpg`,
      `${BASE}/2021/03/frank-arnold-art-gallery-cabo-slide6.jpg`,
      `${BASE}/2021/03/frank-arnold-art-gallery-cabo-slide7.jpg`,
      `${BASE}/2021/03/frank-arnold-art-gallery-cabo-slide8.jpg`,
      `${BASE}/2021/03/frank-arnold-art-gallery-cabo-slide9.jpg`,
      `${BASE}/2021/03/frank-arnold-art-gallery-cabo-slide10.jpg`,
      `${BASE}/2021/03/frank-arnold-art-gallery-cabo-slide11.jpg`,
    ],
    mexico: [
      `${BASE}/2021/03/frank-arnold-studio-mexico-slide1.jpg`,
      `${BASE}/2021/03/frank-arnold-studio-mexico-slide2.jpg`,
      `${BASE}/2021/03/frank-arnold-studio-mexico-slide3.jpg`,
      `${BASE}/2021/03/frank-arnold-studio-mexico-slide4.jpg`,
    ],
    california: [
      `${BASE}/2021/03/frank-arnold-art-gallery-fresno-slide1.jpg`,
      `${BASE}/2021/03/frank-arnold-art-gallery-fresno-slide2.jpg`,
      `${BASE}/2021/03/frank-arnold-art-gallery-fresno-slide3.jpg`,
      `${BASE}/2021/03/frank-arnold-art-gallery-fresno-slide4.jpg`,
      `${BASE}/2021/03/frank-arnold-art-gallery-fresno-slide5.jpg`,
      `${BASE}/2021/03/frank-arnold-art-gallery-fresno-slide6.jpg`,
      `${BASE}/2021/03/frank-arnold-art-gallery-fresno-slide7.jpg`,
    ],
  },
} as const;
