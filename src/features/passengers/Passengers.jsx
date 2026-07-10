import { useState } from "react"
import AuthNavbar from "../../components/AuthNavbar"
import Footer from "../../components/Footer"

const PassengersPage = ({ user }) => {
    const [showForm, setShowForm] = useState(false)

    const mockPassengers = [
        { id: 1, name: "Tony Stark", passport: "ABCD12345678", gender: "Male", dob: "1995-05-15", country: "India", city: "Mumbai" },
        { id: 2, name: "Pepper Potts", passport: "WXYZ98765432", gender: "Female", dob: "1998-03-22", country: "United States", city: "New York" },
    ]

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <AuthNavbar user={user} />

            <section className="px-6 py-8">
                <div className="max-w-4xl mx-auto">

                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-xl font-medium text-gray-900">My Passengers</h1>
                            <p className="text-sm text-gray-400 mt-0.5">Saved traveller profiles for quick booking</p>
                        </div>
                        <button
                            onClick={() => setShowForm(!showForm)}
                            className="bg-[#0F2C5C] hover:bg-[#1A3F7A] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M12 5v14M5 12h14"/>
                            </svg>
                            Add passenger
                        </button>
                    </div>

                    {/* Add Passenger Form */}
                    {showForm && (
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-6">
                            <div className="flex items-center justify-between mb-5">
                                <h2 className="text-base font-medium text-gray-900">New passenger</h2>
                                <button onClick={() => setShowForm(false)} className="text-gray-300 hover:text-gray-500">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M18 6 6 18M6 6l12 12"/>
                                    </svg>
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { label: "First name",       name: "firstname",      type: "text",   placeholder: "Tony" },
                                    { label: "Last name",        name: "lastname",       type: "text",   placeholder: "Stark" },
                                    { label: "Email",            name: "email",          type: "email",  placeholder: "tony@gmail.com" },
                                    { label: "Phone",            name: "phone",          type: "tel",    placeholder: "9876543210" },
                                    { label: "Passport number",  name: "passportNumber", type: "text",   placeholder: "ABCD12345678" },
                                    { label: "Date of birth",    name: "dateofBirth",    type: "date",   placeholder: "" },
                                    { label: "City",             name: "city",           type: "text",   placeholder: "Mumbai" },
                                    { label: "State",            name: "state",          type: "text",   placeholder: "Maharashtra" },
                                ].map((field) => (
                                    <div key={field.name}>
                                        <label className="text-xs font-medium text-gray-500 uppercase tracking-wide block mb-1.5">
                                            {field.label}
                                        </label>
                                        <input
                                            type={field.type}
                                            name={field.name}
                                            placeholder={field.placeholder}
                                            className="w-full border border-gray-100 bg-gray-50 rounded-lg px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-[#0F2C5C] focus:bg-white placeholder-gray-300 transition-colors"
                                        />
                                    </div>
                                ))}

                                <div>
                                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wide block mb-1.5">Gender</label>
                                    <select className="w-full border border-gray-100 bg-gray-50 rounded-lg px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-[#0F2C5C] focus:bg-white transition-colors">
                                        <option value="">Select gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wide block mb-1.5">Country</label>
                                    <select className="w-full border border-gray-100 bg-gray-50 rounded-lg px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-[#0F2C5C] focus:bg-white transition-colors">
                                        <option value="">Select country</option>
                                        <option>India</option>
                                        <option>United Arab Emirates</option>
                                        <option>United Kingdom</option>
                                        <option>United States</option>
                                        <option>Singapore</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex gap-3 mt-5">
                                <button
                                    onClick={() => setShowForm(false)}
                                    className="flex-1 border border-gray-100 text-gray-500 text-sm font-medium py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button className="flex-1 bg-[#0F2C5C] hover:bg-[#1A3F7A] text-white text-sm font-medium py-2.5 rounded-lg transition-colors">
                                    Save passenger
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Passengers list */}
                    {mockPassengers.length === 0 ? (
                        <div className="text-center py-16 bg-white border border-gray-100 rounded-2xl">
                            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-3">
                                <svg className="w-7 h-7 text-gray-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
                                </svg>
                            </div>
                            <p className="text-sm font-medium text-gray-500">No passengers yet</p>
                            <p className="text-xs text-gray-300 mt-1">Add a passenger to book flights faster</p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {mockPassengers.map((p) => (
                                <div key={p.id} className="bg-white border border-gray-100 rounded-xl p-5 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        {/* Avatar */}
                                        <div className="w-10 h-10 bg-[#0F2C5C]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-sm font-medium text-[#0F2C5C]">
                                                {p.name.charAt(0)}
                                            </span>
                                        </div>
                                        {/* Info */}
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{p.name}</p>
                                            <div className="flex items-center gap-3 mt-0.5">
                                                <span className="text-xs text-gray-400">{p.passport}</span>
                                                <span className="text-gray-200">·</span>
                                                <span className="text-xs text-gray-400">{p.gender}</span>
                                                <span className="text-gray-200">·</span>
                                                <span className="text-xs text-gray-400">{p.city}, {p.country}</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Actions */}
                                    <div className="flex items-center gap-2">
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

            <Footer />
        </div>
    )
}

export default PassengersPage
