// ── PUBLIC NAVBAR ────────────────────────────────────────────────
// Shown before login — Home, About, Contact + Sign in / Get started

import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
    const location = useLocation()

    const navLinks = [
        { label: "Flights", path: "/" },
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" },
    ]

    return (
        <nav className="bg-[#0F2C5C] sticky top-0 z-50 border-b border-white/10">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 no-underline">
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

                {/* Auth buttons */}
                <div className="flex items-center gap-3">
                    <Link to="/login">
                        <button className="text-white/80 hover:text-white text-sm border border-white/20 hover:border-white/40 px-4 py-2 rounded-lg transition-all">
                            Sign in
                        </button>
                    </Link>
                    <Link to="/register">
                        <button className="bg-[#C9943A] hover:bg-[#E8B95A] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
                            Get started
                        </button>
                    </Link>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
