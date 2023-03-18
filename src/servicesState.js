import {createSlice} from "@reduxjs/toolkit";

export const servicesSlice = createSlice({
    name: "services",
    initialState: {
        services: [],
        isLoading: false
    },
    reducers: {
        getServicesFetch: (state) => {
            state.isLoading = true;
        },
        getServicesSuccess: (state, action) => {
            state.services = action.payload;
            state.isLoading = false
        },
        getServicesFailure: (state) => {
            state.isLoading = false;
        }
    }
})

export const {getServicesFetch, getServicesSuccess, getServicesFailure} = servicesSlice.actions;

export default servicesSlice.reducer;