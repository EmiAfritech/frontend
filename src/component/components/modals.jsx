import * as React from "react";
import Box from "@mui/material/Box";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { FaTrashAlt, FaSave } from "react-icons/fa";
import "../comstyles/component.css";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

import {
  DELETEDEPARTMENT_URL,
  DELETERISK_URL,
  DELETEUSER_URL,
  DEPARTMENTDROPDOWN_URL,
  EDITDEPARTMENT_URL,
  EDITMITIGATION_URL,
  EDITMONITORING_URL,
  RISKREVIEWERSDROPDOWN_URL,
  EDITREVIEW_URL,
  EDITRISK_URL,
  EDITUSER_URL,
  LOGOUT_URL,
  MANAGERSDROPDOWN_URL,
  OWNERSDROPDOWN_URL,
} from "../../api/routes";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Modal,
  Typography,
} from "@mui/material";
import { FaSignOutAlt, FaExclamation } from "react-icons/fa";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CsvUploader } from "./csvuploader";
import { Modaltrigger } from "../../context/AuthContext";
import { Tab, TabList, TabPanel, TabContext } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function getRiskScore(score) {
  if (score >= 1 && score <= 5) {
    return "Low";
  } else if (score >= 6 && score <= 9) {
    return "Medium";
  } else if (score >= 10 && score <= 15) {
    return "High";
  } else if (score >= 16 && score <= 25) {
    return "Very High";
  } else {
    return "Unknown";
  }
}
function getProbabiltyLevelNumber(probabilitys) {
  if (probabilitys === "Almost Impossible") {
    return 1;
  } else if (probabilitys === "Unlikely") {
    return 2;
  } else if (probabilitys === "Likely") {
    return 3;
  } else if (probabilitys === "Very Likely") {
    return 4;
  } else if (probabilitys === "Almost Certain") {
    return 5;
  } else {
    return 0;
  }
}

function getImpactLevelNumber(impact) {
  if (impact === "Insignificant") {
    return 1;
  } else if (impact === "Minor") {
    return 2;
  } else if (impact === "Moderate") {
    return 3;
  } else if (impact === "Major") {
    return 4;
  } else if (impact === "Catastrophic") {
    return 5;
  } else {
    return 0;
  }
}
export function UserData(params) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const [userName, setUserName] = useState(params.row.userName);
  const id = params.row.id;
  const [firstName, setFirstName] = useState(params.row.firstName);
  const [lastName, setLastName] = useState(params.row.lastName);
  const [email, setEmail] = useState(params.row.email);
  const [phoneNumber, setPhoneNumber] = useState(params.row.phoneNumber);
  const [role, setRole] = useState(params.row.role);
  const [createdAt, setCreatedAt] = useState(params.row.createdAt);
  const [updatedAt, setUpdatedAt] = useState(params.row.updatedAt);
  const [departmentName, setDepartmentName] = useState(
    params.row.departmentName
  );

  const [deptmentName, setdeptmentName] = useState([]);
  const { trigger, triggerComponent } = React.useContext(Modaltrigger);
  const cdate = new Date(createdAt);
  const udate = new Date(updatedAt);
  const cDate = cdate.toISOString().split("T")[0];
  const uDate = udate.toISOString().split("T")[0];

  if (role === "ANALYST") {
    setRole("AUDITOR");
  }

  const notify = () => {
    toast.success("User Saved Successfully", {
      onClose: () => {
        close();
      },
    });
  };
  const notifyFillForms = () => {
    toast.error("Kindly check Input details");
  };
  const notifyDelete = () => {
    toast.error("User Deleted", {
      onClose: () => {
        close();
      },
    });
  };
  const notifyServerDown = () => {
    toast.error("Server is currently down Contact your admin");
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: 24,
    p: 4,
    borderRadius: 1,
    bgcolor: "#FFFFFF",
    width: 1200,
  };
  function handleOpen() {
    setOpen(!open);
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        EDITUSER_URL,
        JSON.stringify({
          firstName,
          lastName,
          phoneNumber,
          userName,
          email,
          role,
          departmentName,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          withCredentials: true,
        }
      );
      notify();
      triggerComponent();
    } catch (error) {
      if (error.response.status === 400) {
        notifyFillForms();
      } else if (error.response.status === 500) {
        notifyServerDown();
      }
    }
  };

  const handleDeleteSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(
        `${DELETEUSER_URL}/${id}`,

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          withCredentials: true,
        }
      );
      notifyDelete();
    } catch (error) {
      if (error.response.status === 400) {
        notifyFillForms();
      } else if (error.response.status === 500) {
        notifyServerDown();
      }
    }
  };

  useEffect(() => {
    axios
      .get(DEPARTMENTDROPDOWN_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        withCredentials: true,
      })
      .then((data) => {
        setdeptmentName(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <ToastContainer hideProgressBar autoClose={1000} />
      <button onClick={handleOpen} className="px-2">
        <FaEye className="icons" />
      </button>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <FormControl fullWidth>
            <div className=" px-10 py-10">
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="User ID"
                    value={id}
                    disabled
                    autoComplete="off"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Username"
                    value={userName}
                    autoComplete="off"
                    onChange={(e) => setUserName(e.target.value)}
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="First Name"
                    value={firstName}
                    autoComplete="off"
                    onChange={(e) => setFirstName(e.target.value)}
                    style={{ width: "100%" }}
                    required
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Last Name"
                    value={lastName}
                    autoComplete="off"
                    onChange={(e) => setLastName(e.target.value)}
                    style={{ width: "100%" }}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Phone Number"
                    value={phoneNumber}
                    autoComplete="off"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    style={{ width: "100%" }}
                    required
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  {role === "ADMIN" ||
                  role === "GENERALMANAGER" ||
                  role === "ANALYST" ? (
                    <>
                      <InputLabel>Role</InputLabel>
                      <Select
                        label="Role"
                        value={role}
                        autoComplete="off"
                        onChange={(e) => setRole(e.target.value)}
                        style={{ width: "100%" }}
                        required
                        disabled>
                        <MenuItem value="ADMIN">Admin</MenuItem>
                        <MenuItem value="GENERALMANAGER">
                          General Manager
                        </MenuItem>
                        <MenuItem value="MANAGER">Manager</MenuItem>
                        <MenuItem value="AUDITOR">Risk Analyst</MenuItem>
                      </Select>
                    </>
                  ) : (
                    <>
                      <InputLabel>Role</InputLabel>
                      <Select
                        label="Role"
                        value={role}
                        autoComplete="off"
                        onChange={(e) => setRole(e.target.value)}
                        style={{ width: "100%" }}
                        required>
                        <MenuItem value="ADMIN">Admin</MenuItem>
                        <MenuItem value="GENERALMANAGER">
                          General Manager
                        </MenuItem>
                        <MenuItem value="MANAGER">Manager</MenuItem>
                        <MenuItem value="AUDITOR">Risk Analyst</MenuItem>
                      </Select>
                    </>
                  )}
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Email"
                    value={email}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: "100%" }}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    type="date"
                    label="updated at"
                    value={uDate}
                    autoComplete="off"
                    onChange={(e) => {
                      const selectedDate = e.target.value;
                      const dateObj = new Date(selectedDate);

                      // Extract year, month, and day components
                      const year = dateObj.getFullYear();
                      const month = String(dateObj.getMonth() + 1).padStart(
                        2,
                        "0"
                      );
                      const day = String(dateObj.getDate()).padStart(2, "0");

                      // Format the date as "yyyy-MM-dd"
                      const formattedDate = `${year}-${month}-${day}`;
                      // Set the formatted date to state
                      setUpdatedAt(formattedDate);
                    }}
                    style={{ width: "100%" }}
                    disabled
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    type="date"
                    label="created at"
                    value={cDate}
                    autoComplete="off"
                    onChange={(e) => {
                      const selectedDate = e.target.value;
                      const dateObj = new Date(selectedDate);

                      // Extract year, month, and day components
                      const year = dateObj.getFullYear();
                      const month = String(dateObj.getMonth() + 1).padStart(
                        2,
                        "0"
                      );
                      const day = String(dateObj.getDate()).padStart(2, "0");

                      // Format the date as "yyyy-MM-dd"
                      const formattedDate = `${year}-${month}-${day}`;
                      // Set the formatted date to state
                      setCreatedAt(formattedDate);
                    }}
                    style={{ width: "100%" }}
                    disabled
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  {role === "ADMIN" ||
                  role === "GENERALMANAGER" ||
                  localStorage.getItem("role") === "MANAGER" ? (
                    <></>
                  ) : (
                    <>
                      <InputLabel>Department Name</InputLabel>
                      <Select
                        label="Department Name"
                        value={departmentName}
                        autoComplete="off"
                        onChange={(e) => setDepartmentName(e.target.value)}
                        required
                        style={{ width: "100%" }}>
                        {deptmentName.map((deptmentName) => (
                          <MenuItem
                            key={deptmentName.names.id}
                            value={deptmentName.names.name}>
                            {" "}
                            {deptmentName.names.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-row pb-3 pt-2 px-2 flex-row-reverse items-center">
              <button
                className="flex flex row items-center p-3 m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                type="submit"
                onClick={handleEditSubmit}>
                <FaSave className="icons" />
                Save
              </button>
              <button
                className="flex flex row items-center p-3 m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                type="submit"
                onClick={handleDeleteSubmit}>
                <FaTrashAlt className="icons" color="red" />
                Delete
              </button>
            </div>
          </FormControl>
        </Box>
      </Modal>
    </>
  );
}

export function RiskData(params) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const id = params.row.id;
  const [riskName, setRiskName] = useState(params.row.riskName);
  const [riskID, setRiskID] = useState(params.row.riskID);
  const [departmentID, setDepartmentID] = useState(params.row.departmentID);
  const [departmentName, setDepartmentName] = useState(params.row.department);
  const [riskDescription, setRiskDescription] = useState(
    params.row.riskDescription
  );
  const [riskCategory, setRiskCategory] = useState(params.row.riskCategory);
  const [riskObjective, setRiskObjective] = useState(params.row.riskObjective);
  const [riskOwner, setRiskOwner] = useState(params.row.riskOwner);
  const [riskCreatedAt, setRiskCreatedAt] = useState(params.row.createdAt);

  const [riskProbabilityLevell, setRiskProbabilityLevel] = useState(
    getProbabiltyLevelNumber(params.row.riskProbabilityLevel)
  );
  const [riskImpactLevell, setRiskImpactLevel] = useState(
    getImpactLevelNumber(params.row.riskImpactLevel)
  );

  const [riskResponse, setRiskResponse] = useState(params.row.riskResponse);
  const [riskResponseActivity, setRiskResponseActivity] = useState(
    params.row.riskResponseActivity
  );
  const [deptmentName, setdeptmentName] = useState([]);
  const [ownersName, setOwnersName] = useState([]);
  const cdate = new Date(riskCreatedAt);
  const cDate = cdate.toISOString().split("T")[0];
  const { trigger, triggerComponent } = React.useContext(Modaltrigger);

  const notify = () => {
    toast.success("Risk Saved Successfully", {
      onClose: () => {
        close();
      },
    });
  };
  const notifyFillForms = () => {
    toast.error("Kindly check Input details");
  };
  const notifyServerDown = () => {
    toast.error("Server is currently down Contact your admin");
  };

  const notifyDelete = () => {
    toast.error("Risk Deleted", {
      onClose: () => {
        close();
      },
    });
  };

  useEffect(() => {
    axios
      .get(DEPARTMENTDROPDOWN_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        withCredentials: true,
      })
      .then((data) => {
        setdeptmentName(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(OWNERSDROPDOWN_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
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

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#FFFFFF",
    boxShadow: 24,
    p: 4,
    borderRadius: 1,
    width: 1200,
  };

  function handleOpen() {
    setOpen(!open);
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const riskProbabilityLevel = riskProbabilityLevell;

      const riskImpactLevel = riskImpactLevell;

      await axios.put(
        EDITRISK_URL,
        JSON.stringify({
          id,
          riskName,
          riskID,
          riskDescription,
          riskCategory,
          riskObjective,
          riskImpactLevel,
          riskProbabilityLevel,
          riskResponse,
          riskResponseActivity,
          riskOwner,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          withCredentials: true,
        }
      );
      notify();
      triggerComponent();
    } catch (error) {
      if (error.response.status === 400) {
        notifyFillForms();
      } else if (error.response.status === 500) {
        notifyServerDown();
      }
    }
  };

  const handleDeleteSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`${DELETERISK_URL}/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        withCredentials: true,
      });
      notifyDelete();
    } catch (error) {
      if (error.response.status === 400) {
        notifyFillForms();
      } else if (error.response.status === 500) {
        notifyServerDown();
      }
    }
  };

  return (
    <>
      <ToastContainer hideProgressBar autoClose={1000} />
      <button onClick={handleOpen} className="px-2">
        <FaEye className="icons" />
      </button>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <FormControl fullWidth>
            <div className=" px-10 py-10">
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Risk Code"
                    value={riskID}
                    autoComplete="off"
                    onChange={(e) => setRiskID(e.target.value)}
                    required
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Risk Name"
                    value={riskName}
                    autoComplete="off"
                    onChange={(e) => setRiskName(e.target.value)}
                    required
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  {localStorage.getItem("role") === "ADMIN" ||
                  localStorage.getItem("GENERALMANAGER") ? (
                    <TextField
                      label="Department ID"
                      value={departmentID}
                      autoComplete="off"
                      disabled
                      onChange={(e) => setDepartmentID(e.target.value)}
                      required
                      style={{ width: "100%" }}
                    />
                  ) : (
                    <> </>
                  )}
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  {localStorage.getItem("role") === "ADMIN" ||
                  localStorage.getItem("GENERALMANAGER") ? (
                    <>
                      <InputLabel>Department Name</InputLabel>
                      <Select
                        label="Department Name"
                        value={departmentName}
                        autoComplete="off"
                        onChange={(e) => setDepartmentName(e.target.value)}
                        required
                        style={{ width: "100%" }}>
                        {deptmentName.map((deptmentName) => (
                          <MenuItem
                            key={deptmentName.names.id}
                            value={deptmentName.names.name}
                            onClick={() =>
                              setDepartmentID(deptmentName.deptIDs.deptID)
                            }>
                            {" "}
                            {deptmentName.names.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <InputLabel>Risk Owner</InputLabel>
                  <Select
                    label="Risk Owner"
                    value={riskOwner}
                    autoComplete="off"
                    onChange={(e) => setRiskOwner(e.target.value)}
                    required
                    style={{ width: "100%" }}>
                    {ownersName.map((ownersName) => (
                      <MenuItem key={ownersName.id} value={ownersName.value}>
                        {" "}
                        {ownersName.value}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    type="date"
                    label="Created At"
                    value={cDate}
                    autoComplete="off"
                    disabled
                    onChange={(e) => {
                      const selectedDate = e.target.value;
                      const dateObj = new Date(selectedDate);

                      // Extract year, month, and day components
                      const year = dateObj.getFullYear();
                      const month = String(dateObj.getMonth() + 1).padStart(
                        2,
                        "0"
                      );
                      const day = String(dateObj.getDate()).padStart(2, "0");

                      // Format the date as "yyyy-MM-dd"
                      const formattedDate = `${year}-${month}-${day}`;
                      // Set the formatted date to state
                      setRiskCreatedAt(formattedDate);
                    }}
                    required
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Risk Score"
                    value={getRiskScore(
                      riskProbabilityLevell * riskImpactLevell
                    )}
                    autoComplete="off"
                    disabled
                    required
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <InputLabel>Risk Response</InputLabel>
                  <Select
                    label="Risk Response"
                    value={riskResponse}
                    autoComplete="off"
                    onChange={(e) => setRiskResponse(e.target.value)}
                    required
                    style={{ width: "100%" }}>
                    <MenuItem value="Exploit">Exploit</MenuItem>
                    <MenuItem value="Accept">Accept</MenuItem>
                    <MenuItem value="Enhance">Enhance</MenuItem>
                    <MenuItem value="Avoid">Avoid</MenuItem>
                    <MenuItem value="Transfer">Transfer</MenuItem>
                    <MenuItem value="Mitigate">Mitigate</MenuItem>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <InputLabel>Risk Category</InputLabel>
                  <Select
                    label="Risk Category"
                    value={riskCategory}
                    autoComplete="off"
                    onChange={(e) => setRiskCategory(e.target.value)}
                    required
                    style={{ width: "100%" }}>
                    <MenuItem value="EXTERNAL FACTORS">
                      External Factors
                    </MenuItem>
                    <MenuItem value="PEOPLE">People</MenuItem>
                    <MenuItem value="SYSTEM">System</MenuItem>
                    <MenuItem value="PROCESS">Process</MenuItem>
                  </Select>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <InputLabel>Risk Probability Level</InputLabel>
                  <Select
                    label="Risk Probability Level"
                    value={riskProbabilityLevell}
                    autoComplete="off"
                    onChange={(e) => setRiskProbabilityLevel(e.target.value)}
                    required
                    style={{ width: "100%" }}>
                    <MenuItem value={1}>Almost Impossible (1)</MenuItem>
                    <MenuItem value={2}>Unlikely (2)</MenuItem>
                    <MenuItem value={3}>Likely (3)</MenuItem>
                    <MenuItem value={4}>Very Likely (4)</MenuItem>
                    <MenuItem value={5}>Almost Certain (5)</MenuItem>
                  </Select>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <InputLabel>Risk Impact level</InputLabel>
                  <Select
                    label="Risk Impact level"
                    value={riskImpactLevell}
                    autoComplete="off"
                    onChange={(e) => setRiskImpactLevel(e.target.value)}
                    required
                    style={{ width: "100%" }}>
                    {" "}
                    <MenuItem value={1}>Insignificant (1)</MenuItem>
                    <MenuItem value={2}>Minor (2)</MenuItem>
                    <MenuItem value={3}>Moderate (3)</MenuItem>
                    <MenuItem value={4}>Major (4)</MenuItem>
                    <MenuItem value={5}>Catastrophic (5)</MenuItem>
                  </Select>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Risk Objective"
                    multiline
                    value={riskObjective}
                    autoComplete="off"
                    onChange={(e) => setRiskObjective(e.target.value)}
                    required
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Risk Description"
                    multiline
                    value={riskDescription}
                    autoComplete="off"
                    onChange={(e) => setRiskDescription(e.target.value)}
                    required
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Risk Response Activity"
                    multiline
                    value={riskResponseActivity}
                    autoComplete="off"
                    onChange={(e) => setRiskResponseActivity(e.target.value)}
                    required
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row pb-3 pt-2 px-2 flex-row-reverse items-center">
              <button
                className="flex flex row items-center p-3 m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                type="submit"
                onClick={handleEditSubmit}>
                <FaSave className="icons" />
                Save
              </button>
              <button
                className="flex flex row items-center p-3 m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                type="submit"
                onClick={handleDeleteSubmit}>
                <FaTrashAlt className="icons" color="red" />
                Delete
              </button>
            </div>
          </FormControl>
        </Box>
      </Modal>
    </>
  );
}

export function ReviewRiskData(params) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const id = params.row.id;

  const [riskName, setRiskName] = useState(params.row.riskName);
  const [riskID, setRiskID] = useState(params.row.riskID);
  const [riskReview, setRiskReview] = useState(params.row.riskReview);
  const [NextRiskReviewDate, setNextRiskReviewDate] = useState(
    params.row.NextRiskReviewDate
  );
  const [riskReviewComments, setRiskReviewComments] = useState(
    params.row.riskReviewComments
  );
  const [createdAt, setCreatedAt] = useState(params.row.createdAt);
  const cdate = new Date(createdAt);
  const cDate = cdate.toISOString().split("T")[0];
  const ndate = new Date(NextRiskReviewDate);
  const nDate = ndate.toISOString().split("T")[0];
  const { trigger, triggerComponent } = React.useContext(Modaltrigger);

  const notify = () => {
    toast.success("Risk Review Saved Successfully", {
      onClose: () => {
        close();
      },
    });
  };
  const notifyFillForms = () => {
    toast.error("Kindly check Input details");
  };
  const notifyServerDown = () => {
    toast.error("Server is currently down Contact your admin");
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#FFFFFF",
    boxShadow: 24,
    p: 4,
    borderRadius: 1,
    width: 1200,
  };
  function handleOpen() {
    setOpen(!open);
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        EDITREVIEW_URL,
        JSON.stringify({
          riskID,
          riskReview,
          NextRiskReviewDate,
          riskReviewComments,
          id,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          withCredentials: true,
        }
      );
      notify();
      triggerComponent();
    } catch (error) {
      if (error.response.status === 400) {
        notifyFillForms();
      } else if (error.response.status === 500) {
        notifyServerDown();
      }
    }
  };

  return (
    <>
      <ToastContainer hideProgressBar autoClose={1000} />
      <button onClick={handleOpen} className="px-2">
        <FaEye className="icons" />
      </button>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <FormControl fullWidth>
            <div className=" px-10 py-10">
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Risk ID"
                    value={riskID}
                    disabled
                    autoComplete="off"
                    onChange={(e) => setRiskID(e.target.value)}
                    required
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Risk Name"
                    value={riskName}
                    disabled
                    autoComplete="off"
                    onChange={(e) => setRiskName(e.target.value)}
                    required
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <InputLabel>Risk Review</InputLabel>
                  <Select
                    label="Risk Review"
                    value={riskReview}
                    autoComplete="off"
                    onChange={(e) => setRiskReview(e.target.value)}
                    required
                    style={{ width: "100%" }}>
                    <MenuItem value="accept risk">Accept Risk</MenuItem>
                    <MenuItem value="reject risk">Reject Risk</MenuItem>
                    <MenuItem value="close risk">Close Risk</MenuItem>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    type="date"
                    label="Next Review Date"
                    value={nDate}
                    autoComplete="off"
                    onChange={(e) => {
                      const selectedDate = e.target.value;
                      const dateObj = new Date(selectedDate);

                      // Extract year, month, and day components
                      const year = dateObj.getFullYear();
                      const month = String(dateObj.getMonth() + 1).padStart(
                        2,
                        "0"
                      );
                      const day = String(dateObj.getDate()).padStart(2, "0");

                      // Format the date as "yyyy-MM-dd"
                      const formattedDate = `${year}-${month}-${day}`;
                      // Set the formatted date to state
                      setNextRiskReviewDate(formattedDate);
                    }}
                    required
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    type="date"
                    label="Created At"
                    disabled
                    value={cDate}
                    autoComplete="off"
                    onChange={(e) => {
                      const selectedDate = e.target.value;
                      const dateObj = new Date(selectedDate);

                      // Extract year, month, and day components
                      const year = dateObj.getFullYear();
                      const month = String(dateObj.getMonth() + 1).padStart(
                        2,
                        "0"
                      );
                      const day = String(dateObj.getDate()).padStart(2, "0");

                      // Format the date as "yyyy-MM-dd"
                      const formattedDate = `${year}-${month}-${day}`;
                      // Set the formatted date to state
                      setCreatedAt(formattedDate);
                    }}
                    required
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Risk Review Comments"
                    value={riskReviewComments}
                    multiline
                    autoComplete="off"
                    onChange={(e) => setRiskReviewComments(e.target.value)}
                    required
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row pb-3 pt-2 px-2 flex-row-reverse items-center">
              <button
                className="flex flex row items-center p-3 m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                type="submit"
                onClick={handleEditSubmit}>
                <FaSave className="icons" />
                Save
              </button>
            </div>
          </FormControl>
        </Box>
      </Modal>
    </>
  );
}

export function MonitoredRiskData(params) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const id = params.row.id;
  const [riskName, setRiskName] = useState(params.row.riskName);
  const [riskID, setRiskID] = useState(params.row.riskID);
  const [recommendedChanges, setRecommendedChanges] = useState(
    params.row.recommendedChanges
  );
  const [riskResponseImplementation, setRiskResponseImplementation] = useState(
    params.row.riskResponseImplementation
  );
  const [riskResponseActivitiyStatus, setRiskResponseActivitiyStatus] =
    useState(params.row.riskResponseActivitiyStatus);
  const [challenges, setChallenges] = useState(params.row.challenges);
  const [comments, setComments] = useState(params.row.comments);
  const [riskCreatedAt, setRiskCreatedAt] = useState(params.row.createdAt);
  const cdate = new Date(riskCreatedAt);
  const [mitigationOwner, setMitigationOwner] = useState(
    params.row.mitigationOwner
  );
  const [ownersName, setOwnersName] = useState([]);
  const cDate = cdate.toISOString().split("T")[0];
  const { trigger, triggerComponent } = React.useContext(Modaltrigger);

  const notify = () => {
    toast.success("Risk Monitoring Saved Successfully");
    close();
  };
  const notifyFillForms = () => {
    toast.error("Kindly check Input details");
  };
  const notifyServerDown = () => {
    toast.error("Server is currently down Contact your admin");
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#FFFFFF",
    boxShadow: 24,
    p: 4,
    borderRadius: 1,
    width: 1200,
  };

  function handleOpen() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }
  useEffect(() => {
    axios
      .get(OWNERSDROPDOWN_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
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

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        EDITMONITORING_URL,
        JSON.stringify({
          id,
          riskID,
          riskResponseActivitiyStatus,
          riskResponseImplementation,
          recommendedChanges,
          challenges,
          mitigationOwner,
          comments,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          withCredentials: true,
        }
      );
      notify();
      triggerComponent();
    } catch (error) {
      if (error.response.status === 400) {
        notifyFillForms();
      } else if (error.response.status === 500) {
        notifyServerDown();
      }
    }
  };
  return (
    <>
      <ToastContainer hideProgressBar autoClose={1000} />
      <button onClick={handleOpen} className="px-2">
        <FaEye className="icons" />
      </button>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <FormControl fullWidth>
            <div className=" px-10 py-10">
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Risk ID"
                    value={riskID}
                    autoComplete="off"
                    onChange={(e) => setRiskID(e.target.value)}
                    disabled
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Risk Name"
                    value={riskName}
                    autoComplete="off"
                    onChange={(e) => setRiskName(e.target.value)}
                    disabled
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <InputLabel>Response Activity Status</InputLabel>
                  <Select
                    label="Response Activity Status"
                    value={riskResponseActivitiyStatus}
                    autoComplete="off"
                    onChange={(e) =>
                      setRiskResponseActivitiyStatus(e.target.value)
                    }
                    required
                    style={{ width: "100%" }}>
                    <MenuItem value="YES">YES</MenuItem>
                    <MenuItem value="NO">NO</MenuItem>
                  </Select>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    type="date"
                    label="Created At"
                    value={cDate}
                    autoComplete="off"
                    onChange={(e) => {
                      const selectedDate = e.target.value;
                      const dateObj = new Date(selectedDate);

                      // Extract year, month, and day components
                      const year = dateObj.getFullYear();
                      const month = String(dateObj.getMonth() + 1).padStart(
                        2,
                        "0"
                      );
                      const day = String(dateObj.getDate()).padStart(2, "0");

                      // Format the date as "yyyy-MM-dd"
                      const formattedDate = `${year}-${month}-${day}`;
                      // Set the formatted date to state
                      setRiskCreatedAt(formattedDate);
                    }}
                    disabled
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="challenges"
                    value={challenges}
                    multiline
                    autoComplete="off"
                    onChange={(e) => setChallenges(e.target.value)}
                    required
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Response Implementation"
                    multiline
                    value={riskResponseImplementation}
                    autoComplete="off"
                    onChange={(e) =>
                      setRiskResponseImplementation(e.target.value)
                    }
                    required
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Recomended Changes"
                    multiline
                    value={recommendedChanges}
                    autoComplete="off"
                    onChange={(e) => setRecommendedChanges(e.target.value)}
                    required
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Comments"
                    multiline
                    value={comments}
                    autoComplete="off"
                    onChange={(e) => setComments(e.target.value)}
                    required
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <Select
                    label="Risk Reviewer"
                    value={mitigationOwner}
                    autoComplete="off"
                    onChange={(e) => setMitigationOwner(e.target.value)}
                    required
                    style={{ width: "100%" }}>
                    {ownersName.map((ownersName) => (
                      <MenuItem key={ownersName.id} value={ownersName.value}>
                        {" "}
                        {ownersName.value}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
              </div>
            </div>
            <div className="flex flex-row pb-3 pt-2 px-2 flex-row-reverse items-center">
              <button
                className="flex flex row items-center p-3 m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                type="submit"
                onClick={handleEditSubmit}>
                <FaSave className="icons" />
                Save
              </button>
            </div>
          </FormControl>
        </Box>
      </Modal>
    </>
  );
}

export function MitigatedRiskData(params) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const id = params.row.id;
  const [riskName, setRiskName] = useState(params.row.riskName);
  const [riskID, setRiskID] = useState(params.row.riskID);
  const [riskReviewer, setRiskReviewer] = useState(params.row.riskReviewer);

  const [mitigationEffort, setMitigationEffort] = useState(
    params.row.mitigationEffort
  );
  const [mitigationCost, setMitigationCost] = useState(
    params.row.mitigationCost
  );
  const [mitigationControl, setMitigationControl] = useState(
    params.row.mitigationControl
  );

  const [mitigatedRiskProbabilityLevell, setMitigatedRiskProbabilityLevel] =
    useState(
      getProbabiltyLevelNumber(params.row.mitigatedRiskProbabilityLevel)
    );
  const [mitigatedRiskImpactLevell, setMitigatedRiskImpactLevel] = useState(
    getImpactLevelNumber(params.row.mitigatedRiskImpactLevel)
  );
  const [createdAt, setCreatedAt] = useState(params.row.createdAt);
  const [ownersName, setOwnersName] = useState([]);
  const cdate = new Date(createdAt);
  const cDate = cdate.toISOString().split("T")[0];
  const { trigger, triggerComponent } = React.useContext(Modaltrigger);

  const notify = () => {
    toast.success("Risk Mitigation Saved Successfully", {
      onClose: () => {
        close();
      },
    });
  };
  const notifyFillForms = () => {
    toast.error("Kindly check Input details");
  };
  const notifyServerDown = () => {
    toast.error("Server is currently down Contact your admin");
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#FFFFFF",
    boxShadow: 24,
    p: 4,
    borderRadius: 1,
    width: 1200,
  };
  function handleOpen() {
    setOpen(!open);
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const mitigatedRiskProbabilityLevel = mitigatedRiskProbabilityLevell;

      const mitigatedRiskImpactLevel = mitigatedRiskImpactLevell;

      await axios.put(
        EDITMITIGATION_URL,
        JSON.stringify({
          id,
          riskID,
          mitigatedRiskProbabilityLevel,
          mitigatedRiskImpactLevel,
          mitigationEffort,
          riskReviewer,
          mitigationCost,
          mitigationControl,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          withCredentials: true,
        }
      );
      notify();
      triggerComponent();
    } catch (error) {
      if (error.response.status === 400) {
        notifyFillForms();
      } else if (error.response.status === 500) {
        notifyServerDown();
      }
    }
  };

  useEffect(() => {
    axios
      .get(RISKREVIEWERSDROPDOWN_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
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

  return (
    <>
      <ToastContainer hideProgressBar autoClose={1000} />
      <button onClick={handleOpen} className="px-2">
        <FaEye className="icons" />
      </button>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <FormControl fullWidth>
            <div className=" px-10 py-10">
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Risk ID"
                    value={riskID}
                    autoComplete="off"
                    onChange={(e) => setRiskID(e.target.value)}
                    disabled
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Risk Name"
                    value={riskName}
                    autoComplete="off"
                    onChange={(e) => setRiskName(e.target.value)}
                    disabled
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <Select
                    label="Risk Reviewer"
                    value={riskReviewer}
                    autoComplete="off"
                    onChange={(e) => setRiskReviewer(e.target.value)}
                    required
                    style={{ width: "100%" }}>
                    {ownersName.map((ownersName) => (
                      <MenuItem key={ownersName.id} value={ownersName.value}>
                        {" "}
                        {ownersName.value}
                      </MenuItem>
                    ))}
                  </Select>
                </div>

                <div className="relative mb-6" data-te-input-wrapper-init>
                  <InputLabel>Mitigation Effort</InputLabel>
                  <Select
                    label="Mitigation Effort"
                    value={mitigationEffort}
                    autoComplete="off"
                    onChange={(e) => setMitigationEffort(e.target.value)}
                    required
                    style={{ width: "100%" }}>
                    <MenuItem value="Trivial">Trivial</MenuItem>
                    <MenuItem value="Minor">Minor</MenuItem>
                    <MenuItem value="Considerable">Considerable</MenuItem>
                    <MenuItem value="Significant">Significant</MenuItem>
                    <MenuItem value="Exceptional">Exceptional</MenuItem>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <InputLabel>Mitigation Cost</InputLabel>
                  <Select
                    label="Mitigation Cost"
                    value={mitigationCost}
                    autoComplete="off"
                    onChange={(e) => setMitigationCost(e.target.value)}
                    required
                    style={{ width: "100%" }}>
                    <MenuItem value="$0 TO $100 000">$0 -$100,000</MenuItem>

                    <MenuItem value="$100 001 TO $200 000">
                      $100,001 -$200,000
                    </MenuItem>
                    <MenuItem value="$200 001 TO $300 000">
                      $200,001 -$300,000
                    </MenuItem>
                    <MenuItem value="$300 001 TO 400 000">
                      $300,001 -$400,000
                    </MenuItem>
                    <MenuItem value="$400 001 TO $500 000">
                      $400,001 -$500,000
                    </MenuItem>
                    <MenuItem value="$500 001 TO $600 000">
                      $500,001 -$600,000
                    </MenuItem>
                    <MenuItem value="$600 001 TO $700 000">
                      $600,001 -$700,000
                    </MenuItem>
                    <MenuItem value="$700 001 TO $800 000">
                      $700,001 -$800,000
                    </MenuItem>
                    <MenuItem value="$800 001 TO $900 000">
                      $800,001 -$900,000
                    </MenuItem>
                    <MenuItem value="$900 001 TO $1000 000">
                      $900 001 -$1000,000
                    </MenuItem>
                  </Select>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <InputLabel>Mitigation Control</InputLabel>
                  <Select
                    label="Mitigation Control"
                    multiline
                    value={mitigationControl}
                    autoComplete="off"
                    onChange={(e) => setMitigationControl(e.target.value)}
                    required
                    style={{ width: "100%" }}>
                    <MenuItem value="MANUAL">Manual</MenuItem>
                    <MenuItem value="SYSTEMATIC">Systematic</MenuItem>
                  </Select>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Mitigation Risk Score"
                    value={getRiskScore(
                      mitigatedRiskImpactLevell * mitigatedRiskProbabilityLevell
                    )}
                    autoComplete="off"
                    disabled
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <InputLabel>Mitigation Probability Level</InputLabel>
                  <Select
                    label="Risk Probability Level"
                    value={mitigatedRiskProbabilityLevell}
                    autoComplete="off"
                    onChange={(e) =>
                      setMitigatedRiskProbabilityLevel(e.target.value)
                    }
                    required
                    style={{ width: "100%" }}>
                    <MenuItem value={1}>Almost Impossible (1)</MenuItem>
                    <MenuItem value={2}>Unlikely (2)</MenuItem>
                    <MenuItem value={3}>Likely (3)</MenuItem>
                    <MenuItem value={4}>Very Likely (4)</MenuItem>
                    <MenuItem value={5}>Almost Certain (5)</MenuItem>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <InputLabel>Mitigated Risk Impact</InputLabel>
                  <Select
                    label="Mitigated Risk Impact"
                    value={mitigatedRiskImpactLevell}
                    autoComplete="off"
                    onChange={(e) =>
                      setMitigatedRiskImpactLevel(e.target.value)
                    }
                    required
                    style={{ width: "100%" }}>
                    {" "}
                    <MenuItem value={1}>Insignificant (1)</MenuItem>
                    <MenuItem value={2}>Minor (2)</MenuItem>
                    <MenuItem value={3}>Moderate (3)</MenuItem>
                    <MenuItem value={4}>Major (4)</MenuItem>
                    <MenuItem value={5}>Catastrophic (5)</MenuItem>
                  </Select>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    type="date"
                    label="Created At"
                    value={cDate}
                    disabled
                    autoComplete="off"
                    onChange={(e) => {
                      const selectedDate = e.target.value;
                      const dateObj = new Date(selectedDate);

                      // Extract year, month, and day components
                      const year = dateObj.getFullYear();
                      const month = String(dateObj.getMonth() + 1).padStart(
                        2,
                        "0"
                      );
                      const day = String(dateObj.getDate()).padStart(2, "0");

                      // Format the date as "yyyy-MM-dd"
                      const formattedDate = `${year}-${month}-${day}`;
                      // Set the formatted date to state
                      setCreatedAt(formattedDate);
                    }}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row pb-3 pt-2 px-2 flex-row-reverse items-center">
              <button
                className="flex flex row items-center p-3 m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                type="submit"
                onClick={handleEditSubmit}>
                <FaSave className="icons" />
                Save
              </button>
            </div>
          </FormControl>
        </Box>
      </Modal>
    </>
  );
}
export function MitigatedRiskReportData(params) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const [riskName, setRiskName] = useState(params.row.riskName);
  const [riskID, setRiskID] = useState(params.row.riskID);
  const [riskReviewer, setRiskReviewer] = useState(params.row.riskReviewer);
  const [mitigationEffort, setMitigationEffort] = useState(
    params.row.mitigationEffort
  );
  const [mitigationCost, setMitigationCost] = useState(
    params.row.mitigationCost
  );
  const [mitigationControl, setMitigationControl] = useState(
    params.row.mitigationControl
  );
  const [mitigatedRiskScore, setMitigatedRiskScore] = useState(
    params.row.mitigatedRiskScore
  );
  const [mitigatedRiskProbabilityLevel, setMitigatedRiskProbabilityLevel] =
    useState(params.row.mitigatedRiskProbabilityLevel);
  const [mitigatedRiskImpactLevel, setMitigatedRiskImpactLevel] = useState(
    params.row.mitigatedRiskImpactLevel
  );
  const [createdAt, setCreatedAt] = useState(params.row.createdAt);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#FFFFFF",
    boxShadow: 24,
    p: 4,
    borderRadius: 1,
  };
  function handleOpen() {
    setOpen(!open);
  }

  return (
    <>
      <button onClick={handleOpen} className="px-2">
        <FaEye className="icons" />
      </button>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <form className="w-[70rem]">
            <div className=" px-10 py-10">
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Risk ID"
                    value={riskID}
                    autoComplete="off"
                    onChange={(e) => setRiskID(e.target.value)}
                    required
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Risk Name"
                    value={riskName}
                    autoComplete="off"
                    onChange={(e) => setRiskName(e.target.value)}
                    required
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Mitigation Owner"
                    value={riskReviewer}
                    autoComplete="off"
                    onChange={(e) => setRiskReviewer(e.target.value)}
                    required
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Mitigation Effort"
                    value={mitigationEffort}
                    autoComplete="off"
                    onChange={(e) => setMitigationEffort(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Mitigation Cost"
                    value={mitigationCost}
                    autoComplete="off"
                    onChange={(e) => setMitigationCost(e.target.value)}
                    required
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Mitigation Control"
                    multiline
                    value={mitigationControl}
                    autoComplete="off"
                    onChange={(e) => setMitigationControl(e.target.value)}
                    required
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Mitigation Risk Score"
                    value={mitigatedRiskScore}
                    autoComplete="off"
                    onChange={(e) => setMitigatedRiskScore(e.target.value)}
                    required
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Mitigation Probability Level"
                    value={mitigatedRiskProbabilityLevel}
                    autoComplete="off"
                    onChange={(e) =>
                      setMitigatedRiskProbabilityLevel(e.target.value)
                    }
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Mitigated Risk Impact"
                    value={mitigatedRiskImpactLevel}
                    autoComplete="off"
                    onChange={(e) =>
                      setMitigatedRiskImpactLevel(e.target.value)
                    }
                    required
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Created At"
                    value={createdAt}
                    autoComplete="off"
                    onChange={(e) => setCreatedAt(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row pb-3 pt-2 px-2 flex-row-reverse items-center">
              <button className="flex flex row items-center p-3 m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <FaSave className="icons" />
                Save
              </button>
              <button className="flex flex row items-center p-3 m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <FaTrashAlt className="icons" color="red" />
                Delete
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </>
  );
}

export function DepartmentData(params) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const [deptID, setDepartmentID] = useState(params.row.deptID);
  const [name, setDepartmentName] = useState(params.row.name);
  const [manager, setManager] = useState(params.row.manager);
  const [managers, setOwnersNames] = useState([]);
  const [location, setLocation] = useState(params.row.location);
  const [createdAt, setCreatedAt] = useState(params.row.createdAt);
  const [updatedAt, setUpdatedAt] = useState(params.row.updatedAt);
  const [deletedAssociatedRisks, setDeletedAssociatedRisks] = useState(false);
  const [deptmentName, setdeptmentName] = useState([]);
  const cdate = new Date(createdAt);
  const cDate = cdate.toISOString().split("T")[0];
  const udate = new Date(updatedAt);
  const uDate = udate.toISOString().split("T")[0];
  const id = params.row.id;
  const { trigger, triggerComponent } = React.useContext(Modaltrigger);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#FFFFFF",
    boxShadow: 24,
    p: 4,
    borderRadius: 1,
    width: 1200,
  };
  function handleOpen() {
    setOpen(!open);
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    console.log(id);
    try {
      await axios.put(
        EDITDEPARTMENT_URL,
        JSON.stringify({
          id,
          name,
          deptID,
          manager,
          location,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          withCredentials: true,
        }
      );
      alert("User Saved Successfully");
      triggerComponent();
    } catch (error) {
      alert(error);
    }
  };

  const handleDeleteSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(
        `${DELETEDEPARTMENT_URL}/${id}/${deletedAssociatedRisks}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          withCredentials: true,
        }
      );
      alert("Department deleted Successfully");
      close();
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    axios
      .get(MANAGERSDROPDOWN_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        withCredentials: true,
      })
      .then((data) => {
        setOwnersNames(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(DEPARTMENTDROPDOWN_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        withCredentials: true,
      })
      .then((data) => {
        setdeptmentName(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <button onClick={handleOpen} className="px-2">
        <FaEye className="icons" />
      </button>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <FormControl fullWidth>
            <div className=" px-10 py-10">
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Department ID"
                    value={deptID}
                    autoComplete="off"
                    onChange={(e) => setDepartmentID(e.target.value)}
                    required
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <InputLabel>Department Name</InputLabel>
                  <Select
                    label="Department Name"
                    value={name}
                    autoComplete="off"
                    onChange={(e) => setDepartmentName(e.target.value)}
                    required
                    style={{ width: "100%" }}>
                    {deptmentName.map((deptmentName) => (
                      <MenuItem
                        key={deptmentName.names.id}
                        value={deptmentName.names.name}>
                        {" "}
                        {deptmentName.names.name}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <InputLabel>Manager</InputLabel>
                  <Select
                    label="Manager"
                    value={manager}
                    autoComplete="off"
                    onChange={(e) => setManager(e.target.value)}
                    required
                    style={{ width: "100%" }}>
                    {managers.map((managers) => (
                      <MenuItem key={managers.id} value={managers.value}>
                        {" "}
                        {managers.value}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Location"
                    value={location}
                    autoComplete="off"
                    onChange={(e) => setLocation(e.target.value)}
                    required
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    type="date"
                    label="Created At"
                    value={cDate}
                    autoComplete="off"
                    onChange={(e) => {
                      const selectedDate = e.target.value;
                      const dateObj = new Date(selectedDate);

                      // Extract year, month, and day components
                      const year = dateObj.getFullYear();
                      const month = String(dateObj.getMonth() + 1).padStart(
                        2,
                        "0"
                      );
                      const day = String(dateObj.getDate()).padStart(2, "0");

                      // Format the date as "yyyy-MM-dd"
                      const formattedDate = `${year}-${month}-${day}`;
                      // Set the formatted date to state
                      setCreatedAt(formattedDate);
                    }}
                    required
                    disabled
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    type="date"
                    label="Updated At"
                    value={uDate}
                    autoComplete="off"
                    onChange={(e) => {
                      const selectedDate = e.target.value;
                      const dateObj = new Date(selectedDate);

                      // Extract year, month, and day components
                      const year = dateObj.getFullYear();
                      const month = String(dateObj.getMonth() + 1).padStart(
                        2,
                        "0"
                      );
                      const day = String(dateObj.getDate()).padStart(2, "0");

                      // Format the date as "yyyy-MM-dd"
                      const formattedDate = `${year}-${month}-${day}`;
                      // Set the formatted date to state
                      setUpdatedAt(formattedDate);
                    }}
                    required
                    disabled
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div>
              <p>select manager to assign one for the department</p>
            </div>
            <div className="flex flex-row pb-3 pt-2 px-2 flex-row-reverse items-center">
              <button
                className="flex flex row items-center p-3 m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                type="submit"
                onClick={handleEditSubmit}>
                <FaSave className="icons" />
                Save
              </button>
              <button
                className="flex flex row items-center p-3 m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                type="submit"
                onClick={handleDeleteSubmit}>
                <FaTrashAlt className="icons" color="red" />
                Delete
              </button>
            </div>
          </FormControl>
        </Box>
      </Modal>
    </>
  );
}

export function CsvModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    borderRadius: "8px",
    p: 4,
  };
  return (
    <>
      <Button onClick={handleOpen} size="small" variant="outlined">
        Upload CsvFile
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ mb: 3 }}>
            Select to choose a file
          </Typography>
          <CsvUploader onAccepting={handleClose} />
        </Box>
      </Modal>
    </>
  );
}

export function LogOut() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const notify = () => {
    toast.success("Loginig Out Successful", {
      position: "top-center",
      onClose: () => {
        navigate("/", { replace: true });
        localStorage.clear();
      },
    });
  };

  const handleLogOut = async (e) => {
    e.preventDefault();
    try {
      await axios.get(LOGOUT_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        withCredentials: true,
      });
      handleClose();
      notify();
    } catch (error) {
      console.log(error);
    }
  };

  const style = {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    borderRadius: "8px",
    p: 2,
  };

  return (
    <>
      <ToastContainer onClose={5000} hideProgressBar />
      <button onClick={handleOpen} className="flex flex row items-center p-3">
        <FaSignOutAlt className="icons" />
        Logout
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div className="flex flex row items-center justify-center mb-4">
            <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg
                class="h-6 w-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            </div>
            <div className="ml-2">
              <Typography component="h2">
                Are you sure you want to Logout?
              </Typography>
            </div>
          </div>
          <div className="flex flex-row pb-3 pt-2 px-2 flex-row-reverse items-center">
            <button
              className="flex flex row items-center p-3 m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              type="submit"
              onClick={handleLogOut}>
              Yes
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export function RiskAdviceReportData() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  function handleOpen() {
    setOpen(!open);
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#FFFFFF",
    boxShadow: 24,
    p: 4,
    borderRadius: 1,
    width: 1200,
  };
  return (
    <>
      <button onClick={handleOpen} className="px-2">
        <FaEye className="icons" />
      </button>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div>
            <div className="grid grid-cols-6 bg-[#d6d3d1]">
              <div className="col-span-2 ">
                <div className="grid grid-cols-2 gap-1">
                  <div className="bg-sky-700 h-56 w-40 p-5 m-3">
                    <p className="">Inherent Risk</p>
                    <p className="">32</p>
                  </div>
                  <div className="bg-sky-700 h-56 w-40 p-3 m-3">
                    <p className="">Inherent Risk</p>
                    <p className="">32</p>
                  </div>
                </div>
              </div>
              <div className="col-span-4">
                <div className="grid grid-cols-3 ">
                  <div>
                    <h1>ID: </h1>
                  </div>
                  <div>
                    <h1>Status:</h1> managment review
                  </div>
                </div>
                <hr />
                <span className="pt-5">
                  <h3>subject</h3>
                </span>
              </div>
            </div>
            <div>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}>
                    <Tab label="Details" value="1" />
                    <Tab label="Mitigation" value="2" />
                    <Tab label="Review" value="3" />
                  </TabList>
                </Box>
                <TabPanel value="1">Item One</TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
              </TabContext>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
