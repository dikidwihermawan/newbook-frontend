import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  statuses: [],
};

export const fetchStatuses = createAsyncThunk("status/getStatus", async () => {
  const response = await axios.get("status");
  return response.data;
});

const statusSlice = createSlice({
  name: "status",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchStatuses.fulfilled, (state, action) => {
      state.statuses.push(action.payload);
    });
  },
});

export default statusSlice.reducer;
