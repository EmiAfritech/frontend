import * as React from "react";
import { useState, useContext, useEffect } from "react";
import {FaEye,FaSignOutAlt} from "react-icons/fa";
import afriquetek_logo from "../../assets/images/afriquetek_logo.png";
import "../comstyles/component.css";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import {
  EDITDEPARTMENT_URL,
  LOGOUT_URL,

} from "../../api/routes";
import {
  Modal,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { IoPerson } from "react-icons/io5";
import { MdOutlineMarkEmailRead, MdOutlineLocalPhone } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../context/AuthContext";
import { ModalModification as style, CustomButton, Delete, FormInputField } from "./widgets";
import { getImpactLevelNumber, getProbabilityLevelNumber, getRiskImpactLevel, MitigateRIsk, MonitorRisk, ReviewRIsk, RiskInfo } from "./modalforms";

export function UserAccountDetails(data) {
  const {auth} = useContext(AuthContext)
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [accountValue, setAccountValue] = useState({
    lastName: data.data.lastName,
    otherName: data.data.firstName,
    email: data.data.email,
    phone: data.data.phoneNumber,
    createdAt: data.data.createdAt,
    department: data.data.departmentName,
    role: data.data.role,
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setAccountValue((prevData) => ({ ...prevData, [id]: value }));
  };

  function handleOpen() {
    setOpen(!open);
  }

  const notify = () => {
    toast.success(t("userSavedSuccessfully") , {
      onClose: () => {
        close();
      },
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await axios.get(EDITUSER_URL, 
      JSON.stringify({
        lastName: data.data.lastName,
        otherName: data.data.firstName,
        email: data.data.email,
        phone: data.data.phoneNumber,
        createdAt: data.data.createdAt,
        department: data.data.departmentName,
        role: data.data.role,
      }),{
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + auth.token,
      },
      withCredentials: true,
    });
    notify();
  } catch (error) {
    if (error.response.status === 401) {
      notifyUnauthorized();
    } else if (error.response.status === 500) {
      notifyNetwork();
    }
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <IconButton onClick={handleOpen} color="primary">
        <FaEye />
      </IconButton>
      <Delete
        data = {data.data}
        message = "Are you sure you want to delete user?"
        name = "user"
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
                  <span>{accountValue.otherName}</span>
                </div>
                <div className="mb-2 flex flex-row items-center">
                  <span className="mr-4">
                    <MdOutlineMarkEmailRead color="blue" />
                  </span>
                  <span>{accountValue.email}</span>
                </div>
                <div className="mb-2 flex flex-row items-center">
                  <span className="mr-4">
                    <MdOutlineLocalPhone color="blue" />
                  </span>
                  <span>{accountValue.phone}</span>
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
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export function DepartmentAccountDetails(data) {
  const {auth} = useContext(AuthContext)
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [accountValue, setAccountValue] = useState({
    departmentName: data.data.name,
    departmentManager: data.data.manager,
    officeLocation: data.data.location,
    departmentID: data.data.deptID,
    createdAt: data.data.createdAt,
  });


  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setAccountValue((prevData) => ({ ...prevData, [id]: value }));
  };

  const notify = () => {
      toast.success(t("userSavedSuccessfully") , {
        onClose: () => {
          close();
        },
      });
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.get(EDITDEPARTMENT_URL, 
        JSON.stringify({
            deptID: accountValue.departmentID,
            location: accountValue.officeLocation,
            name: accountValue.departmentName,
            manager: accountValue.departmentManager,
            id: data.data.id
        }),
        {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
        withCredentials: true,
      });
      notify();
    } catch (error) {
      if (error.response.status === 401) {
        notifyUnauthorized();
      } else if (error.response.status === 500) {
        notifyNetwork();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

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
        data = {data.data}
        message = "Are you sure you want to delete department?"
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
            Account Details
          </div>

          {/* Scrollable Body */}
          <div className="overflow-y-auto max-h-[70vh] p-4">
            <main className="flex text-black p-4 justify-center items-center rounded-lg">
              <div className="flex-[1] border-r-2 border-r-[#cbd5e1] p-6 flex flex-col space-y-6 justify-center">
                <div className="flex justify-center items-center">
                  <img
                    src="https://th.bing.com/th/id/R.635f62858b227227ad3fc15de1da5c20?rik=2tuidPfmkjePNg&pid=ImgRaw&r=0"
                    alt="Sample"
                    className="h-[120] w-40"
                  />
                </div>
              </div>
              <div className="flex-[2] ml-8">
                <div className="grid grid-cols-2 gap-8 p-4">
                  <FormInputField
                    id="departmentID"
                    label="Department ID"
                    value={accountValue.departmentID}
                    onChange={handleInputChange}
                    required
                  />
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
                    id="officelocation"
                    label="Office Location"
                    value={accountValue.officeLocation}
                    onChange={handleInputChange}
                    required
                  />
                  <FormInputField
                    type="date"
                    id="createdAt"
                    label="Date Created"
                    value={accountValue.createdAt}
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
      console.log(error)
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

export function RiskDetails(data) {
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
          data={riskInfo}
          message="Are you sure you want to delete risk?"
          name="risk"
        />
      </div>
      <Modal open={open} onClose={close} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <button onClick={close} className="absolute top-4 right-4 text-black p-2 hover:bg-gray-400">✖</button>

          <div className="font-bold text-3xl flex items-center text-[#04B1C4] justify-center mb-6">
            GRC Risk Management
          </div>

          <div className="overflow-y-auto max-h-[70vh] p-4">
            <div className="grid grid-cols-6 bg-gray-300 mb-2 p-6 rounded-lg shadow-md">
              <div className="col-span-2 grid grid-cols-2 gap-4">
                <div className="bg-blue-700 text-white h-48 w-40 p-5 flex flex-col items-center justify-center rounded-lg shadow-md">
                  <p className="text-lg font-semibold">Inherent Risk</p>
                  <p className="text-7xl font-bold">{getImpactLevelNumber(riskInfo.riskImpactLevel) * getProbabilityLevelNumber(riskInfo.riskProbabilityLevel)}</p>
                  <p className="text-2xl font-bold">{riskInfo.riskScore}</p>
                </div>
              </div>

              <div className="col-span-4 flex flex-col py-10">
                <div className="flex space-x-6 items-center justify-between w-full text-lg font-medium pb-4">
                  <div className="text-gray-700">
                    ID: <span className="font-semibold text-blue-700">{riskInfo.riskID?.toUpperCase()}</span>
                  </div>
                  <div className="text-gray-700">
                    STATUS: <span className="font-semibold text-blue-700">{riskInfo.riskStatus?.toUpperCase()}</span>
                  </div>
                  <div className="text-gray-700">
                    CATEGORY: <span className="font-semibold text-blue-700">{riskInfo.riskCategory?.toUpperCase()}</span>
                  </div>
                </div>
                <hr className="my-4 w-full border-gray-400" />
                <div className="text-gray-700 text-lg font-medium">
                  SUBJECT: <span className="font-semibold text-blue-700">{riskInfo.riskDescription?.toUpperCase()}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800"></h3>
              </div>
            </div>
            <RiskInfo data={riskInfo}/>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export function MitigationDetails(data) {
  const { auth } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const mitigationInfo = data.data;

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
          data = {mitigationInfo}
          message = "Are you sure you want to delete mitigated risk risk?"
          name = "mitigation"
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
            <div className="grid grid-cols-6 bg-gray-300 mb-16 p-6 rounded-lg shadow-md">
              {/* Left Section: Risk Cards */}
              <div className="col-span-2 grid grid-cols-2 gap-4">
                <div className="bg-blue-700 text-white h-48 w-40 p-5 flex flex-col items-center justify-center rounded-lg shadow-md">
                  <p className="text-lg font-semibold">Inherent Risk</p>
                  <p className="text-7xl font-bold">{getImpactLevelNumber(mitigationInfo.riskImpactLevel) * getProbabilityLevelNumber(mitigationInfo.riskProbabilityLevel)}</p>
                  <p className="text-2xl font-bold">{mitigationInfo.riskScore}</p>
                </div>
                <div className="bg-blue-700 text-white h-48 w-40 p-5 flex flex-col items-center justify-center rounded-lg shadow-md">
                  <p className="text-lg font-semibold">Residual Risk</p>
                  <p className="text-7xl font-bold">{getImpactLevelNumber(mitigationInfo.mitigatedRiskImpactLevel) * getProbabilityLevelNumber(mitigationInfo.mitigatedRiskProbabilityLevel)}</p>
                  <p className="text-2xl font-bold">{mitigationInfo.mitigatedRiskScore}</p>
                </div>
              </div>

              {/* Right Section: Details */}
              <div className="col-span-4 flex flex-col py-10">
                <div className="flex  space-x-6 items-center justify-between w-full text-lg font-medium pb-4">
                  <div className="text-gray-700">
                    ID: <span className="font-semibold text-blue-700">{mitigationInfo.riskId}</span>
                  </div>
                  <div className="text-gray-700">
                    STATUS:{" "}
                    <span className="font-semibold text-blue-700">
                      {mitigationInfo.status?.toUpperCase()}
                    </span>
                  </div>
                  <div className="text-gray-700">
                    CATEGORY:{" "}
                    <span className="font-semibold text-blue-700">
                      {mitigationInfo.category?.toUpperCase()}
                    </span>
                  </div>
                </div>
                <hr className="my-4 w-full border-gray-400" />
                <div className="text-gray-700 text-lg font-medium">
                  SUBJECT:{" "}
                  <span className="font-semibold text-blue-700">
                    {mitigationInfo.riskName?.toUpperCase()}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800"></h3>
              </div>
            </div>
            <MitigateRIsk data= {mitigationInfo}  />
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export function RiskReviewDetails(data) {
  const { auth } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const reviewInfo = data.data;

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
          data = {reviewInfo}
          message = "Are you sure you want to delete reviewed risk?"
          name = "review"
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
            <div className="grid grid-cols-6 bg-gray-300 mb-16 p-6 rounded-lg shadow-md">
              {/* Left Section: Risk Cards */}
              <div className="col-span-2 grid grid-cols-2 gap-4">
                <div className="bg-blue-700 text-white h-48 w-40 p-5 flex flex-col items-center justify-center rounded-lg shadow-md">
                  <p className="text-lg font-semibold">Inherent Risk</p>
                  <p className="text-7xl font-bold">{getImpactLevelNumber(reviewInfo.riskImpactLevel) * getProbabilityLevelNumber(reviewInfo.riskProbabilityLevel)}</p>
                  <p className="text-2xl font-bold">{reviewInfo.riskScore}</p>
                </div>
                <div className="bg-blue-700 text-white h-48 w-40 p-5 flex flex-col items-center justify-center rounded-lg shadow-md">
                  <p className="text-lg font-semibold">Residual Risk</p>
                  <p className="text-7xl font-bold">{getImpactLevelNumber(reviewInfo.mitigatedRiskImpactLevel) * getProbabilityLevelNumber(reviewInfo.mitigatedRiskProbabilityLevel)}</p>
                  <p className="text-2xl font-bold">{reviewInfo.mitigatedRiskScore}</p>
                </div>
              </div> 

              {/* Right Section: Details */}
              <div className="col-span-4 flex flex-col py-10">
                <div className="flex  space-x-6 items-center justify-between w-full text-lg font-medium pb-4">
                  <div className="text-gray-700">
                    ID: <span className="font-semibold text-blue-700">{reviewInfo.riskId}</span>
                  </div>
                  <div className="text-gray-700">
                    STATUS:{" "}
                    <span className="font-semibold text-blue-700">
                      {reviewInfo.status?.toUpperCase()}
                    </span>
                  </div>
                  <div className="text-gray-700">
                    CATEGORY:{" "}
                    <span className="font-semibold text-blue-700">
                      {reviewInfo.riskCategory?.toUpperCase()}
                    </span>
                  </div>
                </div>
                <hr className="my-4 w-full border-gray-400" />
                <div className="text-gray-700 text-lg font-medium">
                  SUBJECT:{" "}
                  <span className="font-semibold text-blue-700">
                    {reviewInfo.riskName?.toUpperCase()}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800"></h3>
              </div>
            </div>
            <ReviewRIsk data= {reviewInfo} />
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export function RiskMonitoringDetails(data) {
  const { auth } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const monitorInfo = data.data;

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
          data = {monitorInfo}
          message = "Are you sure you want to delete monitored risk?"
          name = "monitor"
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
            <div className="grid grid-cols-6 bg-gray-300 mb-16 p-6 rounded-lg shadow-md">
              {/* Left Section: Risk Cards */}
              <div className="col-span-2 grid grid-cols-2 gap-4">
                <div className="bg-blue-700 text-white h-48 w-40 p-5 flex flex-col items-center justify-center rounded-lg shadow-md">
                  <p className="text-lg font-semibold">Inherent Risk</p>
                  <p className="text-7xl font-bold">{getImpactLevelNumber(monitorInfo.riskImpactLevel) * getProbabilityLevelNumber(monitorInfo.riskProbabilityLevel)}</p>
                  <p className="text-2xl font-bold">{monitorInfo.riskScore}</p>
                </div>
                <div className="bg-blue-700 text-white h-48 w-40 p-5 flex flex-col items-center justify-center rounded-lg shadow-md">
                  <p className="text-lg font-semibold">Residual Risk</p>
                  <p className="text-7xl font-bold">{getImpactLevelNumber(monitorInfo.mitigatedRiskImpactLevel) * getProbabilityLevelNumber(monitorInfo.mitigatedRiskProbabilityLevel)}</p>
                  <p className="text-2xl font-bold">{monitorInfo.mitigatedRiskScore}</p>
                </div>
              </div> 

              {/* Right Section: Details */}
              <div className="col-span-4 flex flex-col py-10">
                <div className="flex  space-x-6 items-center justify-between w-full text-lg font-medium pb-4">
                  <div className="text-gray-700">
                    ID: <span className="font-semibold text-blue-700">{monitorInfo.riskId}</span>
                  </div>
                  <div className="text-gray-700">
                    STATUS:{" "}
                    <span className="font-semibold text-blue-700">
                      {monitorInfo.status?.toUpperCase()}
                    </span>
                  </div>
                  <div className="text-gray-700">
                    CATEGORY:{" "}
                    <span className="font-semibold text-blue-700">
                      {monitorInfo.riskCategory?.toUpperCase()}
                    </span>
                  </div>
                </div>
                <hr className="my-4 w-full border-gray-400" />
                <div className="text-gray-700 text-lg font-medium">
                  SUBJECT:{" "}
                  <span className="font-semibold text-blue-700">
                    {monitorInfo.riskName?.toUpperCase()}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800"></h3>
              </div>
            </div>
            <MonitorRisk data= {monitorInfo}/>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
