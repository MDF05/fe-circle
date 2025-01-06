import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth-slice";
import followFollowerReducer from "./follow-follower-slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    followFollower: followFollowerReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
