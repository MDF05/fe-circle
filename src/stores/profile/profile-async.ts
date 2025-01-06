import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiV1 } from "../../lib/api-v1";
import { ResponseDTO } from "../../dto/response-DTO";
import ProfileConstUserEntity from "../../entities/profile-entity-constraints-user";

export const getProfileByIdAsync = createAsyncThunk<ResponseDTO<ProfileConstUserEntity>, string>("get/profile/id", async (profileId, thunkApi) => {
  try {
    const response = await apiV1.get(`/profile/${profileId}`);

    return thunkApi.fulfillWithValue(response.data);
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  }
});
