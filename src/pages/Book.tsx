import { useState, useEffect, useRef } from "react"
import {
  FadeIn,
  GoldDivider,
  OutlineBtn,
  PageHero,
  IMG_TIGER1,
  Eyebrow,
} from "../components/shared"
import TermsModal from "../components/TermsModal"

export interface GuestInfo {
  name: string
  email: string
  phone: string
  nationality: string
  address: string
  isPrimaryContact: boolean
}

export interface ReservationFormData {
  numberOfGuests: number
  occupancy: string
  photographyExperience: string
  guests: GuestInfo[]
  message: string
}

/*
 * Google Apps Script Web App
 */
const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyw-dvXG0vGF0gyWxuEvDkc0lqt06hL8DGdKsifsS8Dxoa_P87XU1vW0sM2l6If6eoh/exec"

const PAYMENTS_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwGuOdfoU3Xe2jICq0GLzyQX8jLuyrJjubib6RgY5G7d2ugSxKUZsZvPvEtYE2eq1fQqQ/exec"

export default function Book() {
  const [formData, setFormData] = useState<ReservationFormData>({
    numberOfGuests: 1,
    occupancy: "Twin-Share Room (USD 6,900)",
    photographyExperience: "Intermediate",
    guests: [
      {
        name: "",
        email: "",
        phone: "",
        nationality: "",
        address: "",
        isPrimaryContact: true,
      },
    ],
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [reservationId, setReservationId] = useState("")
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [showTermsModal, setShowTermsModal] = useState(false)
  const [seatsRemaining, setSeatsRemaining] = useState<number>(() => {
    if (typeof window !== "undefined") {
      const cached = sessionStorage.getItem("sns_seats_left")
      if (cached) {
        const parsed = parseInt(cached, 10)
        if (!isNaN(parsed) && parsed >= 0 && parsed <= 8) return parsed
      }
    }
    return 8
  })
  const [bookedSeats, setBookedSeats] = useState<number>(0)
  const reservationReceivedRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let isMounted = true
    const controller = new AbortController()

    const fetchAvailableSeats = async () => {
      try {
        // Direct fast fetch to Google Apps Script with 4s timeout
        const directRes = await fetch(
          `${PAYMENTS_APPS_SCRIPT_URL}?action=getSeats`,
          {
            method: "GET",
            mode: "cors",
            signal: controller.signal,
          },
        ).catch(() => null)

        if (directRes && directRes.ok) {
          const directData = await directRes.json().catch(() => null)
          if (
            isMounted &&
            directData &&
            typeof directData.seatsRemaining === "number"
          ) {
            const rem = Math.max(0, Math.min(8, directData.seatsRemaining))
            setSeatsRemaining(rem)
            setBookedSeats(directData.bookedSeats ?? 8 - rem)
            sessionStorage.setItem("sns_seats_left", String(rem))
            return
          }
        }

        // Fallback: try serverless proxy (/api/seats)
        const proxyRes = await fetch("/api/seats", {
          signal: controller.signal,
        }).catch(() => null)
        if (proxyRes && proxyRes.ok) {
          const data = await proxyRes.json().catch(() => null)
          if (isMounted && data && typeof data.seatsRemaining === "number") {
            const rem = Math.max(0, Math.min(8, data.seatsRemaining))
            setSeatsRemaining(rem)
            setBookedSeats(data.bookedSeats ?? 8 - rem)
            sessionStorage.setItem("sns_seats_left", String(rem))
          }
        }
      } catch (err) {
        // Silently keep default/cached seats without interruption
      }
    }

    fetchAvailableSeats()

    return () => {
      isMounted = false
      controller.abort()
    }
  }, [])

  useEffect(() => {
    if (submitted) {
      if (reservationReceivedRef.current) {
        reservationReceivedRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    }
  }, [submitted])

  /*
   * Change number of guests dynamically.
   * Maximum is the lesser of 8 and the remaining seats.
   */
  const handleGuestCountChange = (count: number) => {
    const maxSelectable = Math.max(1, Math.min(8, seatsRemaining))
    const newCount = Math.max(1, Math.min(maxSelectable, count))

    setFormData((prev) => {
      let updatedGuests = [...prev.guests]

      if (newCount > updatedGuests.length) {
        for (let i = updatedGuests.length; i < newCount; i++) {
          updatedGuests.push({
            name: "",
            email: "",
            phone: "",
            nationality: "",
            address: "",
            isPrimaryContact: false,
          })
        }
      } else if (newCount < updatedGuests.length) {
        updatedGuests = updatedGuests.slice(0, newCount)
      }

      return {
        ...prev,
        numberOfGuests: newCount,
        guests: updatedGuests,
      }
    })
  }

  /*
   * Update individual guest information.
   */
  const handleGuestChange = (
    index: number,
    field: keyof GuestInfo,
    value: string,
  ) => {
    setFormData((prev) => {
      const updatedGuests = [...prev.guests]

      updatedGuests[index] = {
        ...updatedGuests[index],
        [field]: value,
      }

      return {
        ...prev,
        guests: updatedGuests,
      }
    })
  }

  /*
   * Update booking-level fields.
   */
  const handleFieldChange = (
    field: "occupancy" | "photographyExperience" | "message",
    value: string,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  /*
   * Submit reservation to Google Apps Script.
   */
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (submitting) {
      return
    }

    setSubmitError("")

    /*
     * Extra frontend validation.
     * Browser "required" validation handles most of this,
     * but these checks make sure the data sent to Apps Script
     * is structurally correct.
     */

    if (
      !formData.numberOfGuests ||
      formData.numberOfGuests < 1 ||
      formData.numberOfGuests > 8
    ) {
      setSubmitError("Please select between 1 and 8 guests.")
      return
    }

    if (seatsRemaining > 0 && formData.numberOfGuests > seatsRemaining) {
      setSubmitError(
        `Only ${seatsRemaining} ${
          seatsRemaining === 1 ? "spot is" : "spots are"
        } currently remaining. Please adjust the number of guests.`,
      )
      return
    }

    if (formData.guests.length !== formData.numberOfGuests) {
      setSubmitError(
        "The number of guest details does not match the selected number of guests.",
      )
      return
    }

    const primaryGuest = formData.guests[0]

    if (!primaryGuest.name.trim()) {
      setSubmitError("Please enter the primary guest name.")
      return
    }

    if (!primaryGuest.email.trim()) {
      setSubmitError("Please enter the primary guest email.")
      return
    }

    if (!primaryGuest.phone.trim()) {
      setSubmitError("Please enter the primary guest phone number.")
      return
    }

    if (!primaryGuest.nationality.trim()) {
      setSubmitError("Please enter the primary guest nationality.")
      return
    }

    /*
     * Every guest must have the required information.
     */
    for (let i = 0; i < formData.guests.length; i++) {
      const guest = formData.guests[i]

      if (!guest.name.trim()) {
        setSubmitError(`Please enter the name for Guest ${i + 1}.`)
        return
      }

      if (!guest.nationality.trim()) {
        setSubmitError(`Please enter the nationality for Guest ${i + 1}.`)
        return
      }

      if (!guest.address.trim()) {
        setSubmitError(`Please enter the address for Guest ${i + 1}.`)
        return
      }

      /*
       * Primary guest email and phone are mandatory.
       * Other guests may leave them blank.
       */
      if (i === 0) {
        if (!guest.email.trim()) {
          setSubmitError("Please enter the primary guest email.")
          return
        }

        if (!guest.phone.trim()) {
          setSubmitError("Please enter the primary guest phone number.")
          return
        }
      }
    }

    if (!agreedToTerms) {
      setSubmitError(
        "Please agree to the Terms & Conditions before submitting your reservation.",
      )
      return
    }

    try {
      setSubmitting(true)

      /*
       * Create a clean payload.
       *
       * Pricing is intentionally NOT sent from the frontend.
       * Google Apps Script calculates the final package price,
       * deposit, and remaining balance server-side.
       */
      const payload = {
        numberOfGuests: formData.numberOfGuests,
        occupancy: formData.occupancy.includes("Single")
          ? "single"
          : "twin-share",
        photographyExperience: formData.photographyExperience,

        guests: formData.guests.map((guest, index) => ({
          name: guest.name.trim(),
          email: guest.email.trim(),
          phone: guest.phone.trim(),
          nationality: guest.nationality.trim(),
          address: guest.address.trim(),
          isPrimaryContact: index === 0,
        })),

        message: formData.message.trim(),
      }

      /*
       * Send reservation via /api/reservation or direct to Google Apps Script.
       */
      let result: any = null
      let isSuccessful = false

      // 1. Try local/serverless /api/reservation
      try {
        const response = await fetch("/api/reservation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        })

        if (response.ok) {
          const contentType = response.headers.get("content-type") || ""
          if (contentType.includes("application/json")) {
            result = await response.json()
            if (result && result.success) {
              isSuccessful = true
            }
          }
        }
      } catch (proxyErr) {
        console.warn(
          "Proxy endpoint unavailable, switching to direct Google Apps Script dispatch...",
          proxyErr,
        )
      }

      // 2. Direct fallback to Google Apps Script Web App
      if (!isSuccessful) {
        const directResponse = await fetch(APPS_SCRIPT_URL, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(payload),
        })

        const text = await directResponse.text()
        try {
          result = JSON.parse(text)
        } catch {
          throw new Error(
            "Unable to parse confirmation from Google Apps Script.",
          )
        }

        if (!directResponse.ok || !result.success) {
          throw new Error(
            result.message ||
              result.error ||
              "Google Apps Script rejected the reservation.",
          )
        }
      }

      setReservationId(result.reservationId || "")
      setSubmitted(true)
    } catch (error) {
      console.error("Reservation submission error:", error)

      if (error instanceof Error) {
        setSubmitError(error.message)
      } else {
        setSubmitError("Unable to submit your reservation. Please try again.")
      }
    } finally {
      setSubmitting(false)
    }
  }

  /*
   * Deposit display only.
   *
   * Actual deposit calculation is performed by Apps Script.
   */
  const depositPerGuest = 2000
  const totalDeposit = formData.numberOfGuests * depositPerGuest

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    border: "1px solid rgba(13,27,42,0.18)",
    borderRadius: 2,
    fontSize: 14,
    color: "#0D1B2A",
    background: "#FFFFFF",
    outline: "none",
    transition: "border-color 0.2s",
  }

  const primaryGuest = formData.guests[0] || {
    name: "",
    email: "",
    phone: "",
    nationality: "",
    address: "",
    isPrimaryContact: true,
  }

  return (
    <>
      <PageHero
        eyebrow="Reserve Your Place · April 5–14, 2027"
        title="HOW TO BOOK?"
        subtitle="This inaugural expedition is limited to 8 photographers. A USD 2,000 deposit reserves your spot; the remaining balance is due by November 1, 2026."
        bg={IMG_TIGER1}
      />

      <GoldDivider />

      {/* ── HOW TO BOOK? Form & Details ──────────────────────────── */}
      <section style={{ background: "#FAFAF7" }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">
          {/* Left Column */}
          <FadeIn className="lg:col-span-2 flex flex-col gap-6">
            <div
              className="p-8 rounded-sm bg-white"
              style={{
                border: "1px solid rgba(13,27,42,0.08)",
                boxShadow: "var(--shadow)",
              }}
            >
              <Eyebrow className="mb-2 text-xs">Reservation Policy</Eyebrow>

              <h2
                className="font-serif text-2xl font-bold mb-4 uppercase tracking-wide"
                style={{ color: "#0D1B2A" }}
              >
                HOW TO BOOK?
              </h2>

              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "#3D4F60" }}
              >
                This inaugural expedition is limited to 8 photographers. To
                secure your place, please fill in the form.
              </p>

              <div className="p-4 bg-[#F2EDE2] rounded-sm mb-4 border border-[#A07828]/20 flex flex-col gap-3">
                {/* Live Seats Availability Counter */}
                <div className="flex items-center justify-between gap-2">
                  <span className="eyebrow text-[10px] text-[#7A5C1E] flex items-center gap-1.5 font-bold">
                    <span
                      className={`inline-block w-2 h-2 rounded-full ${
                        seatsRemaining <= 2 ? "bg-amber-600" : "bg-[#1A5030]"
                      } animate-pulse`}
                    />
                    Live Availability
                  </span>
                  <span className="text-xs font-bold text-[#0D1B2A] bg-white px-2.5 py-0.5 rounded-sm border border-black/10 shadow-xs">
                    {seatsRemaining} of 8 spots left
                  </span>
                </div>

                {/* Progress Bar of booked spots */}
                <div className="w-full bg-black/10 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#A07828] h-full transition-all duration-500 rounded-full"
                    style={{
                      width: `${Math.min(100, Math.max(0, ((8 - seatsRemaining) / 8) * 100))}%`,
                    }}
                  />
                </div>

                <p className="text-xs text-[#4A5568] leading-relaxed">
                  {seatsRemaining <= 2 && seatsRemaining > 0 ? (
                    <strong className="text-amber-800">
                      High demand: Only {seatsRemaining}{" "}
                      {seatsRemaining === 1 ? "seat" : "seats"} remaining!
                    </strong>
                  ) : seatsRemaining === 0 ? (
                    <strong className="text-red-700">
                      Expedition is currently fully booked (8/8 spots reserved).
                    </strong>
                  ) : (
                    <>
                      Limited to 8 photographers total for dedicated instruction
                      and open safari jeep spacing.
                    </>
                  )}
                </p>

                <p className="text-xs font-semibold leading-relaxed pt-2 border-t border-black/10 text-[#7A5C1E]">
                  A USD 2,000 deposit per guest reserves your spot; the
                  remaining balance is due by November 1, 2026.
                </p>

                {formData.numberOfGuests > 1 && (
                  <p className="text-xs font-bold text-[#0D1B2A] pt-2 border-t border-black/10">
                    Selected for {formData.numberOfGuests} Guests: Total Deposit
                    USD ${totalDeposit.toLocaleString()}
                  </p>
                )}
              </div>

              <p className="text-xs italic leading-relaxed text-[#637282] pt-2 border-t border-black/[0.06]">
                This tour is governed by our Terms and Conditions, including
                cancellation policy, weather/wildlife disclaimer, and payment
                terms.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowTermsModal(true)}
              className="w-full py-3.5 text-[11px] tracking-[0.18em] uppercase font-semibold rounded-sm transition-all flex items-center justify-center gap-2 border border-[#A07828] text-[#A07828] hover:bg-[#A07828] hover:text-white text-center cursor-pointer"
            >
              Terms and Conditions (PDF)
            </button>

            <OutlineBtn to="/pricing">Review Full Pricing Details</OutlineBtn>
          </FadeIn>

          {/* Right Column */}
          <FadeIn
            delay={100}
            className="lg:col-span-3 rounded-sm overflow-hidden bg-white"
            style={{
              border: "1px solid rgba(13,27,42,0.08)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            {submitted ? (
              /* ─────────────────────────────────────────────────────
                 SUCCESS STATE
                 ───────────────────────────────────────────────────── */
              <div
                ref={reservationReceivedRef}
                className="p-8 sm:p-12 text-center scroll-mt-28 animate-fadeIn"
              >
                <div
                  className="w-14 h-14 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{ background: "#E8F5EE" }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="#1A5030"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <h3
                  className="font-serif text-2xl font-bold mb-3"
                  style={{ color: "#0D1B2A" }}
                >
                  Reservation Received
                </h3>

                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "#637282" }}
                >
                  Thank you, <strong>{primaryGuest.name || "Guest"}</strong>. We
                  have received your booking request for{" "}
                  <strong>
                    {formData.numberOfGuests}{" "}
                    {formData.numberOfGuests === 1 ? "Guest" : "Guests"}
                  </strong>{" "}
                  for the inaugural expedition (April 5–14, 2027).
                </p>

                {/* Reservation ID */}
                {reservationId && (
                  <div className="bg-[#F2EDE2] p-4 rounded-sm mb-4">
                    <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#637282] mb-1">
                      Reservation ID
                    </p>

                    <p className="text-lg font-bold tracking-wide text-[#0D1B2A]">
                      {reservationId}
                    </p>
                  </div>
                )}

                {/* Email confirmation */}
                {primaryGuest.email && (
                  <p className="text-xs text-[#7A5C1E] font-medium bg-[#F2EDE2] p-3 rounded-sm">
                    A confirmation email and next steps have been sent to{" "}
                    {primaryGuest.email}.
                  </p>
                )}

                {/* Registered guests */}
                {formData.guests.length > 1 && (
                  <div className="mt-6 text-left text-xs bg-black/[0.02] p-4 rounded-sm border border-black/5">
                    <p className="font-semibold text-[#0D1B2A] mb-2">
                      Registered Guests ({formData.numberOfGuests}):
                    </p>

                    <ul className="space-y-1 text-[#4A5568]">
                      {formData.guests.map((guest, index) => (
                        <li key={index}>
                          • {guest.name || `Guest ${index + 1}`} (
                          {guest.nationality || "Nationality pending"}){" "}
                          {index === 0 ? "— Primary Contact" : ""}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <p className="mt-6 text-xs text-[#637282] leading-relaxed">
                  Your reservation has been recorded successfully. Please check
                  your email for the reservation details and next steps.
                </p>
              </div>
            ) : (
              /* ─────────────────────────────────────────────────────
                 RESERVATION FORM
                 ───────────────────────────────────────────────────── */
              <form
                onSubmit={submit}
                className="p-8 md:p-10 flex flex-col gap-7"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-black/[0.08]">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#0D1B2A] mb-1">
                      Expedition Reservation Form
                    </h3>

                    <p className="text-xs text-[#637282]">
                      Please provide your booking details and guest information
                      to secure your spot.
                    </p>
                  </div>

                  {/* Top Live Seats Pill */}
                  <div className="self-start sm:self-auto shrink-0">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border ${
                        seatsRemaining <= 2
                          ? "bg-amber-50 text-amber-800 border-amber-300"
                          : "bg-[#E8F5EE] text-[#1A5030] border-[#1A5030]/20"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          seatsRemaining <= 2 ? "bg-amber-600" : "bg-[#1A5030]"
                        } animate-pulse`}
                      />
                      {`${seatsRemaining} of 8 Seats Available`}
                    </span>
                  </div>
                </div>

                {/* ── SECTION 1: BOOKING DETAILS ──────────────────────── */}
                <div className="flex flex-col gap-4 pb-6 border-b border-black/[0.08]">
                  <div className="flex items-center justify-between">
                    <p className="eyebrow text-[11px] text-[#A07828]">
                      Booking Details
                    </p>

                    <span className="text-[11px] font-medium text-[#7A5C1E] bg-[#F2EDE2] px-2.5 py-0.5 rounded-full">
                      ${depositPerGuest.toLocaleString()} USD deposit / guest
                    </span>
                  </div>

                  {/* Number of Guests & Occupancy */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="eyebrow text-[9.5px] sm:text-[10px] h-4 flex items-center whitespace-nowrap text-[#637282]">
                        NUMBER OF GUESTS *
                      </label>

                      <select
                        required
                        value={formData.numberOfGuests}
                        onChange={(e) =>
                          handleGuestCountChange(parseInt(e.target.value, 10))
                        }
                        style={{
                          ...inputStyle,
                          cursor: "pointer",
                          fontWeight: 600,
                          fontSize: 13,
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "#A07828")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor = "rgba(13,27,42,0.18)")
                        }
                      >
                        {Array.from(
                          { length: Math.max(1, Math.min(8, seatsRemaining)) },
                          (_, i) => i + 1,
                        ).map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? "Guest" : "Guests"} (Deposit: $
                            {(num * depositPerGuest).toLocaleString()} USD)
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="eyebrow text-[9.5px] sm:text-[10px] h-4 flex items-center whitespace-nowrap text-[#637282]">
                        OCCUPANCY OPTION *
                      </label>

                      <select
                        required
                        value={formData.occupancy}
                        onChange={(e) =>
                          handleFieldChange("occupancy", e.target.value)
                        }
                        style={{
                          ...inputStyle,
                          cursor: "pointer",
                          fontSize: 13,
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "#A07828")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor = "rgba(13,27,42,0.18)")
                        }
                      >
                        <option value="Twin-Share Room (USD 6,900)">
                          Twin-Share (USD 6,900)
                        </option>

                        <option value="Single Room Upgrade ($1,500 USD)">
                          Single Room Upgrade ($1,500 USD)
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Photography Experience */}
                  <div className="flex flex-col gap-1.5">
                    <label className="eyebrow text-[9.5px] sm:text-[10px] h-4 flex items-center whitespace-nowrap text-[#637282]">
                      PHOTOGRAPHY EXPERIENCE
                    </label>

                    <select
                      value={formData.photographyExperience}
                      onChange={(e) =>
                        handleFieldChange(
                          "photographyExperience",
                          e.target.value,
                        )
                      }
                      style={{
                        ...inputStyle,
                        cursor: "pointer",
                        fontSize: 13,
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#A07828")}
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(13,27,42,0.18)")
                      }
                    >
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Experienced">Experienced</option>
                    </select>
                  </div>
                </div>

                {/* ── SECTION 2: GUEST DETAILS ────────────────────────── */}
                <div className="flex flex-col gap-6">
                  {formData.guests.map((guest, idx) => {
                    const isPrimary = idx === 0

                    return (
                      <div
                        key={idx}
                        className={`p-5 sm:p-6 rounded-sm transition-all ${
                          isPrimary
                            ? "bg-[#FAFAF7] border-l-4 border-l-[#A07828] border border-black/[0.08]"
                            : "bg-[#FCFCFA] border border-black/[0.08]"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-4 pb-2 border-b border-black/[0.06]">
                          <h4 className="font-serif font-bold text-base text-[#0D1B2A]">
                            {isPrimary
                              ? "Guest 1 — Primary Contact"
                              : `Guest ${idx + 1}`}
                          </h4>

                          {isPrimary && (
                            <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 bg-[#A07828] text-white rounded-xs">
                              Primary Booker
                            </span>
                          )}
                        </div>

                        {/* Name + Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                          <div className="flex flex-col gap-1.5">
                            <label className="eyebrow text-[9.5px] sm:text-[10px] h-4 flex items-center whitespace-nowrap text-[#637282]">
                              Full Name *
                            </label>

                            <input
                              type="text"
                              required
                              value={guest.name}
                              onChange={(e) =>
                                handleGuestChange(idx, "name", e.target.value)
                              }
                              placeholder={
                                isPrimary
                                  ? "Primary Contact Name"
                                  : `Guest ${idx + 1} Name`
                              }
                              style={inputStyle}
                              onFocus={(e) =>
                                (e.target.style.borderColor = "#A07828")
                              }
                              onBlur={(e) =>
                                (e.target.style.borderColor =
                                  "rgba(13,27,42,0.18)")
                              }
                            />
                          </div>

                          <div className="flex flex-col gap-1.5">
                            <label className="eyebrow text-[9.5px] sm:text-[10px] h-4 flex items-center whitespace-nowrap text-[#637282]">
                              Email Address *
                            </label>

                            <input
                              type="email"
                              required
                              value={guest.email}
                              onChange={(e) =>
                                handleGuestChange(idx, "email", e.target.value)
                              }
                              placeholder={
                                isPrimary
                                  ? "primary@example.com"
                                  : "guest@example.com"
                              }
                              style={inputStyle}
                              onFocus={(e) =>
                                (e.target.style.borderColor = "#A07828")
                              }
                              onBlur={(e) =>
                                (e.target.style.borderColor =
                                  "rgba(13,27,42,0.18)")
                              }
                            />
                          </div>
                        </div>

                        {/* Phone + Nationality */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                          <div className="flex flex-col gap-1.5">
                            <label className="eyebrow text-[9.5px] sm:text-[10px] h-4 flex items-center whitespace-nowrap text-[#637282]">
                              Phone (Include Code) *
                            </label>

                            <input
                              type="tel"
                              required
                              value={guest.phone}
                              onChange={(e) =>
                                handleGuestChange(idx, "phone", e.target.value)
                              }
                              placeholder="+1 (555) 000-0000"
                              style={inputStyle}
                              onFocus={(e) =>
                                (e.target.style.borderColor = "#A07828")
                              }
                              onBlur={(e) =>
                                (e.target.style.borderColor =
                                  "rgba(13,27,42,0.18)")
                              }
                            />
                          </div>

                          <div className="flex flex-col gap-1.5">
                            <label className="eyebrow text-[9.5px] sm:text-[10px] h-4 flex items-center whitespace-nowrap text-[#637282]">
                              Nationality *
                            </label>

                            <input
                              type="text"
                              required
                              value={guest.nationality}
                              onChange={(e) =>
                                handleGuestChange(
                                  idx,
                                  "nationality",
                                  e.target.value,
                                )
                              }
                              placeholder="e.g. American, Indian"
                              style={inputStyle}
                              onFocus={(e) =>
                                (e.target.style.borderColor = "#A07828")
                              }
                              onBlur={(e) =>
                                (e.target.style.borderColor =
                                  "rgba(13,27,42,0.18)")
                              }
                            />
                          </div>
                        </div>

                        {/* Address */}
                        <div className="flex flex-col gap-1.5">
                          <label className="eyebrow text-[9.5px] sm:text-[10px] h-4 flex items-center whitespace-nowrap text-[#637282]">
                            Full Address *
                          </label>

                          <textarea
                            required
                            rows={2}
                            value={guest.address}
                            onChange={(e) =>
                              handleGuestChange(idx, "address", e.target.value)
                            }
                            placeholder="Street Address, City, State/Province, Postal Code, Country"
                            style={{
                              ...inputStyle,
                              resize: "vertical",
                            }}
                            onFocus={(e) =>
                              (e.target.style.borderColor = "#A07828")
                            }
                            onBlur={(e) =>
                              (e.target.style.borderColor =
                                "rgba(13,27,42,0.18)")
                            }
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* ── SECTION 3: MESSAGE ─────────────────────────────── */}
                <div className="flex flex-col gap-1.5 pt-2">
                  <label
                    className="eyebrow text-[10px]"
                    style={{ color: "#637282" }}
                  >
                    MESSAGE / INQUIRIES
                  </label>

                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      handleFieldChange("message", e.target.value)
                    }
                    placeholder="Any questions regarding gear, diet, room preferences, or arrival arrangements..."
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#A07828")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(13,27,42,0.18)")
                    }
                  />
                </div>

                {/* ── TERMS ─────────────────────────────────────────── */}
                <div className="flex items-start gap-3 p-4 rounded-sm bg-[#F2EDE2]/60 border border-[#A07828]/25 transition-colors hover:bg-[#F2EDE2]/80">
                  <input
                    type="checkbox"
                    id="agree-terms-checkbox"
                    required
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="mt-0.5 w-4 h-4 text-[#A07828] border-black/20 rounded-xs focus:ring-[#A07828] cursor-pointer accent-[#A07828]"
                  />

                  <label
                    htmlFor="agree-terms-checkbox"
                    className="text-xs leading-relaxed text-[#3D4F60] cursor-pointer select-none"
                  >
                    I have read, understood, and agree to the{" "}
                    <button
                      type="button"
                      onClick={() => setShowTermsModal(true)}
                      className="font-semibold text-[#A07828] underline underline-offset-2 hover:text-[#7A5C1E] cursor-pointer inline-flex items-center gap-0.5"
                    >
                      Terms &amp; Conditions
                    </button>
                    , including the cancellation policy, booking guidelines, and
                    wildlife &amp; weather disclaimer.{" "}
                    <span className="text-[#A07828] font-bold">*</span>
                  </label>
                </div>

                {/* ── ERROR ──────────────────────────────────────────── */}
                {submitError && (
                  <div
                    className="p-4 rounded-sm border"
                    style={{
                      background: "#FFF5F5",
                      borderColor: "rgba(160,40,40,0.25)",
                      color: "#8B2E2E",
                    }}
                  >
                    <p className="text-xs leading-relaxed">{submitError}</p>
                  </div>
                )}

                {/* ── SUBMIT ─────────────────────────────────────────── */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 text-[11px] tracking-[0.18em] uppercase font-semibold rounded-sm transition-all mt-1 shadow-sm flex items-center justify-center gap-2"
                  style={{
                    background: submitting ? "#B7A57A" : "#A07828",
                    color: "#fff",
                    cursor: submitting ? "not-allowed" : "pointer",
                    opacity: submitting ? 0.85 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (!submitting) {
                      e.currentTarget.style.background = "#7A5C1E"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!submitting) {
                      e.currentTarget.style.background = "#A07828"
                    }
                  }}
                >
                  {submitting ? (
                    <>
                      <span
                        className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"
                        aria-hidden="true"
                      />
                      SUBMITTING RESERVATION...
                    </>
                  ) : (
                    <>
                      Submit Reservation &amp; Proceed to Deposit ($
                      {totalDeposit.toLocaleString()} USD)
                    </>
                  )}
                </button>

                <p className="text-[10px] text-center text-[#637282] -mt-3">
                  Your reservation details will be securely recorded and a
                  confirmation email will be sent to the primary guest.
                </p>
              </form>
            )}
          </FadeIn>
        </div>
      </section>

      {/* Terms & Conditions PDF Modal */}
      <TermsModal
        isOpen={showTermsModal}
        onClose={() => setShowTermsModal(false)}
      />
    </>
  )
}
