import { configureStore } from "@reduxjs/toolkit";

import hotelReducer from "../HotelsSlice";

export const store = configureStore({
  reducer: {
    hotel: hotelReducer,
  },
});
