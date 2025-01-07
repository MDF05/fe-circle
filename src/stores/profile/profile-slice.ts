import { createSlice } from "@reduxjs/toolkit";
import ProfileConstUserEntity from "../../entities/profile-entity-constraints-user";
import { getProfileByIdAsync } from "./profile-async";

export interface ProfileInitiate {
  profile: ProfileConstUserEntity;
  loading: boolean;
}

const initialState = {} as ProfileInitiate;

const PRofileReducer = createSlice({
  name: "profile",
  initialState,
  reducers: {
    removeProfile: (state) => {
      state.profile = {} as ProfileConstUserEntity;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProfileByIdAsync.fulfilled, (state, action) => {
      state.profile = action.payload.data;
      state.loading = false;
    });
    builder.addCase(getProfileByIdAsync.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getProfileByIdAsync.pending, (state) => {
      state.loading = true;
    });
  },
});

export const { removeProfile } = PRofileReducer.actions;

export default PRofileReducer.reducer;
