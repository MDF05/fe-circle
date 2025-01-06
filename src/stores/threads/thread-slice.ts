import { createSlice } from "@reduxjs/toolkit";
import { ThreadDTO } from "../../dto/thread-DTO";
import { getThreadAsync } from "./thread-async";

export interface ThreadInitiate {
  threads: ThreadDTO[];
  loading: boolean;
}

const initialState = {} as ThreadInitiate;

const ThreadReducer = createSlice({
  name: "thread",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getThreadAsync.fulfilled, (state, action) => {
        state.threads = action.payload.data;
        state.loading = false;
      })
      .addCase(getThreadAsync.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getThreadAsync.pending, (state) => {
        state.loading = true;
      });
  },
});

export default ThreadReducer.reducer;
