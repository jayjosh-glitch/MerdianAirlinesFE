import { useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { useAppUser } from "../../hooks/useAppUser"
import { useNavigate } from "react-router-dom"

const Register = () => {
 
    const {Register} = useAppUser();
    const [form, setForm] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        mobileNo: "",
        dateOfBirth: ""
    })

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        var result = await Register(form);
        if(result){
            console.log(result)
            navigate("/login")
        }
        console.log({
            ...form,
            dateOfBirth: new Date(form.dateOfBirth).toISOString()
        })
    }

    return (
        <>
            <Navbar />

            <section className="min-h-[calc(100vh-64px-80px)] bg-gray-50 flex items-center justify-center px-4 py-12">
                <div className="w-full max-w-xl">

                    {/* Card */}
                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">

                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="w-12 h-12 bg-[#0F2C5C] rounded-xl flex items-center justify-center mx-auto mb-4">
                                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.5H2l2-9 6 4 2-7 2 7 6-4 2 9z"/>
                                </svg>
                            </div>
                            <h2 className="text-xl font-medium text-gray-900">Create your account</h2>
                            <p className="text-sm text-gray-400 mt-1">Join Meridian Airlines today</p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">

                            {/* Row 1 — First Name + Last Name */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wide block mb-1.5">
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={form.firstName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Tony"
                                        className="w-full border border-gray-100 bg-gray-50 rounded-lg px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-[#0F2C5C] focus:bg-white placeholder-gray-300 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wide block mb-1.5">
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={form.lastName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Stark"
                                        className="w-full border border-gray-100 bg-gray-50 rounded-lg px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-[#0F2C5C] focus:bg-white placeholder-gray-300 transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Username */}
                            <div>
                                <label className="text-xs font-medium text-gray-500 uppercase tracking-wide block mb-1.5">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    value={form.username}
                                    onChange={handleChange}
                                    required
                                    placeholder="tony_stark"
                                    className="w-full border border-gray-100 bg-gray-50 rounded-lg px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-[#0F2C5C] focus:bg-white placeholder-gray-300 transition-colors"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="text-xs font-medium text-gray-500 uppercase tracking-wide block mb-1.5">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="tony.stark@gmail.com"
                                    className="w-full border border-gray-100 bg-gray-50 rounded-lg px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-[#0F2C5C] focus:bg-white placeholder-gray-300 transition-colors"
                                />
                            </div>

                            {/* Row 2 — Mobile + DOB */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wide block mb-1.5">
                                        Mobile number
                                    </label>
                                    <input
                                        type="tel"
                                        name="mobileNo"
                                        value={form.mobileNo}
                                        onChange={handleChange}
                                        required
                                        placeholder="9876543210"
                                        maxLength={10}
                                        className="w-full border border-gray-100 bg-gray-50 rounded-lg px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-[#0F2C5C] focus:bg-white placeholder-gray-300 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wide block mb-1.5">
                                        Date of birth
                                    </label>
                                    <input
                                        type="date"
                                        name="dateOfBirth"
                                        value={form.dateOfBirth}
                                        onChange={handleChange}
                                        required
                                        className="w-full border border-gray-100 bg-gray-50 rounded-lg px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-[#0F2C5C] focus:bg-white transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <label className="text-xs font-medium text-gray-500 uppercase tracking-wide block mb-1.5">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={form.password}
                                        onChange={handleChange}
                                        required
                                        placeholder="Min 8 characters"
                                        className="w-full border border-gray-100 bg-gray-50 rounded-lg px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-[#0F2C5C] focus:bg-white placeholder-gray-300 transition-colors pr-10"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition-colors"
                                        aria-label="Toggle password visibility"
                                    >
                                        {showPassword ? (
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                                                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                                                <line x1="1" y1="1" x2="23" y2="23"/>
                                            </svg>
                                        ) : (
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                                <circle cx="12" cy="12" r="3"/>
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label className="text-xs font-medium text-gray-500 uppercase tracking-wide block mb-1.5">
                                    Confirm password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        value={form.confirmPassword}
                                        onChange={handleChange}
                                        required
                                        placeholder="Re-enter your password"
                                        className="w-full border border-gray-100 bg-gray-50 rounded-lg px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-[#0F2C5C] focus:bg-white placeholder-gray-300 transition-colors pr-10"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition-colors"
                                        aria-label="Toggle confirm password visibility"
                                    >
                                        {showConfirmPassword ? (
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                                                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                                                <line x1="1" y1="1" x2="23" y2="23"/>
                                            </svg>
                                        ) : (
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                                <circle cx="12" cy="12" r="3"/>
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Password match hint */}
                            {form.confirmPassword && form.password !== form.confirmPassword && (
                                <p className="text-xs text-red-400 -mt-2">
                                    Passwords do not match
                                </p>
                            )}

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={form.password !== form.confirmPassword && form.confirmPassword !== ""}
                                className="w-full bg-[#0F2C5C] hover:bg-[#1A3F7A] disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white text-sm font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 mt-2"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                                    <circle cx="9" cy="7" r="4"/>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                </svg>
                                Create account
                            </button>

                        </form>

                        {/* Divider */}
                        <div className="flex items-center gap-3 my-6">
                            <div className="flex-1 h-px bg-gray-100"/>
                            <span className="text-xs text-gray-300">or</span>
                            <div className="flex-1 h-px bg-gray-100"/>
                        </div>

                        {/* Login link */}
                        <p className="text-center text-sm text-gray-400">
                            Already have an account?{" "}
                            <Link to="/login" className="text-[#0F2C5C] font-medium hover:underline">
                                Sign in
                            </Link>
                        </p>

                    </div>

                    {/* Below card */}
                    <p className="text-center text-xs text-gray-300 mt-6">
                        By creating an account you agree to Meridian's{" "}
                        <Link to="/" className="hover:text-gray-400 underline">Terms</Link>
                        {" "}and{" "}
                        <Link to="/" className="hover:text-gray-400 underline">Privacy Policy</Link>
                    </p>

                </div>
            </section>

            <Footer />
        </>
    )
}

export default Register
