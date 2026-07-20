import { useSelector } from "react-redux"
import { useContext } from "react"
import AuthContext from "../../context/AuthContext"
import AuthNavbar from "../../components/AuthNavbar"
import BookingSteps from "../../components/BookingSteps"
import { useNavigate } from "react-router-dom"

const BookingSummary = () => {

    const confirmation = useSelector(
        state => state.summary.summary
    );
    
    const navigate = useNavigate()
    const { currentuser } = useContext(AuthContext);

    return (
        <>
            <AuthNavbar user={currentuser} />
            <main className="min-h-screen bg-gray-100 py-10 px-5">

                <div className="max-w-5xl mx-auto">

                    <BookingSteps currentStep={3} />

                    {/* Success */}

                    <div className="bg-green-50 border border-green-200 rounded-xl shadow-sm p-8 mt-8">

                        <div className="flex items-center gap-5">

                            <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-3xl">
                                ✓
                            </div>

                            <div>

                                <h1 className="text-3xl font-bold text-green-700">
                                    Booking Confirmed
                                </h1>

                                <p className="text-gray-600 mt-1">
                                    Your booking has been confirmed successfully.
                                </p>

                                <div className="mt-3 flex flex-wrap gap-6">

                                    <p>
                                        <span className="font-semibold">
                                            Booking Ref:
                                        </span>{" "}
                                        {confirmation.bookingReference}
                                    </p>

                                    <p>
                                        <span className="font-semibold">
                                            Status:
                                        </span>{" "}
                                        <span className="text-green-700 font-semibold">
                                            {confirmation.bookingStatus}
                                        </span>
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>



                    {/* Flight */}

                    <div className="bg-white rounded-xl shadow-md p-8 mt-8">

                        <h2 className="text-2xl font-bold text-[#0F2C5C] border-b pb-4 mb-6">
                            Flight Information
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            <p>
                                <span className="font-semibold">Flight Number:</span>{" "}
                                {confirmation.flightNumber}
                            </p>

                            <p>
                                <span className="font-semibold">Seat Class:</span>{" "}
                                {confirmation.seatClass}
                            </p>

                            <p>
                                <span className="font-semibold">Source:</span>{" "}
                                {confirmation.source}
                            </p>

                            <p>
                                <span className="font-semibold">Destination:</span>{" "}
                                {confirmation.destination}
                            </p>

                            <p>
                                <span className="font-semibold">Seat Number:</span>{" "}
                                {confirmation.seatNumber}
                            </p>

                            <p>
                                <span className="font-semibold">Boarding Time:</span>{" "}
                                {new Date(confirmation.boardingTime).toLocaleString("en-IN", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit"
                                })}
                            </p>

                        </div>

                    </div>



                    {/* Passenger */}

                    <div className="bg-white rounded-xl shadow-md p-8 mt-8">

                        <h2 className="text-2xl font-bold text-[#0F2C5C] border-b pb-4 mb-6">
                            Passenger Information
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            <p>
                                <span className="font-semibold">Passenger:</span>{" "}
                                {confirmation.passengerDetails.pFirstName}{" "}
                                {confirmation.passengerDetails.pLastName}
                            </p>

                            <p>
                                <span className="font-semibold">Passport:</span>{" "}
                                {confirmation.passengerDetails.pPassportNumber}
                            </p>

                            <p>
                                <span className="font-semibold">Email:</span>{" "}
                                {confirmation.passengerDetails.pEmail}
                            </p>

                            <p>
                                <span className="font-semibold">Gender:</span>{" "}
                                {confirmation.passengerDetails.pGender}
                            </p>

                            <p>
                                <span className="font-semibold">Phone:</span>{" "}
                                {confirmation.passengerDetails.pPhone || "N/A"}
                            </p>

                            <p>
                                <span className="font-semibold">Country:</span>{" "}
                                {confirmation.passengerDetails.pCountry}
                            </p>

                        </div>

                    </div>



                    {/* Payment */}

                    <div className="bg-white rounded-xl shadow-md p-8 mt-8">

                        <h2 className="text-2xl font-bold text-[#0F2C5C] border-b pb-4 mb-6">
                            Payment Details
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            <p>
                                <span className="font-semibold">
                                    Payment Method:
                                </span>{" "}
                                {confirmation.payment.paymentMethod}
                            </p>

                            <p>
                                <span className="font-semibold">
                                    Payment Status:
                                </span>{" "}
                                <span className="text-green-700 font-semibold">
                                    {confirmation.payment.paymentStatus}
                                </span>
                            </p>

                            <p>
                                <span className="font-semibold">
                                    Payment Reference:
                                </span>{" "}
                                {confirmation.payment.paymentReference}
                            </p>

                            <p>
                                <span className="font-semibold">
                                    Wallet Reference:
                                </span>{" "}
                                {confirmation.payment.walletReference}
                            </p>

                            <p>
                                <span className="font-semibold">
                                    Payment Time:
                                </span>{" "}
                                {new Date(confirmation.payment.paymentTime).toLocaleString("en-IN")}
                            </p>

                            <p>
                                <span className="font-semibold">
                                    Wallet Balance:
                                </span>{" "}
                                ₹{confirmation.payment.walletBalanceAfter.toLocaleString("en-IN")}
                            </p>

                        </div>

                    </div>



                    {/* Billing */}

                    <div className="bg-white rounded-xl shadow-md p-8 mt-8">

                        <h2 className="text-2xl font-bold text-[#0F2C5C] border-b pb-4 mb-6">
                            Billing Summary
                        </h2>

                        <div className="space-y-3">

                            <div className="flex justify-between">

                                <span>Base Fare</span>

                                <span>
                                    ₹{confirmation.billing.baseFare.toLocaleString("en-IN")}
                                </span>

                            </div>

                            <div className="flex justify-between">

                                <span>Tax</span>

                                <span>
                                    ₹{confirmation.billing.taxAmount.toLocaleString("en-IN")}
                                </span>

                            </div>

                            <div className="flex justify-between">

                                <span>Discount</span>

                                <span>
                                    ₹{confirmation.billing.appliedDiscount.toLocaleString("en-IN")}
                                </span>

                            </div>

                            <hr />

                            <div className="flex justify-between text-2xl font-bold text-green-700">

                                <span>Total Paid</span>

                                <span>
                                    ₹{confirmation.billing.finalBillAmount.toLocaleString("en-IN")}
                                </span>

                            </div>

                        </div>

                    </div>



                    {/* Buttons */}

                    <div className="flex justify-end gap-4 mt-8">

                        <button
                            className="px-6 py-3 rounded-lg border border-[#0F2C5C] text-[#0F2C5C] font-semibold hover:bg-[#0F2C5C] hover:text-white transition"
                        onClick={() => {navigate('/')}}>
                            Home
                        </button>

                        <button
                            className="px-6 py-3 rounded-lg bg-[#0F2C5C] text-white font-semibold hover:bg-[#173a70] transition"
                        onClick={() => {navigate('/bookings')}}>
                            My Bookings
                        </button>

                    </div>

                </div>

            </main>
        </>
    )
}

export default BookingSummary