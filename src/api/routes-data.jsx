"use client";
import { useState } from "react";
import { DEPARTMENT_URL, DEPARTMENTDROPDOWN_URL } from "./routes";

export function useDepartmentDropdown() {
  const [departmentList, setDepartmentList] = useState("");
  const fetchData = async () => {
    try {
      const response = await axios.get(DEPARTMENTDROPDOWN_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
      });

      setDepartmentList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();

  return { departmentList };
}


export function useDepartmentTable() {
    const [departmentList, setDepartmentList] = useState("");
    const fetchData = async () => {
      try {
        const response = await axios.get(DEPARTMENT_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
        });
  
        setDepartmentList(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  
    return { departmentList };
  }