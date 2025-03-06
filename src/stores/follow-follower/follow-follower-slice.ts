import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import FollowFollowerTypes from "../../types/follow-follower-types";
import { getFollowerByProfileIdAsync, getFollowingByProfileIdAsync } from "./follow-follower-async";

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
    addFollower(state) {
      state.follower = state.follower +  1;
      return {
        ...state
      }
    },
    addFollowing(state) {
      state.following = state.following + 1
      return state;
    },
    decreaseFollowing(state) {
      state.following = state.following - 1
      return state;
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
    });
    builder.addCase(getFollowingByProfileIdAsync.fulfilled,(state,action ) => {
      state.following = action.payload.data.length
    }).addCase(getFollowingByProfileIdAsync.pending, (state,) =>{
      state.loading =true
    }).addCase(getFollowingByProfileIdAsync.rejected, (state,) => {
      state.loading = false
    })
  },
});

export const { setFollowFollower, removeFollowFollower,addFollower,addFollowing,decreaseFollowing } = followFollowerslice.actions;

export default followFollowerslice.reducer;
