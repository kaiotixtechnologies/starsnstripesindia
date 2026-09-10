import { FadeIn, GoldDivider, Rule, Eyebrow, GoldBtn, OutlineBtn, PageHero, IMG_INSTRUCTORS_HERO, CameraIcon, ShirtIcon, CreditCardIcon, BackpackIcon } from '../components/shared'

const GEAR_ITEMS = [
  'DSLR/mirrorless body and a sturdy tripod',
  'A telephoto lens, 100–400mm or longer, for wildlife',
  'A wide-angle lens, such as 14–24mm, for astro and landscape',
  'A star tracker (optional but recommended for Milky Way panoramas)',
  'A red-light headlamp to protect night vision',
  'Extra batteries and memory cards — heat and heavy use during long safari and astro sessions drain batteries and fill cards fast',
  "A dust-proof camera bag (Tadoba's tracks are dusty)",
]

const CLOTHING_ITEMS = [
  'Neutral/earth-tone clothing for safaris (no bright colors)',
  'Lightweight layers — warm to hot from midday through the afternoon, cooler at dawn and dusk',
  'A hat, sunglasses, and high-SPF sunscreen — April is peak heat season in central India, with daytime temperatures regularly exceeding 35°C',
  'Closed shoes and insect repellent',
]

const OTHER_ITEMS = [
  'Binoculars',
  'Reusable water bottle and electrolyte/rehydration supplements — daytime heat is significant',
  'Power bank and universal adapter',
  'Basic first-aid / personal medication',
]

export default function Instructors() {
  return (
    <>
      <PageHero
        eyebrow="Leadership &amp; Preparation"
        title="Your Co-Directors &amp; Expert"
        subtitle="Wildlife guidance from Himanshu Bagde, astrophotography coaching from P S Srinivas (Srini), and dark-sky expertise from Abhishek Pawse."
        bg={IMG_INSTRUCTORS_HERO}
        bgPos="center 10%"
      />

      <GoldDivider />

      {/* ── YOUR CO-DIRECTORS ────────────────────────────────────── */}
      <section style={{ background: '#FAFAF7' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Eyebrow className="mb-3 text-xs">Leadership</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 uppercase tracking-wide" style={{ color: '#0D1B2A' }}>
              YOUR CO-DIRECTORS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
              
              {/* Himanshu Bagde */}
              <div className="p-8 rounded-sm bg-white flex flex-col justify-between" style={{ border: '1px solid rgba(13,27,42,0.08)', boxShadow: 'var(--shadow)' }}>
                <div>
                  <div className="h-1.5 w-16 bg-[#1A5030] mb-6" />
                  <h3 className="font-serif text-xl font-bold mb-1" style={{ color: '#0D1B2A' }}>
                    Himanshu Bagde — Co-Director &amp; Wildlife Photography Lead
                  </h3>
                  <p className="text-xs text-[#A07828] font-semibold mb-4">
                    himanshubagde.com · @himanshubagde_wildlife
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>
                    Himanshu has photographed over 700 individual tigers across more than two decades in India's national parks, and tracks individual tigers by name and territory across Pench and Tadoba. Guests consistently cite his sighting reliability and his commitment to unmanipulated, in-camera photography. Himanshu co-guides tiger photography tours with renowned wildlife photographer and tour leader Paul Goldstein, an association that has shaped Himanshu’s own approach to guiding and field photography. See more of his work at himanshubagde.com and @himanshubagde_wildlife.
                  </p>
                </div>
              </div>

              {/* P S Srinivas (Srini) */}
              <div className="p-8 rounded-sm bg-white flex flex-col justify-between" style={{ border: '1px solid rgba(13,27,42,0.08)', boxShadow: 'var(--shadow)' }}>
                <div>
                  <div className="h-1.5 w-16 bg-[#A07828] mb-6" />
                  <h3 className="font-serif text-xl font-bold mb-1" style={{ color: '#0D1B2A' }}>
                    Srini (P S Srinivas) — Co-Director, Astrophotography &amp; Post-Processing Guide
                  </h3>
                  <p className="text-xs text-[#A07828] font-semibold mb-4">
                    Visiting Research Professor, National University of Singapore
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>
                    Srini co-directs and organizes this expedition alongside Himanshu, and leads the trip's astrophotography coaching and Lightroom/Photoshop post-processing instruction throughout. An advanced astrophotography and landscape photographer with a growing interest in wildlife and bird photography, he has completed international expeditions to Lofoten and La Palma for astrophotography and to Iceland and Patagonia for landscape work, with Namibia and the Pantanal upcoming. He spent 30 years working in senior positions in international development finance, and currently combines this venture with an academic position as Visiting Research Professor at the National University of Singapore.
                  </p>
                </div>
              </div>

            </div>

            {/* JOINING US IN PENCH */}
            <div className="p-8 rounded-sm bg-white" style={{ border: '1px solid rgba(13,27,42,0.08)', boxShadow: 'var(--shadow)' }}>
              <div className="h-1.5 w-16 bg-[#1A4080] mb-6" />
              <Eyebrow className="mb-2 text-[10px]" style={{ color: '#1A4080' }}>DarkSky International Advocate</Eyebrow>
              <h3 className="font-serif text-xl font-bold mb-4" style={{ color: '#0D1B2A' }}>
                Abhishek Pawse — Astrophotography Expert (Joining us in Pench)
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>
                Abhishek joins the expedition for four nights in Pench as our astrophotography expert. He is a DarkSky International advocate whose work with the Pench Forest Department helped secure Pench's designation as India's first Dark Sky Park in January 2024, and leads our night-sky sessions, covering star tracking, exposure stacking, and post-processing for Milky Way and star-trail imagery.
              </p>
            </div>

          </FadeIn>
        </div>
      </section>

      <Rule />

      {/* ── WHAT TO BRING ────────────────────────────────────────── */}
      <section style={{ background: '#FFFFFF' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Eyebrow className="mb-3 text-xs">Packing &amp; Gear Checklist</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3 uppercase tracking-wide" style={{ color: '#0D1B2A' }}>
              WHAT TO BRING
            </h2>
            <p className="text-sm leading-relaxed mb-12 text-[#637282]">
              We'll send a complete packing list upon sign-up. A summary of what you'll likely need:
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Photography gear */}
            <FadeIn className="p-8 rounded-sm bg-[#FAFAF7]" style={{ border: '1px solid rgba(13,27,42,0.07)' }}>
              <div className="flex items-center gap-3 mb-6">
                <CameraIcon className="w-5 h-5 text-[#A07828]" />
                <h3 className="font-serif text-lg font-bold" style={{ color: '#0D1B2A' }}>Photography gear</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {GEAR_ITEMS.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-[#A07828] font-bold mt-0.5">•</span>
                    <span className="text-xs md:text-sm leading-relaxed" style={{ color: '#4A5568' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* Clothing */}
            <FadeIn delay={80} className="p-8 rounded-sm bg-[#FAFAF7]" style={{ border: '1px solid rgba(13,27,42,0.07)' }}>
              <div className="flex items-center gap-3 mb-6">
                <ShirtIcon className="w-5 h-5 text-[#A07828]" />
                <h3 className="font-serif text-lg font-bold" style={{ color: '#0D1B2A' }}>Clothing</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {CLOTHING_ITEMS.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-[#A07828] font-bold mt-0.5">•</span>
                    <span className="text-xs md:text-sm leading-relaxed" style={{ color: '#4A5568' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* Money & Documentation */}
            <FadeIn delay={120} className="p-8 rounded-sm bg-[#FAFAF7]" style={{ border: '1px solid rgba(13,27,42,0.07)' }}>
              <div className="flex items-center gap-3 mb-4">
                <CreditCardIcon className="w-5 h-5 text-[#A07828]" />
                <h3 className="font-serif text-lg font-bold" style={{ color: '#0D1B2A' }}>Money</h3>
              </div>
              <p className="text-xs md:text-sm leading-relaxed mb-6" style={{ color: '#4A5568' }}>
                The currency in India is the Indian Rupee (INR). Credit/debit cards are accepted at most lodges, but cash is useful for tips and small purchases in nearby villages. We recommend exchanging currency in Nagpur or withdrawing from an ATM on arrival.
              </p>

              <div className="pt-4 border-t border-black/[0.06]">
                <h4 className="font-serif font-bold text-sm mb-2" style={{ color: '#0D1B2A' }}>Documentation</h4>
                <p className="text-xs md:text-sm leading-relaxed" style={{ color: '#4A5568' }}>
                  Most nationalities require an e-Visa or tourist visa to enter India — apply well in advance of departure. We can point you to official visa resources, but you're responsible for your own application.
                </p>
              </div>
            </FadeIn>

            {/* Other recommended items */}
            <FadeIn delay={160} className="p-8 rounded-sm bg-[#FAFAF7]" style={{ border: '1px solid rgba(13,27,42,0.07)' }}>
              <div className="flex items-center gap-3 mb-6">
                <BackpackIcon className="w-5 h-5 text-[#A07828]" />
                <h3 className="font-serif text-lg font-bold" style={{ color: '#0D1B2A' }}>Other recommended items</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {OTHER_ITEMS.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-[#A07828] font-bold mt-0.5">•</span>
                    <span className="text-xs md:text-sm leading-relaxed" style={{ color: '#4A5568' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

          </div>
        </div>
      </section>

      <GoldDivider />

      <section style={{ background: '#F2EDE2' }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="font-serif text-2xl font-bold mb-6" style={{ color: '#0D1B2A' }}>Ready to photograph with our team?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GoldBtn to="/book">Reserve Your Spot</GoldBtn>
              <OutlineBtn to="/pricing">Review Pricing Details</OutlineBtn>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
