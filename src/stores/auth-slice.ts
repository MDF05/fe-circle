import { UserDTO } from "../dto/user-dto";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { asyncAuth } from "./auth-async";

const initialState: UserDTO = {} as UserDTO;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserDTO>) {
      return {
        ...state,
        profile: action.payload.profile,
        id: action.payload.id,
        email: action.payload.email,
        socialConnectiion: action.payload.socialConnectiion,
        role: action.payload.role,
      };
    },
    removeUser() {
      return {} as UserDTO;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncAuth.fulfilled, (state, action) => {
      state.profile = action.payload.data.data.profile;
      state.id = action.payload.data.data.id;
      state.email = action.payload.data.data.email;
      state.socialConnectiion = action.payload.data.data.socialConnectiion;
      state.role = action.payload.data.data.role;
    });
    builder.addCase(asyncAuth.rejected, () => {});
    builder.addCase(asyncAuth.pending, () => {});
  },
});

export const { setUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
