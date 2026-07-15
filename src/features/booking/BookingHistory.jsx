import { useContext, useState } from "react"
import AuthContext from "../../context/AuthContext"
import AuthNavbar from "../../components/AuthNavbar"
import Footer from "../../components/Footer"
import { useBook } from "../../hooks/useBook"

const STATUS_COLORS = {

    Confirmed: "bg-green-50 text-green-600 border-green-100",
    Pending: "bg-amber-50 text-amber-600 border-amber-100",
    Cancelled: "bg-red-50 text-red-400 border-red-100",
}

const BookingHistory = () => {

    const { currentuser } = useContext(AuthContext)
    const { GetBookingList, isLoading, error } = useBook()
    const [showdetails, setshowdetails] = useState(false)
    const [selectedbooking, setselectedbooking] = useState([])

    const handleshowdetails = (booking) => {
        if (showdetails == false) {
            setshowdetails(true)
        }else{
            setshowdetails(false)
        }
        setselectedbooking(booking)
        console.log(booking)
    }

    return (
        <>
            <AuthNavbar user={currentuser} />

            <main className="min-h-screen bg-gray-50">
                <section className="px-6 py-8">
                    <div className="max-w-4xl mx-auto">

                        {/* ── HEADER ─────────────────────────────── */}
                        <div className="mb-6">
                            <h2 className="text-xl font-medium text-gray-900">
                                My Bookings
                            </h2>
                            <p className="text-sm text-gray-400 mt-0.5">
                                All your flight bookings in one place
                            </p>
                        </div>

                        {/* ── LOADING ────────────────────────────── */}
                        {isLoading && (
                            <div className="flex flex-col items-center justify-center py-20">
                                <div className="w-8 h-8 rounded-full border-[3px] border-gray-100 border-t-[#0F2C5C] animate-spin mb-3" />
                                <p className="text-sm text-gray-400">Loading bookings...</p>
                            </div>
                        )}

                        {/* ── ERROR ──────────────────────────────── */}
                        {error && !isLoading && (
                            <div className="bg-red-50 border border-red-100 rounded-xl p-4 flex items-start gap-3">
                                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-red-700">Failed to load bookings</p>
                                    <p className="text-xs text-red-400 mt-0.5">{error}</p>
                                    <button
                                        onClick={() => window.location.reload()}
                                        className="text-xs text-red-500 font-medium hover:underline mt-2"
                                    >
                                        Try again
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* ── EMPTY STATE ────────────────────────── */}
                        {!isLoading && !error && GetBookingList.length === 0 && (
                            <div className="text-center py-16 bg-white border border-gray-100 rounded-2xl">
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-7 h-7 text-gray-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" />
                                    </svg>
                                </div>
                                <p className="text-sm font-medium text-gray-500">No bookings yet</p>
                                <p className="text-xs text-gray-300 mt-1">Your flight bookings will appear here</p>
                            </div>
                        )}

                        {/* ── BOOKINGS LIST ──────────────────────── */}
                        {!isLoading && !error && GetBookingList.length > 0 && (
                            <div className="space-y-3">
                                {GetBookingList.map((booking) => (
                                    <div
                                        key={booking.bookingID}
                                        className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-sm transition-shadow"
                                    >
                                        {/* Top section */}
                                        <div className="p-5">

                                            {/* Reference + status */}
                                            <div className="flex items-start justify-between mb-4">
                                                <div>
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="text-sm font-medium text-gray-900">
                                                            {booking.bookingReference}
                                                        </span>
                                                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${STATUS_COLORS[booking.bookingStatus] || "bg-gray-50 text-gray-500 border-gray-100"}`}>
                                                            {booking.bookingStatus}
                                                        </span>
                                                    </div>
                                                    <p className="text-xs text-gray-400">
                                                        {booking.passengerDetails?.pFirstName} {booking.passengerDetails?.pLastName}
                                                        {booking.seatClass && ` · ${booking.seatClass}`}
                                                        {booking.seatNumber && ` · Seat ${booking.seatNumber}`}
                                                    </p>
                                                </div>
                                                <p className="text-base font-medium text-[#0F2C5C]">
                                                    ₹{booking.billing?.finalBillAmount?.toLocaleString()}
                                                </p>
                                            </div>

                                            {/* Flight route */}
                                            <div className="flex items-center gap-4">
                                                <div>
                                                    <p className="text-lg font-medium text-gray-900">
                                                        {booking.source}
                                                    </p>
                                                    <p className="text-xs text-gray-400">
                                                        Boarding {new Date(booking.boardingTime).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}
                                                    </p>
                                                </div>

                                                <div className="flex-1 flex items-center gap-2">
                                                    <div className="flex-1 h-px bg-gray-100" />
                                                    <span className="text-xs text-[#0F2C5C] bg-blue-50 px-2 py-0.5 rounded font-medium">
                                                        {booking.flightNumber}
                                                    </span>
                                                    <div className="flex-1 h-px bg-gray-100" />
                                                </div>

                                                <div className="text-right">
                                                    <p className="text-lg font-medium text-gray-900">
                                                        {booking.destination}
                                                    </p>
                                                    <p className="text-xs text-gray-400">
                                                        {new Date(booking.boardingTime).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bottom actions */}
                                        <div className="border-t border-gray-50 px-5 py-3 flex items-center justify-between bg-gray-50/50">
                                            <button className="text-xs text-[#0F2C5C] font-medium hover:underline flex items-center gap-1" onClick={() => { handleshowdetails(booking) }}>
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                    <circle cx="12" cy="12" r="3" />
                                                </svg>
                                                View details
                                            </button>
                                            <div className="flex gap-2">
                                                {booking.bookingStatus === "Pending" && (
                                                    <button className="text-xs bg-[#0F2C5C] text-white px-3 py-1.5 rounded-lg hover:bg-[#1A3F7A] transition-colors">
                                                        Complete payment
                                                    </button>
                                                )}
                                                {booking.bookingStatus === "Confirmed" && (
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

                        {/* vie full bookinglist */}
                        {showdetails && selectedbooking && (
                            <div className="mt10 ">
                                <div>
                                    <p>BookingID: {selectedbooking.bookingID}</p>
                                    <p>Booking Reference: {selectedbooking.bookingReference}</p>
                                    <p>Booking Status: {selectedbooking.bookingStatus}</p>
                                    <p>Boarding time: {selectedbooking.boardingTime}</p>
                                    <p>Seat ID: {selectedbooking.seatID}</p>
                                    <p>Flight ID: {selectedbooking.flightID}</p>
                                    <p>Destination: {selectedbooking.destination}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default BookingHistory
