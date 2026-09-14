import { IMG_DARK_SKY } from "../components/shared"

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

// Wild section photos from wild_section_photos folder ONLY
export const WILDLIFE_PHOTOS: PhotoItem[] = [
  {
    id: "wild-1",
    image: "/wildlife/wild-1.jpg",
    alt: "Wildlife Expedition Photo 1",
  },
  {
    id: "wild-2",
    image: "/wildlife/wild-2.jpg",
    alt: "Wildlife Expedition Photo 2",
  },
  {
    id: "wild-3",
    image: "/wildlife/wild-3.jpg",
    alt: "Wildlife Expedition Photo 3",
  },
  {
    id: "wild-4",
    image: "/wildlife/wild-4.jpg",
    alt: "Wildlife Expedition Photo 4",
  },
  {
    id: "wild-5",
    image: "/wildlife/wild-5.jpg",
    alt: "Wildlife Expedition Photo 5",
  },
  {
    id: "wild-6",
    image: "/wildlife/wild-6.jpg",
    alt: "Wildlife Expedition Photo 6",
  },
  {
    id: "wild-7",
    image: "/wildlife/wild-7.jpg",
    alt: "Wildlife Expedition Photo 7",
  },
  {
    id: "wild-8",
    image: "/wildlife/wild-8.jpg",
    alt: "Wildlife Expedition Photo 8",
  },
  {
    id: "wild-9",
    image: "/wildlife/wild-9.jpg",
    alt: "Wildlife Expedition Photo 9",
  },
  {
    id: "wild-10",
    image: "/wildlife/wild-10.jpg",
    alt: "Wildlife Expedition Photo 10",
  },
  {
    id: "wild-11",
    image: "/wildlife/wild-11.jpg",
    alt: "Wildlife Expedition Photo 11",
  },
]
