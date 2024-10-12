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
 
 
 
 let localUser: string | null = localStorage.getItem("user")
 if(Object.getOwnPropertyNames(user).length == 0 && localUser) {
   const user:UserDTO = JSON.parse(localUser)
   dispatch(setUser(user))
   dispatch(setFollowFollower({follower : user.profile._count.follower, following : user.profile._count.following}))
 }

 return {location, token, user}
}