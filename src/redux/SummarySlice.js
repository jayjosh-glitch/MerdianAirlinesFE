import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    summary: null,
};

const SaveSummary = createSlice({
    name: "summary",

    initialState,

    reducers: {

        savesummary(state, action) {
            state.summary = action.payload;
        },

        clearsummary(state) {
            state.summary = null;
        }

    }
});

export const { savesummary, clearsummary } = SaveSummary.actions;

export default SaveSummary.reducer;