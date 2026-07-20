import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "../redux/FlightSlice"
import bookingreducer from "../redux/BookingSlice"
import summaryreducer from "../redux/SummarySlice"

export const store = configureStore({
    reducer: {
        flight: flightReducer,
        booking: bookingreducer,
        summary: summaryreducer,
    },
});