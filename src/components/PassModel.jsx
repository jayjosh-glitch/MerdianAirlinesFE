import { usePassenger } from "../hooks/usePassenger"
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const PassModel = ({ setaddpass }) => {

    const [selectedPassenger, setSelectedPassenger] = useState(null);
    const { GetPassenger, isLoading, error, } = usePassenger()

    const navigate = useNavigate()

    const handlecontinue = async (selectedPassenger) => {
        setaddpass(false)

        navigate("/bookingform", {
            state: {
                passenger: selectedPassenger
            }
        });
        console.log("Navigating to booking form");
    }

    return (
        <>
            <main>
                <section>
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

                        <div className="w-full max-w-2xl rounded-xl bg-white shadow-2xl">

                            {/* Header */}
                            <div className="border-b px-6 py-5">
                                <h2 className="text-2xl font-bold text-gray-800">
                                    Confirm Passenger
                                </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    Select a passenger to continue with your booking.
                                </p>
                            </div>

                            {/* Passenger List */}
                            <div className="max-h-[400px] overflow-y-auto p-6 space-y-4">

                                {GetPassenger.length > 0 ? (
                                    GetPassenger.map((p) => (

                                        <div
                                            key={p.passengerID}
                                            onClick={() => setSelectedPassenger(p)}
                                            className={`cursor-pointer rounded-lg border p-4 transition-all duration-200
                                ${selectedPassenger?.passengerID === p.passengerID
                                                    ? "border-blue-600 bg-blue-50 ring-2 ring-blue-500"
                                                    : "border-gray-200 hover:border-blue-400 hover:shadow-md"
                                                }`}
                                        >

                                            <div className="flex items-center gap-4">

                                                {/* Radio */}
                                                <input
                                                    type="radio"
                                                    checked={selectedPassenger?.passengerID === p.passengerID}
                                                    readOnly
                                                    className="h-5 w-5 accent-blue-600"
                                                />

                                                {/* Avatar */}
                                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                                                    {p.pFirstName.charAt(0)}
                                                </div>

                                                {/* Details */}
                                                <div>
                                                    <h3 className="font-semibold text-gray-800">
                                                        {p.pFirstName} {p.pLastName}
                                                    </h3>

                                                    <p className="text-sm text-gray-500">
                                                        Passenger ID : {p.passengerID}
                                                    </p>
                                                </div>

                                            </div>

                                        </div>

                                    ))
                                ) : (
                                    <div className="rounded-lg border border-dashed border-gray-300 py-10 text-center">

                                        <p className="text-lg font-semibold text-gray-700">
                                            No passengers found
                                        </p>

                                        <p className="mt-2 text-sm text-gray-500">
                                            Please add passengers first before booking.
                                        </p>

                                    </div>
                                )}

                            </div>

                            {/* Footer */}
                            <div className="flex justify-end gap-3 border-t px-6 py-4">

                                <button
                                    onClick={() => {
                                        setSelectedPassenger(null);
                                        setaddpass(false)
                                    }}
                                    className="rounded-lg border border-gray-300 px-5 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    Cancel
                                </button>

                                <button
                                    disabled={!selectedPassenger}
                                    onClick={() => {
                                        console.log(selectedPassenger);
                                        handlecontinue(selectedPassenger)

                                    }}
                                    className={`rounded-lg px-5 py-2 font-medium text-white transition
                        ${selectedPassenger
                                            ? "bg-blue-600 hover:bg-blue-700"
                                            : "cursor-not-allowed bg-gray-400"
                                        }`}
                                >
                                    Continue
                                </button>

                            </div>

                        </div>

                    </div>

                    {isLoading && (
                        <div className="flex flex-col items-center justify-center py-20">
                            <div className="w-8 h-8 rounded-full border-[3px] border-gray-100 border-t-[#0F2C5C] animate-spin mb-3" />
                            <p className="text-sm text-gray-400">Loading bookings...</p>
                        </div>
                    )}

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
                </section>
            </main>
        </>
    )
}


export default PassModel




