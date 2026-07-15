import { GetBookings } from "../services/bookingService"
import { useEffect, useState } from "react"

export const useBook = () => {

        const [GetBookingList, setGetBookingList] = useState([])
        const [isLoading, setIsLoading]       = useState(true)
        const [error, setError]               = useState(null)
    
        useEffect(() => {

            const fetchPassengers = async () => {
                setIsLoading(true)
                setError(null)
                try {
                    const data = await GetBookings()
                    setGetBookingList(data)
                } catch (err) {
                    setError(
                        err.response?.data?.message || "Failed to load passengers"
                    )
                } finally {
                    setIsLoading(false)
                }
            }
    
            fetchPassengers()
        }, []) // runs once on mount

    return {GetBookingList, isLoading, error}
}