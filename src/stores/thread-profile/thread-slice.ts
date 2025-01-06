import { createSlice } from "@reduxjs/toolkit";
import { ThreadDTO } from "../../dto/thread-DTO";
import { getThreadAsyncByUserLogin } from "./thread-profile-async";

export interface ThreadInitiate {
  threads: ThreadDTO[];
  loading: boolean;
}

const initialState = {} as ThreadInitiate;

const ThreadReducer = createSlice({
  name: "threads-profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getThreadAsyncByUserLogin.fulfilled, (state, action) => {
        state.threads = action.payload.data;
        state.loading = false;
      })
      .addCase(getThreadAsyncByUserLogin.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getThreadAsyncByUserLogin.pending, (state) => {
        state.loading = true;
      });
  },
});

export default ThreadReducer.reducer;
