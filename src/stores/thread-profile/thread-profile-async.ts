import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiV1 } from "../../lib/api-v1";
import { ResponseDTO } from "../../dto/response-DTO";
import { ThreadDTO } from "../../dto/thread-DTO";

export const getThreadAsyncByUserLogin = createAsyncThunk<ResponseDTO<ThreadDTO[]>, string>("get/thread/iduserLogin", async (profileId, thunkApi) => {
  try {
    const response = await apiV1.get(`/thread/profile/${profileId}`);

    return thunkApi.fulfillWithValue(response.data);
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  }
});
