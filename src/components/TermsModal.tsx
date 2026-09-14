import { useEffect } from "react"
import { TERMS_PDF_BASE64 } from "../assets/termsPdfBase64"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose()
    }

    if (isOpen) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    }

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = TERMS_PDF_BASE64
    link.download = "Stars_Stripes_Wild_India_Terms_and_Conditions.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/80 backdrop-blur-sm transition-all duration-300 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl h-[92vh] bg-white rounded-sm shadow-2xl flex flex-col overflow-hidden border border-black/15"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-6 py-4 bg-[#0D1B2A] border-b-2 border-[#A07828] flex items-center justify-between shrink-0">
          <div>
            <p className="eyebrow text-[10px] tracking-[0.2em] text-[#C9A24B] mb-0.5">
              Official Expedition Document
            </p>
            <h3 className="font-serif text-lg md:text-xl font-bold text-white">
              Terms &amp; Conditions
            </h3>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Print Button */}
            <button
              type="button"
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors cursor-pointer"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
              <span>Print</span>
            </button>

            {/* Direct Binary PDF Download Button */}
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm text-xs font-semibold bg-[#A07828] hover:bg-[#7A5C1E] text-white transition-colors cursor-pointer shadow-sm"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Download PDF</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer ml-1"
              aria-label="Close modal"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Modal Body / Styled Verbatim Document View */}
        <div className="flex-1 overflow-y-auto bg-[#FAFAF7]">
          <div className="max-w-3xl mx-auto px-6 sm:px-12 py-10 text-[#0D1B2A]">
            {/* Header Title */}
            <div className="text-center pb-8 mb-8 border-b border-black/10">
              <h1 className="font-serif text-2xl sm:text-3xl font-bold mb-2 text-[#0D1B2A]">
                Stars, Stripes &amp; Wild India
              </h1>
              <p className="text-xs sm:text-sm text-[#7A5C1E] font-medium tracking-wide">
                Terms and Conditions — April 5–14, 2027 | Pench National Park
                &amp; Tadoba-Andhari Tiger Reserve
              </p>
            </div>

            {/* Sections 1 to 19 */}
            <div className="space-y-8 text-sm leading-relaxed text-[#3D4F60]">
              {/* 1. About These Terms */}
              <section>
                <h2 className="font-serif text-lg font-bold text-[#0D1B2A] mb-3">
                  1. About These Terms
                </h2>
                <p>
                  These Terms and Conditions (“Terms”) govern your booking and
                  participation in the “Stars, Stripes &amp; Wild India”
                  photography expedition (the “Trip”), organized by P S Srinivas
                  and Himanshu Bagde as co-directors(“the Organizers,” “we,”
                  “us”), joined in Pench by astrophotography expert Abhishek
                  Pawse. By submitting a deposit or otherwise confirming a
                  booking, you (“Guest,” “you”) agree to be bound by these
                  Terms.
                </p>
              </section>

              {/* 2. The Trip */}
              <section>
                <h2 className="font-serif text-lg font-bold text-[#0D1B2A] mb-3">
                  2. The Trip
                </h2>
                <ul className="space-y-2 pl-2">
                  <li>
                    <strong>2.1 Dates:</strong> April 5–14, 2027 (9 nights, 10
                    days).
                  </li>
                  <li>
                    <strong>2.2 Itinerary:</strong> Four nights at Pench
                    National Park and five nights at Tadoba-Andhari Tiger
                    Reserve, as described in the itinerary provided to you at
                    booking. The itinerary is indicative and subject to change
                    as set out in Section 5.
                  </li>
                  <li>
                    <strong>2.3 Group size:</strong> limited to a maximum of 8
                    Guests.
                  </li>
                  <li>
                    <strong>2.4 Trip leaders:</strong> Himanshu Bagde and P S
                    Srinivas, co-directors present throughout the Trip, joined
                    in Pench by Abhishek Pawse as astrophotography expert for
                    four nights of dark-sky sessions.
                  </li>
                  <li>
                    <strong>2.5 Minimum age:</strong> this Trip is open to
                    Guests aged 18 and over at the time of departure. No minors
                    can be accepted on this Trip.
                  </li>
                </ul>
              </section>

              {/* 3. Booking and Payment */}
              <section>
                <h2 className="font-serif text-lg font-bold text-[#0D1B2A] mb-3">
                  3. Booking and Payment
                </h2>
                <ul className="space-y-2 pl-2">
                  <li>
                    <strong>3.1</strong> A booking is confirmed on receipt of a
                    non-refundable deposit of $2,000 USD per person.
                  </li>
                  <li>
                    <strong>3.2</strong> The remaining balance ($4,900 USD per
                    person, double occupancy; add $1,500 USD for single
                    occupancy) is due by November 1, 2026.
                  </li>
                  <li>
                    <strong>3.3</strong> Bookings made after November 1, 2026,
                    where space permits, require full payment at the time of
                    booking.
                  </li>
                  <li>
                    <strong>3.4</strong> All payments are to be made in US
                    Dollars by Zelle, Venmo, Paypal, credit card or bank
                    transfer; account details to be provided at the time of
                    confirmation of participation. If any of the above funds’
                    transfer modes charge any fees to the Organizers’, such fees
                    shall be borne in full by the Guest. The amounts mentioned
                    above are all the amounts, net of all transaction
                    costs/transfer fees, due to the Organizers.
                  </li>
                  <li>
                    <strong>3.5</strong> Failure to pay the balance by the due
                    date may, at the Organizers’ discretion, result in
                    cancellation of the booking and forfeiture of the deposit
                    paid.
                  </li>
                  <li>
                    <strong>3.6</strong> Where two or more Guests book together
                    (for example, as a couple or as friends traveling jointly),
                    each Guest is jointly and severally liable for the full cost
                    of that booking, including deposits, balance payments, and
                    any cancellation charges, regardless of which Guest made the
                    original payment.
                  </li>
                  <li>
                    <strong>3.7</strong> If a credit card payment is accepted
                    for any portion of the Trip cost, the Guest agrees not to
                    initiate a chargeback for amounts properly charged under
                    these Terms, and to raise any billing dispute directly with
                    the Organizers first.
                  </li>
                </ul>
              </section>

              {/* 4. Cancellation by the Guest */}
              <section>
                <h2 className="font-serif text-lg font-bold text-[#0D1B2A] mb-3">
                  4. Cancellation by the Guest
                </h2>
                <ul className="space-y-2 pl-2">
                  <li>
                    <strong>4.1</strong> Cancellation on or before November 1,
                    2026: the $2,000 deposit is forfeited; any further payments
                    already made are refunded in full.
                  </li>
                  <li>
                    <strong>4.2</strong> Cancellation between November 1 and
                    November 15, 2026: 50% of the total Trip cost is forfeited.
                  </li>
                  <li>
                    <strong>4.3</strong> Cancellation on or after November 16,
                    2026: no refund is available. At the Organizer's discretion,
                    a full or partial credit toward a future departure of this
                    Trip may be offered, subject to availability.
                  </li>
                  <li>
                    <strong>4.4</strong> The Organizers will make good-faith
                    efforts to find a replacement booking if a spot is
                    cancelled. If a cancelled spot is subsequently filled by a
                    new Guest, the Organizers will refund the cancelling Guest
                    the amount recovered from the replacement booking, less a
                    $250 administrative fee and any non-recoverable costs
                    already committed on the cancelling Guest's behalf (such as
                    permits or deposits paid to lodges). This applies even where
                    the cancellation falls within the no-refund window in
                    Section 4.3.
                  </li>
                  <li>
                    <strong>4.5</strong> Cancellations must be made in writing
                    (email is acceptable). The effective date of cancellation is
                    the date such notice is received by the Organizers.
                  </li>
                  <li>
                    <strong>4.6</strong> We strongly recommend that all Guests
                    purchase comprehensive travel insurance, including trip
                    cancellation and interruption cover, at the time of booking
                    — see Section 7.
                  </li>
                </ul>
              </section>

              {/* 5. Changes or Cancellation by the Organizers */}
              <section>
                <h2 className="font-serif text-lg font-bold text-[#0D1B2A] mb-3">
                  5. Changes or Cancellation by the Organizers
                </h2>
                <ul className="space-y-2 pl-2">
                  <li>
                    <strong>5.1 Minimum numbers:</strong> this Trip requires a
                    minimum of six (6) confirmed Guests to proceed at the price
                    quoted. If this minimum is not reached by November 15, 2026,
                    the Organizer may cancel the Trip, in which case all
                    payments made will be refunded in full, or may offer Guests
                    the option to proceed at an adjusted price.
                  </li>
                  <li>
                    <strong>5.2</strong> The Organizers may make reasonable
                    changes to the itinerary, accommodations, or trip leaders
                    where required by circumstances beyond its control,
                    including park permit availability, weather, wildlife
                    conditions, lodge availability, or safety concerns. Where a
                    named co-director (Himanshu Bagde or P S Srinivas) becomes
                    unable to lead the Trip due to unavoidable reasons, the
                    Organizers will notify Guests as soon as reasonably possible
                    and arrange a qualified replacement.
                  </li>
                  <li>
                    <strong>5.3</strong> If the Organizers cancel the Trip for a
                    reason other than Force Majeure (Section 11) or insufficient
                    bookings (Section 5.1), Guests will receive a full refund of
                    all payments made. This refund is the Guest's sole remedy;
                    the Organizers are not responsible for any other costs
                    incurred by the Guest, including flights, visas, or gear
                    purchased for the Trip.
                  </li>
                </ul>
              </section>

              {/* 6. Travel Documents */}
              <section>
                <h2 className="font-serif text-lg font-bold text-[#0D1B2A] mb-3">
                  6. Travel Documents
                </h2>
                <ul className="space-y-2 pl-2">
                  <li>
                    <strong>6.1</strong> Guests are solely responsible for
                    holding a valid passport, the correct visa or e-Visa for
                    entry to India, and any other documentation and/health
                    requirements required for travel.
                  </li>
                  <li>
                    <strong>6.2</strong> The Organizers are not responsible for
                    losses arising from a Guest's failure to obtain correct
                    travel documents.
                  </li>
                </ul>
              </section>

              {/* 7. Health, Fitness, and Insurance */}
              <section>
                <h2 className="font-serif text-lg font-bold text-[#0D1B2A] mb-3">
                  7. Health, Fitness, and Insurance
                </h2>
                <ul className="space-y-2 pl-2">
                  <li>
                    <strong>7.1</strong> This Trip involves vehicle-based
                    safaris in open 4x4 vehicles, early-morning starts,
                    late-night astrophotography sessions, long days, and
                    exposure to heat — April daytime temperatures in central
                    India commonly exceed 35°C (95°F) — and to wildlife in its
                    natural habitat. Guests should also expect to carry and
                    manage their own camera equipment and luggage throughout the
                    Trip.
                  </li>
                  <li>
                    <strong>7.2</strong> Guests are solely responsible for
                    honestly assessing their own fitness for the Trip as
                    described, and for disclosing to the Organizers, before
                    booking, any medical condition that may affect their ability
                    to participate safely. The Organizers may decline or
                    discontinue a Guest's participation where a physical or
                    medical condition poses a risk to that Guest or to others,
                    and may request written medical clearance before departure
                    where reasonably necessary.
                  </li>
                  <li>
                    <strong>7.3</strong> Guests are required to hold
                    comprehensive travel insurance valid internationally,
                    covering at minimum: emergency medical and evacuation
                    expenses (minimum $100,000 USD medical, $200,000 USD
                    evacuation and repatriation), trip cancellation and
                    interruption, and loss of personal belongings, for the full
                    duration of the Trip.
                  </li>
                  <li>
                    <strong>7.4</strong> Guests must provide the Organizers, no
                    later than 30 days before departure: proof of the insurance
                    required under 7.3, the insurer's emergency contact details
                    and policy number, and the names, relationship, phone
                    number, and email address of two personal emergency
                    contacts. Failure to provide this information may result in
                    exclusion from the Trip without refund.
                  </li>
                  <li>
                    <strong>7.5</strong> The Organizers are not a medical
                    provider and make no representation regarding the
                    availability or quality of medical care during the Trip.
                    While acceptable medical facilities are available in Nagpur,
                    Guests are informed that medical facilities near Pench and
                    Tadoba-Andhari are limited, and emergency evacuation may
                    take considerable time.
                  </li>
                  <li>
                    <strong>7.6</strong> Guests are solely responsible for the
                    care, security, and insurance of their own photographic and
                    personal equipment (including cameras, lenses, star
                    trackers, laptops, etc.) throughout the Trip. The Organizer
                    accepts no liability for loss, theft, or damage to personal
                    equipment during transit, safaris, astrophotography
                    sessions, or at lodges.
                  </li>
                  <li>
                    <strong>7.7</strong> Given the close, shared travel
                    environment (vehicles, meals, and lodges), Guests
                    acknowledge the general risk of exposure to contagious
                    illness during the Trip. A Guest experiencing symptoms of a
                    contagious illness should inform the co-directors promptly
                    and follow their reasonable requests (such as mask use or a
                    period of separation from the group) for the wellbeing of
                    the group.
                  </li>
                </ul>
              </section>

              {/* 8. Wildlife, Weather, and Itinerary Disclaimer */}
              <section>
                <h2 className="font-serif text-lg font-bold text-[#0D1B2A] mb-3">
                  8. Wildlife, Weather, and Itinerary Disclaimer
                </h2>
                <ul className="space-y-2 pl-2">
                  <li>
                    <strong>8.1</strong> Wildlife sightings, weather conditions,
                    and night-sky visibility are governed by nature and cannot
                    be guaranteed. References in Trip marketing materials to
                    sighting likelihood, seasonal conditions, or sky visibility
                    reflect historical patterns and do not guarantee any
                    specific outcome on this departure.
                  </li>
                  <li>
                    <strong>8.2</strong> Itineraries, safari zone allocations,
                    and session timings may be adjusted by trip leaders or by
                    local park or forest department authorities at any time,
                    including after the Trip has begun, to maximize safety or
                    opportunity, or as required by permit allocation.
                  </li>
                </ul>
              </section>

              {/* 9. Code of Conduct and Park Regulations */}
              <section>
                <h2 className="font-serif text-lg font-bold text-[#0D1B2A] mb-3">
                  9. Code of Conduct and Park Regulations
                </h2>
                <ul className="space-y-2 pl-2">
                  <li>
                    <strong>9.1</strong> Guests agree to comply with all rules
                    and regulations of Pench National Park, Tadoba-Andhari Tiger
                    Reserve, and any other protected area visited, as
                    communicated by trip leaders, naturalist guides, or park
                    authorities.
                  </li>
                  <li>
                    <strong>9.2 Drones:</strong> India's import regulations make
                    it very difficult for tourists to bring personal drones into
                    the country, and drones are not permitted inside either
                    reserve in any case. Guests are strongly advised not to
                    bring drones on this Trip. The Organizers are not
                    responsible for any drone confiscated, delayed, or refused
                    entry by Indian customs authorities.
                  </li>
                  <li>
                    <strong>9.3</strong> The Organizers may, at their sole
                    discretion, remove any Guest from the Trip without refund
                    where that Guest's conduct is judged to endanger the safety
                    or enjoyment of the group, or to violate park regulations.
                  </li>
                  <li>
                    <strong>9.4 Late arrival or early departure:</strong> no
                    refund is available for any portion of the Trip missed due
                    to a Guest's late arrival or early departure. A Guest
                    arriving late is responsible for any additional cost of
                    rejoining the group, and the Organizers cannot guarantee
                    that a late Guest will be able to rejoin. A Guest departing
                    early remains responsible for their own costs and safety
                    from that point onward, including the cost of transportation
                    to Nagpur airport from wherever they decide to depart early.
                  </li>
                </ul>
              </section>

              {/* 10. Assumption of Risk and Release of Liability */}
              <section>
                <h2 className="font-serif text-lg font-bold text-[#0D1B2A] mb-3">
                  10. Assumption of Risk and Release of Liability
                </h2>
                <ul className="space-y-2 pl-2">
                  <li>
                    <strong>10.1</strong> Guests acknowledge that travel to, and
                    participation in, wildlife safaris and remote outdoor
                    locations carries inherent risks, including but not limited
                    to injury from wildlife, road travel accidents, illness,
                    extreme temperatures, uneven or unfamiliar terrain, and the
                    general risks of international travel.
                  </li>
                  <li>
                    <strong>10.2</strong> To the fullest extent permitted by
                    applicable law (Indian as well as the laws applicable in any
                    other jurisdiction relevant to the Guest), Guests
                    voluntarily assume these risks and release the Organizers,
                    Abhishek Pawse, and their respective agents, from claims,
                    liabilities, losses, or damages arising from participation
                    in the Trip, except to the extent caused by the Organizers’
                    gross negligence or willful misconduct.
                  </li>
                </ul>
              </section>

              {/* 11. Force Majeure */}
              <section>
                <h2 className="font-serif text-lg font-bold text-[#0D1B2A] mb-3">
                  11. Force Majeure
                </h2>
                <ul className="space-y-2 pl-2">
                  <li>
                    <strong>11.1</strong> Neither party is liable for failure or
                    delay in performance due to circumstances beyond its
                    reasonable control, including natural disasters, extreme
                    weather, pandemic or epidemic, government travel
                    restrictions or advisories, civil unrest, war, terrorism,
                    strikes, or reserve closures (a “Force Majeure Event”).
                  </li>
                  <li>
                    <strong>11.2</strong> If the Trip is cancelled due to a
                    Force Majeure Event, the Organizers will use reasonable
                    efforts to recover costs from third-party suppliers (lodges,
                    ground operator, permits) and will refund Guests the amount
                    recovered, less any costs already reasonably incurred by the
                    Organizer in preparing for the Trip. The Organizers are not
                    obligated to refund amounts that cannot be recovered from
                    third parties.
                  </li>
                </ul>
              </section>

              {/* 12. Limitation of Liability */}
              <section>
                <h2 className="font-serif text-lg font-bold text-[#0D1B2A] mb-3">
                  12. Limitation of Liability
                </h2>
                <ul className="space-y-2 pl-2">
                  <li>
                    <strong>12.1</strong> To the fullest extent permitted by
                    Indian (and all other relevant) law, the Organizers’ total
                    liability to any Guest arising from the Trip shall not
                    exceed the total amount paid by that Guest for the Trip.
                  </li>
                  <li>
                    <strong>12.2</strong> The Organizers are not liable for
                    indirect, incidental, or consequential damages, including
                    lost wages, missed flight connections, or the cost of
                    alternative travel arrangements.
                  </li>
                </ul>
              </section>

              {/* 13. Third-Party Suppliers */}
              <section>
                <h2 className="font-serif text-lg font-bold text-[#0D1B2A] mb-3">
                  13. Third-Party Suppliers
                </h2>
                <ul className="space-y-2 pl-2">
                  <li>
                    <strong>13.1</strong> Lodges, safari vehicle operators,
                    drivers, and other on-the-ground services are provided by
                    independent third-party suppliers, not by the Organizers
                    directly. While the Organizers select suppliers they believe
                    to be reputable, the Organizers are not liable for a
                    supplier's own negligence, error, or failure to deliver a
                    service to the expected standard.
                  </li>
                  <li>
                    <strong>13.2</strong> This section does not apply to the
                    Organizers or Abhishek Pawse, who are engaged directly as
                    co-director and astrophotography expert respectively, not as
                    third-party suppliers.
                  </li>
                </ul>
              </section>

              {/* 14. Photography and Media */}
              <section>
                <h2 className="font-serif text-lg font-bold text-[#0D1B2A] mb-3">
                  14. Photography and Media
                </h2>
                <ul className="space-y-2 pl-2">
                  <li>
                    <strong>14.1</strong> Photography or video taken by trip
                    leaders for the purpose of documenting the Trip may include
                    images of Guests. By participating, Guests grant the
                    Organizers a non-exclusive, royalty-free license to use such
                    images to promote future editions of this Trip (for example,
                    on the Trip website, brochure, or social media), unless the
                    Guest opts out in writing before the Trip begins.
                  </li>
                  <li>
                    <strong>14.2</strong> This section does not affect a Guest's
                    ownership of photographs they personally capture during the
                    Trip.
                  </li>
                  <li>
                    <strong>14.3</strong> If a Guest chooses to share their own
                    trip photographs or video with the Organizer after the Trip,
                    the Guest retains full ownership, and grants the Organizer a
                    non-exclusive, royalty-free license to use that material to
                    promote future editions of this Trip, with photographer
                    credit given where practical. The Organizer will not use a
                    Guest's personal material for any other purpose without that
                    Guest's separate written consent.
                  </li>
                </ul>
              </section>

              {/* 15. Complaints */}
              <section>
                <h2 className="font-serif text-lg font-bold text-[#0D1B2A] mb-3">
                  15. Complaints
                </h2>
                <p>
                  <strong>15.1</strong> A Guest with a concern during the Trip
                  should raise it with a co-director at the time, so it can be
                  addressed while still on Trip. If a Guest remains dissatisfied
                  after the Trip, a written complaint should be sent to the
                  Organizer within 30 days of the Trip's completion. The
                  Organizer will respond in good faith within a reasonable time.
                </p>
              </section>

              {/* 16. Data Privacy */}
              <section>
                <h2 className="font-serif text-lg font-bold text-[#0D1B2A] mb-3">
                  16. Data Privacy
                </h2>
                <ul className="space-y-2 pl-2">
                  <li>
                    <strong>16.1</strong> Personal information provided by a
                    Guest (including contact details, dietary needs, health
                    information relevant to participation, and emergency
                    contacts) is used solely to organize and run the Trip, and
                    is shared with third-party suppliers (such as lodges and the
                    ground transport operator) only to the extent necessary to
                    arrange their services.
                  </li>
                  <li>
                    <strong>16.2</strong> The Organizers will not use a Guest's
                    personal information for marketing purposes without that
                    Guest's consent, and will not sell or share Guest
                    information beyond what is necessary to operate the Trip.
                  </li>
                </ul>
              </section>

              {/* 17. Governing Law and Dispute Resolution */}
              <section>
                <h2 className="font-serif text-lg font-bold text-[#0D1B2A] mb-3">
                  17. Governing Law and Dispute Resolution
                </h2>
                <ul className="space-y-2 pl-2">
                  <li>
                    <strong>17.1</strong> These Terms are governed by the laws
                    of India, without regard to conflict-of-law principles.
                  </li>
                  <li>
                    <strong>17.2</strong> The parties will first attempt in good
                    faith to resolve any dispute through informal discussion
                    and, if needed, mediation. If a dispute cannot be resolved
                    this way, it shall be resolved through arbitration in the
                    city of Nagpur, India.
                  </li>
                  <li>
                    <strong>17.3</strong> Any claim must be brought within one
                    month of the event giving rise to it.
                  </li>
                </ul>
              </section>

              {/* 18. General */}
              <section>
                <h2 className="font-serif text-lg font-bold text-[#0D1B2A] mb-3">
                  18. General
                </h2>
                <ul className="space-y-2 pl-2">
                  <li>
                    <strong>18.1</strong> These Terms, together with the Trip
                    itinerary and any written confirmation provided at booking,
                    constitute the entire agreement between the Guest and the
                    Organizers.
                  </li>
                  <li>
                    <strong>18.2</strong> If any provision of these Terms is
                    found unenforceable, the remaining provisions remain in full
                    force and effect.
                  </li>
                  <li>
                    <strong>18.3</strong> The Organizers may update these Terms
                    from time to time. The version in effect at the time of the
                    Guest’s booking governs the Guest’s Trip.
                  </li>
                </ul>
              </section>

              {/* 19. Acknowledgment */}
              <section className="p-4 bg-white rounded-sm border border-black/10">
                <h2 className="font-serif text-lg font-bold text-[#0D1B2A] mb-2">
                  19. Acknowledgment
                </h2>
                <p className="font-medium text-[#0D1B2A]">
                  By submitting your deposit, you confirm that you have read,
                  understood, and agree to these Terms and Conditions in full.
                </p>
              </section>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#F2EDE2] border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <p className="text-xs text-[#637282] text-center sm:text-left">
            Stars, Stripes &amp; Wild India — Official Terms &amp; Conditions
            (April 5–14, 2027)
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleDownload}
              className="px-4 py-2 text-xs font-bold rounded-sm bg-[#A07828] hover:bg-[#7A5C1E] text-white transition-colors cursor-pointer"
            >
              Download PDF Copy
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold rounded-sm bg-white border border-black/15 text-[#0D1B2A] hover:bg-black/5 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
