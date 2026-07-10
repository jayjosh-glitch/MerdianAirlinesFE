import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">

      <Navbar />

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="bg-[#0F2C5C] py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#C9943A] text-xs">✦</span>
            <span className="text-white/80 text-xs font-medium">Our story</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-medium text-white leading-tight mb-5">
            Redefining air travel,<br />
            <span className="text-[#C9943A]">one flight at a time</span>
          </h1>
          <p className="text-white/60 text-base leading-relaxed max-w-xl mx-auto">
            Meridian Airlines was founded with a single belief — that premium travel should be accessible, transparent, and effortless for everyone.
          </p>
        </div>
      </section>

      {/* ── MISSION ────────────────────────────────────────── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-medium text-[#0F2C5C] uppercase tracking-widest mb-3">Our mission</p>
            <h2 className="text-2xl font-medium text-gray-900 mb-4 leading-snug">
              Making premium travel simple, transparent and fair
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              We started Meridian because we believed the airline experience was broken. Hidden fees, confusing cancellation policies, and clunky booking systems had become the norm.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Our platform is built from the ground up with one goal — give every traveller a seamless experience from search to landing, with complete transparency at every step.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-100">
            <img
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80"
              alt="Airplane wing above clouds"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── VALUES ─────────────────────────────────────────── */}
      <section className="bg-gray-50 border-t border-b border-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-medium text-[#0F2C5C] uppercase tracking-widest mb-2">What we stand for</p>
            <h2 className="text-2xl font-medium text-gray-900">Our core values</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { icon: "🔍", title: "Transparency", desc: "No hidden fees. No surprise charges. What you see at booking is what you pay. Always." },
              { icon: "🛡️", title: "Trust", desc: "Your data, your money, your travel details — protected with industry-leading security standards." },
              { icon: "⚡", title: "Speed", desc: "Book a flight in under 60 seconds. Refunds to your wallet in under 60 minutes." },
              { icon: "🌍", title: "Accessibility", desc: "Premium travel should not require a premium budget. We work hard to keep fares competitive." },
              { icon: "♻️", title: "Sustainability", desc: "Committed to reducing our carbon footprint with modern fuel-efficient aircraft on every route." },
              { icon: "❤️", title: "Care", desc: "Real support from real humans. We are here when things go wrong — because sometimes they do." },
            ].map((v) => (
              <div key={v.title} className="bg-white border border-gray-100 rounded-xl p-5">
                <div className="text-2xl mb-3">{v.icon}</div>
                <p className="text-sm font-medium text-gray-900 mb-2">{v.title}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{v.desc}</p>
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
            <h2 className="text-2xl font-medium text-white">Meridian at a glance</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: "5", unit: "countries", title: "Operating across", desc: "India, UAE, UK, USA, Singapore" },
              { num: "3", unit: "classes", title: "Seat classes", desc: "Economy · Premium · Business" },
              { num: "98", unit: "%", title: "On-time rate", desc: "Across all routes" },
              { num: "24", unit: "/7", title: "Support hours", desc: "Always here for you" },
            ].map((s) => (
              <div key={s.title} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <p className="text-2xl font-medium text-white mb-0.5">
                  {s.num}<span className="text-sm text-[#C9943A]"> {s.unit}</span>
                </p>
                <p className="text-xs font-medium text-white/70 mb-1">{s.title}</p>
                <p className="text-xs text-white/35 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ───────────────────────────────────────────── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-medium text-[#0F2C5C] uppercase tracking-widest mb-2">The people</p>
            <h2 className="text-2xl font-medium text-gray-900">Leadership team</h2>
            <p className="text-gray-400 text-sm mt-2">Experienced aviation and technology professionals</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { name: "Aryan Mehta", role: "Chief Executive Officer", initials: "AM", color: "bg-blue-50 text-blue-700" },
              { name: "Priya Nair", role: "Chief Operating Officer", initials: "PN", color: "bg-purple-50 text-purple-700" },
              { name: "James Carter", role: "Chief Technology Officer", initials: "JC", color: "bg-amber-50 text-amber-700" },
              { name: "Sofia Alvarez", role: "Head of Customer Experience", initials: "SA", color: "bg-rose-50 text-rose-700" },
              { name: "Rohan Desai", role: "Head of Finance", initials: "RD", color: "bg-teal-50 text-teal-700" },
              { name: "Emma Williams", role: "Head of Operations", initials: "EW", color: "bg-green-50 text-green-700" },
            ].map((p) => (
              <div key={p.name} className="border border-gray-100 rounded-xl p-5 flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-medium text-sm flex-shrink-0 ${p.color}`}>
                  {p.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{p.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{p.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NETWORK ────────────────────────────────────────── */}
      <section className="bg-gray-50 border-t border-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-medium text-[#0F2C5C] uppercase tracking-widest mb-2">Where we fly</p>
            <h2 className="text-2xl font-medium text-gray-900">Our network</h2>
            <p className="text-gray-400 text-sm mt-2">5 countries, daily departures, one seamless experience</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { city: "Mumbai", country: "India", code: "BOM", img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=300&q=70" },
              { city: "London", country: "United Kingdom", code: "LHR", img: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=300&q=70" },
              { city: "Dubai", country: "UAE", code: "DXB", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=300&q=70" },
              { city: "Singapore", country: "Singapore", code: "SIN", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=300&q=70" },
              { city: "New York", country: "United States", code: "JFK", img: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=300&q=70" },
            ].map((c) => (
              <div key={c.city} className="bg-white border border-gray-100 rounded-xl overflow-hidden">
                <img src={c.img} alt={c.city} className="w-full h-24 object-cover" />
                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">{c.city}</p>
                    <span className="text-xs text-[#0F2C5C] font-medium bg-blue-50 px-2 py-0.5 rounded">{c.code}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">{c.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="bg-white py-14 px-6 text-center border-t border-gray-100">
        <h2 className="text-2xl font-medium text-gray-900 mb-2">Ready to experience Meridian?</h2>
        <p className="text-gray-400 text-sm mb-6">Join thousands of travellers who trust us every day.</p>
        <div className="flex gap-3 justify-center">
          <button className="bg-[#0F2C5C] hover:bg-[#1A3F7A] text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-colors">
            Book a flight
          </button>
          <button className="bg-white hover:bg-gray-50 text-[#0F2C5C] text-sm font-medium px-6 py-2.5 rounded-lg border-2 border-[#0F2C5C] transition-colors">
            Contact us
          </button>
        </div>
      </section>

      <Footer />

    </div>
  );
};

export default AboutPage;
