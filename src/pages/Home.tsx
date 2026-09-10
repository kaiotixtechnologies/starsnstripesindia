import { Link } from 'react-router-dom'
import { FadeIn, GoldDivider, Rule, CheckIcon, XIcon, Eyebrow, GoldBtn, OutlineBtn, IMG_HERO, IMG_MILKY, IMG_TIGER1, IMG_TIGER2, IMG_STARS } from '../components/shared'

import type { ReactNode } from 'react'

const WHY_TOUR_STANDS_OUT: ReactNode[] = [
  'Two genres in one trip: astrophotography and wildlife photography.',
  'A rare dark-sky setting inside a tiger reserve at Pench.',
  'April 6, 2027 is new moon, guaranteeing the darkest possible skies for our four nights of astrophotography — timed to central India\'s dry season, historically the most reliable window for clear night skies, with the full Milky Way, including the galactic core, visible for over five hours each night.',
  'Prime dry-season timing for tiger photography in central India, when sightings around water and open habitat are at their best.',
  'Small-group access: two co-directors present throughout the trip, joined by a specialist astrophotography expert for four nights in Pench — never more than 8 guests total.',
  (
    <span>
      7 half-day safaris (four hours each, 3 safaris in Pench, 4 safaris in Tadoba, <strong>2 photographers per jeep</strong>) and 2 full-day 12-hour safaris (<strong>max. 3 photographers per jeep</strong>) in Tadoba totaling 52 hours of dedicated safari time, plus four dark-sky sessions (4-5 hours each) in Pench.
    </span>
  ),
  'A mix of full-day and half-day safaris in Tadoba — the same format used by leading international tiger-photography operators — designed to maximize both the volume and the diversity of sightings.',
  'Wildlife guidance from Himanshu Bagde, who has photographed over 700 individual tigers across more than two decades and tracks individual tigers by name and territory across Pench and Tadoba.',
  'Four nights of expert astrophotography guidance in Pench from Abhishek Pawse, the DarkSky International advocate whose work helped bring Pench its Dark Sky Park designation.',
  'Co-direction, astrophotography coaching, and Lightroom/Photoshop post-processing guidance throughout from P S Srinivas (“Srini”).',
]

const WHATS_INCLUDED: ReactNode[] = [
  'Airport pick-up and drop-off at Nagpur (NAG)',
  'All transportation throughout the programme in private 4x4 Innova vehicles, plus dedicated safari vehicles',
  (
    <span>
      All safari jeep and park permit fees for Pench and Tadoba-Andhari, core and buffer zones (7 half-day safaris (<strong>2 photographers per jeep</strong>) and 2 full-day safaris (<strong>max. 3 photographers per jeep</strong>))
    </span>
  ),
  'Twin-share accommodation at Saj in the Forest Resort (Pench) and Tathastu Resort (Tadoba), each airconditioned room with a private bathroom',
  'All meals (breakfast, lunch, and dinner) throughout the stay',
  'Hot beverages and snacks on all safaris; packed lunches in the park on our two full-day Tadoba safaris (April 11 AND 13)',
  "Four dedicated astrophotography sessions in Pench, including three at Pench's main dark-sky observation site",
  'Guided photo review and post-processing sessions (Lightroom/Photoshop) with Srini, throughout the trip',
  'Pre-tour online planning video call with Himanshu and Srini',
  'Co-direction throughout from Himanshu Bagde and P S Srinivas, joined in Pench by astrophotography expert Abhishek Pawse',
  'All prices inclusive of all applicable Indian taxes',
]

const WHATS_NOT_INCLUDED = [
  'Flights to/from Nagpur Airport',
  'Single room upgrade — at an extra charge, subject to availability',
  'Visa fees',
  'Health/travel insurance (strongly recommended — see booking terms)',
  'Camera gear rental (e.g., star tracker, telephoto lens)',
  'Tips, personal expenses, and anything not listed above',
]

const TOUR_HIGHLIGHTS = [
  'Photo tour: April 5 – April 14, 2027 (9 nights, 10 days) — the inaugural running of this expedition',
  'Group size: Maximum of 8 photographers, co-directed throughout by wildlife photographer Himanshu Bagde and astrophotography & post-processing guide P S Srinivas (“Srini”), joined in Pench by astrophotography expert Abhishek Pawse for four dedicated dark-sky sessions — supported by local naturalist guides and jeep drivers',
  'Main topics: wildlife photography & astrophotography',
  "Main areas: (1) Astrophotography and tiger safaris in Pench National Park (April 5–9), with astrophotography sessions at Pench's dark-sky observation sites. (2) Tiger safaris in Tadoba-Andhari Tiger Reserve (April 9–14).",
  'Pench: one astrophotography session on arrival night (April 5); one afternoon safari and one astrophotography session each on April 6, 7, and 8.',
  'April 9: travel day — approximately 5-hour transfer from Pench to Tadoba; no safari.',
  'Tadoba-Andhari: a mix of full-day and half-day safaris across April 10–13 — two full 12-hour safari days (April 11 and 13) with packed lunches in the park, and two days with two four-hour half-day safaris each day (one in the morning and one in the afternoon on (April 10 and 12) — 6 safaris totaling 40 hours in the field.',
  'Guided photo review and post-processing sessions (Lightroom/Photoshop) with Srini, throughout the trip.',
  'Farewell breakfast and airport drop-off on April 14.',
  'Accommodation in luxury jungle lodges with all meals included, near national park gates in both Pench and Tadoba.',
]

export default function Home() {
  return (
    <>
      {/* ── Page 1: Hero Section (Exact order & text from PDF Page 1) ──────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ background: '#070D16' }}>
        <div className="absolute inset-x-0 bottom-0 top-[84px] bg-cover bg-center" style={{ backgroundImage: `url(${IMG_HERO})` }} />
        <div className="absolute inset-x-0 bottom-0 top-[84px]" style={{
          background: 'linear-gradient(to bottom, rgba(7,13,22,0.5) 0%, rgba(7,13,22,0.3) 30%, rgba(7,13,22,0.72) 75%, rgba(7,13,22,0.98) 100%)',
        }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-[130px] pb-14 flex flex-col items-center gap-4">

          {/* Header 1 */}
          <p className="hero-in eyebrow tracking-[0.2em] uppercase font-semibold text-xs md:text-sm" style={{ color: '#C9A24B' }}>
            AN ASTROPHOTOGRAPHY + TIGER PHOTOGRAPHY EXPEDITION
          </p>

          {/* Title */}
          <h1 className="hero-in hero-in-d1 font-serif font-black text-white leading-[0.95] tracking-tight uppercase"
            style={{ fontSize: 'clamp(2.5rem, 7.5vw, 5.2rem)' }}>
            STARS, STRIPES &amp; WILD INDIA
          </h1>

          {/* Subtitle */}
          <p className="hero-in hero-in-d2 font-serif text-xl md:text-2xl italic font-normal" style={{ color: '#E8D5B5' }}>
            Pench National Park &amp; Tadoba-Andhari Tiger Reserve
          </p>

          {/* Dates */}
          <div className="hero-in hero-in-d2 mt-1">
            <p className="eyebrow text-xs tracking-widest text-white/70">Dates:</p>
            <p className="font-serif text-xl md:text-2xl font-bold tracking-wide" style={{ color: '#C9A24B' }}>
              APRIL 5 – 14, 2027
            </p>
          </div>

          {/* Directors & Guide attribution */}
          <p className="hero-in hero-in-d3 text-white/85 text-sm md:text-base max-w-3xl leading-relaxed mt-1">
            With co-directors Himanshu Bagde (wildlife photography) and P S Srinivas (“Srini”) — astrophotography and post-processing guide — joined in Pench by astrophotography expert Abhishek Pawse, the DarkSky International advocate behind Pench's Dark Sky Park designation, for four nights of dark-sky photography
          </p>

          {/* Group limit */}
          <div className="hero-in hero-in-d3 px-5 py-1.5 rounded-full border border-[#C9A24B]/40 bg-[#C9A24B]/10">
            <p className="font-semibold text-xs md:text-sm tracking-wider uppercase" style={{ color: '#C9A24B' }}>
              Limited to a maximum of 8 photographers
            </p>
          </div>


          {/* Action buttons */}
          <div className="hero-in hero-in-d5 flex flex-col sm:flex-row gap-4 mt-3">
            <Link to="/pricing"
              className="px-9 py-4 text-[11px] tracking-[0.18em] uppercase font-semibold rounded-sm transition-all"
              style={{ background: '#A07828', color: '#fff' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#7A5C1E')}
              onMouseLeave={e => (e.currentTarget.style.background = '#A07828')}>
              Reserve Your Spot
            </Link>
            <Link to="/itinerary"
              className="px-9 py-4 text-[11px] tracking-[0.18em] uppercase font-semibold rounded-sm border transition-colors"
              style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.85)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A24B'; e.currentTarget.style.color = '#C9A24B' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = 'rgba(255,255,255,0.85)' }}>
              View Itinerary
            </Link>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce">
          <span className="eyebrow text-white/70 text-[9px]">Scroll</span>
          <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
            <path d="M6 1v10M1 8l5 6 5-6" stroke="#C9A24B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      <Rule />

      {/* ── Overview Section ──────────────────────────────── */}
      <section style={{ background: '#FAFAF7' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Eyebrow className="mb-4">Overview</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-8" style={{ color: '#0D1B2A' }}>
              The experience — Two worlds. One unforgettable journey.
            </h2>

            <p className="text-base leading-relaxed mb-6" style={{ color: '#3D4F60' }}>
              This 10-day India photography tour combines two extraordinary experiences in one seamless itinerary — the inaugural edition of what we intend to run as a recurring expedition. Two of the most compelling subjects in nature photography in one trip: dark-sky astrophotography and Bengal tiger wildlife photography. The journey opens in the pristine, internationally certified dark skies of Pench National Park, which was designated India's first Dark Sky Park in January 2024 with developed stargazing infrastructure including observatory facilities. Pench is a rare setting for night-sky photography inside a tiger landscape. The second half moves to Tadoba-Andhari Tiger Reserve, one of central India's best-known tiger destinations, where photographers work from safari vehicles in search of Bengal tigers and other wildlife during the best light of the day.
            </p>

            <p className="text-base leading-relaxed mb-10" style={{ color: '#3D4F60' }}>
              Built for photographers of all levels, this journey balances instruction, comfort, and field time. The tone of the trip is luxury in accommodation, expedition-style in wildlife experience, and educational in photography guidance.
            </p>

            <div className="my-10 p-8 rounded-sm bg-white" style={{ border: '1px solid rgba(13,27,42,0.08)', boxShadow: 'var(--shadow)' }}>
              <h3 className="font-serif text-2xl font-bold mb-6" style={{ color: '#0D1B2A' }}>
                Why this tour stands out:
              </h3>
              <ul className="flex flex-col gap-4">
                {WHY_TOUR_STANDS_OUT.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#A07828] font-bold text-base leading-tight mt-0.5">•</span>
                    <span className="text-sm leading-relaxed" style={{ color: '#3D4F60' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pench & Tadoba Destination Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">

              {/* Pench National Park */}
              <div className="p-8 rounded-sm bg-white flex flex-col justify-between" style={{ border: '1px solid rgba(13,27,42,0.08)', boxShadow: 'var(--shadow)' }}>
                <div>
                  <Eyebrow className="mb-2 text-[10px]" style={{ color: '#1A4080' }}>India's First Dark Sky Park</Eyebrow>
                  <h3 className="font-serif text-xl font-bold mb-4" style={{ color: '#0D1B2A' }}>Pench National Park</h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: '#4A5568' }}>
                    Pench Tiger Reserve became India's first Dark Sky Park in January 2024, recognizing successful efforts to reduce light pollution and improve the quality of the night sky. Set among forest, meadows and open clearings, Pench pairs a rare, internationally certified dark sky with a genuine tiger landscape — a setting built for star trails, wide-field nightscapes, twilight landscapes, and environmental wildlife imagery, all without leaving the reserve.
                  </p>
                </div>
                <div className="rounded-sm overflow-hidden h-48" style={{ background: '#e8e0d4' }}>
                  <img src={IMG_MILKY} alt="Milky Way over Pench" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Tadoba-Andhari Tiger Reserve */}
              <div className="p-8 rounded-sm bg-white flex flex-col justify-between" style={{ border: '1px solid rgba(13,27,42,0.08)', boxShadow: 'var(--shadow)' }}>
                <div>
                  <Eyebrow className="mb-2 text-[10px]" style={{ color: '#1A5030' }}>Tiger Photography Focus</Eyebrow>
                  <h3 className="font-serif text-xl font-bold mb-4" style={{ color: '#0D1B2A' }}>Tadoba-Andhari Tiger Reserve</h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: '#4A5568' }}>
                    Tadoba-Andhari Tiger Reserve is Maharashtra's oldest and largest national park, and one of India's most tiger-dense reserves — a mosaic of dry deciduous forest, teak groves and shimmering lakes where sightings of the Bengal tiger are among the most reliable in the world. Its remote buffer villages sit far from major light pollution, and April's dry season draws animals to shrinking waterholes, making this the peak window for tiger encounters in central India, with a mix of full-day and half-day safaris to maximize your time in the field.
                  </p>
                </div>
                <div className="rounded-sm overflow-hidden h-48" style={{ background: '#e8e0d4' }}>
                  <img src={IMG_TIGER2} alt="Bengal Tiger at Tadoba" className="w-full h-full object-cover" />
                </div>
              </div>

            </div>

          </FadeIn>
        </div>
      </section>

      <GoldDivider />

      {/* ── Page 4: What's included & What's not included ─────────────────── */}
      <section style={{ background: '#FFFFFF' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="rounded-sm overflow-hidden bg-[#FAFAF7]" style={{ border: '1px solid rgba(13,27,42,0.08)', boxShadow: 'var(--shadow-md)' }}>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-10" style={{ borderRight: '1px solid rgba(13,27,42,0.08)' }}>
                <h3 className="font-serif text-2xl font-bold mb-6" style={{ color: '#0D1B2A' }}>What's included</h3>
                <ul className="flex flex-col gap-3.5">
                  {WHATS_INCLUDED.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-sm leading-relaxed" style={{ color: '#3D4F60' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-10 bg-[#FFFFFF]">
                <h3 className="font-serif text-2xl font-bold mb-6" style={{ color: '#637282' }}>What's not included</h3>
                <ul className="flex flex-col gap-3.5">
                  {WHATS_NOT_INCLUDED.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XIcon dark />
                      <span className="text-sm leading-relaxed" style={{ color: '#637282' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Rule />

      {/* ── Page 5: HIGHLIGHTS OF THE TOUR ─────────────────────────────────── */}
      <section style={{ background: '#FAFAF7' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Eyebrow className="mb-3">Overview Summary</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-10" style={{ color: '#0D1B2A' }}>
              HIGHLIGHTS OF THE TOUR
            </h2>

            <div className="p-8 rounded-sm bg-white" style={{ border: '1px solid rgba(13,27,42,0.08)', boxShadow: 'var(--shadow)' }}>
              <ul className="flex flex-col gap-4">
                {TOUR_HIGHLIGHTS.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#A07828] font-bold text-base leading-tight mt-0.5">•</span>
                    <span className="text-sm leading-relaxed" style={{ color: '#3D4F60' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <GoldDivider />

      {/* ── Page 5: IS THIS TOUR THE RIGHT TRIP FOR ME? ───────────────────── */}
      <section style={{ background: '#FFFFFF' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <Eyebrow className="mb-3">Suitability &amp; Schedule</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8" style={{ color: '#0D1B2A' }}>
              IS THIS TOUR THE RIGHT TRIP FOR ME?
            </h2>

            <div className="p-8 md:p-10 rounded-sm bg-[#F2EDE2] flex flex-col gap-5" style={{ border: '1px solid rgba(13,27,42,0.06)' }}>
              <p className="text-base leading-relaxed" style={{ color: '#0D1B2A' }}>
                <strong>This expedition is built around vehicle-based safaris</strong> — you'll spend your days seated in an open 4x4, not on foot, so there's no hiking fitness required to take part. Nights are spent at accessible, flat viewpoints for astrophotography, generally a short walk from the vehicle.
              </p>

              <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>
                If you've been hesitant about a wildlife trip because of physically demanding treks, or you've wanted to try astrophotography but didn't know where to start, this tour is designed for exactly that.
              </p>

              <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>
                Safaris run early morning and late afternoon to match the best light and highest tiger activity — with two full-day safaris in Tadoba for those who want maximum time in the field — and nights (when clear) run late for star photography, so days can be long. A basic level of alertness and flexibility around an early-and-late schedule will help you enjoy it fully.
              </p>

              <div className="mt-2 p-4 rounded-sm bg-white/70 border border-[#A07828]/20">
                <p className="text-xs font-semibold italic" style={{ color: '#7A5C1E' }}>
                  Note: Pench and Tadoba both sit at low elevations, so there is no concern about altitude sickness on this trip.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <GoldBtn to="/book">Reserve Your Spot</GoldBtn>
              <OutlineBtn to="/itinerary">Explore Day-by-Day Itinerary</OutlineBtn>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
