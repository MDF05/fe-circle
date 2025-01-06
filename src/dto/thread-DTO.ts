import ProfileEntity from "../entities/profile-entity";

export interface ThreadDTO {
  id: string;
  text: string;
  image: string | null;
  profileId: string;
  threadId: null;
  createdAt: string;
  updatedAt: string;
  profile: ProfileEntity;
  _count: {
    like: number;
    replies: number;
  };
}
