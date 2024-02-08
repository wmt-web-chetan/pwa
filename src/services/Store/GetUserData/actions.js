import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUser } from "../../Api/getUser";

// Thunk action for getting a list of network locations

export const getUserData = createAsyncThunk(
  "getUserData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getUser();
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
