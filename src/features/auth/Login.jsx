import { useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import AuthContext from "../../context/AuthContext"
import { useContext } from "react"
import { useAppUser } from "../../hooks/useAppUser"
import ErrorMessage from "../../components/ErrorMessage"
import AuthNavbar from "../../components/AuthNavbar"
import { useNavigate } from "react-router-dom"
const Login = () => {

    const { login, currentuser } = useContext(AuthContext)
    const navigate = useNavigate()
    console.log(currentuser)
    const { Login, isLoading, error } = useAppUser()
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const [showPassword, setShowPassword] = useState(false)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await Login(form)
        if (result) {
            login(result)
            console.log(result)
            navigate("/")
        }

    }

    return (
        <>
            {currentuser ? <AuthNavbar user={currentuser} /> : <Navbar />}

            <section className="min-h-[calc(100vh-64px-80px)] bg-gray-50 flex items-center justify-center px-4 py-12">
                <div className="w-full max-w-md">

                    {/* Card */}
                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">

                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="w-12 h-12 bg-[#0F2C5C] rounded-xl flex items-center justify-center mx-auto mb-4">
                                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.5H2l2-9 6 4 2-7 2 7 6-4 2 9z" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-medium text-gray-900">Welcome back</h2>
                            <p className="text-sm text-gray-400 mt-1">Sign in to your Meridian account</p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-5">

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="text-xs font-medium text-gray-500 uppercase tracking-wide block mb-1.5"
                                >
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="tony.stark@gmail.com"
                                    className="w-full border border-gray-100 bg-gray-50 rounded-lg px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-[#0F2C5C] focus:bg-white placeholder-gray-300 transition-colors"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <div className="flex items-center justify-between mb-1.5">
                                    <label
                                        htmlFor="password"
                                        className="text-xs font-medium text-gray-500 uppercase tracking-wide"
                                    >
                                        Password
                                    </label>
                                    <Link
                                        to="/forgot-password"
                                        className="text-xs text-[#0F2C5C] hover:underline"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        required
                                        value={form.password}
                                        onChange={handleChange}
                                        placeholder="Enter your password"
                                        className="w-full border border-gray-100 bg-gray-50 rounded-lg px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-[#0F2C5C] focus:bg-white placeholder-gray-300 transition-colors pr-10"
                                    />
                                    {/* Show / Hide toggle */}
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition-colors"
                                        aria-label="Toggle password visibility"
                                    >
                                        {showPassword ? (
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                                                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                                                <line x1="1" y1="1" x2="23" y2="23" />
                                            </svg>
                                        ) : (
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                        )}
                                    </button>
                                    {error && <ErrorMessage message={error} type="card" />}
                                </div>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-[#0F2C5C] hover:bg-[#1A3F7A] disabled:bg-[#0F2C5C]/70 disabled:cursor-not-allowed text-white text-sm font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                {isLoading ? (
                                    // Show spinner when loading
                                    <>
                                        <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                                        Signing in...
                                    </>
                                ) : (
                                    // Show normal content when not loading
                                    <>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                                            <polyline points="10 17 15 12 10 7" />
                                            <line x1="15" y1="12" x2="3" y2="12" />
                                        </svg>
                                        Sign in
                                    </>
                                )}
                            </button>

                        </form>

                        {/* Divider */}
                        <div className="flex items-center gap-3 my-6">
                            <div className="flex-1 h-px bg-gray-100" />
                            <span className="text-xs text-gray-300">or</span>
                            <div className="flex-1 h-px bg-gray-100" />
                        </div>

                        {/* Register link */}
                        <p className="text-center text-sm text-gray-400">
                            Don't have an account?{" "}
                            <Link
                                to="/register"
                                className="text-[#0F2C5C] font-medium hover:underline"
                            >
                                Create one
                            </Link>
                        </p>

                    </div>

                    {/* Below card note */}
                    <p className="text-center text-xs text-gray-300 mt-6">
                        By signing in you agree to Meridian's{" "}
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

export default Login
