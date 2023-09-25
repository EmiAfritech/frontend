import { useEffect, useState } from "react";
import { Sessions_URL,LOGOUT_URL } from "./routes";
import axios from "./axios";
import { useNavigate } from "react-router-dom";

export async function Sessions (){
    const[authSession, setAuthSession]=useState("")
    const token = localStorage.getItem("token")
    console.log(token)



  try {
    const response = await axios.post(
      Sessions_URL,
      {token:token},
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(response)
  }catch (err) {
    console.log("Failed to get session status")
  }
}

export function LogOut (){

  const navigate = useNavigate();
 useEffect(()=>{
    axios.get(
        LOGOUT_URL,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          withCredentials: true,
        }
      )
      navigate("/", { replace: true });
 })
}


