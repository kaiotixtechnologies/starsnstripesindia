import { useState, useEffect } from "react"
import {
  CreditCardIcon,
  PhoneQrIcon,
  BankIcon,
  SparklesIcon,
  LockIcon,
  FileTextIcon,
} from "./shared"

export interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  itemTitle?: string
  amountUSD?: number
  onSuccess?: (details: { txnId: string amount: number method: string }) => void
}

export default function PaymentModal({
  isOpen,
  onClose,
  itemTitle = "Expedition Reserve Deposit",
  amountUSD = 2000,
  onSuccess,
}: PaymentModalProps) {
  const [method, setMethod] = useState<"card" | "upi" | "netbanking">("card")
  const [step, setStep] = useState<"form" | "processing" | "success">("form")
  const [procStatus, setProcStatus] = useState(
    "Encrypting transaction payload...",
  )

  // Form states
  const [cardName, setCardName] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [cardExpiry, setCardExpiry] = useState("")
  const [cardCvv, setCardCvv] = useState("")
  const [upiId, setUpiId] = useState("")
  const [selectedBank, setSelectedBank] = useState("HDFC Bank")

  // Transaction details generated on success
  const [txnDetails, setTxnDetails] = useState({
    txnId: "",
    orderId: "",
    timestamp: "",
  })

  useEffect(() => {
    if (isOpen) {
      setStep("form")
      setMethod("card")
    }
  }, [isOpen])

  if (!isOpen) return null

  // Card formatting helpers
  const formatCardNumber = (val: string) => {
    const v = val.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    if (parts.length) {
      return parts.join(" ")
    } else {
      return v
    }
  }

  const formatExpiry = (val: string) => {
    const v = val.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    if (v.length >= 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4)
    }
    return v
  }

  const fillDemoData = () => {
    setCardName("Alexander Wright")
    setCardNumber("4532 8901 2345 6789")
    setCardExpiry("08/29")
    setCardCvv("882")
  }

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("processing")
    setProcStatus("Connecting to 256-bit SSL gateway...")

    setTimeout(() => {
      setProcStatus("Contacting issuing bank for authorization...")
    }, 1200)

    setTimeout(() => {
      setProcStatus("Verifying 3D-Secure authentication...")
    }, 2400)

    setTimeout(() => {
      const randomTxn = "TXN-" + Math.floor(100000 + Math.random() * 900000)
      const randomOrder = "ORD-" + Math.floor(1000 + Math.random() * 9000)
      const now = new Date().toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      })

      setTxnDetails({
        txnId: randomTxn,
        orderId: randomOrder,
        timestamp: now,
      })
      setStep("success")
      if (onSuccess) {
        onSuccess({ txnId: randomTxn, amount: amountUSD, method })
      }
    }, 3600)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-lg overflow-hidden border border-slate-200"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Header */}
        <div className="bg-[#0D1B2A] text-white px-6 py-5 flex items-center justify-between border-b-2 border-[#A07828]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#A07828]/20 flex items-center justify-center border border-[#A07828]/40">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C9A24B"
                strokeWidth="2"
              >
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
              </svg>
            </div>
            <div>
              <p className="eyebrow text-[10px] text-[#C9A24B] uppercase tracking-widest">
                Secure Checkout
              </p>
              <h3 className="font-serif font-bold text-base text-white">
                Demo Payment Gateway
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/40 hover:text-white transition-colors p-1 rounded hover:bg-white/10"
            aria-label="Close"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Order Summary Bar */}
        <div className="bg-[#FAFAF7] px-6 py-3.5 border-b border-slate-200 flex justify-between items-center text-sm">
          <div>
            <p className="text-xs text-slate-500 font-medium">{itemTitle}</p>
            <p className="text-xs font-semibold text-slate-800">
              Stars, Stripes & Wild India 2027
            </p>
          </div>
          <div className="text-right">
            <span className="text-xs text-slate-500 block">Total Amount</span>
            <span className="font-serif text-lg font-bold text-[#A07828]">
              US$ {amountUSD.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {step === "form" && (
            <div>
              {/* Payment Method Selector */}
              <div className="flex gap-2 mb-6 p-1 bg-slate-100 rounded-md">
                <button
                  type="button"
                  onClick={() => setMethod("card")}
                  className={`flex-1 py-2 px-3 text-xs font-semibold rounded transition-all flex items-center justify-center gap-2 ${
                    method === "card"
                      ? "bg-white text-[#0D1B2A] shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <CreditCardIcon className="w-4 h-4" /> Card
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setMethod("upi")}
                  className={`flex-1 py-2 px-3 text-xs font-semibold rounded transition-all flex items-center justify-center gap-2 ${
                    method === "upi"
                      ? "bg-white text-[#0D1B2A] shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <PhoneQrIcon className="w-4 h-4" /> UPI / QR
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setMethod("netbanking")}
                  className={`flex-1 py-2 px-3 text-xs font-semibold rounded transition-all flex items-center justify-center gap-2 ${
                    method === "netbanking"
                      ? "bg-white text-[#0D1B2A] shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <BankIcon className="w-4 h-4" /> Net Banking
                  </span>
                </button>
              </div>

              {/* CARD FORM */}
              {method === "card" && (
                <form onSubmit={handlePay} className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Card Details
                    </label>
                    <button
                      type="button"
                      onClick={fillDemoData}
                      className="text-[11px] font-semibold text-[#A07828] hover:underline flex items-center gap-1"
                    >
                      <span className="flex items-center gap-1">
                        <SparklesIcon className="w-3.5 h-3.5 text-[#A07828]" />{" "}
                        Auto-Fill Demo Card
                      </span>
                    </button>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-600 mb-1">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexander Wright"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-[#A07828] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-600 mb-1">
                      Card Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        maxLength={19}
                        placeholder="4532 8901 2345 6789"
                        value={cardNumber}
                        onChange={(e) =>
                          setCardNumber(formatCardNumber(e.target.value))
                        }
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-[#A07828] outline-none font-mono"
                      />
                      <div className="absolute right-3 top-2.5 text-xs text-slate-400 font-bold">
                        VISA / MC
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-600 mb-1">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={5}
                        placeholder="MM/YY"
                        value={cardExpiry}
                        onChange={(e) =>
                          setCardExpiry(formatExpiry(e.target.value))
                        }
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-[#A07828] outline-none font-mono text-center"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-600 mb-1">
                        CVV / CVC
                      </label>
                      <input
                        type="password"
                        required
                        maxLength={4}
                        placeholder="•••"
                        value={cardCvv}
                        onChange={(e) =>
                          setCardCvv(e.target.value.replace(/\D/g, ""))
                        }
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-[#A07828] outline-none font-mono text-center"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 mt-2 bg-[#A07828] hover:bg-[#7A5C1E] text-white font-semibold text-xs tracking-widest uppercase rounded shadow transition-all flex items-center justify-center gap-2"
                  >
                    <span className="flex items-center gap-2">
                      <LockIcon className="w-4 h-4" /> Pay US${" "}
                      {amountUSD.toLocaleString()}
                    </span>
                  </button>
                </form>
              )}

              {/* UPI FORM */}
              {method === "upi" && (
                <form onSubmit={handlePay} className="space-y-4 text-center">
                  <div className="bg-slate-50 p-4 rounded border border-slate-200 flex flex-col items-center gap-3">
                    <p className="text-xs text-slate-600 font-medium">
                      Scan QR code using Google Pay, PhonePe, or Paytm
                    </p>
                    <div className="p-3 bg-white border border-slate-300 rounded shadow-sm">
                      <svg
                        width="120"
                        height="120"
                        viewBox="0 0 100 100"
                        className="fill-slate-800"
                      >
                        <rect
                          x="0"
                          y="0"
                          width="30"
                          height="30"
                          fill="#0D1B2A"
                        />
                        <rect x="5" y="5" width="20" height="20" fill="#FFF" />
                        <rect
                          x="10"
                          y="10"
                          width="10"
                          height="10"
                          fill="#A07828"
                        />
                        <rect
                          x="70"
                          y="0"
                          width="30"
                          height="30"
                          fill="#0D1B2A"
                        />
                        <rect x="75" y="5" width="20" height="20" fill="#FFF" />
                        <rect
                          x="80"
                          y="10"
                          width="10"
                          height="10"
                          fill="#A07828"
                        />
                        <rect
                          x="0"
                          y="70"
                          width="30"
                          height="30"
                          fill="#0D1B2A"
                        />
                        <rect x="5" y="75" width="20" height="20" fill="#FFF" />
                        <rect
                          x="10"
                          y="80"
                          width="10"
                          height="10"
                          fill="#A07828"
                        />
                        <rect
                          x="40"
                          y="10"
                          width="20"
                          height="10"
                          fill="#0D1B2A"
                        />
                        <rect
                          x="40"
                          y="30"
                          width="30"
                          height="20"
                          fill="#0D1B2A"
                        />
                        <rect
                          x="10"
                          y="40"
                          width="20"
                          height="20"
                          fill="#0D1B2A"
                        />
                        <rect
                          x="40"
                          y="70"
                          width="20"
                          height="20"
                          fill="#0D1B2A"
                        />
                        <rect
                          x="70"
                          y="40"
                          width="20"
                          height="30"
                          fill="#0D1B2A"
                        />
                      </svg>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">
                      UPI ID: stars.expedition@upi
                    </span>
                  </div>

                  <div className="relative my-3">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-slate-200"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-slate-400 font-semibold">
                        Or enter VPA
                      </span>
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="username@upi"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-[#A07828] outline-none text-center"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#A07828] hover:bg-[#7A5C1E] text-white font-semibold text-xs tracking-widest uppercase rounded shadow transition-all"
                  >
                    Pay via UPI (US$ {amountUSD.toLocaleString()})
                  </button>
                </form>
              )}

              {/* NET BANKING FORM */}
              {method === "netbanking" && (
                <form onSubmit={handlePay} className="space-y-4">
                  <p className="text-xs text-slate-600 font-medium">
                    Select your preferred bank to log in
                  </p>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      "HDFC Bank",
                      "ICICI Bank",
                      "State Bank of India",
                      "Axis Bank",
                      "Kotak Mahindra",
                    ].map((bank) => (
                      <button
                        key={bank}
                        type="button"
                        onClick={() => setSelectedBank(bank)}
                        className={`p-3 text-xs font-medium rounded border text-left transition-all ${
                          selectedBank === bank
                            ? "border-[#A07828] bg-[#FBF3E0] text-[#0D1B2A] font-semibold"
                            : "border-slate-200 text-slate-700 hover:border-slate-300"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <BankIcon className="w-4 h-4 text-[#A07828]" /> {bank}
                        </span>
                      </button>
                    ))}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 mt-4 bg-[#A07828] hover:bg-[#7A5C1E] text-white font-semibold text-xs tracking-widest uppercase rounded shadow transition-all"
                  >
                    Proceed to {selectedBank}
                  </button>
                </form>
              )}

              <p className="text-[11px] text-slate-400 text-center mt-4">
                <span className="inline-flex items-center gap-1">
                  <LockIcon className="w-3 h-3 text-slate-400 inline" /> 256-Bit
                  SSL Encrypted Demo Gateway. No real funds charged.
                </span>
              </p>
            </div>
          )}

          {step === "processing" && (
            <div className="py-12 text-center space-y-5">
              <div className="relative w-16 h-16 mx-auto">
                <div className="w-16 h-16 rounded-full border-4 border-slate-100 border-t-[#A07828] animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-[#A07828]">
                  SSL
                </div>
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-slate-800">
                  Processing Payment...
                </h4>
                <p className="text-xs text-slate-500 mt-1 font-mono">
                  {procStatus}
                </p>
              </div>
              <div className="w-48 mx-auto bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#A07828] h-full animate-pulse w-3/4"></div>
              </div>
            </div>
          )}

          {step === "success" && (
            <div className="py-4 text-center space-y-5">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <h4 className="font-serif text-2xl font-bold text-[#0D1B2A]">
                  Payment Successful!
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Your reservation deposit has been authorized and confirmed.
                </p>
              </div>

              {/* Receipt Box */}
              <div className="bg-[#FAFAF7] border border-slate-200 rounded p-4 text-left space-y-2 text-xs">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Transaction ID:</span>
                  <span className="font-mono font-bold text-slate-800">
                    {txnDetails.txnId}
                  </span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Order Ref:</span>
                  <span className="font-mono font-semibold text-slate-800">
                    {txnDetails.orderId}
                  </span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Amount Paid:</span>
                  <span className="font-semibold text-emerald-700">
                    US$ {amountUSD.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Date:</span>
                  <span className="text-slate-700">{txnDetails.timestamp}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() =>
                    alert(`Receipt downloaded for ${txnDetails.txnId}`)
                  }
                  className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded transition-all"
                >
                  <span className="flex items-center justify-center gap-2">
                    <FileTextIcon className="w-4 h-4 text-slate-600" /> Download
                    Receipt (PDF)
                  </span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-3 bg-[#A07828] hover:bg-[#7A5C1E] text-white text-xs font-semibold uppercase tracking-widest rounded transition-all"
                >
                  Return to Expedition Page
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
