import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthNavbar from "../../components/AuthNavbar";
import BookingSteps from "../../components/BookingSteps";
import AuthContext from "../../context/AuthContext";
import { useBook } from "../../hooks/useBook";
import { savesummary } from "../../redux/SummarySlice";
import { useDispatch } from "react-redux";

const Payment = () => {

    const { currentuser } = useContext(AuthContext);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { FinalBooking } = useBook();

    const [selectedMethod, setSelectedMethod] = useState(null);

    const booking = useSelector(
        (state) => state.booking.bookingreference
    );

    if (!booking) {
        return (
            <>
                <AuthNavbar user={currentuser} />

                <main className="min-h-screen bg-gray-100 flex items-center justify-center">
                    <p className="text-gray-500">
                        No booking information found.
                    </p>
                </main>
            </>
        );
    }

    const confirmdata = {
        paymentMethodID: selectedMethod,
        bookingReference: booking.bookingReference,
    };
    
    
    const onPayNow = async () => {

        const result = await FinalBooking(confirmdata);

        if (result) {        
            console.log(result)
            dispatch(savesummary(result))
            navigate("/bookingsummary");
        }
        else {
            alert("Payment failed.");
        }
    };

    const onCancel = () => {
        navigate("/");
    };

    return (
        <>
            <AuthNavbar user={currentuser} />

            <main className="min-h-screen bg-gray-100 py-10 px-5">

                <div className="max-w-5xl mx-auto">

                    <BookingSteps currentStep={2} />

                    <div className="bg-white rounded-xl shadow-md p-8 mt-8">

                        {/* Payment Method */}

                        <h2 className="text-2xl font-bold text-[#0F2C5C] border-b pb-4 mb-6">
                            Payment Method
                        </h2>

                        <label
                            className={`flex items-center justify-between rounded-xl border-2 p-5 cursor-pointer transition-all duration-200
                            ${selectedMethod === 1
                                    ? "border-[#0F2C5C] bg-blue-50"
                                    : "border-gray-300 hover:border-[#0F2C5C]"
                                }`}
                        >

                            <div className="flex items-center gap-4">

                                <div className="text-4xl">
                                    👛
                                </div>

                                <div>

                                    <h3 className="font-semibold text-lg text-gray-800">
                                        App Wallet
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        Pay securely using your application wallet.
                                    </p>

                                </div>

                            </div>

                            <input
                                type="radio"
                                checked={selectedMethod === 1}
                                onChange={() => setSelectedMethod(1)}
                                className="w-5 h-5 accent-[#0F2C5C]"
                            />

                        </label>

                        {/* Booking Summary */}

                        <div className="mt-8 bg-gray-50 rounded-xl border p-5">

                            <div className="flex justify-between items-center">

                                <div>

                                    <p className="text-sm text-gray-500">
                                        Amount to Pay
                                    </p>

                                    <h2 className="text-3xl font-bold text-green-700 mt-1">
                                        ₹{booking.generatedBilling.finalBillAmount.toLocaleString("en-IN")}
                                    </h2>

                                </div>

                                <div className="text-right">

                                    <p className="text-sm text-gray-500">
                                        Booking Reference
                                    </p>

                                    <p className="font-semibold text-[#0F2C5C]">
                                        {booking.bookingReference}
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Buttons */}

                        <div className="mt-8 flex justify-end gap-4 border-t pt-6">

                            <button
                                type="button"
                                onClick={onCancel}
                                className="px-6 py-3 rounded-lg border border-red-500 text-red-600 font-semibold hover:bg-red-600 hover:text-white transition"
                            >
                                Cancel Booking
                            </button>

                            <button
                                type="button"
                                onClick={onPayNow}
                                disabled={!selectedMethod}
                                className={`px-6 py-3 rounded-lg font-semibold transition shadow
                                ${selectedMethod
                                        ? "bg-[#0F2C5C] text-white hover:bg-[#173a70]"
                                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    }`}
                            >
                                Pay ₹{booking.generatedBilling.finalBillAmount.toLocaleString("en-IN")}
                            </button>

                        </div>

                    </div>

                </div>

            </main>
        </>
    );
};

export default Payment;