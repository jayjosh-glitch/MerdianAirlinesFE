import { useState } from "react"
import AuthNavbar from "../../components/AuthNavbar"
import Footer from "../../components/Footer"

const STATUS_COLORS = {
    Confirmed: "bg-green-50 text-green-600 border-green-100",
    Pending:   "bg-amber-50 text-amber-600 border-amber-100",
    Cancelled: "bg-red-50 text-red-400 border-red-100",
}

const BookingsPage = ({ user }) => {
    const [activeFilter, setActiveFilter] = useState("All")

    const mockBookings = [
        {
            id: 1,
            ref: "MR-BK-00012",
            flight: "INUK-100",
            from: "Mumbai",
            to: "London",
            date: "1 Aug 2026",
            boarding: "20:45",
            seat: "E1",
            class: "Economy",
            passenger: "Tony Stark",
            status: "Confirmed",
            amount: 49560,
        },
        {
            id: 2,
            ref: "MR-BK-00013",
            flight: "INUE-200",
            from: "Mumbai",
            to: "Dubai",
            date: "5 Aug 2026",
            boarding: "03:00",
            seat: "E4",
            class: "Economy",
            passenger: "Pepper Potts",
            status: "Pending",
            amount: 21240,
        },
        {
            id: 3,
            ref: "MR-BK-00009",
            flight: "INSG-300",
            from: "Mumbai",
            to: "Singapore",
            date: "15 Jul 2026",
            boarding: "06:00",
            seat: "B2",
            class: "Business",
            passenger: "Tony Stark",
            status: "Cancelled",
            amount: 94400,
        },
    ]

    const filters = ["All", "Confirmed", "Pending", "Cancelled"]

    const filtered = activeFilter === "All"
        ? mockBookings
        : mockBookings.filter(b => b.status === activeFilter)

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <AuthNavbar user={user} />

            <section className="px-6 py-8">
                <div className="max-w-4xl mx-auto">

                    {/* Header */}
                    <div className="mb-6">
                        <h1 className="text-xl font-medium text-gray-900">My Bookings</h1>
                        <p className="text-sm text-gray-400 mt-0.5">All your flight bookings in one place</p>
                    </div>

                    {/* Filters */}
                    <div className="flex gap-2 mb-5">
                        {filters.map((f) => (
                            <button
                                key={f}
                                onClick={() => setActiveFilter(f)}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                                    activeFilter === f
                                        ? "bg-[#0F2C5C] text-white border-[#0F2C5C]"
                                        : "text-gray-500 border-gray-100 hover:border-[#0F2C5C] hover:text-[#0F2C5C] bg-white"
                                }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    {/* Bookings list */}
                    {filtered.length === 0 ? (
                        <div className="text-center py-16 bg-white border border-gray-100 rounded-2xl">
                            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-3">
                                <svg className="w-7 h-7 text-gray-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2"/>
                                </svg>
                            </div>
                            <p className="text-sm font-medium text-gray-500">No bookings found</p>
                            <p className="text-xs text-gray-300 mt-1">Your bookings will appear here</p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {filtered.map((b) => (
                                <div key={b.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-sm transition-shadow">

                                    {/* Top row */}
                                    <div className="p-5">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-sm font-medium text-gray-900">{b.ref}</span>
                                                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${STATUS_COLORS[b.status]}`}>
                                                        {b.status}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-gray-400">{b.passenger} · {b.class} · Seat {b.seat}</p>
                                            </div>
                                            <p className="text-base font-medium text-[#0F2C5C]">₹{b.amount.toLocaleString()}</p>
                                        </div>

                                        {/* Flight route */}
                                        <div className="flex items-center gap-4">
                                            <div>
                                                <p className="text-lg font-medium text-gray-900">{b.from}</p>
                                                <p className="text-xs text-gray-400">Boarding {b.boarding}</p>
                                            </div>
                                            <div className="flex-1 flex items-center gap-2">
                                                <div className="flex-1 h-px bg-gray-100"/>
                                                <span className="text-xs text-[#0F2C5C] bg-blue-50 px-2 py-0.5 rounded font-medium">{b.flight}</span>
                                                <div className="flex-1 h-px bg-gray-100"/>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-lg font-medium text-gray-900">{b.to}</p>
                                                <p className="text-xs text-gray-400">{b.date}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom actions */}
                                    <div className="border-t border-gray-50 px-5 py-3 flex items-center justify-between bg-gray-50/50">
                                        <button className="text-xs text-[#0F2C5C] font-medium hover:underline flex items-center gap-1">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                                <circle cx="12" cy="12" r="3"/>
                                            </svg>
                                            View details
                                        </button>
                                        <div className="flex gap-2">
                                            {b.status === "Pending" && (
                                                <button className="text-xs bg-[#0F2C5C] text-white px-3 py-1.5 rounded-lg hover:bg-[#1A3F7A] transition-colors">
                                                    Complete payment
                                                </button>
                                            )}
                                            {b.status === "Confirmed" && (
                                                <button className="text-xs text-red-400 border border-red-100 hover:bg-red-50 px-3 py-1.5 rounded-lg transition-colors">
                                                    Cancel booking
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default BookingsPage
