import {  useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/use-store";
import Cookies from "js-cookie";
import { setUser } from "../../../stores/auth-slice";
import { useTemplateReturn } from "../types/use-template-types";
import { UserDTO } from "../../../dto/user-dto";
import { Dispatch } from "@reduxjs/toolkit";
import { setFollowFollower } from "../../../stores/follow-follower-slice";


export default function useTemplate():useTemplateReturn {
 const location:string = useLocation().pathname.replace("/", "");
 const user:UserDTO = useAppSelector((state) => state.auth)
 const dispatch:Dispatch = useAppDispatch()
 const token:string | undefined = Cookies.get("token")
 
 
 
 const localUser: string | null = localStorage.getItem("user")
 const follow : any = localStorage.getItem("followFollower")
 if(Object.getOwnPropertyNames(user).length == 0 && localUser) {
  const user:UserDTO = JSON.parse(localUser)
  const ff = JSON.parse(follow)
   dispatch(setUser(user))
   dispatch(setFollowFollower({follower : ff.follower, following : ff.following}))
 }

 return {location, token, user}
}