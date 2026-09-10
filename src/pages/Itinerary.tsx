import { useState } from 'react'
import { FadeIn, GoldDivider, Rule, Eyebrow, GoldBtn, OutlineBtn, PageHero, IMG_ITINERARY_HERO } from '../components/shared'

const DAYS = [
  {
    id: 'd1',
    label: 'DAY 1 — APRIL 5',
    title: 'Arrival in Nagpur → Transfer to Pench Tiger Reserve',
    phase: 'Pench',
    content: (
      <>
        <p className="mb-3">
          Arrive at Nagpur Airport (NAG) by 9:30 AM or earlier (we can arrange room(s) at the Radisson Blu Hotel, 2 miles from Nagpur airport, at an extra charge, if you plan to arrive the previous day). We'll meet the group in the lobby of the Radisson Blu at 10:00 AM and drive roughly 2.5–3 hours to our jungle lodge on the edge of Pench Tiger Reserve. Lunch is served on arrival at the lodge. After settling in, we will hold a welcome briefing and full gear review — camera settings, lens choice for wildlife vs. astro, and a look at the week's weather and moon phase. First group dinner in the evening.
        </p>
        <p>
          First astrophotography session at night, led by Abhishek Pawse, at the lodge's dedicated astrophotography space, a short walk away.
        </p>
      </>
    ),
  },
  {
    id: 'd2',
    label: 'DAY 2 TO DAY 4 — APRIL 6 TO APRIL 8',
    title: 'Pench: Safaris, Dark-Sky Sessions & Post-Processing Workshops',
    phase: 'Pench',
    content: (
      <>
        <p className="mb-3">
          Rest in the morning. After a relaxed morning and lunch, we leave the lodge around 2:30 PM for the day's wildlife safari with Himanshu and Srini into the core reserve zone, tracking tigers, leopards, bears, and Indian gaur, among others, along forest trails and waterholes. We return to the lodge by around 7 PM for dinner. We leave around 9 PM after dinner for the 45-minute drive to Pench's main dark-sky observation site for the day's astrophotography session with Abhishek, returning around 2–3 AM. On April 7 and 8, between 11:30 AM and 1:00 PM, for interested guests, we will have sessions at the lodge reviewing photos, going over post-processing techniques in Adobe Lightroom and Photoshop, and discussing all things photography.
        </p>
        <p className="p-3 bg-[#F2EDE2] rounded-sm text-xs font-medium text-[#7A5C1E]">
          Three safaris and three dark-sky sessions across three nights in Pench. Each safari session is about four hours. Each night sky session will be approximately from 10:00 PM to 2:00 AM (departure will be somewhat flexible) at Pench's main dark-sky location.
        </p>
      </>
    ),
  },
  {
    id: 'd3',
    label: 'DAY 5 — APRIL 9',
    title: 'Travel day: Pench → Tadoba-Andhari Tiger Reserve',
    phase: 'Transfer',
    content: (
      <p>
        After breakfast, around 9:30 AM, we bid farewell to Pench and take comfortable Toyota Innova vehicles for the approximately 5-hour drive to Tadoba-Andhari Tiger Reserve. Lunch en route. No safari today on either end of the journey — a rest day for gear, memory card backups, and recovery from the late Pench nights. We arrive at our Tadoba lodge in the afternoon, settle in, and have dinner and rest, ready for the first full safari day tomorrow.
      </p>
    ),
  },
  {
    id: 'd4',
    label: 'DAY 6 — APRIL 10',
    title: 'Tadoba (TWO HALF – DAY SAFARIS)',
    phase: 'Tadoba',
    content: (
      <p>
        We start in Tadoba with a morning-and-evening rhythm: leave the lodge around 5 AM, return to the lodge around 10:30 AM (breakfast served at a scenic location inside the reserve, with hot tea, coffee, and snacks on hand), rest and have lunch, then head out again around 2:30 PM for the afternoon safari, returning 7–7:30 PM for dinner. These days run across 4 vehicles — a comfortable two guests per vehicle — with Himanshu and Srini rotating between vehicles through the day. For interested guests, we have a photo review, analysis, and post-processing session with Srini from 12:30–1:30 PM.
      </p>
    ),
  },
  {
    id: 'd5',
    label: 'DAY 7 — APRIL 11',
    title: 'Tadoba (FULL-DAY SAFARI)',
    phase: 'Tadoba',
    content: (
      <p>
        Today is a long 12-hour full-day safari, maximizing time in the field across the full arc of daylight, from first light through the midday lull and into evening color. We enter the park at dawn and remain inside until dusk, with a packed lunch and plenty of snacks, tea, and coffee provided in the park throughout the day. Park regulations limit full-day safaris to 3 vehicles; co-directors Himanshu and Srini rotate between vehicles to ensure every guest gets direct time with both.
      </p>
    ),
  },
  {
    id: 'd6',
    label: 'DAY 8 — APRIL 12',
    title: 'Tadoba (TWO HALF-DAY SAFARIS)',
    phase: 'Tadoba',
    content: (
      <>
        <p className="mb-2">
          Our second day with a morning-and-evening rhythm; same as on Day 6, April 10th.
        </p>
        <p>
          We will almost certainly enter from a different gate, though, and explore a different part of Tadoba.
        </p>
      </>
    ),
  },
  {
    id: 'd7',
    label: 'DAY 9 — APRIL 13',
    title: 'Tadoba (FULL-DAY SAFARI)',
    phase: 'Tadoba',
    content: (
      <>
        <p className="mb-2">
          Our final 12-hour full-day safari, following the same rhythm as April 11.
        </p>
        <p className="p-3 bg-[#E8F5EE] rounded-sm text-xs font-medium text-[#1A5030]">
          Six safaris across four days in Tadoba — 40 hours of dedicated safari time, including two full 12-hour days.
        </p>
      </>
    ),
  },
  {
    id: 'd8',
    label: 'DAY 10 — APRIL 14',
    title: 'Farewell Breakfast & Airport Drop-Off',
    phase: 'Departure',
    content: (
      <p>
        Farewell breakfast at the lodge. Drop-off to Nagpur airport and/or hotel (depending on guests' preference). Please arrange to book flights departing at or after 2 PM. End of tour.
      </p>
    ),
  },
]

const PHASE_PILL: Record<string, { bg: string; text: string }> = {
  Pench: { bg: '#EAF0F8', text: '#1A4080' },
  Transfer: { bg: '#FBF3E0', text: '#7A5000' },
  Tadoba: { bg: '#E8F5EE', text: '#1A5030' },
  Departure: { bg: '#F0F0F0', text: '#444' },
}

export default function Itinerary() {
  const [open, setOpen] = useState<string | null>('d1')

  return (
    <>
      <PageHero
        eyebrow="April 5 – 14, 2027 · 9 Nights / 10 Days"
        title="Day-by-Day Itinerary"
        subtitle="The itinerary is flexible to ensure the best photography and viewing conditions for both astro- and wildlife photography. April is the driest part of the year in central India, giving us the best odds of clear skies throughout your stay."
        bg={IMG_ITINERARY_HERO}
        bgPos="center center"
      />

      <GoldDivider />

      {/* ── Page 5: Astro & Wildlife Section Intros ───────────────────────── */}
      <section style={{ background: '#FAFAF7' }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          
          {/* Astrophotography in Pench */}
          <FadeIn className="p-8 rounded-sm bg-white" style={{ border: '1px solid rgba(13,27,42,0.08)', boxShadow: 'var(--shadow)' }}>
            <h3 className="font-serif text-2xl font-bold mb-4" style={{ color: '#0D1B2A' }}>
              Astrophotography in Pench:
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#3D4F60' }}>
              April 6, 2027 is new moon day, guaranteeing the darkest possible skies for our four nights of astrophotography on the tour. The first session (April 5) takes place at the lodge's own dedicated astrophotography space, a short walk from your room — an easy introduction on arrival night. The remaining three sessions (April 6–8) move to Pench's main dark-sky observation site, roughly a 45-minute drive from the lodge, in the heart of the area recognized as India's first Dark Sky Park in January 2024.
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#3D4F60' }}>
              The Milky Way, including the galactic core, is visible for approximately five hours on clear nights, moving from a low horizon approximately 5-degree arch before midnight to a high vertical approximately 70-degree position in the pre-dawn hours — giving photographers strong options for both wide panoramas and vertical compositions across the course of a night's session.
            </p>
            <p className="text-sm font-medium leading-relaxed" style={{ color: '#7A5C1E' }}>
              All four sessions are led by Abhishek Pawse, the DarkSky International advocate whose work helped bring Pench its Dark Sky Park designation, with Srini providing hands-on support throughout.
            </p>
          </FadeIn>

          {/* Wildlife photography in two of India's best tiger sanctuaries */}
          <FadeIn className="p-8 rounded-sm bg-white" style={{ border: '1px solid rgba(13,27,42,0.08)', boxShadow: 'var(--shadow)' }}>
            <h3 className="font-serif text-2xl font-bold mb-4" style={{ color: '#0D1B2A' }}>
              Wildlife photography in two of India's best tiger sanctuaries:
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#3D4F60' }}>
              Wildlife photography guide Himanshu Bagde, alongside local naturalist guides, is expert at tracking wildlife and animal activity, and will adjust point-of-entry-to-the-park choices and safari timings to give you the best possible chances at strong images.
            </p>
          </FadeIn>

        </div>
      </section>

      <Rule />

      {/* ── Page 6–9: DAY-BY-DAY ITINERARY Accordion ───────────────────────── */}
      <section style={{ background: '#FFFFFF' }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <Eyebrow className="mb-3">Detailed Program</Eyebrow>
            <h2 className="font-serif text-3xl font-bold mb-10" style={{ color: '#0D1B2A' }}>
              DAY-BY-DAY ITINERARY
            </h2>
          </FadeIn>
          <FadeIn delay={80} className="rounded-sm overflow-hidden"
            style={{ border: '1px solid rgba(13,27,42,0.1)', boxShadow: 'var(--shadow)' }}>
            {DAYS.map((day, idx) => (
              <div key={day.id} style={{ borderBottom: idx < DAYS.length - 1 ? '1px solid rgba(13,27,42,0.08)' : 'none' }}>
                <button
                  className="w-full flex items-start justify-between px-7 py-6 text-left transition-colors hover:bg-amber-50/30"
                  onClick={() => setOpen(o => o === day.id ? null : day.id)}>
                  <div className="flex items-start gap-4 min-w-0">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                      style={{ background: PHASE_PILL[day.phase]?.bg, color: PHASE_PILL[day.phase]?.text }}>
                      {idx + 1}
                    </span>
                    <div>
                      <p className="eyebrow text-[10px] mb-1" style={{ color: '#A07828' }}>{day.label}</p>
                      <p className="font-serif text-lg font-semibold leading-snug" style={{ color: '#0D1B2A' }}>{day.title}</p>
                    </div>
                  </div>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="mt-2 flex-shrink-0 ml-4"
                    style={{ transform: open === day.id ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}>
                    <path d="M5 7.5l5 5 5-5" stroke="#A07828" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div style={{ maxHeight: open === day.id ? '700px' : '0', overflow: 'hidden', transition: 'max-height 0.4s ease' }}>
                  <div className="px-7 pb-7 pt-1 border-t border-black/[0.04]">
                    <div className="text-sm leading-[1.9]" style={{ color: '#4A5568' }}>{day.content}</div>
                  </div>
                </div>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      <GoldDivider />

      <section style={{ background: '#F2EDE2' }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="font-serif text-2xl font-bold mb-6" style={{ color: '#0D1B2A' }}>Ready to join the expedition?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GoldBtn to="/book">Reserve Your Spot</GoldBtn>
              <OutlineBtn to="/pricing">View Pricing</OutlineBtn>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
