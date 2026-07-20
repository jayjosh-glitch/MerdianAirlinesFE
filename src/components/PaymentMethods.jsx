import { useState } from "react";
import { useNavigate } from "react-router-dom"

const paymentMethods = [
    {
        id: 1,
        name: "Wallet",
        icon: "👛",
    },
    {
        id: 1,
        name: "Credit Card",
        icon: "💳",
    },
    {
        id: 1,
        name: "Debit Card",
        icon: "💳",
    },
    {
        id: 1,
        name: "UPI",
        icon: "📱",
    },
    {
        id: 1,
        name: "Net Banking",
        icon: "🏦",
    },
];

const PaymentMethodSelector = () => {

    const [selectedMethod, setSelectedMethod] = useState(null)
    const navigate = useNavigate()

    const onPayNow = () => {
        navigate("/payment", {
            state: {
                paymentmethod: selectedMethod
            }
        });
        console.log("Navigating to booking form");
    }

    const onCancel = () => {
    }
    return (
        <div className="mt-10">

            <h2 className="text-2xl font-bold text-[#0F2C5C] mb-6 border-b pb-3">
                Payment Method
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                {paymentMethods.map((method) => (

                    <label
                        key={method.id}
                        className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all duration-200
                        ${selectedMethod === method.id
                                ? "border-[#0F2C5C] bg-blue-50"
                                : "border-gray-200 hover:border-[#0F2C5C]"
                            }`}
                    >

                        <input
                            type="radio"
                            name="paymentMethod"
                            value={method.id}
                            checked={selectedMethod === method.id}
                            onChange={() => setSelectedMethod(method.id)}
                            className="accent-[#0F2C5C]"
                        />

                        <span className="text-2xl">
                            {method.icon}
                        </span>

                        <div>
                            <p className="font-semibold text-gray-800">
                                {method.name}
                            </p>
                            {/* <p className="text-xs text-gray-500">
                                ID : {method.id}
                            </p> */}
                        </div>

                    </label>

                ))}

            </div>
            <div className="mt-10 flex flex-col sm:flex-row justify-end gap-4 border-t pt-6">

                <button
                    type="button"
                    onClick={onCancel}
                    className="px-8 py-3 rounded-lg border-2 border-red-600 text-red-600 font-semibold hover:bg-red-600 hover:text-white transition-all duration-200"
                >
                    Cancel Booking
                </button>

                <button
                    type="button"
                    onClick={onPayNow}
                    disabled={!selectedMethod}
                    className={`px-8 py-3 rounded-lg font-semibold shadow-md transition-all duration-200
            ${selectedMethod
                            ? "bg-[#0F2C5C] text-white hover:bg-[#123a79]"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                >
                    Pay Now
                </button>

            </div>
        </div>
    );
};

export default PaymentMethodSelector;