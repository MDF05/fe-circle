import { UserDTO } from "../dto/user-dto";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

});

export const { setUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
