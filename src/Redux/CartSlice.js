import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      const isExist = state.find((ele) => ele.id === action.payload.id);
      isExist
        ? (isExist.quantity += action.payload.quantity)
        : state.push(action.payload);
    },
    remove: (state, action) => {
      const index = state.findIndex((ele) => {
        return ele.id === action.payload.id;
      });

      state.splice(index, 1);
    },
    clear: (state) => {
      state.length = 0;
    },
  },
});

export const { add, remove, clear } = cartSlice.actions;

export default cartSlice.reducer;
