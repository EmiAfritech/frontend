import Select from "react-select";
import LoadingPopup from "../../api/sessions";
import { useTranslation } from "react-i18next";
import { useContext, useState } from "react";
import { Box, Button, CircularProgress, IconButton, Modal, Typography } from "@mui/material";
import { AuthContext, Modaltrigger } from "../../context/AuthContext";
import { GRCFormsArray } from "./formarrays";
import { useDelete, useRiskOwnersDropdown } from "../../api/routes-data";
import { MdDelete } from "react-icons/md";
import { DELETERISK_URL } from "../../api/routes";
import { showToast } from "./notifications";
import axios from "../../api/axios";

export function InputField({
  label,
  type = "text",
  value,
  placeholder,
  onChange,
  required = false,
  error = "",
  id,
}) {
  return (
    <div className="mb-4">
      {label && (
        <label
          className={`block mb-2 font-bold text-[10px] italic ${
            error ? "text-red-500" : ""
          }`}>
          {label} {required && <span className="required">*</span>}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        autoComplete="false"
        className={`w-full p-2 border border-[#08376B] rounded-xl ${
          error ? "border border-red-500" : ""
        }`}
      />
    </div>
  );
}

export function CustomButton({
  label = "Click me",
  onClick,
  type = "button",
  disabled = false,
  loading = false,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`w-full p-2 bg-[#1E4D7E] rounded-xl text-white rounded-lg ${className} ${
        disabled || loading ? "opacity-50 cursor-not-allowed" : ""
      }`}>
      {loading ? (
        <span className="flex items-center justify-center">
          {/* Spinner */}
          <svg
            className="animate-spin h-5 w-5 mr-2 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V4a10 10 0 00-10 10h2zm2 5.292A7.964 7.964 0 014 12H2a10 10 0 0016.292 7.292l-1.414-1.414A8.003 8.003 0 016 17.292z"
            />
          </svg>
          Loading...
        </span>
      ) : (
        label
      )}
    </button>
  );
}

export const CustomSelect = ({
  isMulti = false,
  value,
  onChange,
  error,
  required = false,
  id,
  label,
  options = [],
}) => {
  

  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className={`block text-[12.5px] text-[#08376B] ${error ? "text-red-500" : ""}`}
        >
          {label} {required && <span className="required">*</span>}
        </label>
      )}
      <Select
        id={id}
        isMulti={isMulti}
        required={required}
        isSearchable={true}
        options={options}
        defaultValue={value} 
        onChange={(selectedOption) => onChange(selectedOption.value)}
        isClearable={true}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            height: "40px",
            padding: "2px",
            backgroundColor: "#E5E7EB",
            border: "none",
            borderRadius: "0",
          }),
        }}
      />
    </div>
  );
};

export function FormInputField({
  label,
  disabled = false,
  type = "text",
  value,
  placeholder,
  onChange,
  required = false,
  error = "",
  id,
}) {
  return (
    <div className="mb-1">
      <div className="flex flex-row">
        {label && (
          <label
            className={`block text-[12.5px] text-[#08376B] ${
              (error ? "text-red-500" : "", disabled ? "text-gray-300" : "")
            }`}>
            {label} {required && <span className="required">*</span>}
          </label>
        )}
      </div>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        autoComplete="false"
        className={`w-full p-2 bg-gray-200  ${
          (error ? "border border-red-500" : "", disabled ? "bg-gray-100" : "")
        }`}
      />
    </div>
  );
}

export function FormDetailsField({
  label,
  disabled = false,
  type = "text",
  value,
  placeholder,
  onChange,
  required = false,
  error = "",
  id,
}) {
  return (
    <div className="flex items-center gap-4 mt-4">
      <div className="flex flex-row">
        {label && (
          <label
            className={`block text-[12.5px] min-w-[120px] whitespace-nowrap text-[#08376B] ${
              (error ? "text-red-500" : "", disabled ? "text-gray-300" : "")
            }`}>
            {label} {required && <span className="required">*</span>}
          </label>
        )}
      </div>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        autoComplete="false"
        className={`w-full p-2 bg-gray-200  ${
          (error ? "border border-red-500" : "", disabled ? "bg-gray-100" : "")
        }`}
      />
    </div>
  );
}

export const CustomDetailsSelect = ({
  isMulti = false,
  value,
  onChange,
  error,
  required = false,
  id,
  label,
  options = [],
}) => {
  return (
    <div className="flex items-center w-full gap-4 mt-4">
      {label && (
        <label
          htmlFor={id}
          className={`block text-[12.5px] min-w-[120px] whitespace-nowrap text-[#08376B] ${
            error ? "text-red-500" : ""
          }`}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <Select
        id={id}
        isMulti={isMulti}
        required={required}
        isSearchable={true}
        options={options}
        onChange={onChange}
        defaultValue={value}
        isClearable={true}
        className="w-full"
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            width: "100%",
            height: "40px",
            padding: "2px",
            backgroundColor: "#E5E7EB",
            border: "none",
            borderRadius: "4px",
          }),
          menu: (baseStyles) => ({
            ...baseStyles,
            width: "100%",
          }),
        }}
      />
    </div>
  );
};

export function RiskMitigationSideTabs(data) {
  const [activeTab, setActiveTab] = useState("Risk Info");
  console.log({"riskdata": data})

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderComponent = () => {
    switch (activeTab) {
      case "Risk Info":
        return <RiskInfo data={data} />;
      default:
        return <RiskInfo data={data} />;
    }
  };

  return (
    <div>
      <RiskDetailNavigation onTabChange={handleTabChange} />
      <div className="my-6">{renderComponent()}</div>
    </div>
  );
}

export function RiskDetailsSideTabs(data) {
  const [activeTab, setActiveTab] = useState("Risk Info");
  console.log({"riskdata": data})

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderComponent = () => {
    switch (activeTab) {
      case "Risk Info":
        return <RiskInfo data={data} />;
      default:
        return <RiskInfo data={data} />;
    }
  };

  return (
    <div>
      <RiskDetailNavigation onTabChange={handleTabChange} />
      <div className="my-6">{renderComponent()}</div>
    </div>
  );
}


export function RiskDetailNavigation({ onTabChange }) {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(Tabs[0].title);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div>
      {/* Tabs Navigation */}
      <div className="flex p-6 justify-center">
        <ul className="flex flex-row space-x-1 border-b border-gray-300">
          {Tabs.map((tab) => (
            <li key={tab.title}>
              <button
                onClick={() => handleTabChange(tab.title)}
                className={`text-md font-thin font-[Open_Sans] p-4 ${
                  activeTab === tab.title
                    ? "text-[#04026b] border-b-2 border-[#04026b]"
                    : "text-black"
                }`}>
                <span className=" transition duration-300 ease-out">
                  {t(tab.title)}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function RiskInfo(data) {
  const {t} = useTranslation()
  const {ownersList} = useRiskOwnersDropdown()
  const options = GRCFormsArray(t)
  const RiskInfoInitialize = data.data;
  
  
  const [riskProbabilityLevel, setRiskProbabilityLevel] = useState()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [riskInfo, setRiskInfo] = useState({
    riskID: data.data.riskID,
    riskName: RiskInfoInitialize.riskName,
    createdAt: RiskInfoInitialize.updatedAt,
    riskScore: RiskInfoInitialize.riskScore,
    riskDescription: RiskInfoInitialize.riskDescription,
    riskResponseActivity: RiskInfoInitialize.riskResponseActivity,
    riskOwner: RiskInfoInitialize.riskOwner,
    riskResponse: RiskInfoInitialize.riskResponse,
    riskCategory: RiskInfoInitialize.riskCategory,
    riskProbabilityLevel: RiskInfoInitialize.riskProbabilityLevel,

  })
  const onChange = (e) => {
    const { id, value } = e.target;
    setRiskInfo((prevData) => ({ ...prevData, [id]: value }));
  };
  
  const handleSubmit = async (e) => {
      e.preventDefault();
  
      setIsSubmitting(true);
  
      try {
        const response = await axios.post(
          LOGIN_URL,
          JSON.stringify({ email, password }),
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            withCredentials: true,
          }
        );
        if (response.status === 200) {
          const {authToken, role, department, organizationName,} = response.data;
          const token = authToken
          setAuth({ token, role, department, organizationName, });
          setVerified(true);
          Cookies.set('token', token, {
            secure: process.env.NODE_ENV === 'production', 
            sameSite: 'Strict', 
          });
          Cookies.set('role', role, {
            secure: process.env.NODE_ENV === 'production', 
            sameSite: 'Strict', 
          });
          verifyRecapture();
        }
      } catch (err) {
        if (err.response?.status === 500 || err.response?.status === 400) {
          setNotification({ ...notification, serverDown: true });
          reload();
        } else if (err.response?.status === 401) {
          setNotification({ ...notification, authorized: true });
        } else if ([404].includes(err.response?.status)) {
          setNotification({ ...notification, errorMessage: true });
        }
      } finally {
        setLoading(false);
      }
    };

    console.log({"riskdatafromriskinfo": riskInfo.riskID})

  return (
    <main className="grid grid-cols-2 gap-12 pt-5">
      {/* Left Column */}
      <div className="flex flex-col gap-8">
        <FormDetailsField
          id="riskID"
          label="Risk Code"
          value={riskInfo.riskID}
          onChange={onChange}
          required
        />
        <FormDetailsField
          id="riskName"
          label="Risk Name"
          value={riskInfo.riskName}
          onChange={onChange}
          required
        />
        <FormDetailsField
          id="riskOwner"
          label="Risk Owner"
          value={riskInfo.riskOwner}
          onChange={onChange}
          required
        />
        <FormDetailsField
          type="date"
          id="createdAt"
          label="Created At"
          value={riskInfo.createdAt}
          onChange={onChange}
          required
        />
        <FormDetailsField
          id="riskScore"
          label="Risk Score"
          value={riskInfo.riskScore}
          onChange={onChange}
          required
        />
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-8">
        <FormDetailsField
          id="riskResponse"
          label="Risk Response"
          value={riskInfo.riskResponse}
          onChange={onChange}
          required
        />
        <FormDetailsField
          id="riskCategory"
          label="Risk Category"
          value={riskInfo.riskCategory}
          onChange={onChange}
          required
        />
        <FormDetailsField
          id="riskProbabilityLevel"
          label="Probability Level"
          value={riskInfo.riskProbabilityLevel}
          onChange={onChange}
          required
        />
        <FormDetailsField
          id="riskDescription"
          label="Risk Description"
          value={riskInfo.riskDescription}
          onChange={onChange}
          required
        />
        <FormDetailsField
          id="riskResponseActivity"
          label="Response Activity"
          value={riskInfo.riskResponseActivity}
          onChange={onChange}
          required
        />
      </div>

      {/* Submit Button */}
      <div className="col-span-2 flex justify-end pt-2 px-[300px]">
        <CustomButton
          label="Submit"
          onClick={handleSubmit}
          type="submit"
          className="custom-class"
          loading={isSubmitting}
        />
      </div>
    </main>
  );
}

export function MitigateRIsk({
  onChange,
  value,
  disabled,
  options,
  isSubmitting,
  handleSubmit,
  auth,
}) {
  return (
    <main className="grid grid-cols-2 gap-12 pt-5">
      {/* Left Column */}
      <div className="flex flex-col gap-8">
        <FormDetailsField
          id="riskID"
          label="Risk Code"
          value={value}
          onChange={onChange}
          disabled={disabled}
          required
        />
        <FormDetailsField
          id="riskName"
          label="Risk Name"
          value={value}
          onChange={onChange}
          disabled={disabled}
          required
        />
        <CustomDetailsSelect
          id="riskReviewer"
          label="Risk Reviewer"
          value={value}
          onChange={onChange}
          options={options}
          searchable={true}
          required
          group={false}
        />
        <CustomDetailsSelect
          id="MitigationControl"
          label="Mitigation Control"
          value={value}
          onChange={onChange}
          options={options}
          searchable={true}
          required
          group={false}
        />
        <FormDetailsField
          id="MitigationScore"
          label="Mitigation Score"
          value={value}
          onChange={onChange}
          disabled={disabled}
          required
        />
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-8">
        <CustomDetailsSelect
          id="MitigationEffort"
          label="Mitigation Effort"
          value={value}
          onChange={onChange}
          options={options}
          searchable={true}
          required
          group={false}
        />
        <CustomDetailsSelect
          id="MitigationCost"
          label="Mitigation Cost"
          value={value}
          onChange={onChange}
          options={options}
          searchable={true}
          required
          group={false}
        />
        <CustomDetailsSelect
          id="MitigationProbabilityLevel"
          label="Mitigation Probability Level"
          value={value}
          onChange={onChange}
          options={options}
          searchable={true}
          required
          group={false}
        />
        <CustomDetailsSelect
          id="MitigatedImpact"
          label="Mitigated Impact"
          value={value}
          onChange={onChange}
          options={options}
          searchable={true}
          required
          group={false}
        />
        <FormDetailsField
          type="date"
          id="createdAt"
          label="Created At"
          value={value}
          onChange={onChange}
          disabled={disabled}
          required
        />
      </div>

      {/* Submit Button */}
      <div className="col-span-2 flex justify-end pt-6">
        <CustomButton
          label="Submit"
          onClick={handleSubmit}
          type="submit"
          className="custom-class"
          loading={isSubmitting}
        />
      </div>
    </main>
  );
}

export function ReviewRIsk({
  onChange,
  value,
  disabled,
  options,
  isSubmitting,
  handleSubmit,
  auth,
  data
}) {
  console.log({"riskreview": data})
  return (
    <main className="grid grid-cols-2 gap-12 pt-5">
      {/* Left Column */}
      <div className="flex flex-col gap-8">
        <FormDetailsField
          id="riskID"
          label="Risk Code"
          value={value}
          onChange={onChange}
          disabled={disabled}
          required
        />
        <FormDetailsField
          id="riskName"
          label="Risk Name"
          value={value}
          onChange={onChange}
          disabled={disabled}
          required
        />
        {(auth === "MANAGER" || auth === "AUDITOR") && (
          <div className="flex flex-col gap-8">
            <FormDetailsField
              id="departmentId"
              label="Department Id"
              value={value}
              onChange={onChange}
              disabled={disabled}
              required
            />
            <FormDetailsField
              id="departmentName"
              label="Department Name"
              value={value}
              onChange={onChange}
              disabled={disabled}
              required
            />
          </div>
        )}
        <CustomDetailsSelect
          id="departmentName"
          label="Risk Owner"
          value={value}
          onChange={onChange}
          options={options}
          searchable={true}
          required
          group={false}
        />
        <FormDetailsField
          type="date"
          id="createdAt"
          label="Created At"
          value={value}
          onChange={onChange}
          disabled={disabled}
          required
        />
        <FormDetailsField
          id="riskScore"
          label="Risk Score"
          value={value}
          onChange={onChange}
          disabled={disabled}
          required
        />
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-8">
        <CustomDetailsSelect
          id="riskResponse"
          label="Risk Response"
          value={value}
          onChange={onChange}
          options={options}
          searchable={true}
          required
          group={false}
        />
        <CustomDetailsSelect
          id="riskCategory"
          label="Risk Category"
          value={value}
          onChange={onChange}
          options={options}
          searchable={true}
          required
          group={false}
        />
        <CustomDetailsSelect
          id="riskProbabilityLevel"
          label="Probability Level"
          value={value}
          onChange={onChange}
          options={options}
          searchable={true}
          required
          group={false}
        />
        <FormDetailsField
          id="riskDescription"
          label="Risk Description"
          value={value}
          onChange={onChange}
          disabled={disabled}
          required
        />
        <FormDetailsField
          id="riskResponseActivity"
          label="Response Activity"
          value={value}
          onChange={onChange}
          disabled={disabled}
          required
        />
      </div>

      {/* Submit Button */}
      <div className="col-span-2 flex justify-end pt-6">
        <CustomButton
          label="Submit"
          onClick={handleSubmit}
          type="submit"
          className="custom-class"
          loading={isSubmitting}
        />
      </div>
    </main>
  );
}

export function MonitorRisk({
  onChange,
  value,
  disabled,
  options,
  isSubmitting,
  handleSubmit,
  auth,
}) {
  return (
    <main className="grid grid-cols-2 gap-12 pt-5">
      {/* Left Column */}
      <div className="flex flex-col gap-8">
        <FormDetailsField
          id="riskID"
          label="Risk Code"
          value={value}
          onChange={onChange}
          disabled={disabled}
          required
        />
        <FormDetailsField
          id="riskName"
          label="Risk Name"
          value={value}
          onChange={onChange}
          disabled={disabled}
          required
        />
        <CustomDetailsSelect
          id="ResponseActivity"
          label="Response Activity"
          value={value}
          onChange={onChange}
          options={options}
          searchable={true}
          required
          group={false}
        />
        <FormDetailsField
          type="date"
          id="createdAt"
          label="Created At"
          value={value}
          onChange={onChange}
          disabled={disabled}
          required
        />
        <FormDetailsField
          id="challenges"
          label="challenges"
          value={value}
          onChange={onChange}
          disabled={disabled}
          required
        />
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-8">
        <CustomDetailsSelect
          id="riskResponse"
          label="Risk Response"
          value={value}
          onChange={onChange}
          options={options}
          searchable={true}
          required
          group={false}
        />
        <CustomDetailsSelect
          id="RiskReviewer"
          label="Risk Reviewer"
          value={value}
          onChange={onChange}
          options={options}
          searchable={true}
          required
          group={false}
        />
        <CustomDetailsSelect
          id="riskProbabilityLevel"
          label="Probability Level"
          value={value}
          onChange={onChange}
          options={options}
          searchable={true}
          required
          group={false}
        />
        <FormDetailsField
          id="ResponseImplementation"
          label="Response Implementation"
          value={value}
          onChange={onChange}
          disabled={disabled}
          required
        />
        <FormDetailsField
          id="riskResponseActivity"
          label="Response Activity"
          value={value}
          onChange={onChange}
          disabled={disabled}
          required
        />
      </div>

      {/* Submit Button */}
      <div className="col-span-2 flex justify-end pt-6">
        <CustomButton
          label="Submit"
          onClick={handleSubmit}
          type="submit"
          className="custom-class"
          loading={isSubmitting}
        />
      </div>
    </main>
  );
}

export const Tabs = [
  {
    title: "Risk Info",
  },
  {
    title: "Mitigate",
  },
  {
    title: "Review",
  },

  {
    title: "Monitor Risk",
  },
];

export function DeleteBox() {
  const [deleteItem, setDelete] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = () => {
    setIsSubmitting(true);
    console.log("Delete");
  };
  return (
    <main>
      <div className=" bg-gray-300 my-10 p-6 rounded-lg shadow-md h-44 flex flex-col space-y-4">
        <h1 className="font-bold text-red-500">
          Are you sure you Wish to Delete Item? This action is irrevisible
        </h1>
        <div className="font-bold flex space-x-1">
          <span>Type</span> <p className="text-red-500 font-bold">Delete.</p>{" "}
          <span>In the container below</span>
        </div>
        <div className="grid grid-cols-3 gap-4 w-full items-center">
          <FormInputField
            id="deleteItem"
            label="Delete."
            value={deleteItem}
            onChange={(e) => setDelete(e.target.value)}
            required
            className="col-span-2 w-full"
          />
          <div className="col-span-1 w-full mt-3">
            <Button variant="contained"  className="h-10" color="error">
              Delete
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export function Delete({ data, message, name }) {
  const { auth } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {triggerComponent} = useState(Modaltrigger)
  

  const handleDelete = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (name === "risk") {
        const response = await axios.post(
          DELETERISK_URL,
          JSON.stringify({ 
              id: data.id,
              riskID: data.riskID,
              deptId: data.deptID,
            }),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + auth.token,
            },
            withCredentials: true,
          }
        );
        if (response.status === 201) {
          showToast("Successfully deleted", "success");
          triggerComponent()
          handleClose()
        } else {
          showToast("Failed to delete. Please try again", "error");
          console.log(response)
        }
      } else {
      }
    } catch (error) {
      showToast("An error occurred. Please try again later.", "error");
      console.error("Delete error:", error);
    } finally {
      setIsSubmitting(false);
      setOpen(false); // Close the modal after the operation
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    <div>
      <IconButton onClick={handleOpen}>
        <MdDelete color="red" />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-row items-center justify-center mb-4">
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg
                className="h-6 w-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            </div>
            <div className="ml-2">
              <Typography component="h2">{message}</Typography>
            </div>
          </div>
          <div className="flex flex-row pb-3 pt-2 px-2 flex-row-reverse items-center">
            <button
              className="flex flex-row items-center p-3 m-2 bg-transparent hover:bg-blue-900 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              type="submit"
              onClick={handleDelete}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex flex-row justify-center">
                  <p className="text-sm pr-2">loading...</p>
                  <CircularProgress size={27} thickness={6} color="primary" />
                </div>
              ) : (
                <div>Yes</div>
              )}
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}