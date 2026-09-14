import { IMG_DARK_SKY, IMG_HERO, IMG_TIGER_FOCUS } from "../components/shared"

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

export const WILDLIFE_PHOTOS: PhotoItem[] = [
  {
    id: "wild-1",
    image: IMG_HERO,
    alt: "Bengal Tiger in golden light",
  },
  {
    id: "wild-2",
    image: IMG_TIGER_FOCUS,
    alt: "Tiger at the forest waterhole",
  },
  {
    id: "wild-3",
    image:
      "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=1400&auto=format&fit=crop&q=85",
    alt: "Indian leopard in teak canopy",
  },
  {
    id: "wild-4",
    image:
      "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=1400&auto=format&fit=crop&q=85",
    alt: "Sloth bear in morning safari",
  },
  {
    id: "wild-5",
    image:
      "https://images.unsplash.com/photo-1484406566174-9da000fda645?w=1400&auto=format&fit=crop&q=85",
    alt: "Spotted deer herd in jungle",
  },
  {
    id: "wild-6",
    image:
      "https://images.unsplash.com/photo-1615829386703-e29a9a567c9c?w=1400&auto=format&fit=crop&q=85",
    alt: "Tiger prowling through grass",
  },
  {
    id: "wild-7",
    image:
      "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=1400&auto=format&fit=crop&q=85",
    alt: "Bengal tiger close encounter",
  },
]
