const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbz0JZPtComaN1fR-NtWfzMsdRoFoY97_Mb7P5GSeVBYHc2_us9quADTCvywWZiHwf6P_A/exec'

export default async function handler(req: any, res: any) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({
        success: false,
        message: 'Method not allowed',
      })
    }

    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(req.body),
    })

    const responseText = await response.text()

    console.log('Apps Script response:', responseText)

    let result: any

    try {
      result = JSON.parse(responseText)
    } catch {
      console.error(
        'Apps Script returned non-JSON:',
        responseText
      )

      return res.status(502).json({
        success: false,
        message:
          'Google Apps Script returned an invalid response.',
        details: responseText.substring(0, 500),
      })
    }

    if (!response.ok || !result.success) {
      return res.status(400).json({
        success: false,
        message:
          result.message ||
          result.error ||
          'Google Apps Script rejected the reservation.',
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
    console.error('Reservation API error:', error)

    return res.status(500).json({
      success: false,
      message:
        error?.message ||
        'Internal server error while processing reservation.',
    })
  }
}
