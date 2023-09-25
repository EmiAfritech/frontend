import { useEffect, useState } from "react";
import { Sessions_URL,LOGOUT_URL } from "./routes";
import axios from "./axios";

export function Sessions (){
    const[authSession, setAuthSession]=useState("")
    const authToken = localStorage.getItem("token")
 useEffect(()=>{
    axios.post(
        Sessions_URL,
        JSON.stringify(authToken),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          withCredentials: true,
        }
      ). then(response => {setAuthSession(response), console.log(response)})
 })
}

export function LogOut (){
    const[authSession, setAuthSession]=useState("")
    const authToken = localStorage.getItem("token")
 useEffect(()=>{
    axios.post(
        LOGOUT_URL,
        JSON.stringify(authToken),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          withCredentials: true,
        }
      ). then(response => {setAuthSession(response), console.log(response)})
 })
}


