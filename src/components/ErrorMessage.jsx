// ── ERROR MESSAGE ────────────────────────────────────────────────
// Usage:
// Inline field error:   <ErrorMessage message="Invalid email" />
// Card style error:     <ErrorMessage message="Something went wrong" type="card" />
// Full page error:      <ErrorMessage message="Page not found" type="page" onRetry={() => refetch()} />

const ErrorMessage = ({ message, type = "inline", onRetry = null }) => {

    if (!message) return null

    // ── INLINE — under form fields ─────────────────────────────
    if (type === "inline") {
        return (
            <p className="text-xs text-red-400 flex items-center gap-1 mt-1">
                <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
                {message}
            </p>
        )
    }

    // ── CARD — inside a section or component ───────────────────
    if (type === "card") {
        return (
            <div className="bg-red-50 border border-red-100 rounded-xl p-4 flex items-start gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                    </svg>
                </div>
                <div className="flex-1">
                    <p className="text-sm font-medium text-red-700">Something went wrong</p>
                    <p className="text-xs text-red-400 mt-0.5">{message}</p>
                    {onRetry && (
                        <button
                            onClick={onRetry}
                            className="text-xs text-red-500 font-medium hover:underline mt-2"
                        >
                            Try again
                        </button>
                    )}
                </div>
            </div>
        )
    }

    // ── PAGE — full page error (route not found, server down) ──
    if (type === "page") {
        return (
            <div className="min-h-[400px] flex flex-col items-center justify-center px-6 text-center">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                    </svg>
                </div>
                <h3 className="text-base font-medium text-gray-900 mb-1">Oops — something went wrong</h3>
                <p className="text-sm text-gray-400 max-w-sm mb-6">{message}</p>
                {onRetry && (
                    <button
                        onClick={onRetry}
                        className="bg-[#0F2C5C] hover:bg-[#1A3F7A] text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-colors"
                    >
                        Try again
                    </button>
                )}
            </div>
        )
    }

    return null
}

export default ErrorMessage
