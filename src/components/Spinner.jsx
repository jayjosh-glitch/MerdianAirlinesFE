// ── SPINNER ─────────────────────────────────────────────────────
// Usage:
// Local  (small, inline):  <Spinner />
// Local  (medium):         <Spinner size="md" />
// Global (full page):      <Spinner fullPage />

const Spinner = ({ size = "sm", fullPage = false }) => {

    const sizes = {
        sm: "w-4 h-4 border-2",
        md: "w-6 h-6 border-2",
        lg: "w-10 h-10 border-[3px]",
    }

    const spinner = (
        <div
            className={`
                ${sizes[size]}
                rounded-full
                border-gray-200
                border-t-[#0F2C5C]
                animate-spin
            `}
            role="status"
            aria-label="Loading"
        />
    )

    if (fullPage) {
        return (
            <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
                <div className="flex flex-col items-center gap-4">
                    {/* Logo mark */}
                    <div className="w-12 h-12 bg-[#0F2C5C] rounded-xl flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" stroke="currentColor" strokeWidth="2">
                            <path d="M22 16.5H2l2-9 6 4 2-7 2 7 6-4 2 9z"/>
                        </svg>
                    </div>
                    {/* Spinner */}
                    <div className="w-8 h-8 rounded-full border-[3px] border-gray-100 border-t-[#0F2C5C] animate-spin" />
                    <p className="text-sm text-gray-400">Loading Meridian...</p>
                </div>
            </div>
        )
    }

    return spinner
}

export default Spinner
