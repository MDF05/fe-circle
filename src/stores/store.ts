import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth-slice";
import threadReducer from "./threads/thread-slice";
import threadProfileReducer from "./thread-profile/thread-slice";
import followFollowerReducer from "./follow-follower/follow-follower-slice";
import profileReducer from "./profile/profile-slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    followFollower: followFollowerReducer,
    threads: threadReducer,
    threadProfile: threadProfileReducer,
    profile: profileReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
