"use client";
import { useContext, useState } from "react";
import { DEPARTMENT_URL, DEPARTMENTDROPDOWN_URL, USERS_URL } from "./routes";
import axios from "./axios";
import { AuthContext } from "../context/AuthContext";

export function useDepartmentDropdown() {
  const {auth} = useContext(AuthContext)
  const [departmentList, setDepartmentList] = useState([]);
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
  console.log({"departmentList": departmentList})

  return { departmentList };
}


export function useDepartmentTable() {
    const {auth} = useContext(AuthContext)
    const [departmentTable, setDepartmentTable] = useState("");
    const fetchData = async () => {
      try {
        const response = await axios.get(DEPARTMENT_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
        });
  
        setDepartmentTable(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  
    return { departmentTable, fetchData };
}

export function useEmployeeTable() {
  const {auth} = useContext(AuthContext)
  const [employeeTable, setEmployeeTable] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(USERS_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
      });
      setEmployeeTable(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();

  return { employeeTable, fetchData };
}