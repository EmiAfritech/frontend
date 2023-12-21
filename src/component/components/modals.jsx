import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { FaTrashAlt, FaSave } from "react-icons/fa";
import "../comstyles/component.css";
import axios from "../../api/axios";
import {
  DELETEDEPARTMENT_URL,
  DELETERISK_URL,
  DELETEUSER_URL,
  DEPARTMENTDROPDOWN_URL,
  EDITDEPARTMENT_URL,
  EDITMITIGATION_URL,
  EDITMONITORING_URL,
  EDITREVIEW_URL,
  EDITRISK_URL,
  EDITUSER_URL,
  OWNERSDROPDOWN_URL,
} from "../../api/routes";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect } from "react";

export function UserData(params) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const [userName, setUserName] = useState(params.row.userName);
  const id = params.row.id;
  const [firstName, setFirstName] = useState(params.row.firstName);
  const [lastName, setLastName] = useState(params.row.lastName);
  const [email, setEmail] = useState(params.row.email);
  const [dob, setDob] = useState(params.row.dob);
  const [phoneNumber, setPhoneNumber] = useState(params.row.phoneNumber);
  const [role, setRole] = useState(params.row.role);
  const [createdAt, setCreatedAt] = useState(params.row.createdAt);
  const [updatedAt, setUpdatedAt] = useState(params.row.updatedAt);
  const [departmentName, setDepartmentName] = useState(
    params.row.departmentName
  );

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: 24,
    p: 4,
    borderRadius: 1,
    bgcolor: "#FFFFFF",
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
          dob,
          phoneNumber,
          userName,
          email,
          role,
          id,
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
      alert("User Saved Successfully");
    } catch (error) {
      alert(error);
    }
  };

  const handleDeleteSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(
        DELETEUSER_URL,
        JSON.stringify({
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
      alert("User Saved Successfully");
    } catch (error) {
      alert(error);
    }
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
          <form className="w-[70rem]">
            <div className=" px-10 py-10">
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="User ID"
                    value={id}
                    disabled
                    autoComplete="off"
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Username"
                    value={userName}
                    autoComplete="off"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="First Name"
                    value={firstName}
                    autoComplete="off"
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Last Name"
                    value={lastName}
                    autoComplete="off"
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Date of Birth"
                    value={dob}
                    autoComplete="off"
                    onChange={(e) => setDob(e.target.value)}
                    required
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Phone Number"
                    value={phoneNumber}
                    autoComplete="off"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Role"
                    value={role}
                    autoComplete="off"
                    onChange={(e) => setRole(e.target.value)}
                    required
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Email"
                    value={email}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Updated At"
                    value={updatedAt}
                    autoComplete="off"
                    onChange={(e) => setUpdatedAt(e.target.value)}
                    disabled
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Created At"
                    value={createdAt}
                    autoComplete="off"
                    onChange={(e) => setCreatedAt(e.target.value)}
                    disabled
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Department Name"
                    value={departmentName}
                    autoComplete="off"
                    onChange={(e) => setDepartmentName(e.target.value)}
                    required
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
          </form>
        </Box>
      </Modal>
    </>
  );
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
    params.row.riskProbabilityLevel
  );
  const [riskImpactLevell, setRiskImpactLevel] = useState(
    params.row.riskImpactLevel
  );
  const [riskScore, setRiskScore] = useState(params.row.riskScore);
  const [riskResponse, setRiskResponse] = useState(params.row.riskResponse);
  const [riskResponseActivity, setRiskResponseActivity] = useState(
    params.row.riskResponseActivity
  );
  const [deptmentName, setdeptmentName] = useState([]);
  const [ownersName, setOwnersName] = useState([]);
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
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
  };

  function handleOpen() {
    setOpen(!open);
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const riskProbabilityLevel = getProbabiltyLevelNumber(
        riskProbabilityLevell
      );
      const riskImpactLevel = getImpactLevelNumber(riskImpactLevell);

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
      alert("Risk Saved Successfully");
    } catch (error) {
      alert(error);
    }
  };

  const handleDeleteSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(
        DELETERISK_URL,
        JSON.stringify({
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
      alert("User Saved Successfully");
    } catch (error) {
      alert(error);
    }
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
          <form className="w-[70rem]">
            <div className=" px-10 py-10">
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Risk Code"
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
                    label="Department ID"
                    value={departmentID}
                    autoComplete="off"
                    onChange={(e) => setDepartmentID(e.target.value)}
                    required
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                <InputLabel>Department Name</InputLabel>
                  <Select
                    label="Department Name"
                    value={departmentName}
                    autoComplete="off"
                    onChange={(e) => setDepartmentName(e.target.value)}
                    required
                    style={{ width: '100%' }}>
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
              </div>
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <Select
                    label="Risk Owner"
                    value={riskOwner}
                    autoComplete="off"
                    onChange={(e) => setRiskOwner(e.target.value)}
                    required
                    style={{ width: '100%' }}
                    >
                    <MenuItem></MenuItem>
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
                    label="Created At"
                    value={riskCreatedAt}
                    autoComplete="off"
                    onChange={(e) => setRiskCreatedAt(e.target.value)}
                    required
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Risk Score"
                    value={riskScore}
                    autoComplete="off"
                    onChange={(e) => setRiskScore(e.target.value)}
                    required
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <Select
                    label="Risk Response"
                    value={riskResponse}
                    autoComplete="off"
                    onChange={(e) => setRiskResponse(e.target.value)}
                    style={{ width: '100%' }}
                    required
                    >
                    <MenuItem></MenuItem>
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
                  <Select
                    label="Risk Category"
                    value={riskCategory}
                    autoComplete="off"
                    onChange={(e) => setRiskCategory(e.target.value)}
                    required
                    style={{ width: '100%' }}
                    >
                    <MenuItem></MenuItem>
                    <MenuItem value="EXTERNAL FACTORS">
                      External Factors
                    </MenuItem>
                    <MenuItem value="PEOPLE">People</MenuItem>
                    <MenuItem value="SYSTEM">System</MenuItem>
                    <MenuItem value="PROCESS">Process</MenuItem>
                  </Select>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <Select
                    label="Risk Probability Level"
                    value={riskProbabilityLevell}
                    autoComplete="off"
                    onChange={(e) => setRiskProbabilityLevel(e.target.value)}
                    required
                    style={{ width: '100%' }}
                    >
                    <MenuItem value={1}>Almost Impossible</MenuItem>
                    <MenuItem value={2}>Unlikely</MenuItem>
                    <MenuItem value={3}>Likely</MenuItem>
                    <MenuItem value={4}>Very Likely</MenuItem>
                    <MenuItem value={5}>Almost Certain</MenuItem>
                  </Select>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <Select
                    label="Risk Impact level"
                    value={riskImpactLevell}
                    autoComplete="off"
                    onChange={(e) => setRiskImpactLevel(e.target.value)}
                    required
                    style={{ width: '100%' }}
                    >
                    {" "}
                    <MenuItem value={1}>Insignificant</MenuItem>
                    <MenuItem value={2}>Minor</MenuItem>
                    <MenuItem value={3}>Moderate</MenuItem>
                    <MenuItem value={4}>Major</MenuItem>
                    <MenuItem value={5}>Catastrophic</MenuItem>
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
          </form>
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
  const [riskReviewer, setRiskReviewer] = useState(params.row.riskReviewer);
  const [NextRiskReviewDate, setNextRiskReviewDate] = useState(
    params.row.NextRiskReviewDate
  );
  const [riskReviewComments, setRiskReviewComments] = useState(
    params.row.riskReviewComments
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

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        EDITREVIEW_URL,
        JSON.stringify({
          riskID,
          riskReview,
          NextRiskReviewDate,
          riskReviewer,
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
      alert("Risk Review Saved Successfully");
    } catch (error) {
      alert(error);
    }
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
          <form className="w-[70rem]">
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
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Risk Review"
                    value={riskReview}
                    autoComplete="off"
                    onChange={(e) => setRiskReview(e.target.value)}
                    required
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Risk Reviewer"
                    value={riskReviewer}
                    autoComplete="off"
                    onChange={(e) => setRiskReviewer(e.target.value)}
                    requiredd
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Next Review Date"
                    value={NextRiskReviewDate}
                    autoComplete="off"
                    onChange={(e) => setNextRiskReviewDate(e.target.value)}
                    required
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Created At"
                    disabled
                    value={createdAt}
                    autoComplete="off"
                    onChange={(e) => setCreatedAt(e.target.value)}
                    required
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
          </form>
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
      alert("Risk Monitoring Saved Successfully");
    } catch (error) {
      alert(error);
    }
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
          <form className="w-[70rem]">
            <div className=" px-10 py-10">
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Risk ID"
                    value={riskID}
                    autoComplete="off"
                    onChange={(e) => setRiskID(e.target.value)}
                    disabled
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Risk Name"
                    value={riskName}
                    autoComplete="off"
                    onChange={(e) => setRiskName(e.target.value)}
                    disabled
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Response Activity Status"
                    value={riskResponseActivitiyStatus}
                    autoComplete="off"
                    onChange={(e) =>
                      setRiskResponseActivitiyStatus(e.target.value)
                    }
                    required
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Created At"
                    value={riskCreatedAt}
                    autoComplete="off"
                    onChange={(e) => setRiskCreatedAt(e.target.value)}
                    disabled
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Chanlenges"
                    value={challenges}
                    multiline
                    autoComplete="off"
                    onChange={(e) => setChallenges(e.target.value)}
                    required
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
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Recomended Changes"
                    multiline
                    value={recommendedChanges}
                    autoComplete="off"
                    onChange={(e) => setRecommendedChanges(e.target.value)}
                    require
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
          </form>
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
  const [mitigationOwner, setMitigationOwner] = useState(
    params.row.mitigationOwner
  );
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
  const [mitigatedRiskProbabilityLevell, setMitigatedRiskProbabilityLevel] =
    useState(params.row.mitigatedRiskProbabilityLevel);
  const [mitigatedRiskImpactLevell, setMitigatedRiskImpactLevel] = useState(
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

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const mitigatedRiskProbabilityLevel = getProbabiltyLevelNumber(
        mitigatedRiskProbabilityLevell
      );
      const mitigatedRiskImpactLevel = getImpactLevelNumber(
        mitigatedRiskImpactLevell
      );
      await axios.put(
        EDITMITIGATION_URL,
        JSON.stringify({
          id,
          riskID,
          mitigatedRiskProbabilityLevel,
          mitigatedRiskImpactLevel,
          mitigationEffort,
          mitigationOwner,
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
      alert("risk Mitigation Saved Successfully");
    } catch (error) {
      alert(error);
    }
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
          <form className="w-[70rem]">
            <div className=" px-10 py-10">
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Risk ID"
                    value={riskID}
                    autoComplete="off"
                    onChange={(e) => setRiskID(e.target.value)}
                    disabled
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Risk Name"
                    value={riskName}
                    autoComplete="off"
                    onChange={(e) => setRiskName(e.target.value)}
                    disabled
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Mitigation Owner"
                    value={mitigationOwner}
                    autoComplete="off"
                    onChange={(e) => setMitigationOwner(e.target.value)}
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
                    value={mitigatedRiskProbabilityLevell}
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
                    value={mitigatedRiskImpactLevell}
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
                    disabled
                    autoComplete="off"
                    onChange={(e) => setCreatedAt(e.target.value)}
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
          </form>
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
  const [mitigationOwner, setMitigationOwner] = useState(
    params.row.mitigationOwner
  );
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
                    value={mitigationOwner}
                    autoComplete="off"
                    onChange={(e) => setMitigationOwner(e.target.value)}
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
  const [location, setLocation] = useState(params.row.location);
  const [createdAt, setCreatedAt] = useState(params.row.createdAt);
  const [updatedAt, setUpdatedAt] = useState(params.row.updatedAt);
  const id = params.row.id;
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

  const handleEditSubmit = async (e) => {
    e.preventDefault();
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
    } catch (error) {
      alert(error);
    }
  };

  const handleDeleteSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(
        `${DELETEDEPARTMENT_URL}/${id}`,

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          withCredentials: true,
        }
      );
      alert("User Saved Successfully");
    } catch (error) {
      alert(error);
    }
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
          <form className="w-[70rem]">
            <div className=" px-10 py-10">
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Department ID"
                    value={deptID}
                    autoComplete="off"
                    onChange={(e) => setDepartmentID(e.target.value)}
                    required
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Department Name"
                    value={name}
                    autoComplete="off"
                    onChange={(e) => setDepartmentName(e.target.value)}
                    required
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Manager"
                    value={manager}
                    autoComplete="off"
                    onChange={(e) => setManager(e.target.value)}
                    required
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Location"
                    value={location}
                    autoComplete="off"
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Created At"
                    value={createdAt}
                    autoComplete="off"
                    onChange={(e) => setCreatedAt(e.target.value)}
                    required
                    disabled
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <TextField
                    label="Updated At"
                    value={updatedAt}
                    autoComplete="off"
                    onChange={(e) => setUpdatedAt(e.target.value)}
                    required
                    disabled
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
          </form>
        </Box>
      </Modal>
    </>
  );
}
