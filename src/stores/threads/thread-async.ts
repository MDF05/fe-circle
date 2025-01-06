import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiV1 } from "../../lib/api-v1";
import { ResponseDTO } from "../../dto/response-DTO";
import { ThreadDTO } from "../../dto/thread-DTO";

export const getThreadAsync = createAsyncThunk<ResponseDTO<ThreadDTO[]>, void>("get/threads", async (_, thunkApi) => {
  try {
    const response = await apiV1.get("/thread");

    return thunkApi.fulfillWithValue(response.data);
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  }
});
