import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import FollowFollowerTypes from "../../types/follow-follower-types";
import { getFollowerByProfileIdAsync } from "./follow-follower-async";

const initialState: FollowFollowerTypes = {} as FollowFollowerTypes;

const followFollowerslice = createSlice({
  name: "followFollower",
  initialState,
  reducers: {
    setFollowFollower(state, action: PayloadAction<FollowFollowerTypes>) {
      return {
        ...state,
        follower: action.payload.follower,
        following: action.payload.following,
      };
    },
    removeFollowFollower() {
      return {} as FollowFollowerTypes;
    },
  },
  extraReducers : (builder) => {
    builder.addCase(getFollowerByProfileIdAsync.fulfilled,(state,action ) => {
      state.follower = action.payload.data.length
    }).addCase(getFollowerByProfileIdAsync.pending, (state,) =>{
      state.loading =true
    }).addCase(getFollowerByProfileIdAsync.rejected, (state,) => {
      state.loading = false
    }) 
  },
});

export const { setFollowFollower, removeFollowFollower } = followFollowerslice.actions;

export default followFollowerslice.reducer;
