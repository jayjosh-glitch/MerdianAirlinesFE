
import { useContext, useState, useEffect } from "react"
import AuthContext from "../../context/AuthContext"
import AuthNavbar from "../../components/AuthNavbar"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { useBook } from "../../hooks/useBook"
import BookingSteps from "../../components/BookingSteps"
import { useDispatch } from "react-redux"
import { savebookingref } from "../../redux/BookingSlice"
import { useNavigate } from "react-router-dom"

const BookingForm = () => {

    console.log("BookingForm rendered");

    const { currentuser } = useContext(AuthContext);
    const [bookinginformation, setbookinginformation] = useState(null);
    const { isLoading, error, InitialBookingRequest } = useBook();
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const flight = useSelector(
        state => state.flight.selectedFlight
    );

    console.log(flight)
    const location = useLocation();

    const passenger = location.state?.passenger;

    useEffect(() => {
        console.log("BookingForm useEffect running");
        if (!passenger || !flight) return;

        const startBooking = async () => {

            const bookingData = {
                PassengerID: passenger.passengerID,
                OperationalFlightID: flight.operationalFlightID,
                FlightID: flight.flightId,
                classid: flight.classID,
                Source: flight.source,
                Destination: flight.destination,
            };
            console.log(bookingData)
            const result = await InitialBookingRequest(bookingData);
            console.log(result)
            setbookinginformation(result);
        };
        startBooking();
    }, [passenger, flight]);

    const handlepaynow = () => {
        console.log("Inside pay now")
        console.log("bookinginformation", bookinginformation);
        dispatch(savebookingref(bookinginformation))
        navigate('/payment')
    };

    return (
        <>

            <AuthNavbar user={currentuser} />


            <main className="min-h-screen bg-gray-100 py-10 px-5">


                {isLoading && (

                    <div className="flex flex-col items-center justify-center py-20">

                        <div className="w-8 h-8 rounded-full border-[3px] border-gray-100 border-t-[#0F2C5C] animate-spin mb-3" />

                        <p className="text-sm text-gray-400">
                            Preparing your booking...
                        </p>

                    </div>

                )}



                {error && !isLoading && (

                    <div className="max-w-5xl mx-auto bg-red-50 border border-red-100 rounded-xl p-4 flex items-start gap-3">

                        <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">

                            <svg
                                className="w-4 h-4 text-red-500"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >

                                <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />

                            </svg>

                        </div>


                        <div>

                            <p className="text-sm font-medium text-red-700">
                                Failed to create booking
                            </p>


                            <p className="text-xs text-red-400 mt-0.5">
                                {error}
                            </p>


                            <button
                                onClick={() => window.location.reload()}
                                className="text-xs text-red-500 font-medium hover:underline mt-2"
                            >
                                Try again
                            </button>


                        </div>

                    </div>

                )}




                {!error && !isLoading && bookinginformation && (

                    <section className="max-w-5xl mx-auto">


                        <BookingSteps currentStep={1} />

                        <div className="bg-white rounded-xl shadow-md p-8">

                            {/* Flight Information */}

                            <div className="mb-10">

                                <h2 className="text-2xl font-bold text-[#0F2C5C] mb-6 border-b pb-3">
                                    Flight Information
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 text-gray-700">

                                    <p>
                                        <span className="font-semibold text-gray-900">Flight Number:</span>{" "}
                                        <span className="text-blue-900 font-medium">
                                            {bookinginformation.flightNumber}
                                        </span>
                                    </p>

                                    <p>
                                        <span className="font-semibold text-gray-900">Source:</span>{" "}
                                        <span className="font-medium">
                                            {bookinginformation.source}
                                        </span>
                                    </p>

                                    <p>
                                        <span className="font-semibold text-gray-900">Destination:</span>{" "}
                                        <span className="font-medium">
                                            {bookinginformation.destination}
                                        </span>
                                    </p>

                                    <p>
                                        <span className="font-semibold text-gray-900">Departure Date:</span>{" "}

                                        {
                                            bookinginformation.departureDate
                                                ? new Date(bookinginformation.departureDate).toLocaleDateString(
                                                    "en-IN",
                                                    {
                                                        day: "2-digit",
                                                        month: "long",
                                                        year: "numeric",
                                                    }
                                                )
                                                : "N/A"
                                        }

                                    </p>

                                    <p>
                                        <span className="font-semibold text-gray-900">Takeoff Time:</span>{" "}

                                        {
                                            bookinginformation.takeofftime
                                                ? new Date(bookinginformation.takeofftime).toLocaleTimeString(
                                                    "en-IN",
                                                    {
                                                        hour: "2-digit",
                                                        minute: "2-digit",
                                                    }
                                                )
                                                : "N/A"
                                        }

                                    </p>

                                    <p>
                                        <span className="font-semibold text-gray-900">Boarding Time:</span>{" "}

                                        {
                                            bookinginformation.boardingTime
                                                ? new Date(bookinginformation.boardingTime).toLocaleTimeString(
                                                    "en-IN",
                                                    {
                                                        hour: "2-digit",
                                                        minute: "2-digit",
                                                    }
                                                )
                                                : "N/A"
                                        }

                                    </p>

                                    <p>
                                        <span className="font-semibold text-gray-900">Seat Number:</span>{" "}
                                        <span className="font-bold text-lg text-green-700">
                                            {bookinginformation.seatNumber ?? "N/A"}
                                        </span>
                                    </p>

                                    <p>
                                        <span className="font-semibold text-gray-900">Booking Status:</span>{" "}
                                        <span className="font-medium text-orange-600">
                                            {bookinginformation.bookingStatus}
                                        </span>
                                    </p>

                                </div>

                            </div>

                            <hr className="my-8" />

                            {/* Passenger Details */}

                            <div className="mb-10">

                                <h2 className="text-2xl font-bold text-[#0F2C5C] mb-6 border-b pb-3">
                                    Passenger Details
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 text-gray-700">

                                    <p>
                                        <span className="font-semibold text-gray-900">Full Name:</span>{" "}
                                        <span className="font-medium">
                                            {bookinginformation.passengerDetails.pFirstName}{" "}
                                            {bookinginformation.passengerDetails.pLastName}
                                        </span>
                                    </p>

                                    <p>
                                        <span className="font-semibold text-gray-900">Passport Number:</span>{" "}
                                        <span className="font-medium">
                                            {bookinginformation.passengerDetails.pPassportNumber}
                                        </span>
                                    </p>

                                    <p>
                                        <span className="font-semibold text-gray-900">Address:</span>{" "}
                                        <span className="font-medium">
                                            {bookinginformation.passengerDetails.pAddressLine1}
                                            {bookinginformation.passengerDetails.pAddressLine2 &&
                                                `, ${bookinginformation.passengerDetails.pAddressLine2}`}
                                        </span>
                                    </p>

                                    <p>
                                        <span className="font-semibold text-gray-900">City:</span>{" "}
                                        <span className="font-medium">
                                            {bookinginformation.passengerDetails.pCity}
                                        </span>
                                    </p>

                                    <p>
                                        <span className="font-semibold text-gray-900">State:</span>{" "}
                                        <span className="font-medium">
                                            {bookinginformation.passengerDetails.pState}
                                        </span>
                                    </p>

                                    <p>
                                        <span className="font-semibold text-gray-900">Country:</span>{" "}
                                        <span className="font-medium">
                                            {bookinginformation.passengerDetails.pCountry}
                                        </span>
                                    </p>

                                    <p>
                                        <span className="font-semibold text-gray-900">Mobile Number:</span>{" "}
                                        <span className="font-medium">
                                            {bookinginformation.passengerDetails.pPhone || "N/A"}
                                        </span>
                                    </p>

                                    <p>
                                        <span className="font-semibold text-gray-900">Email ID:</span>{" "}
                                        <span className="font-medium break-all">
                                            {bookinginformation.passengerDetails.pEmail}
                                        </span>
                                    </p>

                                    <p>
                                        <span className="font-semibold text-gray-900">Gender:</span>{" "}
                                        <span className="font-medium">
                                            {bookinginformation.passengerDetails.pGender}
                                        </span>
                                    </p>

                                    <p>
                                        <span className="font-semibold text-gray-900">Date of Birth:</span>{" "}

                                        {
                                            bookinginformation.passengerDetails.pDateOfBirth
                                                ? new Date(
                                                    bookinginformation.passengerDetails.pDateOfBirth
                                                ).toLocaleDateString("en-IN", {
                                                    day: "2-digit",
                                                    month: "long",
                                                    year: "numeric",
                                                })
                                                : "N/A"
                                        }

                                    </p>

                                </div>

                            </div>

                            <hr className="my-8" />

                            {/* Billing Information */}

                            <div>

                                <h2 className="text-2xl font-bold text-[#0F2C5C] mb-6 border-b pb-3">
                                    Billing Information
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 text-gray-700">

                                    <p>
                                        <span className="font-semibold text-gray-900">Booking Reference:</span>{" "}
                                        <span className="font-medium">
                                            {bookinginformation.generatedBilling.bookingReference}
                                        </span>
                                    </p>

                                    <p>
                                        <span className="font-semibold text-gray-900">Base Fare per Person:</span>{" "}
                                        <span className="font-semibold text-lg text-green-700">
                                            ₹{bookinginformation.generatedBilling.baseFare.toLocaleString("en-IN")}
                                        </span>
                                    </p>

                                    <p>
                                        <span className="font-semibold text-gray-900">Tax Amount:</span>{" "}
                                        <span className="font-medium">
                                            ₹{bookinginformation.generatedBilling.taxAmount.toLocaleString("en-IN")}
                                        </span>
                                    </p>

                                    <p>
                                        <span className="font-semibold text-gray-900">Tax Percentage:</span>{" "}
                                        <span className="font-medium">
                                            {bookinginformation.generatedBilling.taxRatePercent}%
                                        </span>
                                    </p>

                                    <p>
                                        <span className="font-semibold text-gray-900">Discount:</span>{" "}
                                        <span className="font-medium">
                                            ₹{bookinginformation.generatedBilling.appliedDiscount.toLocaleString("en-IN")}
                                        </span>
                                    </p>

                                    <p>
                                        <span className="font-semibold text-gray-900">
                                            Final Amount to be Paid:
                                        </span>{" "}
                                        <span className="text-xl font-bold text-green-700">
                                            ₹{bookinginformation.generatedBilling.finalBillAmount.toLocaleString("en-IN")}
                                        </span>
                                    </p>

                                </div>

                                <div className="mt-12 flex flex-col sm:flex-row justify-end gap-4 border-t pt-8">

                                    <button
                                        type="button"
                                        className="px-8 py-3 rounded-lg border-2 border-red-600 text-red-600 font-semibold hover:bg-red-600 hover:text-white transition-all duration-200"
                                    >
                                        Cancel Booking
                                    </button>

                                    <button
                                        type="button"
                                        className="px-8 py-3 rounded-lg bg-[#0F2C5C] text-white font-semibold shadow-md hover:bg-[#123a79] transition-all duration-200"
                                        onClick={() => { handlepaynow(bookinginformation) }}>
                                        Pay Now
                                    </button>
                                </div>

                            </div>


                        </div>

                    </section>

                )}

            </main>
           
        </>
    );
};


export default BookingForm;