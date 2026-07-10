// ── AUTH NAVBAR ──────────────────────────────────────────────────
// Shown after login — My Bookings, Wallet, Passengers + user menu

import { useContext, useState } from "react"
import { Link, useLocation, useNavigate} from "react-router-dom"
import AuthContext from "../context/AuthContext"

const AuthNavbar = ({ user }) => {
    const location  = useLocation()
    const navigate  = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false)
    const {logout} = useContext(AuthContext)
    const navLinks = [
        { label: "Search flights", path: "/searchflights" },
        { label: "My bookings",    path: "/bookings" },
        { label: "Passengers",     path: "/passengers" },
        { label: "Wallet",         path: "/wallet" },
    ]

    const handleLogout = () => {
        logout();   
        navigate("/login")  
    }

    // First letter of first name for avatar
    const avatarLetter = user?.firstName?.[0]?.toUpperCase() || "U"

    return (
        <nav className="bg-[#0F2C5C] sticky top-0 z-50 border-b border-white/10">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <Link to="/flights" className="flex items-center gap-2 no-underline">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#0F2C5C]" stroke="currentColor" strokeWidth="2">
                            <path d="M22 16.5H2l2-9 6 4 2-7 2 7 6-4 2 9z"/>
                        </svg>
                    </div>
                    <span className="text-white font-medium text-lg tracking-wide">
                        Meridian<span className="text-[#C9943A]">Airlines</span>
                    </span>
                </Link>

                {/* Nav links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm transition-colors no-underline pb-0.5 ${
                                    isActive
                                        ? "text-white border-b border-[#C9943A]"
                                        : "text-white/70 hover:text-white"
                                }`}
                            >
                                {link.label}
                            </Link>
                        )
                    })}
                </div>

                {/* User menu */}
                <div className="relative">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex items-center gap-2.5 bg-white/10 hover:bg-white/15 border border-white/15 rounded-lg px-3 py-2 transition-colors"
                    >
                        {/* Avatar */}
                        <div className="w-6 h-6 bg-[#C9943A] rounded-full flex items-center justify-center">
                            <span className="text-xs font-medium text-white">{avatarLetter}</span>
                        </div>
                        <span className="text-white/90 text-sm hidden md:block">
                            {user?.firstName || "Account"}
                        </span>
                        {/* Chevron */}
                        <svg
                            className={`w-3.5 h-3.5 text-white/50 transition-transform ${menuOpen ? "rotate-180" : ""}`}
                            fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                        >
                            <path d="m6 9 6 6 6-6"/>
                        </svg>
                    </button>

                    {/* Dropdown */}
                    {menuOpen && (
                        <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-100 rounded-xl shadow-lg py-1.5 z-50">

                            {/* User info */}
                            <div className="px-4 py-2.5 border-b border-gray-50">
                                <p className="text-sm font-medium text-gray-900">
                                    {user?.firstName} {user?.lastName}
                                </p>
                                <p className="text-xs text-gray-400 mt-0.5">{user?.email}</p>
                            </div>

                            {/* Menu items */}
                            {[
                                { label: "My profile",    path: "/profile",     icon: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" },
                                { label: "My bookings",   path: "/bookings",    icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" },
                                { label: "My wallet",     path: "/wallet",      icon: "M21 12V7H5a2 2 0 0 1 0-4h14v4M21 12a2 2 0 0 1 0 4H5a2 2 0 0 1 0-4h16z" },
                                { label: "My passengers", path: "/passengers",  icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" },
                            ].map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setMenuOpen(false)}
                                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors no-underline"
                                >
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path d={item.icon}/>
                                    </svg>
                                    {item.label}
                                </Link>
                            ))}

                            {/* Divider */}
                            <div className="border-t border-gray-50 my-1"/>

                            {/* Logout */}
                            <button
                                onClick={handleLogout}
                                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-400 hover:bg-red-50 hover:text-red-500 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>
                                </svg>
                                Sign out
                            </button>

                        </div>
                    )}
                </div>

            </div>
        </nav>
    )
}

export default AuthNavbar
