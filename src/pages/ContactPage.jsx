import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const INITIAL_FORM = {
  issueType: "",
  subject: "",
  description: "",
  email: "",
  bookingRef: "",
};

const ContactPage = () => {
  const [showModal, setShowModal]   = useState(false);
  const [submitted, setSubmitted]   = useState(false);
  const [ticketRef, setTicketRef]   = useState("");
  const [form, setForm]             = useState(INITIAL_FORM);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleConfirm = () => {
    const ref = "MR-SUP-" + (Math.floor(Math.random() * 90000) + 10000);
    setTicketRef(ref);
    setSubmitted(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSubmitted(false);
    setTicketRef("");
    setForm(INITIAL_FORM);
  };

  return (
    <div className="min-h-screen bg-white font-sans">

      <Navbar />

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="bg-[#0F2C5C] py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-5">
            <span className="text-[#C9943A] text-xs">✦</span>
            <span className="text-white/80 text-xs font-medium">We are here to help</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-medium text-white mb-4">
            Get in touch with <span className="text-[#C9943A]">Meridian</span>
          </h1>
          <p className="text-white/60 text-sm leading-relaxed">
            Have a question, facing an issue, or want to give feedback? Our support team responds within 24 hours.
          </p>
        </div>
      </section>

      {/* ── CONTACT CARDS ──────────────────────────────────── */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {[
              { icon: "📞", title: "Call us", desc: "Speak to our team directly", detail: "+91 1800 123 4567", sub: "Mon – Sat, 8am – 8pm IST" },
              { icon: "✉️", title: "Email us", desc: "We reply within 24 hours", detail: "support@meridianairlines.com", sub: "For all general enquiries" },
              { icon: "💬", title: "Live chat", desc: "Chat with us in real time", detail: "Available on our app", sub: "Mon – Sun, 6am – 11pm IST" },
            ].map((c) => (
              <div key={c.title} className="border border-gray-100 rounded-xl p-5 text-center">
                <div className="text-2xl mb-3">{c.icon}</div>
                <p className="text-sm font-medium text-gray-900 mb-1">{c.title}</p>
                <p className="text-xs text-gray-400 mb-3">{c.desc}</p>
                <p className="text-sm font-medium text-[#0F2C5C]">{c.detail}</p>
                <p className="text-xs text-gray-400 mt-1">{c.sub}</p>
              </div>
            ))}
          </div>

          {/* ── TWO COLUMN LAYOUT ──────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* LEFT — FAQ */}
            <div>
              <p className="text-xs font-medium text-[#0F2C5C] uppercase tracking-widest mb-2">Common questions</p>
              <h2 className="text-xl font-medium text-gray-900 mb-6">Frequently asked</h2>
              <div className="space-y-4">
                {[
                  { q: "How do I cancel my booking?", a: "Go to My Bookings, select the booking you want to cancel, and click Cancel. Refunds are processed to your Meridian wallet based on your travel class." },
                  { q: "How long do refunds take?", a: "Refunds to your Meridian wallet are instant. If you need a bank transfer, allow 5-7 working days." },
                  { q: "Can I change my passenger details?", a: "Passenger details can be updated via the Passengers section in your account up to 24 hours before departure." },
                  { q: "What is the Meridian wallet?", a: "The wallet lets you store balance, pay for bookings instantly, and receive refunds without a bank account." },
                  { q: "How do I check my flight status?", a: "Visit My Bookings and select your upcoming flight to see real-time status, gate info and delay updates." },
                ].map((faq) => (
                  <div key={faq.q} className="border border-gray-100 rounded-xl p-4">
                    <p className="text-sm font-medium text-gray-900 mb-2">{faq.q}</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — SUPPORT FORM */}
            <div>
              <p className="text-xs font-medium text-[#0F2C5C] uppercase tracking-widest mb-2">Support</p>
              <h2 className="text-xl font-medium text-gray-900 mb-2">Raise a support request</h2>
              <p className="text-sm text-gray-400 mb-6">
                Fill in the details below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wide block mb-1.5">
                    Issue type
                  </label>
                  <select
                    name="issueType"
                    value={form.issueType}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-100 bg-gray-50 rounded-lg px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-[#0F2C5C] focus:bg-white transition-colors"
                  >
                    <option value="">Select an issue type</option>
                    <option value="Booking issue">Booking issue</option>
                    <option value="Cancellation and refund">Cancellation and refund</option>
                    <option value="Payment and wallet">Payment and wallet</option>
                    <option value="Flight delay or cancellation">Flight delay or cancellation</option>
                    <option value="Passenger details">Passenger details</option>
                    <option value="General enquiry">General enquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wide block mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="Brief description of the issue"
                    className="w-full border border-gray-100 bg-gray-50 rounded-lg px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-[#0F2C5C] focus:bg-white placeholder-gray-300 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wide block mb-1.5">
                    Booking reference <span className="text-gray-300 normal-case">(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="bookingRef"
                    value={form.bookingRef}
                    onChange={handleChange}
                    placeholder="e.g. MR-BK-00245"
                    className="w-full border border-gray-100 bg-gray-50 rounded-lg px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-[#0F2C5C] focus:bg-white placeholder-gray-300 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wide block mb-1.5">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Describe your issue in detail — the more information you provide, the faster we can help."
                    className="w-full border border-gray-100 bg-gray-50 rounded-lg px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-[#0F2C5C] focus:bg-white placeholder-gray-300 transition-colors resize-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wide block mb-1.5">
                    Your email address
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

                <button
                  type="submit"
                  className="w-full bg-[#0F2C5C] hover:bg-[#1A3F7A] text-white text-sm font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                  </svg>
                  Submit request
                </button>

                <p className="text-xs text-gray-400 text-center">
                  We typically respond within 24 hours on working days.
                </p>

              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODAL ──────────────────────────────────────────── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-2xl border border-gray-100 w-full max-w-md p-6">

            {!submitted ? (
              /* ── REVIEW STEP ─────────────────────────────── */
              <>
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-base font-medium text-gray-900">Review your request</h3>
                  <button
                    onClick={handleClose}
                    className="text-gray-300 hover:text-gray-500 transition-colors"
                    aria-label="Close"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M18 6 6 18M6 6l12 12"/>
                    </svg>
                  </button>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    { label: "Issue type", value: form.issueType },
                    { label: "Subject", value: form.subject },
                    { label: "Booking ref", value: form.bookingRef || "—" },
                    { label: "Email", value: form.email },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-start gap-4">
                      <span className="text-xs text-gray-400 flex-shrink-0 mt-0.5">{row.label}</span>
                      <span className="text-xs font-medium text-gray-800 text-right">{row.value}</span>
                    </div>
                  ))}
                  <div>
                    <p className="text-xs text-gray-400 mb-1.5">Description</p>
                    <p className="text-xs text-gray-700 bg-gray-50 rounded-lg p-3 leading-relaxed">
                      {form.description}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleClose}
                    className="flex-1 text-sm text-gray-500 border border-gray-100 hover:border-gray-200 py-2 rounded-lg transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={handleConfirm}
                    className="flex-1 bg-[#0F2C5C] hover:bg-[#1A3F7A] text-white text-sm font-medium py-2 rounded-lg transition-colors"
                  >
                    Confirm and submit
                  </button>
                </div>
              </>
            ) : (
              /* ── SUCCESS STEP ────────────────────────────── */
              <div className="text-center py-4">
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                </div>
                <h3 className="text-base font-medium text-gray-900 mb-2">Request submitted</h3>
                <p className="text-sm text-gray-400 mb-1">
                  We will respond to{" "}
                  <span className="text-[#0F2C5C] font-medium">{form.email}</span>{" "}
                  within 24 hours.
                </p>
                <p className="text-xs text-gray-300 mb-6">
                  Your reference —{" "}
                  <span className="font-medium text-gray-500">{ticketRef}</span>
                </p>
                <button
                  onClick={handleClose}
                  className="bg-[#0F2C5C] hover:bg-[#1A3F7A] text-white text-sm font-medium px-8 py-2.5 rounded-lg transition-colors"
                >
                  Done
                </button>
              </div>
            )}

          </div>
        </div>
      )}

      <Footer />

    </div>
  );
};

export default ContactPage;
