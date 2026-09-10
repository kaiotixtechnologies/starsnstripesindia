import { useState } from 'react'
import { FadeIn, GoldDivider, Rule, Eyebrow, GoldBtn, OutlineBtn, PageHero, IMG_FAQ_HERO } from '../components/shared'

const FAQS: { category: string; items: { q: string; a: string }[] }[] = [
  {
    category: 'Photography & Skill Level',
    items: [
      {
        q: 'What photography skill level is required for this expedition?',
        a: 'Designed for photographers of all levels! Whether you are an experienced wildlife shooter looking to learn dark-sky techniques, or an astrophotographer wanting tiger field craft, our leaders provide tailored, one-on-one coaching. You should have a basic working familiarity with your camera settings (manual exposure mode).'
      },
      {
        q: 'What camera gear is recommended for wildlife and astrophotography?',
        a: 'We recommend a DSLR or mirrorless body and a sturdy tripod. For wildlife, bring a telephoto lens (100–400mm or longer). For astrophotography and landscapes, bring a fast wide-angle lens (e.g. 14–24mm f/2.8). Star trackers are optional but recommended for deep-sky panoramas (guides will also demonstrate tracker techniques). Extra batteries and high-capacity memory cards are essential.'
      },
      {
        q: 'What post-processing instruction is provided?',
        a: 'Guided photo review and post-processing sessions in Adobe Lightroom and Photoshop are led throughout the trip by Co-Director P S Srinivas (“Srini”). You will learn RAW development, exposure stacking, noise control, Milky Way foreground blending, and harsh-light wildlife contrast handling.'
      },
      {
        q: 'How many photographers will be on the trip?',
        a: 'The expedition is strictly limited to a maximum of 8 photographers. With two co-directors (Himanshu Bagde and Srini) present throughout and joined by DarkSky advocate Abhishek Pawse in Pench, you will enjoy an exceptional leader-to-guest ratio.'
      },
    ]
  },
  {
    category: 'Logistics, Accommodation & Transport',
    items: [
      {
        q: 'Which airport do I fly into and what are the arrival/departure timings?',
        a: 'All guests fly in and out of Nagpur Airport (NAG). On Day 1 (April 5, 2027), please arrive at Nagpur by 9:30 AM or earlier; our group gathers in the lobby of the Radisson Blu Hotel at 10:00 AM for the 2.5–3 hour drive to Pench. (Pre-night rooms at the Radisson Blu can be arranged upon request). On Day 10 (April 14), transfer from Tadoba to Nagpur Airport will be arranged for flights departing at or after 2:00 PM.'
      },
      {
        q: 'What are the accommodations like in Pench and Tadoba?',
        a: 'Guests stay in luxury jungle lodges: Saj in the Forest (a boutique resort set across 32 acres near Pench’s Turia Gate) for Nights 1–4, and Tathastu Tadoba (The Tiger Village Resort near Moharli Gate) for Nights 5–9. All accommodations are twin-share in airconditioned rooms with private en-suite bathrooms. Single occupancy upgrades are available at an extra charge, subject to lodge availability.'
      },
      {
        q: 'What vehicles are used for safaris and road transfers?',
        a: 'Road transfers between cities and lodges are conducted in private 4x4 Toyota Innova vehicles. Safari game drives utilize dedicated open 4x4 safari jeeps with 4 vehicles (comfortable 2 guests per jeep) for standard safaris and 3 vehicles on 12-hour full-day safaris per park regulations. Co-directors Himanshu and Srini rotate between vehicles daily.'
      },
      {
        q: 'Are drones allowed during the tour?',
        a: 'Drones are strictly prohibited inside both Pench National Park and Tadoba-Andhari Tiger Reserve. Furthermore, Indian import regulations for foreign drones are complex. We strongly recommend leaving personal drones at home for this expedition.'
      },
    ]
  },
  {
    category: 'Safaris, Destinations & Weather',
    items: [
      {
        q: 'How many safaris and dark-sky sessions are included?',
        a: 'The tour includes 9 safaris totaling 52 hours of dedicated field time: 7 half-day safaris (four hours each, 3 safaris in Pench, 4 safaris in Tadoba, 2 photographers per jeep) and 2 full-day 12-hour safaris (max. 3 photographers per jeep) in Tadoba (April 11 & 13) with packed lunches in the park. In addition, there are 4 dedicated dark-sky astrophotography sessions (4–5 hours each) in Pench.'
      },
      {
        q: 'Why are April and new moon chosen for this tour?',
        a: 'April is peak dry season in central India. Waterholes shrink, concentrating tigers, leopards, sloth bears, and birdlife for the highest probability sightings and extended encounters. April 6 is new moon, guaranteeing the darkest skies of the year in Pench (India’s first Dark Sky Park) with over 5 hours of galactic core visibility per night.'
      },
      {
        q: 'What is the weather like in central India in April?',
        a: 'Daytime temperatures are warm to hot, regularly exceeding 35°C (up to 40°C), while dawn and late nights are cool and pleasant (20–24°C). The dry climate ensures minimal cloud cover and crystal-clear skies for night photography. We recommend lightweight earth-tone clothing, sun protection (hat, sunglasses, high-SPF sunscreen), and hydration supplements.'
      },
      {
        q: 'Is there any concern regarding altitude sickness?',
        a: 'No. Both Pench and Tadoba sit at low elevations in central India, so altitude sickness is not a factor on this trip.'
      },
    ]
  },
  {
    category: 'Pricing, Payments & Cancellation Policy',
    items: [
      {
        q: 'What is the price and payment schedule?',
        a: 'The price is $6,900 USD per person (double occupancy). A deposit of $2,000 USD is required upon booking to secure your spot. The remaining balance of $4,900 USD is due by October 15, 2026. Single room upgrades are available at an extra charge, subject to lodge availability.'
      },
      {
        q: 'What is the cancellation and refund policy?',
        a: 'Our cancellation terms are: 120+ days before tour: 10% administrative fee; 90–75 days before tour: 50% cancellation fee; 75–60 days before tour: 75% cancellation fee; under 60 days or No Show: 100% cancellation fee. We strongly recommend purchasing comprehensive travel and health insurance upon booking.'
      },
      {
        q: 'What is included in the tour price?',
        a: 'Airport transfers at Nagpur, all inter-park transport in 4x4 Innovas, all safari jeep and national park permit fees (9 safaris total), twin-share AC lodge accommodations with private bathrooms, all meals (breakfast, lunch, dinner), safari refreshments, 4 Pench astro sessions, photo review/post-processing workshops, and pre-tour online planning call.'
      },
      {
        q: 'Do I need a visa to enter India?',
        a: 'Most nationalities require an Indian e-Tourist Visa to enter the country. Applications can be submitted online well in advance of departure. Your passport must have at least 6 months validity from your date of arrival.'
      },
    ]
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<string | null>('Photography & Skill Level-0')

  return (
    <>
      <PageHero
        eyebrow="Frequently Asked Questions"
        title="Expedition FAQ"
        subtitle="Everything you need to know about the itinerary, photography program, logistics, and booking terms."
        bg={IMG_FAQ_HERO}
        bgPos="center 30%"
      />

      <GoldDivider />

      <section style={{ background: '#FAFAF7' }} className="py-24 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-14">
          {FAQS.map((section) => (
            <FadeIn key={section.category}>
              <Eyebrow className="mb-5">{section.category}</Eyebrow>
              <div className="rounded-sm overflow-hidden" style={{ border: '1px solid rgba(13,27,42,0.1)', boxShadow: 'var(--shadow)' }}>
                {section.items.map((item, idx) => {
                  const id = `${section.category}-${idx}`
                  const isOpen = open === id
                  return (
                    <div key={id}
                      style={{ borderBottom: idx < section.items.length - 1 ? '1px solid rgba(13,27,42,0.07)' : 'none', background: '#FFFFFF' }}>
                      <button
                        className="w-full flex items-start justify-between px-7 py-5 text-left transition-colors hover:bg-amber-50/20"
                        style={{ background: isOpen ? '#FAFAF7' : '#FFFFFF' }}
                        onClick={() => setOpen(o => o === id ? null : id)}>
                        <span className="font-semibold text-sm leading-snug pr-6" style={{ color: '#0D1B2A' }}>{item.q}</span>
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="mt-0.5 flex-shrink-0"
                          style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}>
                          <path d="M5 7.5l5 5 5-5" stroke="#A07828" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      <div style={{ maxHeight: isOpen ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.4s ease' }}>
                        <div className="px-7 pb-6 pt-1 border-t border-black/[0.03]">
                          <p className="text-sm leading-[1.85]" style={{ color: '#4A5568' }}>{item.a}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <Rule />

      <section style={{ background: '#F2EDE2', borderTop: '1px solid rgba(13,27,42,0.07)' }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="font-serif text-2xl font-bold mb-2" style={{ color: '#0D1B2A' }}>Still have questions?</p>
            <p className="text-sm mb-8" style={{ color: '#637282' }}>Send us a message or schedule your pre-tour conversation.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GoldBtn to="/book">Send an Enquiry</GoldBtn>
              <OutlineBtn to="/pricing">View Pricing</OutlineBtn>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
