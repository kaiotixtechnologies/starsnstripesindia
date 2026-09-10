import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FadeIn, GoldDivider, Rule, CheckIcon, XIcon, Eyebrow, GoldBtn, OutlineBtn, PageHero, IMG_PRICING_HERO } from '../components/shared'
import PaymentModal from '../components/PaymentModal'
import TermsModal from '../components/TermsModal'

import type { ReactNode } from 'react'

const INCLUDED_SUMMARY: ReactNode[] = [
  'Nagpur (NAG) airport pick-up and drop-off',
  'Private 4x4 Innova road transfers and dedicated safari vehicles',
  (
    <span>
      All safari jeep and park permit fees for Pench &amp; Tadoba-Andhari: 7 half-day safaris (<strong>2 photographers per jeep</strong>) and 2 full-day safaris (<strong>max. 3 photographers per jeep</strong>)
    </span>
  ),
  'Twin-share luxury jungle lodge accommodations with private en-suite bathrooms',
  'All meals (breakfast, lunch, and dinner) throughout the stay',
  'Four dedicated astrophotography sessions in Pench (India’s first Dark Sky Park)',
  'Guidance throughout from Himanshu Bagde, Srini, and Abhishek Pawse',
  'Guided photo review and Lightroom/Photoshop post-processing sessions',
  'All prices inclusive of applicable Indian taxes',
]

const NOT_INCLUDED_SUMMARY = [
  'Flights to/from Nagpur Airport (NAG)',
  'Single room upgrade — at an extra charge, subject to availability',
  'Visa fees (Indian e-Visa)',
  'Health and travel insurance (strongly recommended)',
  'Camera gear rental (star tracker, telephoto lens)',
  'Tips, personal expenses, and anything not listed above',
]

const CANCELLATION_POLICY = [
  '120+ days before tour: 10% administrative fee',
  '90-75 days before tour: 50% cancellation fee',
  '75-60 days before tour: 75% cancellation fee',
  'Under 60 days or No Show: 100% cancellation fee',
]

export default function Pricing() {
  const [members, setMembers] = useState(1)
  const [showModal, setShowModal] = useState(false)
  const [showTermsModal, setShowTermsModal] = useState(false)
  const [payAmount, setPayAmount] = useState(2000)
  const [payTitle, setPayTitle] = useState('Expedition Deposit')

  const pricePerPerson = 6900
  const depositPerPerson = 2000
  const totalPrice = members * pricePerPerson
  const totalDeposit = members * depositPerPerson

  const openCheckout = (amount: number, title: string) => {
    setPayAmount(amount)
    setPayTitle(title)
    setShowModal(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Expedition Investment &amp; Terms"
        title="Expedition Pricing"
        subtitle="USD 6,900 per person (double occupancy — inaugural expedition, limited to 8 photographers)"
        bg={IMG_PRICING_HERO}
        bgPos="center top"
      />

      <GoldDivider />

      {/* ── Main Pricing Card ───────────────────────────────────────── */}
      <section style={{ background: '#FAFAF7' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="rounded-sm overflow-hidden bg-white" style={{ border: '1px solid rgba(13,27,42,0.08)', boxShadow: 'var(--shadow-md)' }}>
            
            {/* Header Box */}
            <div className="px-8 py-12 text-center" style={{ background: '#0D1B2A', borderBottom: '3px solid #A07828' }}>
              <Eyebrow className="mb-2 text-[10px]" style={{ color: '#C9A24B' }}>Inaugural Expedition · April 5–14, 2027</Eyebrow>
              <h2 className="font-serif text-4xl md:text-6xl font-black text-[#C9A24B] mb-2 tracking-tight">
                USD 6,900 per person
              </h2>
              <p className="text-white/80 text-sm md:text-base italic mb-6">
                (double occupancy — inaugural expedition, limited to 8 photographers)
              </p>

              {/* Dynamic Member Counter Selector */}
              <div className="mb-6 inline-flex items-center gap-4 bg-white/10 px-5 py-2.5 rounded-full border border-white/15">
                <span className="text-xs text-white/80 font-medium">Select Photographers / Guests:</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setMembers(m => Math.max(1, m - 1))}
                    className="w-7 h-7 rounded-full bg-white/20 hover:bg-[#A07828] text-white flex items-center justify-center text-sm font-bold transition-all"
                  >
                    -
                  </button>
                  <span className="text-sm font-bold text-[#C9A24B] min-w-[75px] text-center">
                    {members} {members === 1 ? 'Guest' : 'Guests'}
                  </span>
                  <button
                    type="button"
                    onClick={() => setMembers(m => Math.min(8, m + 1))}
                    className="w-7 h-7 rounded-full bg-white/20 hover:bg-[#A07828] text-white flex items-center justify-center text-sm font-bold transition-all"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-sm bg-white/10 max-w-xl mx-auto border border-white/15 text-center">
                <p className="text-white/95 text-sm md:text-base font-medium">
                  Deposit: USD 2,000 — required to reserve your spot. Remaining balance of USD 4,900 due by October 15, 2026.
                </p>
                {members > 1 && (
                  <p className="text-[#C9A24B] text-xs font-semibold mt-2">
                    Total for {members} guests: ${totalPrice.toLocaleString()} USD (Deposit: ${totalDeposit.toLocaleString()} USD)
                  </p>
                )}
                <p className="text-white/60 text-xs mt-2">
                  Single room upgrade: at an extra charge, subject to availability.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/book"
                  className="inline-flex items-center justify-center px-8 py-4 text-[11px] tracking-[0.18em] uppercase font-semibold rounded-sm transition-all gap-2"
                  style={{ background: '#A07828', color: '#fff' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#7A5C1E')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#A07828')}
                >
                  Fill in Booking Form
                </Link>
                <button
                  type="button"
                  onClick={() => setShowTermsModal(true)}
                  className="inline-flex items-center justify-center px-8 py-4 text-[11px] tracking-[0.18em] uppercase font-semibold rounded-sm border transition-colors gap-2 cursor-pointer"
                  style={{ borderColor: 'rgba(201,162,75,0.4)', color: '#C9A24B' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#C9A24B'
                    e.currentTarget.style.background = 'rgba(201,162,75,0.1)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(201,162,75,0.4)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  Terms and Conditions
                </button>
              </div>
            </div>

            {/* Inclusions & Exclusions Quick Preview with link to What's Included */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-10" style={{ borderRight: '1px solid rgba(13,27,42,0.08)' }}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-xl font-bold" style={{ color: '#0D1B2A' }}>Inclusions Overview</h3>
                  <Link to="/whats-included" className="text-xs font-semibold text-[#A07828] hover:underline">
                    View Full Details →
                  </Link>
                </div>
                <ul className="flex flex-col gap-3.5">
                  {INCLUDED_SUMMARY.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-sm leading-relaxed" style={{ color: '#3D4F60' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 md:p-10 bg-[#FAFAF7]">
                <h3 className="font-serif text-xl font-bold mb-6" style={{ color: '#637282' }}>Exclusions</h3>
                <ul className="flex flex-col gap-3.5">
                  {NOT_INCLUDED_SUMMARY.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XIcon dark />
                      <span className="text-sm leading-relaxed" style={{ color: '#637282' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-black/[0.06]">
                  <Link to="/whats-included" className="text-xs font-semibold text-[#A07828] hover:underline block mb-1">
                    See full Accommodation, Vehicle &amp; Park Details →
                  </Link>
                </div>
              </div>
            </div>

          </FadeIn>
        </div>
      </section>

      <Rule />

      {/* ── HOW TO BOOK? (Placed above Cancellation Policy) ─────────── */}
      <section style={{ background: '#FFFFFF' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <Eyebrow className="mb-3 text-xs">Reservation &amp; Next Steps</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 uppercase tracking-wide" style={{ color: '#0D1B2A' }}>
              HOW TO BOOK?
            </h2>

            <div className="p-8 md:p-10 rounded-sm bg-[#F2EDE2] border border-[#A07828]/20 flex flex-col gap-6">
              <p className="text-base font-semibold leading-relaxed" style={{ color: '#0D1B2A' }}>
                This inaugural expedition is limited to 8 photographers. To secure your place, please fill in the form on our booking page.
              </p>

              <div className="p-5 bg-white rounded-sm border border-black/[0.06]">
                <p className="text-base font-bold text-[#7A5C1E] mb-1">
                  A USD 2,000 deposit reserves your spot; the remaining balance is due by October 15, 2026.
                </p>
                <p className="text-xs text-[#637282]">
                  Total tour price: USD 6,900 per person (double occupancy). Single room upgrade: at an extra charge, subject to availability.
                </p>
              </div>

              <p className="text-sm leading-relaxed text-[#4A5568]">
                This tour is governed by our Terms and Conditions, including cancellation policy, weather/wildlife disclaimer, and payment terms.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <GoldBtn to="/book">Fill in Booking Form</GoldBtn>
                <button
                  type="button"
                  onClick={() => setShowTermsModal(true)}
                  className="inline-flex items-center justify-center px-8 py-3.5 text-[11px] tracking-[0.18em] uppercase font-semibold rounded-sm border border-[#A07828] text-[#A07828] hover:bg-[#A07828] hover:text-white transition-all gap-2 cursor-pointer"
                >
                  Terms and Conditions
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <GoldDivider />

      {/* ── Cancellation Policy ─────────────────────────────────────── */}
      <section id="cancellation-policy" style={{ background: '#FAFAF7' }} className="py-24 px-6 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <Eyebrow className="mb-3 text-xs">Terms &amp; Refund Schedule</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 uppercase tracking-wide" style={{ color: '#0D1B2A' }}>
              Cancellation Policy
            </h2>

            <div className="p-8 md:p-10 rounded-sm bg-white mb-8" style={{ border: '1px solid rgba(13,27,42,0.08)', boxShadow: 'var(--shadow)' }}>
              <ul className="flex flex-col gap-4 mb-8">
                {CANCELLATION_POLICY.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#A07828] font-bold text-base leading-tight mt-0.5">•</span>
                    <span className="text-sm md:text-base font-semibold" style={{ color: '#0D1B2A' }}>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-6 border-t border-black/[0.08]">
                <p className="text-sm leading-relaxed text-[#4A5568]">
                  Two of our four Tadoba days are dedicated full-day safaris — the same format used by leading international tiger-photography operators — maximizing time in the field across the full arc of daylight, from first light through the midday lull and into evening color.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <GoldBtn to="/book">Reserve Your Place</GoldBtn>
              <OutlineBtn to="/whats-included">Explore What's Included</OutlineBtn>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        itemTitle={payTitle}
        amountUSD={payAmount}
      />

      {/* Terms & Conditions Modal */}
      <TermsModal
        isOpen={showTermsModal}
        onClose={() => setShowTermsModal(false)}
      />
    </>
  )
}
