import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async () => {
    let response = await fetch("http://localhost:4000/products");
    let json = await response.json();
    console.log("json", json);
    return json;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: [],
    status: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.value = action.payload;
        state.status = null;
      })
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading...";
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = "failed !";
      });
  },
});

export default counterSlice.reducer;
