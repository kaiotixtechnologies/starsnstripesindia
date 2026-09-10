import { FadeIn, GoldDivider, Rule, CheckIcon, XIcon, Eyebrow, GoldBtn, OutlineBtn, PageHero, IMG_MILKY, TentIcon, CompassIcon, UsersIcon, UtensilsIcon } from '../components/shared'

import type { ReactNode } from 'react'

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

export default function WhatsIncluded() {
  return (
    <>
      <PageHero
        eyebrow="Expedition Inclusions &amp; Logistics"
        title="What's Included"
        subtitle="A comprehensive breakdown of all accommodations, permits, safaris, private transportation, and expert coaching included in the expedition."
        bg={IMG_MILKY}
      />

      <GoldDivider />

      {/* ── What's included & What's not included ─────────────────── */}
      <section style={{ background: '#FAFAF7' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="rounded-sm overflow-hidden bg-white" style={{ border: '1px solid rgba(13,27,42,0.08)', boxShadow: 'var(--shadow-md)' }}>
            <div className="grid grid-cols-1 md:grid-cols-2">
              
              {/* What's included */}
              <div className="p-8 md:p-10" style={{ borderRight: '1px solid rgba(13,27,42,0.08)' }}>
                <Eyebrow className="mb-3 text-[10px]" style={{ color: '#A07828' }}>Comprehensive Coverage</Eyebrow>
                <h3 className="font-serif text-2xl font-bold mb-6" style={{ color: '#0D1B2A' }}>What's included</h3>
                <ul className="flex flex-col gap-4">
                  {WHATS_INCLUDED.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-sm leading-relaxed" style={{ color: '#3D4F60' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What's not included */}
              <div className="p-8 md:p-10 bg-[#FAFAF7]">
                <Eyebrow className="mb-3 text-[10px]" style={{ color: '#637282' }}>Arranged Independently</Eyebrow>
                <h3 className="font-serif text-2xl font-bold mb-6" style={{ color: '#637282' }}>What's not included</h3>
                <ul className="flex flex-col gap-4">
                  {WHATS_NOT_INCLUDED.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XIcon dark />
                      <span className="text-sm leading-relaxed" style={{ color: '#637282' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-xs italic text-[#637282]">
                  See booking terms and conditions for our full refund and cancellation policy.
                </p>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      <Rule />

      {/* ── ACCOMMODATION & TRANSPORTATION ───────────────────────── */}
      <section style={{ background: '#FFFFFF' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <Eyebrow className="mb-3 text-xs">Jungle Lodges &amp; 4x4 Fleet</Eyebrow>
            <h2 className="font-serif text-3xl font-bold mb-8 uppercase tracking-wide" style={{ color: '#0D1B2A' }}>
              ACCOMMODATION &amp; TRANSPORTATION
            </h2>

            <div className="p-8 md:p-10 rounded-sm bg-[#F2EDE2] mb-10" style={{ border: '1px solid rgba(13,27,42,0.08)' }}>
              <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#0D1B2A' }}>
                Accommodation is in twin-share airconditioned rooms, each room with a private bathroom, at jungle lodges close to the reserve gates. Single occupancy is available on request at an extra charge, subject to availability.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-5 bg-white rounded-sm border border-black/[0.05]">
                  <div className="flex items-center gap-2 mb-2">
                    <TentIcon className="w-4 h-4 text-[#7A5C1E]" />
                    <p className="eyebrow text-[10px]" style={{ color: '#7A5C1E' }}>Nights 1–4 · Pench</p>
                  </div>
                  <p className="text-sm font-semibold text-[#0D1B2A]">
                    Saj in the Forest, a boutique resort set across 32 acres adjoining Pench's buffer zone, near Turia Gate
                  </p>
                </div>
                <div className="p-5 bg-white rounded-sm border border-black/[0.05]">
                  <div className="flex items-center gap-2 mb-2">
                    <TentIcon className="w-4 h-4 text-[#1A5030]" />
                    <p className="eyebrow text-[10px]" style={{ color: '#1A5030' }}>Nights 5–9 · Tadoba</p>
                  </div>
                  <p className="text-sm font-semibold text-[#0D1B2A]">
                    Tathastu Tadoba (The Tiger Village Resort), just over a kilometer from Tadoba-Andhari's Moharli Gate
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>
                All transportation is included: private 4x4 Innova vehicles for transfers, and safari vehicles throughout both parks — 4 vehicles (2 guests each) for all Pench safaris and for two of the four Tadoba days, and 3 vehicles (the park regulation limit for full-day safaris) on our two full-day Tadoba days. Co-directors Himanshu and Srini rotate between vehicles throughout to ensure every guest spends time with both.
              </p>
            </div>

            {/* Safari & park rules */}
            <div className="p-8 rounded-sm bg-[#FAFAF7]" style={{ border: '1px solid rgba(13,27,42,0.08)' }}>
              <h3 className="font-serif text-xl font-bold mb-5" style={{ color: '#0D1B2A' }}>
                Safari &amp; park rules
              </h3>
              <div className="flex flex-col gap-4">
                <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>
                  <strong>Gate rotation:</strong> Indian tiger reserves assign safari zones by permit, so we'll rotate gates daily to maximize sighting variety — this also means the exact schedule may shift based on permit availability.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>
                  <strong>Drones:</strong> Please note that India's import regulations make it very difficult for tourists to bring personal drones into the country, and drones are not permitted inside either reserve in any case. We recommend leaving drones at home for this trip.
                </p>
              </div>
            </div>

          </FadeIn>
        </div>
      </section>

      <GoldDivider />

      {/* ── Bottom CTA ───────────────────────────────────────────── */}
      <section style={{ background: '#FAFAF7' }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="font-serif text-2xl font-bold mb-4" style={{ color: '#0D1B2A' }}>Ready to review pricing and reserve?</p>
            <p className="text-sm text-[#637282] mb-8">USD 6,900 per person · Limited to 8 photographers · USD 2,000 deposit to secure your spot</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GoldBtn to="/pricing">View Expedition Pricing</GoldBtn>
              <OutlineBtn to="/book">Reserve Your Place</OutlineBtn>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
