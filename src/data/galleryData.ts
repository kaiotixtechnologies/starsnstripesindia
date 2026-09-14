import { ALL_ASTRO_PHOTOS } from "../assets/astroGalleryData"
import { ALL_WILD_PHOTOS } from "../assets/wildlifeGalleryData"

export interface PhotoItem {
  id: string
  image: string
  alt?: string
}

// Astro section photos from astro_section_photos (base64 embedded data URIs)
export const ASTRO_PHOTOS: PhotoItem[] = ALL_ASTRO_PHOTOS.map((img, idx) => ({
  id: `astro-${idx + 1}`,
  image: img,
  alt: `Astrophotography Expedition Photo ${idx + 1}`,
}))

// Wild section photos from wild_section_photos (base64 embedded data URIs)
export const WILDLIFE_PHOTOS: PhotoItem[] = ALL_WILD_PHOTOS.map((img, idx) => ({
  id: `wild-${idx + 1}`,
  image: img,
  alt: `Wildlife Expedition Photo ${idx + 1}`,
}))
