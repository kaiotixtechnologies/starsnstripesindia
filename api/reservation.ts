const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyw-dvXG0vGF0gyWxuEvDkc0lqt06hL8DGdKsifsS8Dxoa_P87XU1vW0sM2l6If6eoh/exec"

export default async function handler(req: any, res: any) {
  try {
    // ── Handle GET: Fetch real-time available seats ──
    if (req.method === "GET") {
      try {
        const response = await fetch(`${APPS_SCRIPT_URL}?action=getSeats`, {
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
          // If Apps Script returns raw text or HTML, fallback safely
        }

        if (
          result &&
          result.success &&
          typeof result.seatsRemaining === "number"
        ) {
          return res.status(200).json({
            success: true,
            totalCapacity: result.totalCapacity ?? 8,
            bookedSeats: result.bookedSeats ?? 0,
            seatsRemaining: Math.max(0, Math.min(8, result.seatsRemaining)),
            isSoldOut: result.seatsRemaining <= 0,
          })
        }

        // Fallback if Google Apps Script has not yet deployed the custom doGet handler
        return res.status(200).json({
          success: true,
          totalCapacity: 8,
          bookedSeats: 0,
          seatsRemaining: 8,
          isSoldOut: false,
        })
      } catch (fetchErr) {
        console.warn("Could not fetch seats from Apps Script:", fetchErr)
        return res.status(200).json({
          success: true,
          totalCapacity: 8,
          bookedSeats: 0,
          seatsRemaining: 8,
          isSoldOut: false,
        })
      }
    }

    // ── Handle POST: Create new reservation ──
    if (req.method !== "POST") {
      return res.status(405).json({
        success: false,
        message: "Method not allowed",
      })
    }

    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(req.body),
    })

    const responseText = await response.text()
    console.log("Apps Script response:", responseText)

    let result: any

    try {
      result = JSON.parse(responseText)
    } catch {
      console.error("Apps Script returned non-JSON:", responseText)

      return res.status(502).json({
        success: false,
        message: "Google Apps Script returned an invalid response.",
        details: responseText.substring(0, 500),
      })
    }

    if (!response.ok || !result.success) {
      return res.status(400).json({
        success: false,
        message:
          result.message ||
          result.error ||
          "Google Apps Script rejected the reservation.",
      })
    }

    return res.status(200).json({
      success: true,
      reservationId: result.reservationId,
      numberOfGuests: result.numberOfGuests,
      totalPackagePrice: result.totalPackagePrice,
      totalDeposit: result.totalDeposit,
      remainingBalance: result.remainingBalance,
    })
  } catch (error: any) {
    console.error("Reservation API error:", error)

    return res.status(500).json({
      success: false,
      message:
        error?.message || "Internal server error while processing reservation.",
    })
  }
}
