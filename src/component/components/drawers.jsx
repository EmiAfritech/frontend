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
import { CustomButton, FormInputField, CustomSelect } from "./widgets";
import { GRCFormsArray } from "./formarrays";

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
  const { departmentList } = useDepartmentDropdown();
  const [open, setOpen] = useState(false);
  const [department, setDepartment] = useState("");
  const { role } = GRCFormsArray;
  const [userValue, setUserValue] = [
    {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
  ];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserValue((prevData) => ({ ...prevData, [id]: value }));
  };

  function handleOpen() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }

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

  return (
    <>
      <ToastContainer autoClose={1000} hideProgressBar />
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
          <div className=" px-10 py-8 flex flex-cols space-y-6">
            <FormInputField
              id="firstName"
              label={t("departmentCode")}
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
              id="Email"
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
            {auth.role === "ADMIN" ||
              (auth.role === "GENERALMANAGER" && (
                <CustomSelect
                  id="department"
                  label={t("departments")}
                  value={department}
                  onChange={setDepartment}
                  options={departmentList}
                  searchable={true}
                  required
                  group={false}
                />
              ))}
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
              value={department}
              onChange={setDepartment}
              options={role}
              searchable={true}
              required
              group={false}
            />
          </div>
          <CustomButton
            label="submit"
            onClick={handleSubmit}
            type="submit"
            className="custom-class"
            loading={isSubmitting}
          />
        </form>
      </Drawer>
    </>
  );
}

export function Departmentforms({ onFormSubmit }) {
  const { auth } = useContext(AuthContext);
  const { t } = useTranslation();
  const [isLoading, setLoading] = useState(false);
  const [departmentValue, seetDepartmentValue] = useState({
    departmentName: "",
    departmentID: "",
    location: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    seetDepartmentValue((prevData) => ({ ...prevData, [id]: value }));
  };

  console.log({ departmentValue: departmentValue });
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

  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <ToastContainer autoClose={1000} hideProgressBar />
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
          <div className=" px-10 py-10">
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
              id="work_location"
              label={t("work-location")}
              value={departmentValue.location}
              onChange={handleInputChange}
              required
            />
          </div>
          <CustomButton
            label="submit"
            onClick={handleSubmit}
            type="submit"
            className="custom-class"
            loading={isSubmitting}
          />
        </form>
      </Drawer>
    </>
  );
}

export function Riskforms({onFormSubmit}) {
  const { auth } = useContext(AuthContext);
  const { t } = useTranslation();
  const [departmentName, setDepartmentName] = useState("");
  const [ownersName, setOwnersName] = useState([]);
  const [riskOwner, setRiskOwner] = useState("");
  const [open, setOpen] = useState(false);
  const {probabilityLevel, categorydrawer, impactLevel, riskResponsedrawer}= GRCFormsArray;
  const { departmentList } = useDepartmentDropdown();
  const [riskValue, setRiskValue] = useState({
    riskName: "",
    riskID: "",
    riskObjective: "",
    riskDescription: "",
    riskResponseActivity: ""
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setRiskValue((prevData) => ({ ...prevData, [id]: value }));
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

    if (departmentList.includes(riskID)) {
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
            {auth.role === "ADMIN" || auth.role === "GENERALMANAGER" && (
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
              id="objective"
              label={t("objective")}
              value={riskValue.riskObjective}
              onChange={handleInputChange}
              required
            />
            <FormInputField
              id="description"
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
              options={departmentList}
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
          </div>
          <CustomButton
            label="submit"
            onClick={handleSubmit}
            type="submit"
            className="custom-class"
            loading={isSubmitting}
          />
        </form>
      </Drawer>
    </>
  );
}
export function RiskReviewforms({ onFormSubmit }) {
  const { auth } = useContext(AuthContext);
  const { t } = useTranslation();
  const [NextRiskReviewDate, setNextRiskReviewDate] = useState("");
  const { departmentList } = useDepartmentDropdown();
  const [reviewValue, setReviewValue] = useState({
    riskID: "",
    riskReviewComments: "",
  })
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
    <main>
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
          <div className=" px-10 py-10 flex space-y-6">
            {auth.role === "ADMIN" || auth.role === "GENERALMANAGER" && (
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
                onChange={setriskName}
                options={departmentList}
                searchable={true}
                required
                group={false}
              />
              <FormInputField
                id="riskID"
                label={t("riskId")}
                value={reviewValue.riskID}
                onChange={handleInputChange}
                required
              />
              <CustomSelect
                id="riskReview"
                label={t("riskReview")}
                value={riskReview}
                onChange={setRiskReview}
                options={departmentList}
                searchable={true}
                required
                group={false}
              />
              {riskReview === "reject risk" && (
                <div>
                  <input
                    type="date"
                    value={NextRiskReviewDate}
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    onChange={handleDateChange}
                  />
                  <label className="text-blue-800  pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    {t("nextReviewDate")}
                  </label>
                </div>
              )}
              <FormInputField
                id="description"
                label={t("comments")}
                value={reviewValue.riskReviewComments}
                onChange={handleInputChange}
                required
              />
          </div>
          <CustomButton
            label="submit"
            onClick={handleSubmit}
            type="submit"
            className="custom-class"
            loading={isSubmitting}
          />
        </form>
      </Drawer>
    </main>
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
          <div className=" px-10 py-10 flex space-y-6">
              {auth.role === "ADMIN" || auth.role === "GENERALMANAGER" && (
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
                id="riskID"
                label={t("riskName")}
                value={riskName}
                onChange={setRiskName}
                options={departmentList}
                searchable={true}
                required
                group={false}
              />
            <div className="grid grid-cols-2 gap-2">
              <FormInputField
                id="riskid"
                label={t("riskId")}
                value={riskID}
                required
              />
              <FormInputField
                id="category"
                label={t("categorydrawer")}
                value={riskCategory}
                required
              />
            </div>
            <FormInputField
              id="impact"
              label={t("mitigatedRiskImpactLevel")}
              value={impactLevelNumber}
              required
            />
            <FormInputField
              id="probability"
              label={t("probabilityLevel")}
              value={probabilityLevelNumber}
              required
            />
            <CustomSelect
              id="riskID"
              label={t("mitgatedRiskProbabillityLevel")}
              value={mitigatedRiskProbabilityLevel}
              onChange={setRiskName}
              options={probabilityLevel}
              searchable={true}
              required
              group={false}
            />
            <CustomSelect
              id="mitigatedRiskImpactLevel"
              label={t("mitigatedRiskImpactLevel")}
              value={mitigatedRiskImpactLevel}
              onChange={setmitigatedRiskImpactLevel}
              options={impactLevel}
              searchable={true}
              required
              group={false}
            />
            <CustomSelect
              id="mitigationEffort"
              label={t("mitigationEffort")}
              value={mitigationEffort}
              onChange={setmitigationEffort}
              options={mitigationEffort}
              searchable={true}
              required
              group={false}
            />
            <CustomSelect
              id="mitigationControl"
              label={t("mitigationControl")}
              value={mitigationControl}
              onChange={setmitigationControl}
              options={mitigationEffort}
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
              onChange={setmitigationCost}
              options={mitigationEffort}
              searchable={true}
              required
              group={false}
            />
            <CustomSelect
              id="riskReviewer"
              label={t("riskReviewer")}
              value={riskReviewer}
              onChange={setRiskReviewer}
              options={mitigationEffort}
              searchable={true}
              required
              group={false}
            />
          </div>
          <CustomButton
            label="submit"
            onClick={handleSubmit}
            type="submit"
            className="custom-class"
            loading={isSubmitting}
          />
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
