import { useState } from "react"
import AuthNavbar from "../../components/AuthNavbar"
import Footer from "../../components/Footer"

const WalletPage = ({ user }) => {
    
    const [showTopUp, setShowTopUp]       = useState(false)
    const [showVerify, setShowVerify]     = useState(true)
    const [verified, setVerified]         = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [activeTab, setActiveTab]       = useState("All")

    const mockWallet = {
        reference: "TON-WL-003",
        balance: 900880,
        updatedAt: "2026-07-08"
    }

    const mockTransactions = [
        { id: 1, type: "Credit", reason: "TopUp",          amount: 1000000, before: 0,       after: 1000000, time: "2026-07-01T10:00:00Z", ref: null },
        { id: 2, type: "Debit",  reason: "BookingPayment", amount: 49560,   before: 1000000, after: 950440,  time: "2026-07-08T14:00:00Z", ref: "MR-BK-00012" },
        { id: 3, type: "Debit",  reason: "BookingPayment", amount: 49560,   before: 950440,  after: 900880,  time: "2026-07-08T15:00:00Z", ref: "MR-BK-00013" },
    ]

    const filtered = activeTab === "All"
        ? mockTransactions
        : mockTransactions.filter(t => t.type === activeTab)

    // ── VERIFY MODAL ─────────────────────────────────────────────
    if (showVerify && !verified) {
        return (
            <div className="min-h-screen bg-gray-50 font-sans">
                <AuthNavbar user={user} />
                <div className="flex items-center justify-center min-h-[calc(100vh-128px)] px-4">
                    <div className="bg-white border border-gray-100 rounded-2xl p-8 w-full max-w-sm shadow-sm">
                        <div className="text-center mb-6">
                            <div className="w-12 h-12 bg-[#0F2C5C] rounded-xl flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                                </svg>
                            </div>
                            <h2 className="text-base font-medium text-gray-900">Verify your identity</h2>
                            <p className="text-sm text-gray-400 mt-1">Enter your password to access your wallet</p>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="text-xs font-medium text-gray-500 uppercase tracking-wide block mb-1.5">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        className="w-full border border-gray-100 bg-gray-50 rounded-lg px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-[#0F2C5C] focus:bg-white placeholder-gray-300 transition-colors pr-10"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                            <circle cx="12" cy="12" r="3"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <button
                                onClick={() => { setVerified(true); setShowVerify(false) }}
                                className="w-full bg-[#0F2C5C] hover:bg-[#1A3F7A] text-white text-sm font-medium py-2.5 rounded-lg transition-colors"
                            >
                                Verify and access wallet
                            </button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

    // ── WALLET PAGE ───────────────────────────────────────────────
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <AuthNavbar user={user} />

            <section className="px-6 py-8">
                <div className="max-w-4xl mx-auto">

                    {/* Header */}
                    <div className="mb-6">
                        <h1 className="text-xl font-medium text-gray-900">My Wallet</h1>
                        <p className="text-sm text-gray-400 mt-0.5">Manage your Meridian wallet balance</p>
                    </div>

                    {/* Wallet card */}
                    <div className="bg-[#0F2C5C] rounded-2xl p-6 mb-6 relative overflow-hidden">
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"/>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"/>

                        <div className="relative z-10">
                            <div className="flex items-start justify-between mb-8">
                                <div>
                                    <p className="text-white/60 text-xs font-medium uppercase tracking-wide mb-1">Meridian Wallet</p>
                                    <p className="text-white font-medium text-sm">{mockWallet.reference}</p>
                                </div>
                                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4M21 12a2 2 0 0 1 0 4H5a2 2 0 0 1 0-4h16z"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex items-end justify-between">
                                <div>
                                    <p className="text-white/60 text-xs mb-1">Available balance</p>
                                    <p className="text-white text-3xl font-medium">
                                        ₹{mockWallet.balance.toLocaleString()}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setShowTopUp(true)}
                                    className="bg-[#C9943A] hover:bg-[#E8B95A] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M12 5v14M5 12h14"/>
                                    </svg>
                                    Top up
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Top Up Panel */}
                    {showTopUp && (
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-6">
                            <div className="flex items-center justify-between mb-5">
                                <h2 className="text-base font-medium text-gray-900">Add money to wallet</h2>
                                <button onClick={() => setShowTopUp(false)} className="text-gray-300 hover:text-gray-500">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M18 6 6 18M6 6l12 12"/>
                                    </svg>
                                </button>
                            </div>

                            {/* Quick amounts */}
                            <p className="text-xs text-gray-400 mb-2">Quick select</p>
                            <div className="grid grid-cols-4 gap-2 mb-4">
                                {[5000, 10000, 25000, 50000].map(amt => (
                                    <button
                                        key={amt}
                                        className="border border-gray-100 hover:border-[#0F2C5C] hover:bg-blue-50 text-sm text-gray-700 hover:text-[#0F2C5C] py-2 rounded-lg transition-colors font-medium"
                                    >
                                        ₹{amt.toLocaleString()}
                                    </button>
                                ))}
                            </div>

                            <div className="mb-4">
                                <label className="text-xs font-medium text-gray-500 uppercase tracking-wide block mb-1.5">
                                    Or enter custom amount
                                </label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">₹</span>
                                    <input
                                        type="number"
                                        placeholder="0"
                                        className="w-full border border-gray-100 bg-gray-50 rounded-lg pl-7 pr-3 py-2.5 text-sm text-gray-800 outline-none focus:border-[#0F2C5C] focus:bg-white transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => setShowTopUp(false)}
                                    className="flex-1 border border-gray-100 text-gray-500 text-sm py-2.5 rounded-lg hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                                <button className="flex-1 bg-[#0F2C5C] hover:bg-[#1A3F7A] text-white text-sm font-medium py-2.5 rounded-lg transition-colors">
                                    Add money
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Transaction history */}
                    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
                        <div className="p-5 border-b border-gray-50 flex items-center justify-between">
                            <h2 className="text-base font-medium text-gray-900">Transaction history</h2>
                            <div className="flex gap-2">
                                {["All", "Credit", "Debit"].map(tab => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                                            activeTab === tab
                                                ? "bg-[#0F2C5C] text-white"
                                                : "text-gray-400 hover:text-[#0F2C5C]"
                                        }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {filtered.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-sm text-gray-400">No transactions yet</p>
                            </div>
                        ) : (
                            <div className="divide-y divide-gray-50">
                                {filtered.map(t => (
                                    <div key={t.id} className="flex items-center justify-between px-5 py-4">
                                        <div className="flex items-center gap-3">
                                            {/* Icon */}
                                            <div className={`w-9 h-9 rounded-full flex items-center justify-center ${
                                                t.type === "Credit" ? "bg-green-50" : "bg-red-50"
                                            }`}>
                                                <svg
                                                    className={`w-4 h-4 ${t.type === "Credit" ? "text-green-500" : "text-red-400"}`}
                                                    fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                                                >
                                                    {t.type === "Credit"
                                                        ? <path d="M12 19V5M5 12l7-7 7 7"/>
                                                        : <path d="M12 5v14M5 12l7 7 7-7"/>
                                                    }
                                                </svg>
                                            </div>
                                            {/* Details */}
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">{t.reason}</p>
                                                <div className="flex items-center gap-2 mt-0.5">
                                                    <p className="text-xs text-gray-400">
                                                        {new Date(t.time).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                                                    </p>
                                                    {t.ref && (
                                                        <>
                                                            <span className="text-gray-200">·</span>
                                                            <p className="text-xs text-[#0F2C5C]">{t.ref}</p>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        {/* Amount */}
                                        <div className="text-right">
                                            <p className={`text-sm font-medium ${
                                                t.type === "Credit" ? "text-green-500" : "text-red-400"
                                            }`}>
                                                {t.type === "Credit" ? "+" : "-"}₹{t.amount.toLocaleString()}
                                            </p>
                                            <p className="text-xs text-gray-400 mt-0.5">
                                                Balance ₹{t.after.toLocaleString()}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    )
}

export default WalletPage
