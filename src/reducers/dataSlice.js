import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import dataApi from "../api/dataApi";

const initialState = {
    trips: {
        data: {},
        error: null,
        status: 'idle',
        filter: null,
        location: null
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
    reducers: {
        categoryFilter: (state, action) => {
            state.trips.filter = action.payload;
        },
        locationFilter: (state, action) => {
            state.trips.location = action.payload;
        }
    },
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

export const {categoryFilter, locationFilter} = dataSlice.actions;
export default dataSlice.reducer;
