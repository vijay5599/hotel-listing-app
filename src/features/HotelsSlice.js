import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllHotels,
  fetchHotelById,
} from "./HotelsAPI";

const initialState = {
  hotels: [],
  status: "idle",
  totalHotels: 0,
};

export const fetchAllHotelsAsync = createAsyncThunk(
  "hotel/fetchAllHotels",
  async () => {
    const response = await fetchAllHotels();
    return response.data;
  }
);

export const fetchHotelByIdAsync = createAsyncThunk(
  "hotel/fetchHotelById",
  async (id) => {
    const response = await fetchHotelById(id);
    return response.data;
  }
);

export const HotelsSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllHotelsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllHotelsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.hotels = action.payload;
      })
      .addCase(fetchHotelByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHotelByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedHotel = action.payload;
      });
  },
});

export const selectAllHotels = (state) => state.hotel.hotels;
export const selectHotelById = (state) => state.hotel.selectedHotel;
export default HotelsSlice.reducer;
