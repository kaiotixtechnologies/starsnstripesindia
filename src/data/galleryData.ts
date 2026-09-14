import { IMG_DARK_SKY } from "../components/shared"
import { ALL_WILD_PHOTOS } from "../assets/wildlifeGalleryData"

export interface PhotoItem {
  id: string
  image: string
  alt?: string
}

export const ASTRO_PHOTOS: PhotoItem[] = [
  {
    id: "astro-1",
    image: IMG_DARK_SKY,
    alt: "Milky Way over Pench Dark Sky Park",
  },
  {
    id: "astro-2",
    image:
      "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=1400&auto=format&fit=crop&q=85",
    alt: "Star trails over the jungle",
  },
  {
    id: "astro-3",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1400&auto=format&fit=crop&q=85",
    alt: "Deep sky galactic panorama",
  },
  {
    id: "astro-4",
    image:
      "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?w=1400&auto=format&fit=crop&q=85",
    alt: "Milky Way core over night horizon",
  },
  {
    id: "astro-5",
    image:
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1400&auto=format&fit=crop&q=85",
    alt: "Nightscape dark sky stars",
  },
  {
    id: "astro-6",
    image:
      "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=1400&auto=format&fit=crop&q=85",
    alt: "Starry dark sky over wilderness",
  },
  {
    id: "astro-7",
    image:
      "https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?w=1400&auto=format&fit=crop&q=85",
    alt: "Stargazing and astrophotography vista",
  },
]

// Wild section photos from wild_section_photos (base64 embedded data URIs)
export const WILDLIFE_PHOTOS: PhotoItem[] = ALL_WILD_PHOTOS.map((img, idx) => ({
  id: `wild-${idx + 1}`,
  image: img,
  alt: `Wildlife Expedition Photo ${idx + 1}`,
}))
