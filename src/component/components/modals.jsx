import * as React from "react";
import { useState, useContext, useEffect } from "react";
import {
  FaTrashAlt,
  FaSave,
  FaEye,
  FaSignOutAlt,
  FaExclamation,
} from "react-icons/fa";
import afriquetek_logo from "../../assets/images/afriquetek_logo.png";
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
  IconButton,
  TextField,
  Box,
} from "@mui/material";
import { IoPerson, IoLocationOutline, IoClose } from "react-icons/io5";
import { MdOutlineMarkEmailRead, MdOutlineLocalPhone } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../context/AuthContext";
import { CustomButton, Delete, DeleteBox, FormInputField, RiskDetailsSideTabs } from "./widgets";

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
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#FFFFFF",
  width: "85vw",
  height: "90vh",
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
};

export function UserData(params) {
  const { auth } = useContext(AuthContext);
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
            Authorization: "Bearer " + auth.token,
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
            Authorization: "Bearer " + auth.token,
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
          Authorization: "Bearer " + auth.token,
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

export function ReviewRiskData({ params }) {
  const { auth } = useContext(AuthContext);
  const { triggerComponent } = useContext(ModalTriggerContext);
  const [open, setOpen] = useState(false);
  const formattedDate = (dateString) =>
    new Date(dateString).toISOString().split("T")[0];
  const handleOpen = useCallback(() => setOpen((prev) => !prev), []);
  const close = useCallback(() => setOpen(false), []);
  const [riskData, setRiskData] = useState({
    riskName: params.row.riskName,
    riskID: params.row.riskID,
    riskReview: params.row.riskReview,
    nextRiskReviewDate: params.row.NextRiskReviewDate,
    riskReviewComments: params.row.riskReviewComments,
    createdAt: params.row.createdAt,
  });
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setRiskData((prev) => ({ ...prev, [name]: value }));
  }, []);
  const notify = useCallback(
    (type, message) => {
      toast[type](message, { onClose: close });
    },
    [close]
  );

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const { riskID, riskReview, nextRiskReviewDate, riskReviewComments } =
      riskData;
    try {
      await axios.put(
        EDITREVIEW_URL,
        JSON.stringify({
          riskID,
          riskReview,
          NextRiskReviewDate: nextRiskReviewDate,
          riskReviewComments,
          id: params.row.id,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.token}`,
          },
          withCredentials: true,
        }
      );
      notify("success", "Risk Review Saved Successfully");
      triggerComponent();
    } catch (error) {
      if (error.response?.status === 400) {
        notify("error", "Kindly check Input details");
      } else if (error.response?.status === 500) {
        notify("error", "Server is currently down. Contact your admin");
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
        <Box sx={{ ...style, width: 1200 }}>
          <FormControl fullWidth>
            <div className="px-10 py-10">
              <div className="grid grid-cols-4 gap-3 mb-6">
                <TextField
                  label="Risk ID"
                  name="riskID"
                  value={riskData.riskID}
                  disabled
                  autoComplete="off"
                  onChange={handleInputChange}
                  fullWidth
                />
                <TextField
                  label="Risk Name"
                  name="riskName"
                  value={riskData.riskName}
                  disabled
                  autoComplete="off"
                  onChange={handleInputChange}
                  fullWidth
                />
                <FormControl fullWidth>
                  <InputLabel>Risk Review</InputLabel>
                  <Select
                    label="Risk Review"
                    name="riskReview"
                    value={riskData.riskReview}
                    autoComplete="off"
                    onChange={handleInputChange}
                    fullWidth>
                    <MenuItem value="accept risk">Accept Risk</MenuItem>
                    <MenuItem value="reject risk">Reject Risk</MenuItem>
                    <MenuItem value="close risk">Close Risk</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="grid grid-cols-4 gap-3 mb-6">
                <TextField
                  type="date"
                  label="Next Review Date"
                  name="nextRiskReviewDate"
                  value={formattedDate(riskData.nextRiskReviewDate)}
                  autoComplete="off"
                  onChange={handleInputChange}
                  fullWidth
                />
                <TextField
                  type="date"
                  label="Created At"
                  name="createdAt"
                  value={formattedDate(riskData.createdAt)}
                  disabled
                  autoComplete="off"
                  onChange={handleInputChange}
                  fullWidth
                />
                <TextField
                  label="Risk Review Comments"
                  name="riskReviewComments"
                  value={riskData.riskReviewComments}
                  multiline
                  autoComplete="off"
                  onChange={handleInputChange}
                  fullWidth
                />
              </div>
            </div>
            <div className="flex flex-row-reverse items-center pb-3 pt-2 px-2">
              <button
                className="flex items-center p-3 m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
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
  const { auth } = useContext(AuthContext);
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
            Authorization: "Bearer " + auth.token,
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
  const { auth } = useContext(AuthContext);
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
  const [endDate, setEndDate] = useState(params.row.endDate);
  const [ownersName, setOwnersName] = useState([]);
  const edate = new Date(endDate);
  const eDate = edate.toISOString().split("T")[0];
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
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    type="date"
                    label="End Date"
                    value={eDate}
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
                      setEndDate(formattedDate);
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
  const { auth } = useContext(AuthContext);
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
            Authorization: "Bearer " + auth.token,
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
            Authorization: "Bearer " + auth.token,
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
          Authorization: "Bearer " + auth.token,
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
          Authorization: "Bearer " + auth.token,
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
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
        <div className="relative bg-white p-6 rounded-lg shadow-lg max-h-screen w-[85vw] h-[95vh]">
          {/* Close button in top-right corner */}
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            // onClick={onClose}
          >
            {/* <IoClose size={24} /> */}
          </button>

          {/* Header */}
          <div className="font-bold text-3xl flex items-center text-[#04B1C4] justify-center mb-6">
            {header}
          </div>

          {/* Scrollable Body */}
          <div className="overflow-y-auto max-h-[75%]">
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
          </div>
        </div>
      </div>
    </>
  );
}

export function RiskAdviceReportData() {
  const { auth } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  function handleOpen() {
    setOpen(!open);
  }

  useEffect(() => {
    axios
      .get(DEPARTMENTDROPDOWN_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
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
    <div>
      <IconButton onClick={handleOpen} color="primary">
        <FaEye />
      </IconButton>
      {open && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-[9999]">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-[80vw] h-[95vh]">
            {/* Close button in top-right corner */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 mb-6"
              onClick={close}>
              <IoClose size={24} />
            </button>
            <div className="grid grid-cols-6 bg-gray-300 mb-10 p-4">
              <div className="col-span-2 grid grid-cols-2 gap-4">
                <div className="bg-blue-700 text-white h-48 w-40 p-5 m-3">
                  <p>Inherent Risk</p>
                  <p>32</p>
                </div>
                <div className="bg-blue-700 text-white h-48 w-40 p-5 m-3">
                  <p>Inherent Risk</p>
                  <p>32</p>
                </div>
              </div>
              <div className="col-span-3 py-10 text-center">
                <div className="grid grid-cols-2 pb-4">
                  <h1>ID: {riskID}</h1>
                  <div>Status: Management Review</div>
                </div>
                <hr className="my-4" />
                <h3>Subject</h3>
              </div>
            </div>
            <div>
              <div className="flex space-x-4 border-b pb-2">
                <button className="px-4 py-2 bg-blue-500 text-white rounded">
                  Details
                </button>
                <button className="px-4 py-2 bg-gray-200 rounded">
                  Mitigation
                </button>
                <button className="px-4 py-2 bg-gray-200 rounded">
                  Review
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-5">
                <div>
                  <div className="flex items-center space-x-4">
                    <p>Risk ID:</p>
                    <input
                      type="text"
                      value={riskID}
                      onChange={(e) => setRiskID(e.target.value)}
                      className="border p-2 w-full"
                    />
                  </div>
                  <div className="flex items-center space-x-4 mt-4">
                    <p>Risk Name:</p>
                    <input
                      type="text"
                      value={riskName}
                      onChange={(e) => setRiskName(e.target.value)}
                      className="border p-2 w-full"
                    />
                  </div>
                  <div className="flex items-center space-x-4 mt-4">
                    <p>Department Name:</p>
                    <select
                      value={deptmentName}
                      onChange={(e) => setdeptmentName(e.target.value)}
                      className="border p-2 w-full">
                      <option>hi</option>
                    </select>
                  </div>
                  <div className="flex items-center space-x-4 mt-4">
                    <p>Probability Levels:</p>
                    <input
                      type="text"
                      value={riskProbabilityLevel}
                      onChange={(e) => setRiskProbabilityLevel(e.target.value)}
                      className="border p-2 w-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-4 mt-4">
                    <p>Risk Description:</p>
                    <input type="text" className="border p-2 w-full" />
                  </div>
                  <div className="flex items-center space-x-4 mt-4">
                    <p>Risk Impact Level:</p>
                    <input type="text" className="border p-2 w-full" />
                  </div>
                  <div className="flex items-center space-x-4 mt-4">
                    <p>Risk Objective:</p>
                    <input type="text" className="border p-2 w-full" />
                  </div>
                  <div className="flex items-center space-x-4 mt-4">
                    <p>Risk Owner:</p>
                    <input type="text" className="border p-2 w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function RiskData2(params) {
  const { auth } = useContext(AuthContext);
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
  const { triggerComponent } = React.useContext(Modaltrigger);

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
          Authorization: "Bearer " + auth.token,
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
            Authorization: "Bearer " + auth.token,
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
  console.log(auth.role);
  const handleDeleteSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`${DELETERISK_URL}/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
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
                  {auth.role === "MANAGER" || auth.role === "AUDITOR" ? (
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
                  {auth.role === "MANAGER" || auth.role === "AUDITOR" ? (
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

//new modals

export function UserAccountDetails() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [accountValue, setAccountValue] = useState({
    lastName: "",
    otherName: "",
    email: "",
    phone: "",
    address1: "",
    nationality: "",
    dob: "",
    officeLocation: "",
    department: "",
    role: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setAccountValue((prevData) => ({ ...prevData, [id]: value }));
  };

  function handleOpen() {
    setOpen(!open);
  }

  const handleSubmit = async (e) => {
    console.log({ userAccountDetials: accountValue });
  };

  return (
    <div>
      <IconButton onClick={handleOpen} color="primary">
        <FaEye />
      </IconButton>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <button
            onClick={close}
            className="absolute top-4 right-4 text-black p-2 hover:bg-gray-400">
            ✖
          </button>

          {/* Header */}
          <div className="font-bold text-3xl flex items-center text-[#04B1C4] justify-center mb-6">
            Account Details
          </div>

          {/* Scrollable Body */}
          <div className="overflow-y-auto max-h-[70vh] p-4">
            <main className="flex text-black p-4 justify-center items-center rounded-lg">
              <div className="flex-[1] border-r-2 border-r-[#cbd5e1] p-6 flex flex-col space-y-6 justify-center">
                <div className="flex justify-center items-center">
                  <img
                    src="https://shorturl.at/VaxG1"
                    alt="Sample"
                    className="h-[120] w-40"
                  />
                </div>
                <div className="mb-4 flex flex-row items-center">
                  <span className="mr-4">
                    <IoPerson color="blue" />
                  </span>
                  <span>Robert Knaihv</span>
                </div>
                <div className="mb-2 flex flex-row items-center">
                  <span className="mr-4">
                    <MdOutlineMarkEmailRead color="blue" />
                  </span>
                  <span>knaihv@ymail.com</span>
                </div>
                <div className="mb-2 flex flex-row items-center">
                  <span className="mr-4">
                    <MdOutlineLocalPhone color="blue" />
                  </span>
                  <span>+233 544-5342</span>
                </div>
                <div className="mb-2 flex flex-row items-center">
                  <span className="mr-4">
                    <IoLocationOutline color="blue" />
                  </span>
                  <span>JohnBull Street</span>
                </div>
              </div>
              <div className="flex-[2] ml-8">
                <div className="grid grid-cols-2 gap-8 p-4">
                  <FormInputField
                    id="lname"
                    label="Last Name"
                    value={accountValue.lastName}
                    onChange={handleInputChange}
                    required
                  />
                  <FormInputField
                    id="Oname"
                    label="Other Name"
                    value={accountValue.otherName}
                    onChange={handleInputChange}
                    required
                  />
                  <FormInputField
                    type="email"
                    id="email"
                    label="Email"
                    value={accountValue.email}
                    onChange={handleInputChange}
                    required
                  />
                  <FormInputField
                    type="phone"
                    id="phone"
                    label="Phone"
                    value={accountValue.phone}
                    onChange={handleInputChange}
                    required
                  />
                  <FormInputField
                    id="address1"
                    label="Address "
                    value={accountValue.address1}
                    onChange={handleInputChange}
                    required
                  />
                  <FormInputField
                    id="nationality"
                    label="Nationality"
                    value={accountValue.nationality}
                    onChange={handleInputChange}
                    required
                  />
                  <FormInputField
                    id="dob"
                    label="Date of Birth"
                    value={accountValue.dob}
                    onChange={handleInputChange}
                    required
                  />
                  <FormInputField
                    id="officelocation"
                    label="Office Location"
                    value={accountValue.officeLocation}
                    onChange={handleInputChange}
                    required
                  />
                  <FormInputField
                    id="department"
                    label="Department"
                    value={accountValue.department}
                    onChange={handleInputChange}
                    required
                  />
                  <FormInputField
                    id="role"
                    label="Role"
                    value={accountValue.role}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                {/* Footer with Submit Button */}
                <div className="px-16 mt-4 pb-4">
                  <CustomButton
                    label="Submit"
                    onClick={handleSubmit}
                    type="submit"
                    className="custom-class"
                    loading={isSubmitting}
                  />
                </div>
              </div>
            </main>
            <DeleteBox/>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export function DepartmentAccountDetails() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [accountValue, setAccountValue] = useState({
    departmentName: "",
    departmentManager: "",
    email: "",
    phone: "",
    address1: "",
    nationality: "",
    dob: "",
    officeLocation: "",
    department: "",
    role: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setAccountValue((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    console.log({ userAccountDetials: accountValue });
  };

  function handleOpen() {
    setOpen(!open);
  }
  return (
    <div>
      <IconButton onClick={handleOpen} color="primary">
        <FaEye />
      </IconButton>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <button
            onClick={close}
            className="absolute top-4 right-4 text-black p-2 hover:bg-gray-400">
            ✖
          </button>

          {/* Header */}
          <div className="font-bold text-3xl flex items-center text-[#04B1C4] justify-center mb-6">
            Account Details
          </div>

          {/* Scrollable Body */}
          <div className="overflow-y-auto max-h-[70vh] p-4">
            <main className="flex text-black p-4 justify-center items-center rounded-lg">
              <div className="flex-[1] border-r-2 border-r-[#cbd5e1] p-6 flex flex-col space-y-6 justify-center">
                <div className="flex justify-center items-center">
                  <img
                    src="https://th.bing.com/th/id/OIF.tVJjXsRXmyzpnTV2UwfQVA?w=175&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Sample"
                    className="h-[120] w-40"
                  />
                </div>
                <div className="mb-4 flex flex-row items-center">
                  <span className="mr-4">
                    <IoPerson color="blue" />
                  </span>
                  <span>Robert Knaihv</span>
                </div>
                <div className="mb-2 flex flex-row items-center">
                  <span className="mr-4">
                    <MdOutlineLocalPhone color="blue" />
                  </span>
                  <span>+233 544-5342</span>
                </div>
                <div className="mb-2 flex flex-row items-center">
                  <span className="mr-4">
                    <IoLocationOutline color="blue" />
                  </span>
                  <span>JohnBull Street</span>
                </div>
              </div>
              <div className="flex-[2] ml-8">
                <div className="grid grid-cols-2 gap-8 p-4">
                  <FormInputField
                    id="dname"
                    label="Department Name"
                    value={accountValue.departmentName}
                    onChange={handleInputChange}
                    required
                  />
                  <FormInputField
                    id="manager"
                    label="Department Manager"
                    value={accountValue.departmentManager}
                    onChange={handleInputChange}
                    required
                  />
                  <FormInputField
                    type="email"
                    id="email"
                    label="Email"
                    value={accountValue.email}
                    onChange={handleInputChange}
                    required
                  />
                  <FormInputField
                    type="phone"
                    id="phone"
                    label="Phone"
                    value={accountValue.phone}
                    onChange={handleInputChange}
                    required
                  />
                  <FormInputField
                    id="address1"
                    label="Address 1"
                    value={accountValue.address1}
                    onChange={handleInputChange}
                    required
                  />
                  <FormInputField
                    id="officelocation"
                    label="Office Location"
                    value={accountValue.officeLocation}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                {/* Footer with Submit Button */}
                <div className="px-16 mt-4 pb-4">
                  <CustomButton
                    label="Submit"
                    onClick={handleSubmit}
                    type="submit"
                    className="custom-class"
                    loading={isSubmitting}
                  />
                </div>
              </div>
            </main>
            <DeleteBox/>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export function LogOut() {
  const { clearAuth, auth } = useContext(AuthContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const { t } = useTranslation();
  const notifyUnauthorized = () => {
    toast.error("Unauthorized User!", {
      onClose: () => {
        navigate("/", { replace: true });
        clearAuth();
      },
    });
  };
  const notifyNetwork = () => {
    toast.error("Server is Currently Unavailable, Please Try Again Later!", {});
  };

  const handleLogOut = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.get(LOGOUT_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
        withCredentials: true,
      });
      navigate("/", { replace: true });
      clearAuth();
    } catch (error) {
      if (error.response.status === 401) {
        notifyUnauthorized();
      } else if (error.response.status === 500) {
        notifyNetwork();
      }
    } finally {
      setLoading(false);
    }
  };

  const style = {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    bgcolor: "white",
    borderBottom: "4px solid #000",
    boxShadow: "40px rgba(0, 0, 0, 0.2)",
    borderRadius: "8px",
    p: 2,
  };

  return (
    <>
      <ToastContainer onClose={5000} hideProgressBar />
      <button
        onClick={handleOpen}
        className="flex flex row items-center p-3 ml-3">
        <FaSignOutAlt className="icons" />
        {t("logout")}
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
              <Typography component="h2">{t("logoutMessage")}</Typography>
            </div>
          </div>
          <div className="flex flex-row pb-3 pt-2 px-2 flex-row-reverse items-center">
            <button
              className="flex flex row items-center p-3 m-2 bg-transparent hover:bg-blue-900 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              type="submit"
              onClick={handleLogOut}
              disabled={isLoading} // Disable the button while loading
            >
              {isLoading ? (
                <div className="flex flex-row justify-center">
                  <p className="text-sm pr-2">{t("loading")}</p>
                  <CircularProgress size={27} thickness={6} color="primary" />
                </div>
              ) : (
                t("yes")
              )}
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export function RiskDetails( data) {
  const { auth } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const riskInfo = data.data;

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <div>
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <IconButton onClick={handleOpen} color="primary">
        <FaEye />
      </IconButton>
        <Delete
          data = {riskInfo}
          message = "Are you sure you want to delete risk?"
          name = "risk"
        />
    </div>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <button
            onClick={close}
            className="absolute top-4 right-4 text-black p-2 hover:bg-gray-400">
            ✖
          </button>

          {/* Header */}
          <div className="font-bold text-3xl flex items-center text-[#04B1C4] justify-center mb-6">
            GRC Risk Management
          </div>

          {/* Scrollable Body */}
          <div className="overflow-y-auto max-h-[70vh] p-4">
            <div className="grid grid-cols-6 bg-gray-300 mb-2 p-6 rounded-lg shadow-md">
              {/* Left Section: Risk Cards */}
              <div className="col-span-2 grid grid-cols-2 gap-4">
                <div className="bg-blue-700 text-white h-48 w-40 p-5 flex flex-col items-center justify-center rounded-lg shadow-md">
                  <p className="text-lg font-semibold">Inherent Risk</p>
                  <p className="text-7xl font-bold">32</p>
                  <p className="text-2xl font-bold">Very High</p>
                </div>
                <div className="bg-blue-700 text-white h-48 w-40 p-5 flex flex-col items-center justify-center rounded-lg shadow-md">
                  <p className="text-lg font-semibold">Residual Risk</p>
                  <p className="text-7xl font-bold">32</p>
                  <p className="text-2xl font-bold">Very High</p>
                </div>
              </div>

              {/* Right Section: Details */}
              <div className="col-span-4 flex flex-col py-10">
                <div className="flex  space-x-6 items-center justify-between w-full text-lg font-medium pb-4">
                  <div className="text-gray-700">
                    ID: <span className="font-semibold">{riskInfo.riskID}</span>
                  </div>
                  <div className="text-gray-700">
                    Status:{" "}
                    <span className="font-semibold text-blue-700">
                      {riskInfo.riskStatus}
                    </span>
                  </div>
                  <div className="text-gray-700">
                    Category:{" "}
                    <span className="font-semibold text-blue-700">
                      {riskInfo.riskCategory}
                    </span>
                  </div>
                </div>
                <hr className="my-4 w-full border-gray-400" />
                <div className="text-gray-700 text-lg font-medium">
                  Subject:{" "}
                  <span className="font-semibold text-blue-700">
                    {riskInfo.riskDescription}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800"></h3>
              </div>
            </div>
            <div className="mb-10">To Delete an Item scroll to the end of the container</div>
            <RiskDetailsSideTabs data= {riskInfo} />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
