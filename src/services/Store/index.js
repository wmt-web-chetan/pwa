import { configureStore } from "@reduxjs/toolkit";
import getUserReducer from "./GetUserData/slice";

const store = configureStore({
  reducer: {
    getUser: getUserReducer,
    // Add other reducers here if needed
  },
});

export default store;
