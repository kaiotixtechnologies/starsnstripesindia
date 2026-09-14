import { IMG_DARK_SKY } from "../components/shared"

import wild1 from "../assets/wildlife/wild-1.jpg"
import wild2 from "../assets/wildlife/wild-2.jpg"
import wild3 from "../assets/wildlife/wild-3.jpg"
import wild4 from "../assets/wildlife/wild-4.jpg"
import wild5 from "../assets/wildlife/wild-5.jpg"
import wild6 from "../assets/wildlife/wild-6.jpg"
import wild7 from "../assets/wildlife/wild-7.jpg"
import wild8 from "../assets/wildlife/wild-8.jpg"
import wild9 from "../assets/wildlife/wild-9.jpg"
import wild10 from "../assets/wildlife/wild-10.jpg"
import wild11 from "../assets/wildlife/wild-11.jpg"

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

// Wild section photos imported directly from src/assets/wildlife (wild_section_photos)
export const WILDLIFE_PHOTOS: PhotoItem[] = [
  {
    id: "wild-1",
    image: wild1,
    alt: "Bengal Tiger Expedition",
  },
  {
    id: "wild-2",
    image: wild2,
    alt: "Tiger Portrait in Tadoba",
  },
  {
    id: "wild-3",
    image: wild3,
    alt: "Wildlife in Central India",
  },
  {
    id: "wild-4",
    image: wild4,
    alt: "Tiger by the Forest Waterhole",
  },
  {
    id: "wild-5",
    image: wild5,
    alt: "Majestic Bengal Tiger Stride",
  },
  {
    id: "wild-6",
    image: wild6,
    alt: "Tiger Prowling in Forest",
  },
  {
    id: "wild-7",
    image: wild7,
    alt: "Tiger at Waterbody",
  },
  {
    id: "wild-8",
    image: wild8,
    alt: "Jungle Wildlife Encounter",
  },
  {
    id: "wild-9",
    image: wild9,
    alt: "Central Indian Fauna",
  },
  {
    id: "wild-10",
    image: wild10,
    alt: "Tiger in Natural Habitat",
  },
  {
    id: "wild-11",
    image: wild11,
    alt: "Wildlife Safari Drive",
  },
]
