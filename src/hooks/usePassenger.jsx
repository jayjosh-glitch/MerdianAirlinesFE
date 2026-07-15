import { useState, useEffect } from "react";
import { GetPassengersbyuserid } from "../services/passengerService"

export const usePassenger = () => {

    const [GetPassenger, setGetPassenger] = useState([])
    const [isLoading, setIsLoading]       = useState(true)
    const [error, setError]               = useState(null)

    useEffect(() => {
        const fetchPassengers = async () => {
            setIsLoading(true)
            setError(null)
            try {
                const data = await GetPassengersbyuserid()
                setGetPassenger(data)
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

    // refetch function — call this after adding or deleting a passenger
    const refetch = async () => {
        setIsLoading(true)
        setError(null)
        try {
            const data = await GetPassengersbyuserid()
            setGetPassenger(data)
        } catch (err) {
            setError(err.response?.data?.message || "Failed to load passengers")
        } finally {
            setIsLoading(false)
        }
    }

    return { GetPassenger, isLoading, error, refetch }
}



