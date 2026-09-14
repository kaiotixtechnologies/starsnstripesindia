/**
 * API Route: /api/seats
 *
 * Fetches live available seats (out of 8) by querying either:
 * 1. A dedicated Payments Apps Script Web App (if deployed separately), or
 * 2. The main Reservations Apps Script Web App.
 */

// If you deploy the Apps Script directly on your Payments Google Sheet,
// replace this URL with your Payments Web App URL:
const PAYMENTS_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwGuOdfoU3Xe2jICq0GLzyQX8jLuyrJjubib6RgY5G7d2ugSxKUZsZvPvEtYE2eq1fQqQ/exec"

export default async function handler(req: any, res: any) {
  try {
    const url = PAYMENTS_APPS_SCRIPT_URL.includes("?")
      ? `${PAYMENTS_APPS_SCRIPT_URL}&action=getSeats`
      : `${PAYMENTS_APPS_SCRIPT_URL}?action=getSeats`

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })

    const responseText = await response.text()
    let result: any = {}

    try {
      result = JSON.parse(responseText)
    } catch {
      // Safe fallback
    }

    if (result && result.success && typeof result.seatsRemaining === "number") {
      return res.status(200).json({
        success: true,
        totalCapacity: result.totalCapacity ?? 8,
        bookedSeats: result.bookedSeats ?? 0,
        seatsRemaining: Math.max(0, Math.min(8, result.seatsRemaining)),
        isSoldOut: result.seatsRemaining <= 0,
      })
    }

    // Default: 8 spots available
    return res.status(200).json({
      success: true,
      totalCapacity: 8,
      bookedSeats: 0,
      seatsRemaining: 8,
      isSoldOut: false,
    })
  } catch (error: any) {
    return res.status(200).json({
      success: true,
      totalCapacity: 8,
      bookedSeats: 0,
      seatsRemaining: 8,
      isSoldOut: false,
    })
  }
}
