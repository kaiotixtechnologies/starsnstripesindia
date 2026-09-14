/**
 * =========================================================================
 * GOOGLE APPS SCRIPT CODE FOR YOUR PAYMENTS SPREADSHEET
 * =========================================================================
 *
 * 1. Open your Payments Google Spreadsheet (the one with 'Form_Responses').
 * 2. Click "Extensions" > "Apps Script".
 * 3. Replace all existing code with the code below.
 * 4. Click "Deploy" (top right) > "Manage deployments".
 * 5. Click the Pencil (Edit) icon.
 * 6. Under "Version", choose "New version".
 * 7. Ensure "Who has access" is set to "Anyone".
 * 8. Click "Deploy".
 * =========================================================================
 */

const TOTAL_CAPACITY = 8

function doGet(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet()

    // Looks for 'Form_Responses' (from your sheet), 'Payments', or the first tab
    const sheet =
      ss.getSheetByName("Form_Responses") ||
      ss.getSheetByName("Form_Responses 1") ||
      ss.getSheetByName("Form Responses 1") ||
      ss.getSheetByName("Payments") ||
      ss.getSheets()[0]

    const data = sheet.getDataRange().getValues()

    if (data.length <= 1) {
      return createJsonResponse({
        success: true,
        totalCapacity: TOTAL_CAPACITY,
        bookedSeats: 0,
        seatsRemaining: TOTAL_CAPACITY,
        isSoldOut: false,
      })
    }

    const headers = data[0].map((h) => String(h).trim().toLowerCase())

    // Find the "Payment Done" column index (Column M)
    let paymentColIndex = -1
    let guestCountColIndex = -1

    for (let i = 0; i < headers.length; i++) {
      const h = headers[i]
      if (
        h.includes("payment done") ||
        h === "payment done" ||
        h.includes("payment status") ||
        h.includes("paid") ||
        h.includes("deposit") ||
        h.includes("confirmed")
      ) {
        paymentColIndex = i
      }
      if (
        h.includes("guest") ||
        h.includes("number of guests") ||
        h.includes("seats") ||
        h.includes("pax")
      ) {
        guestCountColIndex = i
      }
    }

    let bookedSeats = 0

    for (let r = 1; r < data.length; r++) {
      const row = data[r]
      let isPaid = false

      // Check the Payment Done column
      if (paymentColIndex !== -1) {
        const val = String(row[paymentColIndex] || "")
          .trim()
          .toUpperCase()
        if (
          val === "YES" ||
          val === "Y" ||
          val === "TRUE" ||
          val === "PAID" ||
          val === "CONFIRMED"
        ) {
          isPaid = true
        }
      } else {
        // Fallback: check every cell in the row for "YES"
        for (let c = 0; c < row.length; c++) {
          const val = String(row[c] || "")
            .trim()
            .toUpperCase()
          if (val === "YES" || val === "PAID") {
            isPaid = true
            break
          }
        }
      }

      if (isPaid) {
        let count = 1
        if (guestCountColIndex !== -1) {
          const parsed = parseInt(row[guestCountColIndex], 10)
          if (!isNaN(parsed) && parsed > 0) {
            count = parsed
          }
        }
        bookedSeats += count
      }
    }

    const seatsRemaining = Math.max(0, TOTAL_CAPACITY - bookedSeats)

    return createJsonResponse({
      success: true,
      totalCapacity: TOTAL_CAPACITY,
      bookedSeats: bookedSeats,
      seatsRemaining: seatsRemaining,
      isSoldOut: seatsRemaining <= 0,
    })
  } catch (err) {
    return createJsonResponse({
      success: false,
      error: err.toString(),
      totalCapacity: TOTAL_CAPACITY,
      seatsRemaining: TOTAL_CAPACITY,
    })
  }
}

function createJsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  )
}
