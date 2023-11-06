import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    addResult: (state, { payload }) => {
      state.result.push(payload);
    },
  },
});

export const resultReducer = resultSlice.reducer;
export const { addResult } = resultSlice.actions;
