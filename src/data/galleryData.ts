import { IMG_DARK_SKY, IMG_HERO, IMG_TIGER_FOCUS } from "../components/shared"

export interface PhotoItem {
  id: string
  title: string
  subtitle?: string
  location: string
  image: string
  tag: string
  cameraInfo?: string
}

export const ASTRO_PHOTOS: PhotoItem[] = [
  {
    id: "astro-1",
    title: "Milky Way Arch Over Pench Forest",
    subtitle: "Galactic core rising above the teak canopy during the April new moon window",
    location: "Pench Dark Sky Park",
    image: IMG_DARK_SKY,
    tag: "Milky Way",
    cameraInfo: "Bortle Class 3 • Wide Angle",
  },
  {
    id: "astro-2",
    title: "Star Trails Over the Central Indian Jungle",
    subtitle: "Long exposure polar alignment capturing concentric star rotations",
    location: "Pench Dark Sky Park",
    image:
      "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=1200&auto=format&fit=crop&q=80",
    tag: "Star Trails",
    cameraInfo: "Circumpolar Composite",
  },
  {
    id: "astro-3",
    title: "Deep Sky Celestial Panorama",
    subtitle: "High ISO tracking showing vivid nebula hues and dense star fields",
    location: "Sillari Dark Sky Observation Site",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80",
    tag: "Deep Sky",
    cameraInfo: "Equatorial Star Tracker",
  },
  {
    id: "astro-4",
    title: "Scorpio & Galactic Center Rising",
    subtitle: "Brilliant celestial dust lanes over the tranquil buffer waters",
    location: "Pench National Park",
    image:
      "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?w=1200&auto=format&fit=crop&q=80",
    tag: "Galactic Core",
    cameraInfo: "35mm Astro-Landscape",
  },
  {
    id: "astro-5",
    title: "Twilight Celestial Transition",
    subtitle: "Blue hour fading into pure zero-light-pollution pristine darkness",
    location: "Pench Dark Sky Park",
    image:
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    tag: "Nightscape",
    cameraInfo: "Twilight Blending",
  },
]

export const WILDLIFE_PHOTOS: PhotoItem[] = [
  {
    id: "wild-1",
    title: "Bengal Tiger in Golden Afternoon Light",
    subtitle: "Dominant adult male scanning his territory along the dry watercourse",
    location: "Tadoba-Andhari Tiger Reserve",
    image: IMG_HERO,
    tag: "Royal Bengal Tiger",
    cameraInfo: "500mm Telephoto • Core Zone",
  },
  {
    id: "wild-2",
    title: "Tiger at the Forest Waterhole",
    subtitle: "Quenching thirst during peak April dry season mid-day warmth",
    location: "Tadoba Buffer Zone",
    image: IMG_TIGER_FOCUS,
    tag: "Waterhole Action",
    cameraInfo: "Eye-level Safari Perspective",
  },
  {
    id: "wild-3",
    title: "Leopard on the Teak Branch",
    subtitle: "Elusive Indian leopard resting high above the forest floor",
    location: "Pench National Park",
    image:
      "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=1200&auto=format&fit=crop&q=80",
    tag: "Indian Leopard",
    cameraInfo: "Low-light Rainforest Canopy",
  },
  {
    id: "wild-4",
    title: "Sloth Bear Foraging in Morning Mist",
    subtitle: "Early morning safari encounter near termite mounds",
    location: "Tadoba-Andhari",
    image:
      "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=1200&auto=format&fit=crop&q=80",
    tag: "Sloth Bear",
    cameraInfo: "Full-day Safari Drive",
  },
  {
    id: "wild-5",
    title: "Spotted Deer Herd in Bamboo Thicket",
    subtitle: "Alert chital stags in dappled central Indian wilderness light",
    location: "Pench Tiger Reserve",
    image:
      "https://images.unsplash.com/photo-1484406566174-9da000fda645?w=1200&auto=format&fit=crop&q=80",
    tag: "Jungle Wildlife",
    cameraInfo: "Environmental Portraiture",
  },
]
