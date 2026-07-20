import { GetBookings, CreateBookingRequest, Confirmbooking } from "../services/bookingService"
import { useEffect, useState } from "react"


export const useBook = () => {

    const [GetBookingList, setGetBookingList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

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

    const InitialBookingRequest = async (bookingdata) => {
        try {
            setIsLoading(true)
            const response = await CreateBookingRequest(bookingdata)
            console.log(response)
            return response
        } catch (err) {
            setError(err.response?.data?.message || "Failed to load passengers")
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }

    const FinalBooking = async (confirmadata) => {
        try {
            setIsLoading(true)
            const response = await Confirmbooking(confirmadata)
            console.log(response)
            return response
        } catch (err) {
            setError(err.response?.data?.message || "Failed to load passengers")
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }
    return { GetBookingList, isLoading, error, InitialBookingRequest, FinalBooking }
}

