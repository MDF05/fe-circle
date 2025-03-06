import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiV1 } from "../../lib/api-v1";
import { followerORFollowingDTO } from "../../dto/follow-follower-dto";
import { ResponseDTO } from "../../dto/response-DTO";

export const getFollowerByProfileIdAsync = createAsyncThunk<ResponseDTO<followerORFollowingDTO[]>, string>(
  "follower/count",
  async (profileId, thunkApi) => {
    try {
      const response = await apiV1.get<ResponseDTO<followerORFollowingDTO[]>>(`follow/follower/${profileId}`);
      return thunkApi.fulfillWithValue(response.data); 
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const getFollowingByProfileIdAsync = createAsyncThunk<ResponseDTO<followerORFollowingDTO[]>, string>(
  "following/count",
  async (profileId, thunkApi) => {
    try {
      const response = await apiV1.get<ResponseDTO<followerORFollowingDTO[]>>(`follow/following/${profileId}`);
      return thunkApi.fulfillWithValue(response.data); 
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
