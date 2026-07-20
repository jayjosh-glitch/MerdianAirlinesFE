import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bookingreference: null,
};

const BookingSlice = createSlice({
    name: "booking",

    initialState,

    reducers: {

        savebookingref(state, action) {
            state.bookingreference = action.payload;
        },

        clearreference(state) {
            state.bookingreference = null;
        }

    }
});

export const { savebookingref, clearreference } = BookingSlice.actions;

export default BookingSlice.reducer;