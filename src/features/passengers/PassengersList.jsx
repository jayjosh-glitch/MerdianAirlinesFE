import { useContext } from "react"
import AuthContext from "../../context/AuthContext"
import AuthNavbar from "../../components/AuthNavbar"
import Footer from "../../components/Footer"
import { usePassenger } from "../../hooks/usePassenger"
import { useNavigate } from "react-router-dom"

const PassengersList = () => {
    
    const { currentuser }                    = useContext(AuthContext)
    const { GetPassenger, error, isLoading } = usePassenger()
    const navigate = useNavigate()

    const handleadd = () => {
       
        navigate('/addpaseenger')
    }
    
    return (
        <>
            <AuthNavbar user={currentuser} />

            <main className="min-h-screen bg-gray-50">
                <section className="px-6 py-8">
                    <div className="max-w-4xl mx-auto">

                        {/* ── HEADER ─────────────────────────────── */}
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h2 className="text-xl font-medium text-gray-900">
                                    My Passengers
                                </h2>
                                <p className="text-sm text-gray-400 mt-0.5">
                                    Saved traveller profiles for quick booking
                                </p>
                            </div>
                            <button className="bg-[#0F2C5C] hover:bg-[#1A3F7A] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors flex items-center gap-2" onClick={handleadd}>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M12 5v14M5 12h14"/>
                                </svg>
                                Add passenger
                            </button>
                        </div>

                        {/* ── LOADING ────────────────────────────── */}
                        {isLoading && (
                            <div className="flex flex-col items-center justify-center py-20">
                                <div className="w-8 h-8 rounded-full border-[3px] border-gray-100 border-t-[#0F2C5C] animate-spin mb-3"/>
                                <p className="text-sm text-gray-400">Loading passengers...</p>
                            </div>
                        )}

                        {/* ── ERROR ──────────────────────────────── */}
                        {error && !isLoading && (
                            <div className="bg-red-50 border border-red-100 rounded-xl p-4 flex items-start gap-3">
                                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-red-700">
                                        Failed to load passengers
                                    </p>
                                    <p className="text-xs text-red-400 mt-0.5">{error}</p>
                                    {/* <button
                                        onClick={() => window.location.reload()}
                                        className="text-xs text-red-500 font-medium hover:underline mt-2"
                                    >
                                        Try again
                                    </button> */}
                                </div>
                            </div>
                        )}

                        {/* ── EMPTY STATE ────────────────────────── */}
                        {!isLoading && !error && GetPassenger.length === 0 && (
                            <div className="text-center py-16 bg-white border border-gray-100 rounded-2xl">
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-7 h-7 text-gray-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
                                    </svg>
                                </div>
                                <p className="text-sm font-medium text-gray-500">
                                    No passengers yet
                                </p>
                                <p className="text-xs text-gray-300 mt-1">
                                    Add a passenger to book flights faster
                                </p>
                            </div>
                        )}

                        {/* ── PASSENGERS LIST ────────────────────── */}
                        {!isLoading && !error && GetPassenger.length > 0 && (
                            <div className="space-y-3">
                                {GetPassenger.map((p) => (
                                    <div
                                        key={p.passengerID}
                                        className="bg-white border border-gray-100 rounded-xl p-5 flex items-center justify-between hover:shadow-sm transition-shadow"
                                    >
                                        {/* Left — avatar + info */}
                                        <div className="flex items-center gap-4">
                                            {/* Avatar */}
                                            <div className="w-10 h-10 bg-[#0F2C5C]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                <span className="text-sm font-medium text-[#0F2C5C]">
                                                    {p.pFirstName?.charAt(0)?.toUpperCase()}
                                                </span>
                                            </div>
                                            {/* Info */}
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">
                                                    {p.pFirstName} {p.pLastName}
                                                </p>
                                                <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                                                    <span className="text-xs text-gray-400">
                                                        {p.pEmail}
                                                    </span>
                                                    {p.pPassportNumber && (
                                                        <>
                                                            <span className="text-gray-200">·</span>
                                                            <span className="text-xs text-gray-400">
                                                                {p.pPassportNumber}
                                                            </span>
                                                        </>
                                                    )}
                                                    {p.pGender && (
                                                        <>
                                                            <span className="text-gray-200">·</span>
                                                            <span className="text-xs text-gray-400">
                                                                {p.pGender}
                                                            </span>
                                                        </>
                                                    )}
                                                    {p.pCity && p.pCountry && (
                                                        <>
                                                            <span className="text-gray-200">·</span>
                                                            <span className="text-xs text-gray-400">
                                                                {p.pCity}, {p.pCountry}
                                                            </span>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right — actions */}
                                        <div className="flex items-center gap-2 flex-shrink-0">
                                            <button className="text-xs text-[#0F2C5C] border border-[#0F2C5C]/20 hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-colors">
                                                Edit
                                            </button>
                                            <button className="text-xs text-red-400 border border-red-100 hover:bg-red-50 px-3 py-1.5 rounded-lg transition-colors">
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default PassengersList
