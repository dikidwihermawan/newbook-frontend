import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchUser = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("users");
  return response.users;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUser.pending]: (state, action) => {
      state.status = "Loading";
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.status = "Successed";
      state.data = action.payload;
    },
    [fetchUser.rejected]: (state, action) => {
      state.status = "Failed";
      state.error = action.error.message;
    },
  },
});

export const getAllUser = (state) => state.users;
export const { userAdded } = userSlice.actions;
export default userSlice.reducer;
