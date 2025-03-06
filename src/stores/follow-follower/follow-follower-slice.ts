import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getFollowerByProfileIdAsync, getFollowingByProfileIdAsync } from "./follow-follower-async";
import {  FollowerFollowingInitiate } from "../../dto/follow-follower-dto"

const initialState: FollowerFollowingInitiate = {} as FollowerFollowingInitiate;

const followFollowerslice = createSlice({
  name: "followFollower",
  initialState,
  reducers: {
    setFollowFollower(state, action: PayloadAction<FollowerFollowingInitiate>) {
      return {
        ...state,
        followerCount: action.payload.followerCount,
        followingCount: action.payload.followingCount,
      };
    },
    addFollower(state) {
      state.followerCount = state.followerCount +  1;
      return {
        ...state
      }
    },
    addFollowing(state) {
      state.followingCount = state.followingCount + 1
      return state;
    },
    decreaseFollowing(state) {
      state.followingCount = state.followingCount - 1
      return state;
    },
    removeFollowFollower() {
      return {} as FollowerFollowingInitiate;
    },
  },
  extraReducers : (builder) => {
    builder.addCase(getFollowerByProfileIdAsync.fulfilled,(state,action ) => {
      state.followerCount = action.payload.data.length
      state.follower = action.payload.data

    }).addCase(getFollowerByProfileIdAsync.pending, (state,) =>{
      state.loading =true
    }).addCase(getFollowerByProfileIdAsync.rejected, (state,) => {
      state.loading = false
    });
    builder.addCase(getFollowingByProfileIdAsync.fulfilled,(state,action ) => {
      state.followingCount = action.payload.data.length
      state.following = action.payload.data
      
    }).addCase(getFollowingByProfileIdAsync.pending, (state,) =>{
      state.loading =true
    }).addCase(getFollowingByProfileIdAsync.rejected, (state,) => {
      state.loading = false
    })
  },
});

export const { setFollowFollower, removeFollowFollower,addFollower,addFollowing,decreaseFollowing } = followFollowerslice.actions;

export default followFollowerslice.reducer;
