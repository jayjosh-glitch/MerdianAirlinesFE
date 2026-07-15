import { useContext } from "react"
import AuthContext from "../../context/AuthContext"
import AuthNavbar from "../../components/AuthNavbar"

const BookingForm = () => {

    const { currentuser } = useContext(AuthContext)

    return (
        <>
            <AuthNavbar user={currentuser} />
            <main className="min-h-screen bg-gray-100 py-10 px-5">

    <section className="max-w-5xl mx-auto">

        {/* Booking Steps */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">

            <div className="flex items-center justify-center">

                <div className="flex items-center">

                    <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold">
                            1
                        </div>
                        <p className="mt-2 font-semibold text-blue-900">
                            Booking
                        </p>
                    </div>


                    <div className="w-24 h-1 bg-gray-300 mx-4"></div>


                    <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center font-bold">
                            2
                        </div>
                        <p className="mt-2 text-gray-500">
                            Payment
                        </p>
                    </div>


                    <div className="w-24 h-1 bg-gray-300 mx-4"></div>


                    <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center font-bold">
                            3
                        </div>
                        <p className="mt-2 text-gray-500">
                            Confirmation
                        </p>
                    </div>

                </div>

            </div>

        </div>



        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-md p-8">


            {/* Flight Information */}

            <div className="mb-8">

                <h2 className="text-xl font-bold text-gray-800 mb-5">
                    Flight Information
                </h2>


                <div className="grid grid-cols-2 gap-5 text-gray-700">

                    <p>
                        <span className="font-semibold">
                            Flight Number:
                        </span>
                    </p>

                    <p>
                        <span className="font-semibold">
                            Source:
                        </span>
                    </p>

                    <p>
                        <span className="font-semibold">
                            Destination:
                        </span>
                    </p>

                    <p>
                        <span className="font-semibold">
                            Departure Date:
                        </span>
                    </p>

                    <p>
                        <span className="font-semibold">
                            TakeOff Time:
                        </span>
                    </p>

                    <p>
                        <span className="font-semibold">
                            Boarding Time:
                        </span>
                    </p>

                    <p>
                        <span className="font-semibold">
                            Seat Number:
                        </span>
                    </p>

                </div>

            </div>



            <hr className="my-8"/>



            {/* Passenger Details */}

            <div className="mb-8">

                <h2 className="text-xl font-bold text-gray-800 mb-5">
                    Passenger Details
                </h2>


                <div className="grid grid-cols-2 gap-5 text-gray-700">

                    <p>Full Name:</p>
                    <p>Passport Number:</p>
                    <p>Address:</p>
                    <p>City:</p>
                    <p>State:</p>
                    <p>Country:</p>
                    <p>Mobile Number:</p>
                    <p>Email ID:</p>
                    <p>Gender:</p>
                    <p>Date of Birth:</p>

                </div>

            </div>



            <hr className="my-8"/>



            {/* Billing Information */}

            <div>

                <h2 className="text-xl font-bold text-gray-800 mb-5">
                    Billing Information
                </h2>


                <div className="grid grid-cols-2 gap-5 text-gray-700">

                    <p>Booking Reference:</p>
                    <p>Base Fare per Person:</p>
                    <p>Tax Amount:</p>
                    <p>Tax Percentage:</p>
                    <p>Discount:</p>
                    <p>Final Amount to be Paid:</p>

                </div>

            </div>


        </div>


    </section>

</main>
        </>

    )
}

export default BookingForm