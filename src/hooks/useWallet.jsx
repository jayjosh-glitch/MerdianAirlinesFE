import { useState } from "react"
import { Getwallet } from "../services/walletService"

const useWallet = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const Getmywallet = async () => {
        setIsLoading(true)
        setError(null)
        try {
            const data = await Getwallet()
            console.log(data)
            return data;
        } catch (err) {
            setError(
                err.response?.data?.message || "Failed to load passengers"
            )
        } finally {
            setIsLoading(false)
        }
    }
    return {Getmywallet, isLoading, error}
}

export default useWallet