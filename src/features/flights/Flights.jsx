import { useState } from "react"
import AuthNavbar from "../../components/AuthNavbar"
import Footer from "../../components/Footer"

const CLASSES = ["Economy", "Premium Economy", "Business"]
const CITIES  = ["Mumbai (BOM)", "London (LHR)", "Dubai (DXB)", "Singapore (SIN)", "New York (JFK)"]

const FlightsPage = ({ user }) => {
    const [activeTab, setActiveTab] = useState("One way")
    const [searched, setSearched]   = useState(false)

    const mockResults = [
        { id: 1, flightNo: "INUK-100", from: "Mumbai", to: "London", depart: "23:45", arrive: "05:30+1", duration: "9h 45m", stops: "Direct", economy: 42000, business: 120000 },
        { id: 2, flightNo: "INUK-102", from: "Mumbai", to: "London", depart: "06:00", arrive: "13:30", duration: "9h 30m", stops: "1 stop DXB", economy: 38000, business: 110000 },
        { id: 3, flightNo: "INUK-104", from: "Mumbai", to: "London", depart: "14:15", arrive: "22:00", duration: "9h 45m", stops: "Direct", economy: 45000, business: 125000 },
    ]

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <AuthNavbar user={user} />

            {/* ── SEARCH PANEL ─────────────────────────────── */}
            <section className="bg-[#0F2C5C] px-6 py-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-white font-medium text-xl mb-6">Search Flights</h1>

                    {/* Tabs */}
                    <div className="flex gap-2 mb-5">
                        {["One way", "Round trip"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                                    activeTab === tab
                                        ? "bg-white text-[#0F2C5C]"
                                        : "text-white/60 hover:text-white border border-white/20"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Search fields */}
                    <div className="bg-white rounded-2xl p-5">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-end">

                            {/* From */}
                            <div className="md:col-span-1">
                                <label className="text-xs text-gray-400 font-medium uppercase tracking-wide block mb-1.5">From</label>
                                <select className="w-full border border-gray-100 bg-gray-50 rounded-lg px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-[#0F2C5C] focus:bg-white transition-colors">
                                    {CITIES.map(c => <option key={c}>{c}</option>)}
                                </select>
                            </div>

                            {/* Swap icon */}
                            <div className="hidden md:flex items-end justify-center pb-1">
                                <button className="w-8 h-8 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:text-[#0F2C5C] hover:border-[#0F2C5C] transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M8 3L4 7l4 4M4 7h16M16 21l4-4-4-4M20 17H4"/>
                                    </svg>
                                </button>
                            </div>

                            {/* To */}
                            <div className="md:col-span-1">
                                <label className="text-xs text-gray-400 font-medium uppercase tracking-wide block mb-1.5">To</label>
                                <select className="w-full border border-gray-100 bg-gray-50 rounded-lg px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-[#0F2C5C] focus:bg-white transition-colors">
                                    {CITIES.map(c => <option key={c}>{c}</option>)}
                                </select>
                            </div>

                            {/* Date */}
                            <div>
                                <label className="text-xs text-gray-400 font-medium uppercase tracking-wide block mb-1.5">Departure</label>
                                <input
                                    type="date"
                                    className="w-full border border-gray-100 bg-gray-50 rounded-lg px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-[#0F2C5C] focus:bg-white transition-colors"
                                />
                            </div>

                            {/* Class */}
                            <div>
                                <label className="text-xs text-gray-400 font-medium uppercase tracking-wide block mb-1.5">Class</label>
                                <select className="w-full border border-gray-100 bg-gray-50 rounded-lg px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-[#0F2C5C] focus:bg-white transition-colors">
                                    {CLASSES.map(c => <option key={c}>{c}</option>)}
                                </select>
                            </div>

                        </div>

                        <button
                            onClick={() => setSearched(true)}
                            className="mt-4 w-full bg-[#0F2C5C] hover:bg-[#1A3F7A] text-white text-sm font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                            </svg>
                            Search flights
                        </button>
                    </div>
                </div>
            </section>

            {/* ── RESULTS ──────────────────────────────────── */}
            <section className="px-6 py-8">
                <div className="max-w-4xl mx-auto">

                    {!searched ? (
                        /* Empty state */
                        <div className="text-center py-16">
                            <div className="w-16 h-16 bg-white border border-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                    <path d="M22 16.5H2l2-9 6 4 2-7 2 7 6-4 2 9z"/>
                                </svg>
                            </div>
                            <p className="text-gray-500 font-medium text-sm">Search for available flights</p>
                            <p className="text-gray-300 text-xs mt-1">Select your origin, destination and date above</p>
                        </div>
                    ) : (
                        <>
                            {/* Results header */}
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Mumbai → London</p>
                                    <p className="text-xs text-gray-400 mt-0.5">{mockResults.length} flights available</p>
                                </div>
                                <select className="border border-gray-100 bg-white rounded-lg px-3 py-2 text-xs text-gray-600 outline-none">
                                    <option>Sort by price</option>
                                    <option>Sort by duration</option>
                                    <option>Sort by departure</option>
                                </select>
                            </div>

                            {/* Flight cards */}
                            <div className="space-y-3">
                                {mockResults.map((flight) => (
                                    <div key={flight.id} className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-sm transition-shadow">
                                        <div className="flex items-center justify-between">

                                            {/* Flight info */}
                                            <div className="flex items-center gap-8">
                                                {/* Times */}
                                                <div className="text-center">
                                                    <p className="text-lg font-medium text-gray-900">{flight.depart}</p>
                                                    <p className="text-xs text-gray-400">{flight.from}</p>
                                                </div>

                                                {/* Duration */}
                                                <div className="text-center">
                                                    <p className="text-xs text-gray-400 mb-1">{flight.duration}</p>
                                                    <div className="flex items-center gap-1">
                                                        <div className="w-2 h-2 rounded-full border-2 border-gray-300"/>
                                                        <div className="w-16 h-px bg-gray-200"/>
                                                        <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M22 16.5H2l2-9 6 4 2-7 2 7 6-4 2 9z"/>
                                                        </svg>
                                                    </div>
                                                    <p className="text-xs text-gray-400 mt-1">{flight.stops}</p>
                                                </div>

                                                {/* Arrival */}
                                                <div className="text-center">
                                                    <p className="text-lg font-medium text-gray-900">{flight.arrive}</p>
                                                    <p className="text-xs text-gray-400">{flight.to}</p>
                                                </div>

                                                {/* Flight number */}
                                                <div className="hidden md:block">
                                                    <span className="text-xs text-[#0F2C5C] bg-blue-50 px-2 py-1 rounded font-medium">
                                                        {flight.flightNo}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Price + Book */}
                                            <div className="text-right">
                                                <p className="text-xs text-gray-400 mb-0.5">Economy from</p>
                                                <p className="text-lg font-medium text-[#0F2C5C]">₹{flight.economy.toLocaleString()}</p>
                                                <button className="mt-2 bg-[#0F2C5C] hover:bg-[#1A3F7A] text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors">
                                                    Select
                                                </button>
                                            </div>

                                        </div>

                                        {/* Class pricing row */}
                                        <div className="mt-4 pt-4 border-t border-gray-50 grid grid-cols-3 gap-3">
                                            {[
                                                { label: "Economy", price: flight.economy },
                                                { label: "Premium Economy", price: Math.round(flight.economy * 1.6) },
                                                { label: "Business", price: flight.business },
                                            ].map((cls) => (
                                                <button
                                                    key={cls.label}
                                                    className="border border-gray-100 hover:border-[#0F2C5C] rounded-lg p-2.5 text-left transition-colors group"
                                                >
                                                    <p className="text-xs text-gray-400 group-hover:text-[#0F2C5C]">{cls.label}</p>
                                                    <p className="text-sm font-medium text-gray-900 mt-0.5">₹{cls.price.toLocaleString()}</p>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default FlightsPage
