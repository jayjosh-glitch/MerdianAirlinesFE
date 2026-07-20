
const BookingSteps = ({ currentStep = 1 }) => {

    const steps = [
        { id: 1, label: "Booking" },
        { id: 2, label: "Payment" },
        { id: 3, label: "Confirmation" },
    ];

    return (

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">

            <div className="flex items-center justify-center">

                {steps.map((step, index) => (

                    <div key={step.id} className="flex items-center">

                        <div className="flex flex-col items-center">

                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300
                                ${
                                    currentStep >= step.id
                                        ? "bg-[#0F2C5C] text-white"
                                        : "bg-gray-300 text-gray-700"
                                }`}
                            >
                                {step.id}
                            </div>

                            <p
                                className={`mt-2 font-medium
                                ${
                                    currentStep >= step.id
                                        ? "text-[#0F2C5C]"
                                        : "text-gray-500"
                                }`}
                            >
                                {step.label}
                            </p>

                        </div>

                        {index < steps.length - 1 && (

                            <div
                                className={`w-24 h-1 mx-4 rounded transition-all duration-300
                                ${
                                    currentStep > step.id
                                        ? "bg-[#0F2C5C]"
                                        : "bg-gray-300"
                                }`}
                            />

                        )}

                    </div>

                ))}

            </div>

        </div>

    );
};

export default BookingSteps;