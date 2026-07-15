import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import AuthNavbar from "../components/AuthNavbar"
import { useNavigate } from "react-router-dom";

const HomePage = () => {

  const { currentuser } = useContext(AuthContext);

  const navigate = useNavigate()

  const handlesearch = () => {
    navigate('/search')
  }

  const handleroutes = () => {
    navigate('/login')
  }
  const handleaccount = () => {
    navigate('/register')
  }

  return (
    <div className="min-h-screen bg-white font-sans">

      {currentuser ? <AuthNavbar user={currentuser} /> : <Navbar />}

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="bg-white pt-16 pb-0 flex flex-col items-center text-center px-6">

        <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-1.5 mb-6">
          <span className="text-[#C9943A] text-xs">✦</span>
          <span className="text-[#0F2C5C] text-xs font-medium">Premium airline booking — simple and fast</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight max-w-2xl mb-4">
          Travel smarter with{" "}
          <span className="text-[#0F2C5C]">Meridian Airlines</span>
        </h1>

        <p className="text-gray-500 text-base max-w-md leading-relaxed mb-8">
          Book flights across 5 countries, manage your wallet, and travel with confidence — all in one place.
        </p>

        <div className="flex gap-3 mb-10">
          <button className="bg-[#0F2C5C] hover:bg-[#1A3F7A] text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-colors flex items-center gap-2" onClick={handlesearch}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            Search flights
          </button>
          <button className="bg-white hover:bg-gray-50 text-[#0F2C5C] text-sm font-medium px-6 py-2.5 rounded-lg border-2 border-[#0F2C5C] transition-colors flex items-center gap-2" onClick={handleroutes}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            </svg>
            Explore routes
          </button>
        </div>

        <div className="w-full max-w-4xl rounded-t-2xl overflow-hidden border border-gray-100 border-b-0">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80"
            alt="View from airplane window above clouds"
            className="w-full h-72 object-cover object-center"
          />
        </div>
      </section>

      {/* ── SEARCH BAR ─────────────────────────────────────── */}
      <section className="bg-white px-6 pb-8 flex justify-center">
        <div className="w-full max-w-4xl bg-white border border-gray-100 rounded-b-2xl rounded-t-none shadow-md px-6 py-5">
          <div className="flex gap-2 mb-4">
            {["One way", "Round trip", "Multi-city"].map((tab, i) => (
              <button
                key={tab}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${i === 0 ? "bg-[#0F2C5C] text-white" : "text-gray-500 hover:text-[#0F2C5C]"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-end">
            {[
              { label: "From", placeholder: "Mumbai (BOM)", type: "text" },
              { label: "To", placeholder: "London (LHR)", type: "text" },
              { label: "Departure", placeholder: "", type: "date" },
            ].map((field) => (
              <div key={field.label} className="flex flex-col gap-1">
                <label className="text-xs text-gray-400 font-medium uppercase tracking-wide">{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="border border-gray-100 bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-800 outline-none focus:border-[#0F2C5C] focus:bg-white placeholder-gray-300 transition-colors"
                />
              </div>
            ))}
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-400 font-medium uppercase tracking-wide">Class</label>
              <select className="border border-gray-100 bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-700 outline-none focus:border-[#0F2C5C] focus:bg-white transition-colors">
                <option>Economy</option>
                <option>Premium Economy</option>
                <option>Business</option>
              </select>
            </div>
            <button className="bg-[#0F2C5C] hover:bg-[#1A3F7A] text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 h-[38px]" onClick={handlesearch}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
              Search
            </button>
          </div>
        </div>
      </section>

      {/* ── FEATURES ───────────────────────────────────────── */}
      <section className="bg-gray-50 border-t border-b border-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-medium text-[#0F2C5C] uppercase tracking-widest mb-2">Why Meridian</p>
            <h2 className="text-2xl font-medium text-gray-900">Built for modern travellers</h2>
            <p className="text-gray-400 text-sm mt-2">Every feature designed to make your journey smoother</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: "🛋️", title: "Three travel classes", desc: "Economy, Premium and Business — comfort at every budget." },
              { icon: "👛", title: "Meridian wallet", desc: "Top up once, pay instantly. Refunds land in seconds." },
              { icon: "🛡️", title: "Flexible cancellation", desc: "Cancel anytime. Refunds by class, no hidden fees." },
              { icon: "👥", title: "Saved passengers", desc: "Save up to 5 traveller profiles. Book for family in seconds." },
              { icon: "🕐", title: "Real-time updates", desc: "Track delays and gate changes in real time." },
            ].map((f) => (
              <div key={f.title} className="bg-white border border-gray-100 rounded-xl p-4">
                <div className="w-10 h-10 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center text-xl mb-3">{f.icon}</div>
                <p className="text-sm font-medium text-gray-900 mb-1.5">{f.title}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS ───────────────────────────────────── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-medium text-[#0F2C5C] uppercase tracking-widest mb-2">Routes</p>
            <h2 className="text-2xl font-medium text-gray-900">Popular destinations</h2>
            <p className="text-gray-400 text-sm mt-2">Daily departures across 5 countries</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { city: "London", country: "United Kingdom", price: "₹42,000", img: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=400&q=70" },
              { city: "Dubai", country: "United Arab Emirates", price: "₹18,000", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=70" },
              { city: "Singapore", country: "Singapore", price: "₹24,000", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&q=70" },
              { city: "New York", country: "United States", price: "₹55,000", img: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400&q=70" },
            ].map((d) => (
              <div key={d.city} className="border border-gray-100 rounded-xl overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                <img src={d.img} alt={d.city} className="w-full h-36 object-cover" />
                <div className="p-3">
                  <p className="text-sm font-medium text-gray-900">{d.city}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{d.country}</p>
                  <div className="flex justify-between items-center mt-2.5 pt-2.5 border-t border-gray-100">
                    <span className="text-xs text-gray-400">from</span>
                    <span className="text-sm font-medium text-[#0F2C5C]">{d.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────────── */}
      <section className="bg-[#0F2C5C] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-medium text-white/40 uppercase tracking-widest mb-2">By the numbers</p>
            <h2 className="text-2xl font-medium text-white">Trusted by thousands</h2>
            <p className="text-white/40 text-sm mt-2">Our track record speaks for itself</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: "5", unit: "countries", title: "Global network", desc: "India, UAE, UK, USA and Singapore." },
              { num: "3", unit: "classes", title: "Travel options", desc: "Economy, Premium and Business." },
              { num: "98", unit: "%", title: "On-time rate", desc: "Industry-leading punctuality." },
              { num: "24", unit: "/7", title: "Always available", desc: "Manage bookings anytime." },
            ].map((s) => (
              <div key={s.title} className="bg-white/5 border border-white/8 rounded-xl p-5">
                <p className="text-2xl font-medium text-white mb-0.5">
                  {s.num}<span className="text-base text-[#C9943A]"> {s.unit}</span>
                </p>
                <p className="text-sm font-medium text-white/80">{s.title}</p>
                <p className="text-xs text-white/40 mt-1 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ───────────────────────────────────────── */}
      <section className="bg-gray-50 border-t border-gray-100 py-14 px-6 text-center">
        <h2 className="text-2xl font-medium text-gray-900 mb-2">Ready to fly with Meridian?</h2>
        <p className="text-gray-400 text-sm mb-6">Create your account in seconds and book your first flight today.</p>
        <div className="flex gap-3 justify-center">
          <button className="bg-[#0F2C5C] hover:bg-[#1A3F7A] text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-colors flex items-center gap-2" onClick={handleaccount}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            Create account
          </button>
          <button className="bg-white hover:bg-gray-50 text-[#0F2C5C] text-sm font-medium px-6 py-2.5 rounded-lg border-2 border-[#0F2C5C] transition-colors flex items-center gap-2" onClick={handlesearch}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            Search flights
          </button>
        </div>
      </section>

      <Footer />

    </div>
  );
}


export default HomePage;
