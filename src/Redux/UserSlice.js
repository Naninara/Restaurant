import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { name: null, email: null },
  reducers: {
    login: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.name = null;
      state.email = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
