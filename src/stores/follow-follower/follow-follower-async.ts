import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiV1 } from "../../lib/api-v1";
import { FollowerORFollowingDTO } from "../../dto/follow-follower-dto";
import { ResponseDTO } from "../../dto/response-DTO";

export const getFollowerByProfileIdAsync = createAsyncThunk<ResponseDTO<FollowerORFollowingDTO[]>, string>(
  "follower/count",
  async (profileId, thunkApi) => {
    try {
      const response = await apiV1.get<ResponseDTO<FollowerORFollowingDTO[]>>(`follow/follower/${profileId}`);
      return thunkApi.fulfillWithValue(response.data); 
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const getFollowingByProfileIdAsync = createAsyncThunk<ResponseDTO<FollowerORFollowingDTO[]>, string>(
  "following/count",
  async (profileId, thunkApi) => {
    try {
      const response = await apiV1.get<ResponseDTO<FollowerORFollowingDTO[]>>(`follow/following/${profileId}`);
      return thunkApi.fulfillWithValue(response.data); 
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
