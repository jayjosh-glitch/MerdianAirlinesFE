import AuthNavbar from "../../components/AuthNavbar"
import { useContext, useState } from "react"
import AuthContext from "../../context/AuthContext"
import { Validate } from "./Validate"

const AddPassenger = () => {

    const { currentuser } = useContext(AuthContext)

    const [passdata, setpassdata] = useState({
        firstname: "",
        lastname: "",
        adressline1: "",
        adressline2: "",
        city: "",
        state: "",
        country: "",
        email: "",
        passportnumber: "",
        gender: "",
        dob: "",
        mobilenumber: ""
    })

    const [passerror, setpasserror] = useState({
        firstname: "",
        lastname: "",
        adressline1: "",
        adressline2: "",
        city: "",
        state: "",
        country: "",
        email: "",
        passportnumber: "",
        gender: "",
        dob: "",
        mobilenumber: ""
    })

    const handlechange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setpassdata({
            ...passdata,
            [name]: value
        })
        const err = Validate(name, value)
        setpasserror(prev => ({ ...prev, [name]: err }))
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        console.log("Passenger added")
    }

    const inputClass = "w-full border border-gray-100 bg-gray-50 rounded-lg px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-[#0F2C5C] focus:bg-white placeholder-gray-300 transition-colors"
    const labelClass = "text-xs font-medium text-gray-500 uppercase tracking-wide block mb-1.5"
    const errorClass = "text-xs text-red-400 mt-1"

    return (
        <>
            <AuthNavbar user={currentuser} />
            <main className="min-h-screen bg-gray-50">
                <section className="px-6 py-8">
                    <div className="max-w-2xl mx-auto">

                        <div className="mb-6">
                            <h2 className="text-xl font-medium text-gray-900">Add Passenger</h2>
                            <p className="text-sm text-gray-400 mt-0.5">Fill in the traveller details below</p>
                        </div>

                        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                            <form onSubmit={handlesubmit} className="space-y-4">

                                <div>
                                    <label htmlFor="pfname" className={labelClass}>First name</label>
                                    <input
                                        placeholder="Tony"
                                        type="text"
                                        id="pfname"
                                        name="firstname"
                                        onChange={handlechange}
                                        value={passdata.firstname}
                                        className={inputClass}
                                    />
                                    {passerror.firstname && (
                                        <p className={errorClass}>{passerror.firstname}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="plname" className={labelClass}>Last name</label>
                                    <input
                                        placeholder="Stark"
                                        type="text"
                                        id="plname"
                                        name="lastname"
                                        onChange={handlechange}
                                        value={passdata.lastname}
                                        className={inputClass}
                                    />
                                    {passerror.lastname && (
                                        <p className={errorClass}>{passerror.lastname}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="adline1" className={labelClass}>Address line 1</label>
                                    <input
                                        placeholder="House name, street, area"
                                        type="text"
                                        id="adline1"
                                        name="adressline1"
                                        onChange={handlechange}
                                        value={passdata.adressline1}
                                        className={inputClass}
                                    />
                                    {passerror.adressline1 && (
                                        <p className={errorClass}>{passerror.adressline1}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="adline2" className={labelClass}>
                                        Address line 2
                                        <span className="text-gray-300 normal-case ml-1">(optional)</span>
                                    </label>
                                    <input
                                        placeholder="Apartment, suite, floor"
                                        type="text"
                                        id="adline2"
                                        name="adressline2"
                                        onChange={handlechange}
                                        value={passdata.adressline2}
                                        className={inputClass}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className={labelClass}>Email address</label>
                                    <input
                                        placeholder="tony.stark@gmail.com"
                                        type="email"
                                        id="email"
                                        name="email"
                                        onChange={handlechange}
                                        value={passdata.email}
                                        className={inputClass}
                                    />
                                    {passerror.email && (
                                        <p className={errorClass}>{passerror.email}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="city" className={labelClass}>City</label>
                                    <input
                                        placeholder="Mumbai"
                                        type="text"
                                        id="city"
                                        name="city"
                                        onChange={handlechange}
                                        value={passdata.city}
                                        className={inputClass}
                                    />
                                    {passerror.city && (
                                        <p className={errorClass}>{passerror.city}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="state" className={labelClass}>State</label>
                                    <input
                                        placeholder="Maharashtra"
                                        type="text"
                                        id="state"
                                        name="state"
                                        onChange={handlechange}
                                        value={passdata.state}
                                        className={inputClass}
                                    />
                                    {passerror.state && (
                                        <p className={errorClass}>{passerror.state}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="country" className={labelClass}>Country</label>
                                    <input
                                        placeholder="India"
                                        type="text"
                                        id="country"
                                        name="country"
                                        onChange={handlechange}
                                        value={passdata.country}
                                        className={inputClass}
                                    />
                                    {passerror.country && (
                                        <p className={errorClass}>{passerror.country}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="gender" className={labelClass}>Gender</label>
                                    <input
                                        placeholder="Male or Female"
                                        type="text"
                                        id="gender"
                                        name="gender"
                                        onChange={handlechange}
                                        value={passdata.gender}
                                        className={inputClass}
                                    />
                                    {passerror.gender && (
                                        <p className={errorClass}>{passerror.gender}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="dob" className={labelClass}>Date of birth</label>
                                    <input
                                        type="date"
                                        id="dob"
                                        name="dob"
                                        onChange={handlechange}
                                        value={passdata.dob}
                                        className={inputClass}
                                    />
                                    {passerror.dob && (
                                        <p className={errorClass}>{passerror.dob}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="passportnumber" className={labelClass}>Passport number</label>
                                    <input
                                        placeholder="ABCD12345678"
                                        type="text"
                                        id="passportnumber"
                                        name="passportnumber"
                                        onChange={handlechange}
                                        value={passdata.passportnumber}
                                        className={inputClass}
                                    />
                                    {passerror.passportnumber && (
                                        <p className={errorClass}>{passerror.passportnumber}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="mobilenumber" className={labelClass}>Mobile number</label>
                                    <input
                                        placeholder="1234567890"
                                        type="text"
                                        id="mobilenumber"
                                        name="mobilenumber"
                                        onChange={handlechange}
                                        value={passdata.mobilenumber}
                                        className={inputClass}
                                    />
                                    {passerror.mobilenumber && (
                                        <p className={errorClass}>{passerror.mobilenumber}</p>
                                    )}
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="w-full bg-[#0F2C5C] hover:bg-[#1A3F7A] text-white text-sm font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                                            <circle cx="9" cy="7" r="4"/>
                                        </svg>
                                        Add Passenger
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default AddPassenger
