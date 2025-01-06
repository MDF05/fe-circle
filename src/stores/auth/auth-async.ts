import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiV1 } from "../../lib/api-v1";
import { CheckTokenDTO, LoginDTO } from "../../dto/user-dto";
import { LoginSchema } from "../../features/auth/schema/login-schema";
import { toast } from "react-toastify";
import { ResponseDTO } from "../../dto/response-DTO";

export const asyncAuth = createAsyncThunk<CheckTokenDTO, string>("users/fetchById", async (token, thunkApi) => {
  try {
    const response = await apiV1.get(`/validate-token/${token}`);
    return response;
  } catch (err) {
    toast.error("Failed to login");
    return thunkApi.rejectWithValue(err);
  }
});

export const loginAsync = createAsyncThunk<ResponseDTO<LoginDTO>, LoginSchema>("/login", async (dto, thunkApi) => {
  try {
    const response = await apiV1.post("/login", dto);

    toast.success("succesfull login waiting to redirect to page ");
    return thunkApi.fulfillWithValue(response.data);
  } catch (err) {
    toast.error("Failed to login");
    return thunkApi.rejectWithValue(err);
  }
});
