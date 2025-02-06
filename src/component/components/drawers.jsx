/* eslint-disable react/prop-types */
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import axios from "../../api/axios";
import { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";
import { AuthContext } from "../../context/AuthContext";

import {
  CREATERISKFORM_URL,
  USERSCREATEFORM_URL,
  MITIGATERISKFORM_URL,
  DEPARTMENTCREATEFORM_URL,
  REVIEWRISKFORM_URL,
  MONITORINGRISKFORM_URL,
  RISKREVIEWERSDROPDOWN_URL,
  RISKIDSREVIEW_URL,
  RISKIDSMONITORING_URL,
  RISKIDSMITIGATION_URL,
  DEPARTMENTDROPDOWN_URL,
  OWNERSDROPDOWN_URL,
} from "../../api/routes";
import { useTranslation } from "react-i18next";
import { useDepartmentDropdown } from "../../api/routes-data";

function getProbabiltyLevelNumber(probabilitys) {
  if (probabilitys === 1) {
    return "Almost Impossible (1)";
  } else if (probabilitys === 2) {
    return "Unlikely (2)";
  } else if (probabilitys === 3) {
    return "Likely (3)";
  } else if (probabilitys === 4) {
    return "Very Likely (4)";
  } else if (probabilitys === 5) {
    return "Almost Certain (5)";
  } else {
    return " ";
  }
}

function getImpactLevelNumber(impact) {
  if (impact === 1) {
    return "Insignificant (1)";
  } else if (impact === 2) {
    return "Minor (2)";
  } else if (impact === 3) {
    return "Moderate (3)";
  } else if (impact === 4) {
    return "Major (4)";
  } else if (impact === 5) {
    return "Catastrophic (5)";
  } else {
    return " ";
  }
}
export function Userforms({ onFormSubmit }) {
  const { auth } = useContext(AuthContext);
  const { t } = useTranslation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const {departmentList} = useDepartmentDropdown()
  console.log(departmentList)

  const notify = () => {
    toast.success("User Saved Successfully", {
      onClose: () => {
        handleClose();
        onFormSubmit();
        reload();
      },
    });
  };
  const notifyFillForms = () => {
    toast.error("Kindly check Input details");
  };
  const notifyServerDown = () => {
    toast.error("Server is currently down Contact your admin");
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        USERSCREATEFORM_URL,
        JSON.stringify({
          firstName,
          lastName,
          departmentName,
          email,
          phoneNumber,
          role,
          password,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
          withCredentials: true,
        }
      );
      notify();
    } catch (error) {
      if (error.response.status === 400) {
        notifyFillForms();
      } else if (error.response.status === 500) {
        notifyServerDown();
      }
    } finally {
      setLoading(false);
    }
  };
  const reload = () => {
    setUserName("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setDepartmentName("");
    setPhoneNumber("");
    setRole("");
    setPassword("");
  };

  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <ToastContainer autoClose={1000} hideProgressBar />
      <Button onClick={handleOpen} size="small" variant="outlined">
        {t("addEmployee")}
      </Button>
      <Drawer anchor={"right"} open={open} onClose={handleClose}>
        <div className="flex justify-center font-bold py-5  text-black">
          {t("newEmployee")}
        </div>
        <hr />
        <form className="w-96">
          <div className=" px-10 py-8">
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                id="firstName"
                value={firstName}
                autoComplete="off"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <label className="text-blue-800 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                {t("firstName")}
              </label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                id="lastName"
                value={lastName}
                autoComplete="off"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <label className="text-blue-800 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                {t("lastName")}
              </label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="email"
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                id="Email"
                value={email}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className="text-blue-800 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                {t("email")}
              </label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="phoneNumber"
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                id="phoneNumber"
                value={phoneNumber}
                autoComplete="off"
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
              <label className="text-blue-800 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                {t("phoneNumber")}
              </label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              {auth.role === "ADMIN" || auth.role === "GENERALMANAGER" ? (
                <>
                  <select
                    type="departmentID"
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    id="departmentID"
                    aria-describedby="departmentID"
                    value={departmentName}
                    autoComplete="off"
                    onChange={(e) => setDepartmentName(e.target.value)}
                    required>
                    <option></option>

                    {departmentList.map((department) => (
                      <option
                        key={department.names.id}
                        value={department.names.name}>
                        {" "}
                        {department.names.name}
                      </option>
                    ))}
                  </select>
                  <label className="text-blue-800 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    {t("department")}
                  </label>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="password"
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                id="password"
                value={password}
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className="text-blue-800 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                {t("password")}
              </label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <select
                type="text"
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                id="role"
                value={role}
                autoComplete="off"
                onChange={(e) => setRole(e.target.value)}
                required>
                <option></option>
                <option value="MANAGER">{t("departmentManager")}</option>
                <option value="AUDITOR">{t("riskAnalyst")}</option>
              </select>
              <label className="text-blue-800 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                {t("role")}
              </label>
            </div>
          </div>

          <div className="px-10">
            <button
              className="inline-block w-full rounded bg-[#000c8e] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#2a36b8] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading} // Disable the button while loading
            >
              {isLoading ? (
                <div className="flex flex-row justify-center">
                  <p className="text-sm pr-2">{t("loading")}</p>
                  <CircularProgress size={27} thickness={6} color="primary" />
                </div>
              ) : (
                t("submit")
              )}
            </button>
          </div>
        </form>
      </Drawer>
    </>
  );
}

export function Departmentforms({ onFormSubmit }) {
  const { auth } = React.useContext(AuthContext);
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [deptID, setDeptID] = useState("");
  const [location, setLocation] = useState("");
  const [isLoading, setLoading] = useState(false);

  const notify = () => {
    toast.success("Department Saved Successfully", {
      onClose: () => {
        handleClose();
        onFormSubmit();
        reload();
      },
    });
  };
  const notifyFillForms = () => {
    toast.error("Kindly check Input details");
  };
  const notifyServerDown = () => {
    toast.error("Server is currently down Contact your admin");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        DEPARTMENTCREATEFORM_URL,
        JSON.stringify({
          name,
          deptID,
          location,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
          withCredentials: true,
        }
      );
      notify();
    } catch (error) {
      if (error.response.status === 400) {
        notifyFillForms();
      } else if (error.response.status === 500) {
        notifyServerDown();
      }
    } finally {
      setLoading(false);
    }
  };

  const reload = () => {
    setName("");
    setDeptID("");
    setLocation("");
  };

  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <ToastContainer autoClose={1000} hideProgressBar />
      <Button onClick={handleOpen} size="medium" variant="outlined">
        {t("addDepartment")}
      </Button>
      <Drawer anchor={"right"} open={open} onClose={handleClose}>
        <div className="flex justify-center font-bold py-5  text-black">
          {t("NewDepartment")}
        </div>
        <hr />
        <form className="w-96">
          <div className=" px-10 py-10">
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                id="departmentID"
                value={deptID}
                autoComplete="off"
                onChange={(e) => setDeptID(e.target.value)}
                required
              />
              <label className="text-blue-800 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                {t("departmentCode")}
              </label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                id="departmentName"
                value={name}
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label className="text-blue-800 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                {t("departmentName")}
              </label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                id="work_location"
                value={location}
                autoComplete="off"
                onChange={(e) => setLocation(e.target.value)}
                required
              />
              <label className="text-blue-800  pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                work-location
              </label>
            </div>
          </div>

          <div className="px-10">
            <button
              className="inline-block w-full rounded bg-[#000c8e] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#2a36b8] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading} // Disable the button while loading
            >
              {isLoading ? (
                <div className="flex flex-row justify-center">
                  <p className="text-sm pr-2">{t("loading")}</p>
                  <CircularProgress size={27} thickness={6} color="primary" />
                </div>
              ) : (
                t("submit")
              )}
            </button>
          </div>
        </form>
      </Drawer>
    </>
  );
}

export function Riskforms({ onFormSubmit, tableData }) {
  const { auth } = useContext(AuthContext);
  const { t } = useTranslation();
  const [riskName, setRiskName] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [ownersName, setOwnersName] = useState([]);
  const [riskOwner, setRiskOwner] = useState("");
  const [riskID, setRiskID] = useState("");
  const [riskImpactLevel, setImpactLevel] = useState("");
  const [riskProbabilityLevel, setProbabityilLevel] = useState("");
  const [riskCategory, setCategory] = useState("");
  const [riskDescription, setDescription] = useState("");
  const [riskObjective, setObjective] = useState("");
  const [riskResponse, setRiskResponse] = useState("");
  const [riskResponseActivity, setRiskResponseActivitiy] = useState("");
  const [tableDataTest, setTableDataTest] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const {departmentList} = useDepartmentDropdown()
  console.log(departmentList)
  useEffect(() => {
    setTableDataTest(tableData.map((item) => item.riskID));
  }, [tableData]);

  const notify = () => {
    toast.success("Risk Saved Successfully", {
      onClose: () => {
        handleClose();
        onFormSubmit();
        reload();
      },
    });
  };
  const notifyFillForms = () => {
    toast.error("Kindly check Input details");
  };
  const notifyServerDown = () => {
    toast.error("Server is currently down Contact your admin");
  };
  const ExistingRiskID = () => {
    toast.error("Risk ID already exists. Please enter a different one.");
  };

  useEffect(() => {
    axios
      .get(OWNERSDROPDOWN_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
        withCredentials: true,
      })
      .then((data) => {
        setOwnersName(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
    
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (tableDataTest.includes(riskID)) {
      ExistingRiskID();
    }

    try {
      if (auth.role === "MANAGER" || auth.role === "AUDITOR") {
        await axios.post(
          CREATERISKFORM_URL,
          JSON.stringify({
            riskID,
            riskName,
            riskOwner,
            riskImpactLevel,
            riskProbabilityLevel,
            riskCategory,
            riskDescription,
            riskObjective,
            riskResponseActivity,
            riskResponse,
          }),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + auth.token,
            },
            withCredentials: true,
          }
        );
      } else {
        await axios.post(
          CREATERISKFORM_URL,
          JSON.stringify({
            riskID,
            riskName,
            departmentName,
            riskOwner,
            riskImpactLevel,
            riskProbabilityLevel,
            riskCategory,
            riskDescription,
            riskObjective,
            riskResponseActivity,
            riskResponse,
          }),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + auth.token,
            },
            withCredentials: true,
          }
        );
      }
      notify();
    } catch (error) {
      if (error.response.status === 400) {
        notifyFillForms();
      } else if (error.response.status === 500) {
        notifyServerDown();
      }
    } finally {
      setLoading(false);
    }
  };

  const reload = () => {
    setRiskName("");
    setDepartmentName("");
    setRiskOwner("");
    setRiskID("");
    setImpactLevel("");
    setProbabityilLevel("");
    setCategory("");
    setDescription("");
    setObjective("");
  };

  function handleOpen() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
    reload();
  }

  return (
    <>
      <ToastContainer hideProgressBar />
      <Button onClick={handleOpen} size="small" variant="outlined">
        {t("addRisk")}
      </Button>
      <Drawer anchor={"right"} open={open} onClose={handleClose}>
        <div className="flex justify-center font-bold py-5  text-black">
          {t("newRisk")}
        </div>
        <hr />
        <form className="w-96">
          <div className=" px-10 py-10">
            {auth.role === "ADMIN" || auth.role === "GENERALMANAGER" ? (
              <div className="relative mb-6" data-te-input-wrapper-init>
                <select
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  id="departmentName"
                  value={departmentName}
                  autoComplete="off"
                  onChange={(e) => setDepartmentName(e.target.value)}
                  required>
                  <option></option>
                  {departmentList.map((department) => (
                    <option
                      key={department.names.id}
                      value={department.names.name}>
                      {" "}
                      {department.names.name}
                    </option>
                  ))}
                </select>
                <label
                  htmlFor="work-location"
                  className="text-blue-800 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  {t("departments")}
                </label>
              </div>
            ) : (
              <></>
            )}
            <div className="grid grid-cols-2 gap-2">
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="riskID"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  id="riskID"
                  aria-describedby="riskID"
                  value={riskID}
                  autoComplete="off"
                  onChange={(e) => setRiskID(e.target.value)}
                  required
                />
                <label
                  htmlFor="fullname"
                  className="text-blue-800 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  {t("riskCode")}
                </label>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  id="FullName"
                  aria-describedby="fullname"
                  value={riskName}
                  autoComplete="off"
                  onChange={(e) => setRiskName(e.target.value)}
                  required
                />
                <label className="text-blue-800 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  {t("riskName")}
                </label>
              </div>
            </div>

            <div className="relative mb-6" data-te-input-wrapper-init>
              <textarea
                type="text"
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                id="objective"
                aria-describedby="objective"
                value={riskObjective}
                autoComplete="off"
                onChange={(e) => setObjective(e.target.value)}
                required
              />
              <label
                htmlFor="work-location"
                className="text-blue-800 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                {t("objective")}
              </label>
            </div>
            <div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="description"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  id="description"
                  aria-describedby="description"
                  value={riskDescription}
                  autoComplete="off"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
                <label
                  htmlFor="department-head"
                  className="text-blue-800 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  {t("description")}
                </label>
              </div>
              <div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <select
                    type="departmentID"
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    id="departmentID"
                    aria-describedby="departmentID"
                    value={riskOwner}
                    autoComplete="off"
                    onChange={(e) => setRiskOwner(e.target.value)}
                    required>
                    <option></option>

                    {ownersName.map((ownersName) => (
                      <option key={ownersName.id} value={ownersName.value}>
                        {" "}
                        {ownersName.value}
                      </option>
                    ))}
                  </select>
                  <label
                    htmlFor="work-location"
                    className="text-blue-800 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    {t("ownerdrawer")}
                  </label>
                </div>

                <div className="relative mb-6" data-te-input-wrapper-init>
                  <select
                    type="probabilityLevel"
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    id="probabilityLevel"
                    aria-describedby="probabilityLevel"
                    value={riskProbabilityLevel}
                    autoComplete="off"
                    onChange={(e) => setProbabityilLevel(e.target.value)}
                    required>
                    <option></option>
                    <option value="1">{t("almostImpossible")} (1)</option>
                    <option value="2">{t("unlikely")} (2)</option>
                    <option value="3">{t("likely")} (3)</option>
                    <option value="4">{t("veryLikely")} (4)</option>
                    <option value="5">{t("almostCertain")} (5)</option>
                  </select>
                  <label
                    htmlFor="department-head"
                    className="text-blue-800 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    {t("probabilityLevel")}
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div className="relative pb-4" data-te-input-wrapper-init>
                <select
                  type="text"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  value={riskCategory}
                  autoComplete="off"
                  onChange={(e) => setCategory(e.target.value)}
                  required>
                  <option></option>
                  <option value="EXTERNAL FACTORS">
                    {t("externalFactors")}
                  </option>
                  <option value="PEOPLE">{t("people")}</option>
                  <option value="SYSTEM">{t("system")}</option>
                  <option value="PROCESS">{t("process")}</option>
                </select>
                <label className="text-blue-800 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  {t("categorydrawer")}
                </label>
              </div>
              <div className="relative pb-4" data-te-input-wrapper-init>
                <select
                  type="impactLevel"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  id="impactLevel"
                  aria-describedby="impactLevel"
                  value={riskImpactLevel}
                  autoComplete="off"
                  onChange={(e) => setImpactLevel(e.target.value)}
                  required>
                  <option></option>
                  <option value="1">{t("insignificant")}t (1)</option>
                  <option value="2">{t("minor")} (2)</option>
                  <option value="3">{t("moderate")} (3)</option>
                  <option value="4">{t("major")} (4)</option>
                  <option value="5">{t("critical")} (5)</option>
                </select>
                <label
                  htmlFor="department-head"
                  className="text-blue-800 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  {t("impactLevel")}
                </label>
              </div>
            </div>
            <div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <select
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  value={riskResponse}
                  autoComplete="off"
                  onChange={(e) => setRiskResponse(e.target.value)}
                  required>
                  <option></option>
                  <option value="Exploit">{t("exploit")}</option>
                  <option value="Accept">{t("accept")}</option>
                  <option value="Enhance">{t("enhance")}</option>
                  <option value="Avoid">{t("avoid")}</option>
                  <option value="Transfer">{t("transfer")}</option>
                  <option value="Mitigate">{t("mitigate")}</option>
                </select>
                <label
                  htmlFor="work-location"
                  className="text-blue-800 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  {t("riskResponsedrawer")}
                </label>
              </div>
              <div className="relative">
                <textarea
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  aria-describedby="objective"
                  value={riskResponseActivity}
                  autoComplete="off"
                  onChange={(e) => setRiskResponseActivitiy(e.target.value)}
                  required
                />
                <label className="text-blue-800 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  {t("riskResponseActivity")}
                </label>
              </div>
            </div>
          </div>
          <div className="px-10">
            <button
              className="inline-block w-full rounded bg-[#000c8e] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#2a36b8] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading}>
              {isLoading ? (
                <div className="flex flex-row justify-center">
                  <p className="text-sm pr-2">{t("loading")}</p>
                  <CircularProgress size={27} thickness={6} color="primary" />
                </div>
              ) : (
                t("submit")
              )}
            </button>
          </div>
        </form>
      </Drawer>
    </>
  );
}
export function RiskReviewforms({ onFormSubmit }) {
  const { auth } = useContext(AuthContext);
  const { t } = useTranslation();
  const [riskID, setRiskID] = useState("");
  const [departmentID, setdepartmentID] = useState(" ");
  const [risks, setRiskIDs] = useState([]);
  const [dept, setDept] = useState([]);
  const [riskReview, setRiskReview] = useState("");
  const [NextRiskReviewDate, setNextRiskReviewDate] = useState("");
  const [riskReviewComments, setriskReviewComments] = useState("");
  const [isLoading, setLoading] = useState(false);

  const notify = () => {
    toast.success("Review Saved Successfully", {
      onClose: () => {
        handleClose();
        onFormSubmit();
        reload();
      },
    });
  };
  const notifyFillForms = () => {
    toast.error("Kindly check Input details");
  };
  const notifyServerDown = () => {
    toast.error("Server is currently down Contact your admin");
  };

  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen(!open);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          RISKIDSREVIEW_URL,
          JSON.stringify({ departmentID }),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + auth.token,
            },
            withCredentials: true,
          }
        );

        setRiskIDs(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchDepartments = async () => {
      try {
        const data = await axios.get(DEPARTMENTDROPDOWN_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
          withCredentials: true,
        });
        setDept(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (auth.role === "MANAGER" || auth.role === "AUDITOR") {
      fetchData();
    } else {
      fetchDepartments();
      if (departmentID !== "") {
        fetchData();
      }
    }
  }, [departmentID]);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    const dateObj = new Date(selectedDate);

    // Extract year, month, and day components
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");

    // Format the date as "yyyy-MM-dd"
    const formattedDate = `${year}-${month}-${day}`;
    // Set the formatted date to state
    setNextRiskReviewDate(formattedDate);
  };

  function handleClose() {
    setOpen(false);
  }

  const reload = () => {
    setRiskID("");
    setdepartmentID("");
    setRiskReview("");
    setNextRiskReviewDate("");
    setriskReviewComments("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        REVIEWRISKFORM_URL,
        JSON.stringify({
          riskID,
          riskReview,
          NextRiskReviewDate,
          riskReviewComments,
          departmentID,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
          withCredentials: true,
        }
      );
      notify();
    } catch (error) {
      if (error.response.status === 400) {
        notifyFillForms();
      } else if (error.response.status === 500) {
        notifyServerDown();
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button onClick={handleOpen} size="small" variant="outlined">
        {t("reviewRisk")}
      </Button>
      <Drawer anchor={"right"} open={open} onClose={handleClose}>
        <ToastContainer onClose={1000} hideProgressBar />
        <div className="flex justify-center font-bold py-5  text-black">
          {t("reviewRisk")}
        </div>
        <hr />
        <form className="w-96">
          <div className=" px-10 py-10">
            <div className="relative mb-6" data-te-input-wrapper-init>
              {auth.role === "ADMIN" || auth.role === "GENERALMANAGER" ? (
                <>
                  <select
                    type="departmentID"
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    id="departmentID"
                    aria-describedby="departmentID"
                    value={departmentID}
                    autoComplete="off"
                    onChange={(e) => setdepartmentID(e.target.value)}
                    required>
                    <option></option>

                    {dept.map((dept) => (
                      <option key={dept.deptIDs.id} value={dept.deptIDs.deptID}>
                        {" "}
                        {dept.deptIDs.deptID}
                      </option>
                    ))}
                  </select>
                  <label className="text-blue-800  pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    {t("departmentId")}
                  </label>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <select
                type="riskID"
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                id="riskID"
                aria-describedby="riskID"
                value={riskID}
                autoComplete="off"
                onChange={(e) => setRiskID(e.target.value)}
                required>
                <option></option>
                {risks.map((risks) => (
                  <option key={risks.id} value={risks.riskID}>
                    {" "}
                    {risks.riskName}
                  </option>
                ))}
              </select>
              <label className="text-blue-800  pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                {t("riskName")}
              </label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="riskid"
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                id="riskID"
                aria-describedby="riskID"
                value={riskID}
                autoComplete="off"
              />
              <label className="text-blue-800  pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                {t("riskId")}
              </label>
            </div>
            <div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <select
                  type="text"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  id="riskReview"
                  value={riskReview}
                  autoComplete="off"
                  onChange={(e) => setRiskReview(e.target.value)}
                  required>
                  <option></option>
                  <option value="accept risk">{t("acceptRisk")}</option>
                  <option value="reject risk">{t("rejectRisk")}</option>
                </select>
                <label className="text-blue-800  pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  {t("riskReview")}
                </label>
              </div>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              {riskReview === "reject risk" ? (
                <>
                  <input
                    type="date"
                    value={NextRiskReviewDate}
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    onChange={handleDateChange}
                  />
                  <label className="text-blue-800  pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    {t("nextReviewDate")}
                  </label>
                </>
              ) : (
                <></>
              )}
            </div>
            <div>
              <div className="relative mb-6">
                <textarea
                  type="description"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  id="riskReviewComments"
                  value={riskReviewComments}
                  autoComplete="off"
                  onChange={(e) => setriskReviewComments(e.target.value)}
                  required
                />
                <label className="text-blue-800  pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  {t("comments")}
                </label>
              </div>
            </div>
          </div>
          <div className="px-10">
            <button
              className="inline-block w-full rounded bg-[#000c8e] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#2a36b8] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading} // Disable the button while loading
            >
              {isLoading ? (
                <div className="flex flex-row justify-center">
                  <p className="text-sm pr-2">{t("loading")}</p>
                  <CircularProgress size={27} thickness={6} color="primary" />
                </div>
              ) : (
                t("submit")
              )}
            </button>
          </div>
        </form>
      </Drawer>
    </>
  );
}
export function RiskMitigationforms({ onFormSubmit }) {
  const { auth } = useContext(AuthContext);
  const { t } = useTranslation();
  const [riskName, setRiskName] = useState("");
  const [risks, setRiskIDs] = useState([]);
  const [dept, setDept] = useState([]);
  const [ownersName, setOwnersName] = useState([]);
  const [departmentID, setdepartmentID] = useState(" ");
  const [endDate, setEndDate] = useState(new Date());
  const [mitigatedRiskProbabilityLevel, setmitigatedRiskProbabilityLevel] =
    useState("");
  const [mitigatedRiskImpactLevel, setmitigatedRiskImpactLevel] = useState("");
  const [mitigationControl, setmitigationControl] = useState("");
  const [mitigationEffort, setmitigationEffort] = useState("");
  const [riskReviewer, setRiskReviewer] = useState("");
  const [mitigationCost, setmitigationCost] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [riskID, riskCategory, impactLevel, probabilityLevel] =
    riskName.split(",");

  const impactLevelNumber = getImpactLevelNumber(parseInt(impactLevel, 10));
  const probabilityLevelNumber = getProbabiltyLevelNumber(
    parseInt(probabilityLevel, 10)
  );
  const hostaddress = "http://localhost:5173/risk-mitigation";

  const notify = () => {
    toast.success("Risk Mitigation Saved Successfully", {
      onClose: () => {
        handleClose();
        onFormSubmit();
        reload();
      },
    });
  };
  const notifyFillForms = () => {
    toast.error("Kindly check Input details");
  };
  const notifyServerDown = () => {
    toast.error("Server is currently down Contact your admin");
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    const dateObj = new Date(selectedDate);

    // Extract year, month, and day components
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");

    // Format the date as "yyyy-MM-dd"
    const formattedDate = `${year}-${month}-${day}`;
    // Set the formatted date to state
    setEndDate(formattedDate);
  };

  useEffect(() => {
    axios
      .get(RISKREVIEWERSDROPDOWN_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
        withCredentials: true,
      })
      .then((data) => {
        setOwnersName(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          RISKIDSMITIGATION_URL,
          JSON.stringify({ departmentID }),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + auth.token,
            },
            withCredentials: true,
          }
        );

        setRiskIDs(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchDepartments = async () => {
      try {
        const data = await axios.get(DEPARTMENTDROPDOWN_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
          withCredentials: true,
        });
        setDept(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (auth.role === "MANAGER" || auth.role === "AUDITOR") {
      fetchData();
    } else {
      fetchDepartments();
      if (departmentID !== "") {
        fetchData();
      }
    }
  }, [departmentID]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (auth.role === "MANAGER" || auth.role === "AUDITOR") {
        await axios.post(
          MITIGATERISKFORM_URL,
          JSON.stringify({
            riskID,
            mitigatedRiskProbabilityLevel,
            mitigatedRiskImpactLevel,
            mitigationControl,
            mitigationEffort,
            riskReviewer,
            mitigationCost,
            endDate,
            hostaddress,
          }),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
            withCredentials: true,
          }
        );
      } else {
        await axios.post(
          MITIGATERISKFORM_URL,
          JSON.stringify({
            riskID,
            mitigatedRiskProbabilityLevel,
            mitigatedRiskImpactLevel,
            mitigationControl,
            mitigationEffort,
            riskReviewer,
            mitigationCost,
            departmentID,
            endDate,
            hostaddress,
          }),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + auth.token,
            },
            withCredentials: true,
          }
        );
      }
      notify();
    } catch (error) {
      if (error.response.status === 400) {
        notifyFillForms();
      } else if (error.response.status === 500) {
        notifyServerDown();
      }
    } finally {
      setLoading(false);
    }
  };

  const reload = () => {
    setRiskName("");
    setdepartmentID("");
    setmitigatedRiskProbabilityLevel("");
    setmitigatedRiskImpactLevel("");
    setmitigationControl("");
    setmitigationEffort("");
    setRiskReviewer("");
    setmitigationCost("");
    setEndDate("");
  };

  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <ToastContainer onClose={1000} hideProgressBar />
      <Button onClick={handleOpen} size="small" variant="outlined">
        {t("mitigateRisk")}
      </Button>
      <Drawer anchor={"right"} open={open} onClose={handleClose}>
        <div className="flex justify-center font-bold py-5  text-black">
          {t("mitigateRisk")}
        </div>
        <hr />
        <form className="w-96">
          <div className=" px-10 py-10">
            <div className="relative mb-6" data-te-input-wrapper-init>
              {auth.role === "ADMIN" || auth.role === "GENERALMANAGER" ? (
                <>
                  <select
                    type="departmentID"
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    id="departmentID"
                    aria-describedby="departmentID"
                    value={departmentID}
                    autoComplete="off"
                    onChange={(e) => setdepartmentID(e.target.value)}
                    required>
                    <option></option>

                    {dept.map((dept) => (
                      <option key={dept.deptIDs.id} value={dept.deptIDs.deptID}>
                        {" "}
                        {dept.deptIDs.deptID}
                      </option>
                    ))}
                  </select>
                  <label className="text-blue-800  pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    {t("departmentId")}
                  </label>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <select
                type="riskID"
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                id="riskID"
                aria-describedby="riskID"
                value={riskName}
                autoComplete="off"
                onChange={(e) => setRiskName(e.target.value)}
                required>
                <option></option>
                {risks.map((risks) => (
                  <option
                    key={risks.id}
                    value={[
                      risks.riskID,
                      risks.riskCategory,
                      risks.impact,
                      risks.probability,
                    ]}>
                    {" "}
                    {risks.riskName}
                  </option>
                ))}
              </select>
              <label className="text-blue-800   pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                {t("riskName")}
              </label>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="riskid"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  id="riskID"
                  aria-describedby="riskID"
                  value={riskID}
                  autoComplete="off"
                  readOnly
                />

                <label className="text-blue-800  pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  {t("riskId")}
                </label>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="category"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  id="category"
                  aria-describedby="riskID"
                  value={riskCategory}
                  autoComplete="off"
                  readOnly
                />

                <label className="text-blue-800  pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  {t("categorydrawer")}
                </label>
              </div>
            </div>
            <div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="impact"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  id="impact"
                  aria-describedby="riskID"
                  value={impactLevelNumber}
                  autoComplete="off"
                  readOnly
                />

                <label className="text-blue-800  pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  {t("mitigatedRiskImpactLevel")}
                </label>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="probability"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  id="probability"
                  aria-describedby="riskID"
                  value={probabilityLevelNumber}
                  autoComplete="off"
                  readOnly
                />

                <label className="text-blue-800  pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  {t("probabilityLevel")}
                </label>
              </div>
            </div>
            <div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <select
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  value={mitigatedRiskProbabilityLevel}
                  autoComplete="off"
                  onChange={(e) =>
                    setmitigatedRiskProbabilityLevel(e.target.value)
                  }
                  required>
                  <option></option>
                  <option value="1">{t("almostImpossible")} (1)</option>
                  <option value="2">{t("unlikely")} (2)</option>
                  <option value="3">{t("likely")} (3)</option>
                  <option value="4">{t("veryLikely")} (4)</option>
                  <option value="5">{t("almostCertain")} (5)</option>
                </select>
                <label className="text-blue-800  pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  {t("mitgatedRiskProbabillityLevel")}
                </label>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <select
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  value={mitigatedRiskImpactLevel}
                  autoComplete="off"
                  onChange={(e) => setmitigatedRiskImpactLevel(e.target.value)}
                  required>
                  <option></option>
                  <option value="1">{t("insignificant")}t (1)</option>
                  <option value="2">{t("minor")} (2)</option>
                  <option value="3">{t("moderate")} (3)</option>
                  <option value="4">{t("major")} (4)</option>
                  <option value="5">{t("critical")} (5)</option>
                </select>
                <label className="text-blue-800  pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  {t("mitigatedRiskImpactLevel")}l
                </label>
              </div>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <select
                type="text"
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                id="mitigationEffort"
                value={mitigationEffort}
                autoComplete="off"
                onChange={(e) => setmitigationEffort(e.target.value)}
                required>
                <option></option>
                <option value="Trivial">{t("trivial")}</option>
                <option value="Minor">{t("minor")}</option>
                <option value="Considerable">{t("considerable")}</option>
                <option value="Significant">{t("significant")}</option>
                <option value="Exceptional">{t("exceptional")}</option>
              </select>

              <label className="text-blue-800  pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                {t("mitigationEffort")}
              </label>
            </div>
            <div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <select
                  type="text"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  id="mitigationControl"
                  value={mitigationControl}
                  autoComplete="off"
                  onChange={(e) => setmitigationControl(e.target.value)}
                  required>
                  <option></option>
                  <option value="MANUAL">{t("manual")}</option>
                  <option value="SYSTEMATIC">{t("systematic")}</option>
                </select>
                <label className="text-blue-800 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  {t("mitigationControl")}
                </label>
              </div>
              <div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="date"
                    value={endDate}
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    onChange={handleDateChange}
                  />
                  <label className="text-blue-800  pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    {t("mitigationDueDate")}
                  </label>
                </div>
              </div>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <select
                data-te-select-init
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-5 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                value={mitigationCost}
                autoComplete="off"
                onChange={(e) => setmitigationCost(e.target.value)}
                required>
                <option></option>
                <option value="$0 TO $100 000" className="mb-6">
                  $0 -$100,000
                </option>
                <option value="$100 001 TO $200 000">$100,001 -$200,000</option>
                <option value="$300 001 TO 400 000">$300,001 -$400,000</option>
                <option value="$400 001 TO $500 000">$400,001 -$500,000</option>
                <option value="$500 001 TO $600 000">$500,001 -$600,000</option>
                <option value="$600 001 TO $700 000">$600,001 -$700,000</option>
                <option value="$700 001 TO $800 000">$700,001 -$800,000</option>
                <option value="$800 001 TO $900 000">$800,001 -$900,000</option>
                <option value="$900 001 TO $1000 000">
                  $900 001 -$1000,000
                </option>
              </select>
              <label
                htmlFor="department-head"
                className="text-blue-800 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                {t("mitigationCost")}
              </label>
            </div>
            <div>
              <div className="relative pb-4" data-te-input-wrapper-init>
                <select
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  value={riskReviewer}
                  autoComplete="off"
                  onChange={(e) => setRiskReviewer(e.target.value)}
                  required>
                  <option></option>

                  {ownersName.map((ownersName) => (
                    <option key={ownersName.id} value={ownersName.value}>
                      {" "}
                      {ownersName.value}
                    </option>
                  ))}
                </select>
                <label className="text-blue-800 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  {t("riskReviewer")}
                </label>
              </div>
            </div>
          </div>

          <div className="px-10">
            <button
              className="inline-block w-full rounded bg-[#000c8e] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#2a36b8] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading}>
              {isLoading ? (
                <div className="flex flex-row justify-center">
                  <p className="text-sm pr-2">{t("loading")}</p>
                  <CircularProgress size={27} thickness={6} color="primary" />
                </div>
              ) : (
                t("submit")
              )}
            </button>
          </div>
        </form>
      </Drawer>
    </>
  );
}
export function RiskMonitoringforms({ onFormSubmit }) {
  const { auth } = useContext(AuthContext);
  const { t } = useTranslation();
  const [riskID, setRiskID] = useState("");
  const [risks, setRiskIDs] = useState([]);
  const [dept, setDept] = useState([]);
  const [ownersName, setOwnersName] = useState([]);
  const [departmentID, setdepartmentID] = useState(" ");
  const [riskResponseActivitiyStatus, setRiskResponseActivitiyStatus] =
    useState("");
  const [riskResponseImplementation, setRiskResponseImplementation] =
    useState("");
  const [challenges, setChallenges] = useState("");
  const [recommendedChanges, setRecommendedChanges] = useState("");
  const [mitigationOwner, setmitigationOwner] = useState("");
  const [comments, setComments] = useState("");
  const [closeStatus, setRiskClosed] = useState("");
  const [isLoading, setLoading] = useState(false);

  const notify = () => {
    toast.success("Risk Monitoring Saved Successfully", {
      onClose: () => {
        handleClose();
        onFormSubmit();
        reload();
      },
    });
  };
  const notifyFillForms = () => {
    toast.error("Kindly check Input details");
  };
  const notifyServerDown = () => {
    toast.error("Server is currently down Contact your admin");
  };

  useEffect(() => {
    axios
      .get(OWNERSDROPDOWN_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
        withCredentials: true,
      })
      .then((data) => {
        setOwnersName(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          RISKIDSMONITORING_URL,
          JSON.stringify({ departmentID }),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + auth.token,
            },
            withCredentials: true,
          }
        );

        setRiskIDs(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchDepartments = async () => {
      try {
        const data = await axios.get(DEPARTMENTDROPDOWN_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
          withCredentials: true,
        });
        setDept(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (auth.role === "MANAGER" || auth.role === "AUDITOR") {
      fetchData();
    } else {
      fetchDepartments();
      if (departmentID !== "") {
        fetchData();
      }
    }
  }, [departmentID]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (auth.role === "MANAGER") {
        await axios.post(
          MONITORINGRISKFORM_URL,
          JSON.stringify({
            riskID,
            riskResponseActivitiyStatus,
            riskResponseImplementation,
            challenges,
            mitigationOwner,
            recommendedChanges,
            comments,
            closeStatus,
          }),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + auth.token,
            },
            withCredentials: true,
          }
        );
      } else {
        await axios.post(
          MONITORINGRISKFORM_URL,
          JSON.stringify({
            riskID,
            riskResponseActivitiyStatus,
            riskResponseImplementation,
            challenges,
            recommendedChanges,
            mitigationOwner,
            comments,
            departmentID,
          }),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + auth.token,
            },
            withCredentials: true,
          }
        );
      }
      notify();
    } catch (error) {
      if (error.response.status === 400) {
        notifyFillForms();
      } else if (error.response.status === 500) {
        notifyServerDown();
      }
    } finally {
      setLoading(false);
    }
  };

  const reload = () => {
    setdepartmentID("");
    setRiskID("");
    setRiskResponseActivitiyStatus("");
    setRiskResponseImplementation("");
    setChallenges("");
    setmitigationOwner("");
    setRecommendedChanges("");
    setComments("");
  };

  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <ToastContainer onClose={1000} hideProgressBar />
      <Button onClick={handleOpen} size="small" variant="outlined">
        {t("monitorRisk")}
      </Button>
      <Drawer anchor={"right"} open={open} onClose={handleClose}>
        <div className="flex justify-center font-bold py-5  text-black">
          {t("monitorRisk")}
        </div>
        <hr />
        <form className="w-96">
          <div className=" px-10 py-10">
            <div className="relative mb-6" data-te-input-wrapper-init>
              {auth.role === "ADMIN" || auth.role === "GENERALMANAGER" ? (
                <>
                  <select
                    type="departmentID"
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    id="departmentID"
                    aria-describedby="departmentID"
                    value={departmentID}
                    autoComplete="off"
                    onChange={(e) => setdepartmentID(e.target.value)}
                    required>
                    <option></option>

                    {dept.map((dept) => (
                      <option key={dept.deptIDs.id} value={dept.deptIDs.deptID}>
                        {" "}
                        {dept.deptIDs.deptID}
                      </option>
                    ))}
                  </select>
                  <label className="text-blue-800  pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    {t("departmentId")}
                  </label>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <select
                type="riskID"
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                id="riskID"
                aria-describedby="riskID"
                value={riskID}
                autoComplete="off"
                onChange={(e) => setRiskID(e.target.value)}
                required>
                <option></option>
                {risks.map((risks) => (
                  <option key={risks.id} value={risks.riskID}>
                    {" "}
                    {risks.riskName}
                  </option>
                ))}
              </select>
              <label className="text-blue-800 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                {t("riskName")}
              </label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="riskid"
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                id="riskID"
                aria-describedby="riskID"
                value={riskID}
                autoComplete="off"
              />

              <label className="text-blue-800   pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                {t("riskId")}
              </label>
            </div>
            <div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <select
                  type="riskResponseActivityStatus"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  id="riskResponseActivitiyStatus"
                  value={riskResponseActivitiyStatus}
                  autoComplete="off"
                  onChange={(e) =>
                    setRiskResponseActivitiyStatus(e.target.value)
                  }
                  required>
                  <option></option>
                  <option value="YES">{t("yes")}</option>
                  <option value="NO">{t("no")}</option>
                </select>

                <label className="text-blue-800 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  {t("responseActivityStatus")}
                </label>
              </div>
            </div>
            <div>
              <div className="relative mb-6">
                <input
                  type="text"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  id="riskResponseImplementation"
                  value={riskResponseImplementation}
                  autoComplete="off"
                  onChange={(e) =>
                    setRiskResponseImplementation(e.target.value)
                  }
                  required
                />
                <label className="text-blue-800 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  {t("responseImplementation")}
                </label>
              </div>
            </div>
            <div>
              <div className="relative mb-6">
                <input
                  type="text"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  id="challenges"
                  value={challenges}
                  autoComplete="off"
                  onChange={(e) => setChallenges(e.target.value)}
                  required
                />
                <label className="text-blue-800 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  {t("challenges")}
                </label>
              </div>
            </div>
            <div>
              <div className="relative mb-6">
                <input
                  type="text"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  id="recommendedChanges"
                  value={recommendedChanges}
                  autoComplete="off"
                  onChange={(e) => setRecommendedChanges(e.target.value)}
                  required
                />
                <label className="text-blue-800  pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  {t("recommendedChanges")}
                </label>
              </div>
            </div>
            <div>
              <div className="relative mb-6">
                <textarea
                  type="text"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  id="comments"
                  value={comments}
                  autoComplete="off"
                  onChange={(e) => setComments(e.target.value)}
                  required
                />
                <label className="text-blue-800 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  {t("comments")}
                </label>
              </div>
            </div>
            <div className="relative pb-4" data-te-input-wrapper-init>
              <select
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                value={mitigationOwner}
                autoComplete="off"
                onChange={(e) => setmitigationOwner(e.target.value)}
                required>
                <option></option>

                {ownersName.map((ownersName) => (
                  <option key={ownersName.id} value={ownersName.value}>
                    {" "}
                    {ownersName.value}
                  </option>
                ))}
              </select>
              <label className="text-blue-800 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                {t("mitigationOwner")}
              </label>
            </div>
            <div className="relative mb-4" data-te-input-wrapper-init>
              <select
                type="text"
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                id="riskReview"
                value={closeStatus}
                autoComplete="off"
                onChange={(e) => setRiskClosed(e.target.value)}
                required>
                <option></option>
                <option value="Yes">{"yes"}</option>
                <option value="No">{"no"}</option>
              </select>
              <label className="text-blue-800 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                {t("riskClosedStatus")}
              </label>
            </div>
          </div>

          <div className="px-7">
            <button
              className="inline-block w-full rounded bg-[#000c8e] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#2a36b8] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading} // Disable the button while loading
            >
              {isLoading ? (
                <div className="flex flex-row justify-center">
                  <p className="text-sm pr-2">{"loading"}</p>
                  <CircularProgress size={27} thickness={6} color="primary" />
                </div>
              ) : (
                t("submit")
              )}
            </button>
          </div>
        </form>
      </Drawer>
    </>
  );
}
