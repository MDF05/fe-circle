import {  useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/use-store";
import Cookies from "js-cookie";
import { setUser } from "../../../stores/auth-slice";
import { useTemplateReturn } from "../types/use-template-types";
import { UserDTO } from "../../../dto/user-dto";
import { Dispatch } from "@reduxjs/toolkit";
import { setFollowFollower } from "../../../stores/follow-follower-slice";
import { followingFollowerDTO } from "../../../dto/follow-follower-dto";


export default function useTemplate():useTemplateReturn {
 const location:string = useLocation().pathname.replace("/", "");
 const user:UserDTO = useAppSelector((state) => state.auth)
 const dispatch:Dispatch = useAppDispatch()
 const token:string | undefined = Cookies.get("token")
 
 
 
 const localUser: string | null = localStorage.getItem("user")
 const follow : string | null = localStorage.getItem("followFollower")

 if(Object.getOwnPropertyNames(user).length == 0 && localUser && follow) {
  const user:UserDTO = JSON.parse(localUser)
  console.log(follow)
  const ff:followingFollowerDTO = JSON.parse(follow)
   dispatch(setUser(user))
   dispatch(setFollowFollower({follower : ff.follower, following : ff.following}))
 }

 return {location, token, user}
}