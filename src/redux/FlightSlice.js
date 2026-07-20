import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedFlight: null,
};

const FlightSlice = createSlice({
    name: "flight",

    initialState,

    reducers: {

        selectFlight(state, action) {
            state.selectedFlight = action.payload;
        },

        clearFlight(state) {
            state.selectedFlight = null;
        }

    }
});

export const { selectFlight, clearFlight } = FlightSlice.actions;

export default FlightSlice.reducer;