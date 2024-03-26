import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticated: (state, actions) => {
      state.user.push({ ...actions.payload, active: true });
    },
  },
});

export const { authenticated } = authSlice.actions;

export default authSlice.reducer;
