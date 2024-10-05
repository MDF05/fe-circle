import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import FollowFollowerTypes from './../types/follow-follower-types';


const initialState: FollowFollowerTypes = {} as FollowFollowerTypes;


const followFollowerslice = createSlice({
    name: "auth",
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

});

export const { setFollowFollower, removeFollowFollower } = followFollowerslice.actions;

export default followFollowerslice.reducer;
