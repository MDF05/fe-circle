import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiV1 } from "../lib/api-v1";
import { CheckTokenDTO } from "../dto/user-dto";

export const asyncAuth = createAsyncThunk<CheckTokenDTO, string>("users/fetchById", async (token) => {
  const response = await apiV1.get(`/validate-token/${token}`);
  return await response;
});
