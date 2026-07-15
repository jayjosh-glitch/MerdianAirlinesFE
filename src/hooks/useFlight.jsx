import { GetSearchFlights } from "../services/flightService"
import { useState } from "react"

export const useFlight = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const GetFlights = async (source, destination, departure, isroundtrip,isonewaytrip,  flightclass) => {
        setIsLoading(true)
        setError(null)
        try {
            const data = await GetSearchFlights(source, destination, departure,isroundtrip, isonewaytrip,  flightclass)
            return data
        } catch (err) {
            setError(
                err.response?.data?.message || "Failed to load passengers"
            )
        } finally {
            setIsLoading(false)
        }
    }




    return { isLoading, error , GetFlights}
}