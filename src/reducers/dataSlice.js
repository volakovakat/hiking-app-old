import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import dataApi from "../api/dataApi";

const initialState = {
    trips: {
        data: {},
        error: null,
        status: 'idle'
    }
}

export const fetchData = createAsyncThunk('data/fetchData',
    async () => {
        const response = await dataApi.getData();
        return response.data;
    })

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchData.pending, (state, action) => {
                state.trips.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.trips.status = 'succeeded';
                state.trips.data = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.trips.status = 'failed';
                state.trips.error = action.error.message;
            })
    }
})

export default dataSlice.reducer
