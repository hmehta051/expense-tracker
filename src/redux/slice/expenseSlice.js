import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expense",
  initialState: {
    expenseList: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.expenseList.push(action.payload);
    },
    removeItem: (state) => {
      state.expenseList.pop();
    },
  },
});

export const { addItem, removeItem } = expenseSlice.actions;
export default expenseSlice.reducer;
