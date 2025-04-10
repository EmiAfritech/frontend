/* eslint-disable react/prop-types */
import * as React from "react";
import { Drawer, Button } from "@mui/material";
import axios from "../../api/axios";
import { useState, useContext, useMemo, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../context/AuthContext";

import {
  CREATERISKFORM_URL,
  USERSCREATEFORM_URL,
  MITIGATERISKFORM_URL,
  DEPARTMENTCREATEFORM_URL,
  REVIEWRISKFORM_URL,
  MONITORINGRISKFORM_URL,
  RISKREVIEWERSDROPDOWN_URL,
  RISKIDSMONITORING_URL,
  DEPARTMENTDROPDOWN_URL,
  OWNERSDROPDOWN_URL,
  FRAMEWORKFORM_URL,
  CONTROLFORM_URL,
  COMPLIANCEFORM_URL,
} from "../../api/routes";
import { useTranslation } from "react-i18next";
import {
  useControlItemDropDown,
  useDepartmentCodeDropdown,
  useDepartmentDropdown,
  useFrameWorkDropDown,
  useRiskIDMonitoring,
  useRiskOwnersDropdown,
  useRiskReviewer,
  useRisksNeededToBeReviewed,
  useRiskToBeMitigated,
  useRiskToBeMitigatedInfo,
} from "../../api/routes-data";
import { CustomButton, FormInputField, CustomSelect,} from "./widgets";
import { getRiskImpactLevel, getRiskProbabilityLevel } from "./modalforms";
import { GRCFormsArray } from "./formarrays";
import { showToast } from "./notifications";

export function Userforms({ onFormSubmit }) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const [departmentName, setDepartment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [role, setRole] = useState("");
  const { userRole } = useMemo(() => GRCFormsArray(t), [t]);
  const { auth } = useContext(AuthContext);
  const { departmentCodeList } = useDepartmentCodeDropdown();
  const [userValue, setUserValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserValue((prevData) => ({ ...prevData, [id]: value }));
  };

  const notify = () => {
    toast.success(t("userSavedSuccessfully") , {
      onClose: () => {
        handleClose();
        onFormSubmit();
        reload();
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post(
        USERSCREATEFORM_URL,JSON.stringify({
          firstName: userValue.firstName,
          lastName: userValue.lastName,
          deptID: departmentName,
          email: userValue.email,
          phoneNumber: userValue.phoneNumber,
          position: role,
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
        showToast("Kindly check Input details", "error");
      } else if (error.response.status === 500) {
        showToast("Server is currently down Contact your admin", "error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  const reload = () => {
    setUserValue({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
    });
    setDepartment("")
    setRole("")
  };

  return (
    <div>
      <CustomButton
        label={t("addEmployee")}
        type="New Declaration"
        className="custom-class rounded-full p-2 px-5"
        onClick={handleOpen}
      />
      <Drawer anchor={"right"} open={open} onClose={handleClose}>
        <div className="flex justify-center font-bold py-5  text-black">
          {t("newEmployee")}
        </div>
        <hr />
        <form className="w-96">
          <div className=" px-10 py-8 flex flex-col space-y-6">
            {(auth.role === "ADMIN" || auth.role === "GENERALMANAGER") && (
              <CustomSelect
                id="department"
                label={t("departments")}
                value={departmentName}
                onChange={setDepartment}
                options={departmentCodeList}
                searchable={true}
                required
                group={false}
              />
            )}
            <FormInputField
              id="firstName"
              label={t("firstName")}
              value={userValue.firstName}
              onChange={handleInputChange}
              required
            />
            <FormInputField
              id="lastName"
              label={t("lastName")}
              value={userValue.lastName}
              onChange={handleInputChange}
              required
            />
            <FormInputField
              id="email"
              label={t("email")}
              value={userValue.email}
              onChange={handleInputChange}
              required
            />
            <FormInputField
              id="phoneNumber"
              label={t("phoneNumber")}
              value={userValue.phoneNumber}
              onChange={handleInputChange}
              required
            />

            <FormInputField
              id="password"
              label={t("password")}
              value={userValue.password}
              onChange={handleInputChange}
              required
            />
            <CustomSelect
              id="role"
              label={t("role")}
              value={role}
              onChange={setRole}
              options={userRole}
              searchable={true}
              required
              group={false}
            />
            <CustomButton
              label="submit"
              onClick={handleSubmit}
              type="submit"
              className="custom-class"
              loading={isSubmitting}
            />
          </div>
        </form>
      </Drawer>
    </div>
  );
}

export function Departmentforms({ onFormSubmit }) {
  const { auth } = useContext(AuthContext);
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const [departmentValue, seetDepartmentValue] = useState({
    departmentName: "",
    departmentID: "",
    location: "",
  });

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    seetDepartmentValue((prevData) => ({ ...prevData, [id]: value }));
  };

  const notify = () => {
    toast.success("Department Saved Successfully", {
      onClose: () => {
        handleClose();
        onFormSubmit();
        reload();
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(
        DEPARTMENTCREATEFORM_URL,
        JSON.stringify({
          name: departmentValue.departmentName,
          deptID: departmentValue.departmentID,
          location: departmentValue.location,
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
        showToast("Kindly check Input details", "error");
      } else if (error.response.status === 500) {
        showToast("Server is currently down Contact your admin", "error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const reload = () => {
    seetDepartmentValue({
      departmentName: "",
      departmentID: "",
      location: "",
    });
  };

  return (
    <div>
      <CustomButton
        label={t("addDepartment")}
        type="New Declaration"
        className="custom-class rounded-full p-2 px-5"
        onClick={handleOpen}
      />
      <Drawer anchor={"right"} open={open} onClose={handleClose}>
        <div>
          <div className="flex justify-center font-bold py-5  text-black">
            {t("NewDepartment")}
          </div>
          <hr />
        </div>
        <form className="w-96">
          <div className=" px-10 py-10 flex flex-col space-y-6">
            <FormInputField
              id="departmentID"
              label={t("departmentCode")}
              value={departmentValue.departmentID}
              onChange={handleInputChange}
              required
            />
            <FormInputField
              id="departmentName"
              label={t("departmentName")}
              value={departmentValue.departmentName}
              onChange={handleInputChange}
              required
            />
            <FormInputField
              id="location"
              label={t("work-location")}
              value={departmentValue.location}
              onChange={handleInputChange}
              required
            />
            <CustomButton
              label="submit"
              onClick={handleSubmit}
              type="submit"
              className="custom-class"
              loading={isSubmitting}
            />
          </div>
        </form>
      </Drawer>
    </div>
  );
}

export function Riskforms({ onFormSubmit }) {
  const { auth } = useContext(AuthContext);
  const { t } = useTranslation();
  const [departmentName, setDepartmentName] = useState("");
  const [riskOwner, setRiskOwner] = useState("");
  const [riskProbabilityLevel, setProbabityilLevel] = useState("");
  const [riskCategory, setCategory] = useState("");
  const [riskImpactLevel, setImpactLevel] = useState("");
  const [riskResponse, setRiskResponse] = useState("");
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { probabilityLevel, categorydrawer, impactLevel, riskResponsedrawer } = useMemo(() => GRCFormsArray(t), [t]);
  const { departmentList } = useDepartmentDropdown();
  const { ownersList } = useRiskOwnersDropdown(departmentName);
  const [riskValue, setRiskValue] = useState({
    riskName: "",
    riskID: "",
    riskObjective: "",
    riskDescription: "",
    riskResponseActivity: "",
  });
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setRiskValue((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const notify = () => {
    toast.success("Risk Saved Successfully", {
      onClose: () => {
        handleClose();
        onFormSubmit();
        reload();
      },
    });
  };
  console.log(auth.departmentId)
  useEffect(() => {
    if (auth.role !== "ADMIN" && auth.role !== "GENERALMANAGER") {
      setDepartmentName(auth.departmentId);
    }
  }, [auth]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (departmentList.includes(riskID)) {
      showToast(
        "Risk ID already exists. Please enter a different one!",
        "error"
      );
    }
    console.log({"departmentList": departmentList});
    try {
      if (auth.role === "MANAGER") {
        await axios.post(
          CREATERISKFORM_URL,
          JSON.stringify({
            riskID: riskValue.riskID,
            riskName: riskValue.riskName,
            riskOwner: riskValue,
            riskImpactLevel,
            riskProbabilityLevel,
            riskCategory,
            riskDescription: riskValue.riskDescription,
            riskObjective: riskValue.riskObjective,
            riskResponseActivity: riskValue.riskResponseActivity,
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
            riskID: riskValue.riskID,
            riskName: riskValue.riskName,
            riskOwner,
            riskCategory: riskCategory,
            riskImpactLevel,
            deptId: departmentName,
            riskProbabilityLevel,
            riskDescription: riskValue.riskDescription,
            riskObjective: riskValue.riskObjective,
            riskResponseActivity: riskValue.riskResponseActivity,
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
        showToast("Kindly check Input details", "error");
      } else if (error.response.status === 500) {
        showToast("Server is currently down Contact your admin", "error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const reload = () => {
    setDepartmentName("");
    setRiskOwner("");
    setImpactLevel("");
    setProbabityilLevel("");
    setCategory("");
    setRiskValue({
      riskName: "",
      riskID: "",
      riskObjective: "",
      riskDescription: "",
      riskResponseActivity: "",
    });
  };

  return (
    <div>
      <CustomButton
        label={t("addRisk")}
        type="New Declaration"
        className="custom-class rounded-full p-2 px-5"
        onClick={handleOpen}
      />
      <Drawer anchor={"right"} open={open} onClose={handleClose}>
        <div className="flex justify-center font-bold py-5  text-black">
          {t("newRisk")}
        </div>
        <hr />
        <form className="w-96">
          <div className=" px-10 py-10 flex flex-col space-y-6">
            {(auth.role === "ADMIN" || auth.role === "GENERALMANAGER") && (
              <CustomSelect
                id="departmentName"
                label={t("departments")}
                value={departmentName}
                onChange={setDepartmentName}
                options={departmentList}
                searchable={true}
                required
                group={false}
              />
            )}
            <div className="grid grid-cols-2 gap-2">
              <FormInputField
                id="riskID"
                label={t("riskCode")}
                value={riskValue.riskID}
                onChange={handleInputChange}
                required
              />
              <FormInputField
                id="riskName"
                label={t("riskName")}
                value={riskValue.riskName}
                onChange={handleInputChange}
                required
              />
            </div>
            <FormInputField
              id="riskObjective"
              label={t("objective")}
              value={riskValue.riskObjective}
              onChange={handleInputChange}
              required
            />
            <FormInputField
              id="riskDescription"
              label={t("description")}
              value={riskValue.riskDescription}
              onChange={handleInputChange}
              required
            />
            <CustomSelect
              id="riskOwner"
              label={t("ownerdrawer")}
              value={riskOwner}
              onChange={setRiskOwner}
              options={ownersList}
              searchable={true}
              required
            />
            <CustomSelect
              id="probabilityLevel"
              label={t("probabilityLevel")}
              value={riskProbabilityLevel}
              onChange={setProbabityilLevel}
              options={probabilityLevel}
              searchable={true}
              required
            />
            <CustomSelect
              id="riskCategory"
              label={t("categorydrawer")}
              value={riskCategory}
              onChange={setCategory}
              options={categorydrawer}
              searchable={true}
              required
            />
            <CustomSelect
              id="impactLevel"
              label={t("impactLevel")}
              value={riskImpactLevel}
              onChange={setImpactLevel}
              options={impactLevel}
              searchable={true}
              required
            />
            <CustomSelect
              id="riskResponse"
              label={t("riskResponsedrawer")}
              value={riskResponse}
              onChange={setRiskResponse}
              options={riskResponsedrawer}
              searchable={true}
              required
            />
            <FormInputField
              id="riskResponseActivity"
              label={t("riskResponseActivity")}
              value={riskValue.riskResponseActivity}
              onChange={handleInputChange}
              required
            />
            <CustomButton
              label="submit"
              onClick={handleSubmit}
              type="submit"
              className="custom-class"
              loading={isSubmitting}
            />
          </div>
        </form>
      </Drawer>
    </div>
  );
}
export function RiskReviewforms({ onFormSubmit }) {
  const { auth } = useContext(AuthContext);
  const { t } = useTranslation();
  const [NextRiskReviewDate, setNextRiskReviewDate] = useState(new Date());
  const [departmentID, setDepartmentID] = useState("");
  const [riskName, setRiskName] = useState("");
  const [riskReview, setRiskReview] = useState("");
  const { departmentList } = useDepartmentDropdown();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const {riskReviewArray} = useMemo(() => GRCFormsArray(t), [t]);
  const {riskToBeReviewed} = useRisksNeededToBeReviewed(departmentID)
  const [reviewValue, setReviewValue] = useState({
    riskID: "",
    riskReviewComments: "",
  });

  function handleOpen() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setReviewValue((prevData) => ({ ...prevData, [id]: value }));
  };

  const notify = () => {
    toast.success("Review Saved Successfully", {
      onClose: () => {
        handleClose();
        onFormSubmit();
        reload();
      },
    });
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
    setNextRiskReviewDate(formattedDate);
  };

  const reload = () => {
    setReviewValue({
      riskReviewComments: "",
    });
    setDepartmentID("");
    setRiskReview("");
    setNextRiskReviewDate("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    
    try {
      await axios.post(
        REVIEWRISKFORM_URL,
        JSON.stringify({
          riskId: riskName,
          riskReview,
          NextRiskReviewDate,
          riskReviewComments: reviewValue.riskReviewComments,
          deptId: departmentID,
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
        showToast("Kindly check Input details", "error");
      } else if (error.response.status === 500) {
        showToast("Server is currently down Contact your admin", "error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <CustomButton
        label={t("reviewRisk")}
        type="New Declaration"
        className="custom-class rounded-full p-2 px-5"
        onClick={handleOpen}
      />
      <Drawer anchor={"right"} open={open} onClose={handleClose}>
        <ToastContainer onClose={1000} hideProgressBar />
        <div className="flex justify-center font-bold py-5  text-black">
          {t("reviewRisk")}
        </div>
        <hr />
        <form className="w-96">
          <div className=" px-10 py-10 flex flex-col space-y-6">
            {(auth.role === "ADMIN" || auth.role === "GENERALMANAGER" )&& (
                <CustomSelect
                  id="departmentID"
                  label={t("departmentId")}
                  value={departmentID}
                  onChange={setDepartmentID}
                  options={departmentList}
                  searchable={true}
                  required
                  group={false}
                />
              )}
            <CustomSelect
              id="riskName"
              label={t("riskName")}
              value={riskName}
              onChange={setRiskName}
              options={riskToBeReviewed}
              searchable={true}
              required
              group={false}
            />
            <CustomSelect
              id="riskReview"
              label={t("riskReview")}
              value={riskReview}
              onChange={setRiskReview}
              options={riskReviewArray}
              searchable={true}
              required
              group={false}
            />
            {riskReview === "reject risk" && (
              <FormInputField
                type="date"
                label={t("nextReviewDate")}
                value={NextRiskReviewDate}
                onChange={handleDateChange}
                required
              />
            )}
            <FormInputField
              id="riskReviewComments"
              label={t("comments")}
              value={reviewValue.riskReviewComments}
              onChange={handleInputChange}
              required
            />
            <CustomButton
              label="submit"
              onClick={handleSubmit}
              type="submit"
              className="custom-class"
              loading={isSubmitting}
            />
          </div>
        </form>
      </Drawer>
    </main>
  );
}
export function RiskMitigationforms({ onFormSubmit }) {
   const { t } = useTranslation();
  const [riskName, setRiskName] = useState("");
  const [departmentID, setdepartmentID] = useState("");
  const [mitigationEffort, setMitigationEffort] = useState(" ");
  const [mitigationControl, setMitigationControl] = useState(" ");
  const [mitigationCost, setMitigationCost] = useState(" ");
  const [riskReviewer, setRiskReviewer] = useState(" ");
  const [endDate, setEndDate] = useState(new Date());
  const [mitigatedRiskProbabilityLevel, setmitigatedRiskProbabilityLevel] =
    useState("");
  const [mitigatedRiskImpactLevel, setmitigatedRiskImpactLevel] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const FormArray = useMemo(() => GRCFormsArray(t), [t]);
  const { riskReviewerDropdown } = useRiskReviewer();
  const { departmentList } = useDepartmentDropdown();
  const {riskToBeMitigated} = useRiskToBeMitigated(departmentID)
  const {riskToBeMitigatedInfo} = useRiskToBeMitigatedInfo(riskName)
  const impactLevel = getRiskImpactLevel(riskToBeMitigatedInfo.impact)
  const probability = getRiskProbabilityLevel(riskToBeMitigatedInfo.probability)
  const [open, setOpen] = useState(false);
  const notify = () => {
    toast.success("Risk Mitigation Saved Successfully", {
      onClose: () => {
        handleClose();
        onFormSubmit();
        reload();
      },
    });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (auth.role === "MANAGER" || auth.role === "ANALYST") {
        await axios.post(
          MITIGATERISKFORM_URL,
          JSON.stringify({
            riskId: riskName,
            mitigatedRiskProbabilityLevel,
            mitigatedRiskImpactLevel,
            mitigationControl,
            mitigationEffort,
            riskReviewer,
            mitigationCost,
            endDate,
            deptId: JSON.parse(departmentID),
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
          MITIGATERISKFORM_URL,
          JSON.stringify({
            riskId: riskName,
            mitigatedRiskProbabilityLevel,
            mitigatedRiskImpactLevel,
            mitigationControl,
            mitigationEffort,
            riskReviewer,
            mitigationCost,
            deptId: JSON.parse(departmentID),
            endDate,
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
        showToast("Kindly check Input details", "error");
      } else if (error.response.status === 500) {
        showToast("Server is currently down Contact your admin", "error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const reload = () => {
    setRiskName("");
    setdepartmentID("");
    setmitigatedRiskProbabilityLevel("");
    setmitigatedRiskImpactLevel("");
    setMitigationControl("");
    setMitigationEffort("");
    setRiskReviewer("");
    setMitigationCost("");
    setEndDate("");
  };

  function handleOpen() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <CustomButton
        label={t("mitigateRisk")}
        type="New Declaration"
        className="custom-class rounded-full p-2 px-5"
        onClick={handleOpen}
      />
      <Drawer anchor={"right"} open={open} onClose={handleClose}>
        <div className="flex justify-center font-bold py-5  text-black">
          {t("mitigateRisk")}
        </div>
        <hr />
        <form className="w-96">
          <div className=" px-10 py-10 flex flex-col space-y-6">
            {(auth.role === "ADMIN" || auth.role === "GENERALMANAGER") && (
                <CustomSelect
                  id="departmentID"
                  label={t("departmentId")}
                  value={departmentID}
                  onChange={setdepartmentID}
                  options={departmentList}
                  searchable={true}
                  required
                  group={false}
                />
              )}
            <CustomSelect
              id="riskName"
              label={t("riskName")}
              value={riskName}
              onChange={setRiskName}
              options={riskToBeMitigated}
              searchable={true}
              required
              group={false}
            />
            <div className="grid grid-cols-2 gap-2">
              <FormInputField
                id="riskid"
                label={t("riskId")}
                value={riskToBeMitigatedInfo.riskID}
                required
              />
              <FormInputField
                id="category"
                label={t("categorydrawer")}
                value={riskToBeMitigatedInfo.riskCategory}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <FormInputField
                id="impact"
                label="Impact Level"
                value={impactLevel}
                required
              />
              <FormInputField
                id="probability"
                label={t("probabilityLevel")}
                value={probability}
                required
              />
            </div>
            <CustomSelect
              id="riskID"
              label={t("mitgatedRiskProbabillityLevel")}
              value={mitigatedRiskProbabilityLevel}
              onChange={setmitigatedRiskProbabilityLevel}
              options={FormArray.probabilityLevel}
              searchable={true}
              required
              group={false}
            />
            <CustomSelect
              id="mitigatedRiskImpactLevel"
              label={t("mitigatedRiskImpactLevel")}
              value={mitigatedRiskImpactLevel}
              onChange={setmitigatedRiskImpactLevel}
              options={FormArray.impactLevel}
              searchable={true}
              required
              group={false}
            />
            <CustomSelect
              id="mitigationEffort"
              label={t("mitigationEffort")}
              value={mitigationEffort}
              onChange={setMitigationEffort}
              options={FormArray.mitigationEffort}
              searchable={true}
              required
              group={false}
            />
            <CustomSelect
              id="mitigationControl"
              label={t("mitigationControl")}
              value={mitigationControl}
              onChange={setMitigationControl}
              options={FormArray.mitigationControl}
              searchable={true}
              required
              group={false}
            />
            <FormInputField
              type="date"
              id="date"
              label={t("mitigationDueDate")}
              value={endDate}
              required
              onChange={handleDateChange}
            />
            <CustomSelect
              id="mitigationCost"
              label={t("mitigationCost")}
              value={mitigationCost}
              onChange={setMitigationCost}
              options={FormArray.mitigationCost}
              searchable={true}
              required
              group={false}
            />
            <CustomSelect
              id="riskReviewer"
              label={t("riskReviewer")}
              value={riskReviewer}
              onChange={setRiskReviewer}
              options={riskReviewerDropdown}
              searchable={true}
              required
              group={false}
            />
            <CustomButton
              label="submit"
              onClick={handleSubmit}
              type="submit"
              className="custom-class"
              loading={isSubmitting}
            />
          </div>
        </form>
      </Drawer>
    </div>
  );
}
export function Framworkforms({ onFormSubmit }) {
  const { auth } = useContext(AuthContext);
  const { t } = useTranslation();
  const FormArray = useMemo(() => GRCFormsArray(t), [t]);
  const [description, setDescription] = useState("");

  const [frameWorkSelect, setFrameWorkSelect] = useState("");
  const [frameworkText, setFrameworkText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [framework, setFramework] = useState("");
  const [open, setOpen] = useState(false);

  const notify = () => {
    toast.success("Frame work Saved Successfully", {
      onClose: () => {
        handleClose();
        onFormSubmit();
        reload();
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const name = frameWorkSelect === "YES" ? framework : frameworkText;
    
    try {
      await axios.post(
        FRAMEWORKFORM_URL,
        JSON.stringify({
          name: name,
          description: description,
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
        showToast("Kindly check Input details", "error");
      } else if (error.response.status === 500) {
        showToast("Server is currently down Contact your admin", "error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  function handleOpen() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }

  const reload =()=>{
    setFrameWorkSelect("");
    setFrameworkText("");
    setFramework("")
  }

  return (
    <div>
      <CustomButton
        label="Add a Rule"
        type="New Declaration"
        className="custom-class rounded-full p-2 px-5"
        onClick={handleOpen}
      />
      <Drawer anchor={"right"} open={open} onClose={handleClose}>
        <div className="flex justify-center font-bold py-5  text-black">
          Governance Framework
        </div>
        <hr />
        <form className="w-96">
          <div className=" px-10 py-10 flex flex-col space-y-6">
            <CustomSelect
              id="frameWorkSelect"
              label="Select an Existing Framework?"
              value={frameWorkSelect}
              onChange={setFrameWorkSelect}
              options={FormArray.responseActivityStatus}
              searchable={true}
              required
            />
            {frameWorkSelect &&
              (frameWorkSelect === "YES" ? (
                <CustomSelect
                  id="framework"
                  label="Framework Select"
                  value={framework}
                  onChange={setFramework}
                  options={FormArray.governance}
                  searchable={true}
                  required
                  group={false}
                />
              ) : (
                <FormInputField
                  id="frameworkText"
                  label="Type In your Framework Name"
                  value={frameworkText}
                  onChange={(e) => setFrameworkText(e.target.value)}
                  required
                />
              ))}
            <FormInputField
              id="description"
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <CustomButton
              label="submit"
              onClick={handleSubmit}
              type="submit"
              className="custom-class"
              loading={isSubmitting}
            />
          </div>
        </form>
      </Drawer>
    </div>
  );
}

export function Controlforms({ onFormSubmit }) {
  const { auth } = useContext(AuthContext);
  const { t } = useTranslation();
  const [description, setDescription] = useState("");
  const [frameWorkSelect, setFrameWorkSelect] = useState(true);
  const [controlItem, setControlItem] = useState("");
  const {frameworkdropdown} = useFrameWorkDropDown()
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);

  const notify = () => {
    toast.success("Control Saved Successfully", {
      onClose: () => {
        handleClose();
        onFormSubmit();
        // reload();
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(
        CONTROLFORM_URL,
        JSON.stringify({
          description: description,
          controlItem: controlItem,
          frameworkId: frameWorkSelect,
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
        showToast("Kindly check Input details", "error");
      } else if (error.response.status === 500) {
        showToast("Server is currently down Contact your admin", "error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  function handleOpen() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <CustomButton
        label="Set a New Control"
        type="New Declaration"
        className="custom-class rounded-full p-2 px-5"
        onClick={handleOpen}
      />
      <Drawer anchor={"right"} open={open} onClose={handleClose}>
        <div className="flex justify-center font-bold py-5  text-black">
          Governance Control
        </div>
        <hr />
        <form className="w-96">
          <div className=" px-10 py-10 flex flex-col space-y-6">
            <FormInputField
              id="controlItem"
              label="Control Item"
              value={controlItem}
              onChange={(e) => setControlItem(e.target.value)}
              required
            />
            <CustomSelect
              id="frameWorkSelect"
              label="Select a Framework"
              value={frameWorkSelect}
              onChange={setFrameWorkSelect}
              options={frameworkdropdown}
              searchable={true}
              required
            />
            <FormInputField
              id="description"
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <CustomButton
              label="submit"
              onClick={handleSubmit}
              type="submit"
              className="custom-class"
              loading={isSubmitting}
            />
          </div>
        </form>
      </Drawer>
    </div>
  );
}

export function Complianceforms({ onFormSubmit }) {
  const { auth } = useContext(AuthContext);
  const { t } = useTranslation();
  const [description, setDescription] = useState("");
  const [recomendedChanges, setRecommendedChanges] = useState("");
  const [frameWorkSelect, setFrameWorkSelect] = useState("");
  const [controlItem, setControlItem] = useState("");
  const {frameworkdropdown} = useFrameWorkDropDown();
  const [assessment, setAssessment] = useState("")
  const {controleItemDropdown} = useControlItemDropDown(frameWorkSelect)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const FormArray = useMemo(() => GRCFormsArray(t), [t]);;

  const notify = () => {
    toast.success("Compliance Saved Successfully", {
      onClose: () => {
        handleClose();
        onFormSubmit();
        // reload();
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(
        COMPLIANCEFORM_URL,
        JSON.stringify({

          assessment:assessment,
          recomendation: recomendedChanges,
          controlId:controlItem
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
        showToast("Kindly check Input details", "error");
      } else if (error.response.status === 500) {
        showToast("Server is currently down Contact your admin", "error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  function handleOpen() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <CustomButton
        label="Test New Compliance"
        type="New Declaration"
        className="custom-class rounded-full p-2 px-5"
        onClick={handleOpen}
      />
      <Drawer anchor={"right"} open={open} onClose={handleClose}>
        <div className="flex justify-center font-bold py-5  text-black">
          Compliance
        </div>
        <hr />
        <form className="w-96">
          <div className=" px-10 py-10 flex flex-col space-y-6">
            <CustomSelect
              id="frameWorkSelect"
              label="Select a Framework"
              value={frameWorkSelect}
              onChange={setFrameWorkSelect}
              options={frameworkdropdown}
              searchable={true}
              required
            />
            <CustomSelect
              id="controlItem"
              label="Control Item"
              value={controlItem}
              onChange={setControlItem}
              options={controleItemDropdown}
              searchable={true}
              required
            />
            <CustomSelect
              id="assessment"
              label="Assessment"
              value={assessment}
              onChange={setAssessment}
              options={FormArray.compliance}
              searchable={true}
              required
            />
            <FormInputField
              type="date"
              id="assessmentDate"
              label="Assessment Date"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <FormInputField
              id="recomendations"
              label="Recommendations"
              value={recomendedChanges}
              onChange={(e) => setRecommendedChanges(e.target.value)}
              required
            />
            <CustomButton
              label="submit"
              onClick={handleSubmit}
              type="submit"
              className="custom-class"
              loading={isSubmitting}
            />
          </div>
        </form>
      </Drawer>
    </div>
  );
}

export function RiskMonitoringforms({ onFormSubmit }) {
  const { auth } = useContext(AuthContext);
  const { t } = useTranslation();
  const [riskName, setRiskName] = useState("");
  const [departmentID, setdepartmentID] = useState(" ");
  const [riskResponseActivitiyStatus, setRiskResponseActivitiyStatus] =
    useState("");
  const [mitigationOwner, setmitigationOwner] = useState("");
  const [closeStatus, setRiskClosed] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { departmentList } = useDepartmentDropdown();
  const { monitoringIDs } = useRiskIDMonitoring(departmentID);
  const [open, setOpen] = useState(false);
  const GRCFormArray = useMemo(() => GRCFormsArray(t), [t]);
  const [monitoringValue, setMonitoringValue] = useState({
    riskResponseImplementation: "",
    challenges: "",
    recommendedChanges: "",
    comments: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setMonitoringValue((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const notify = () => {
    toast.success("Risk Monitoring Saved Successfully", {
      onClose: () => {
        handleClose();
        onFormSubmit();
        reload();
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (auth.role === "MANAGER") {
        await axios.post(
          MONITORINGRISKFORM_URL,
          JSON.stringify({
            riskId: riskName,
            riskResponseActivitiyStatus,
            riskResponseImplementation: monitoringValue.riskResponseImplementation,
            challenges: monitoringValue.challenges,
            recommendedChanges: monitoringValue.recommendedChanges,
            comments: monitoringValue.comments,
            closeStatus,
            deptId: departmentID
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
            riskId: riskName,
            riskResponseActivitiyStatus,
            riskResponseImplementation: monitoringValue.riskResponseImplementation,
            challenges: monitoringValue.challenges,
            recommendedChanges: monitoringValue.recommendedChanges,
            comments: monitoringValue.comments,
            deptId: departmentID,
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
        showToast("Kindly check Input details", "error");
      } else if (error.response.status === 500) {
        showToast("Server is currently down Contact your admin", "error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const reload = () => {
    setMonitoringValue({
      riskResponseImplementation: "",
      challenges: "",
      recommendedChanges: "",
      comments: "",
  });
  setRiskResponseActivitiyStatus("");
  setRiskName("");
  setdepartmentID("")
  };

  return (
    <div>
      <CustomButton
        label={t("monitorRisk")}
        type="New Declaration"
        className="custom-class rounded-full p-2 px-5"
        onClick={handleOpen}
      />
      <Drawer anchor={"right"} open={open} onClose={handleClose}>
        <div className="flex justify-center font-bold py-5  text-black">
          {t("monitorRisk")}
        </div>
        <hr />
        <form className="w-96">
          <div className=" px-10 py-10 flex flex-col space-y-6">
            {(auth.role === "ADMIN" || auth.role === "GENERALMANAGER") && (
                <CustomSelect
                  id="departmentID"
                  label={t("departmentId")}
                  value={departmentID}
                  onChange={setdepartmentID}
                  options={departmentList}
                  searchable={true}
                  required
                  group={false}
                />
              )}
            <CustomSelect
              id="riskName"
              label={t("riskName")}
              value={riskName}
              onChange={setRiskName}
              options={monitoringIDs}
              searchable={true}
              required
              group={false}
            />
            <CustomSelect
              id="riskResponseActivityStatus"
              label={t("responseActivityStatus")}
              value={riskResponseActivitiyStatus}
              onChange={setRiskResponseActivitiyStatus}
              options={GRCFormArray.responseActivityStatus}
              searchable={true}
              required
              group={false}
            />
            <FormInputField
              id="riskResponseImplementation"
              label={t("responseImplementation")}
              value={monitoringValue.riskResponseImplementation}
              required
              onChange={handleInputChange}
            />
            <FormInputField
              id="challenges"
              label={t("challenges")}
              value={monitoringValue.challenges}
              required
              onChange={handleInputChange}
            />
            <FormInputField
              id="recommendedChanges"
              label={t("recommendedChanges")}
              value={monitoringValue.recommendedChanges}
              required
              onChange={handleInputChange}
            />
            <FormInputField
              id="comments"
              label={t("comments")}
              value={monitoringValue.comments}
              required
              onChange={handleInputChange}
            />
            <CustomSelect
              id="closeStatus"
              label={t("riskClosedStatus")}
              value={closeStatus}
              onChange={setRiskClosed}
              options={GRCFormArray.responseActivityStatus}
              searchable={true}
              required
              group={false}
            />
            <CustomButton
              label="submit"
              onClick={handleSubmit}
              type="submit"
              className="custom-class"
              loading={isSubmitting}
            />
          </div>
        </form>
      </Drawer>
    </div>
  );
}



