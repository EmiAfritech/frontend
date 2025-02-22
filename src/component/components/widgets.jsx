import Select from "react-select";
import LoadingPopup from "../../api/sessions";
import { useTranslation } from "react-i18next";
import { useContext, useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import { AuthContext } from "../../context/AuthContext";
import { GRCFormsArray } from "./formarrays";
import { useDelete, useRiskOwnersDropdown } from "../../api/routes-data";
import { MdDelete } from "react-icons/md";

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
        disabled={disabled}
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
        disabled={disabled}
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

export function RiskDetailsSideTabs(data) {
  const [activeTab, setActiveTab] = useState("Risk Info");
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  console.log(activeTab);
  const renderComponent = () => {
    switch (activeTab) {
      case "Risk Info":
        return <RiskInfo data={data}/>;
      case "Mitigate":
        return <MitigateRIsk />;
      case "Review":
        return <ReviewRIsk />;
      case "Monitor Risk":
        return <MonitorRisk />;
      default:
        return <RiskInfo />;
    }
  };
  

  return (
    <div>
      <RiskDetailNavigation onTabChange={handleTabChange} />
      <div className="mt-6 mb-60">{renderComponent()}</div>
      <DeleteBox/>
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
  const disabled = useState(false)
  const {t} = useTranslation()
  const {ownersList} = useRiskOwnersDropdown()
  const options = GRCFormsArray(t)
  const RiskInfoInitialize = data.data;
  const [riskProbabilityLevel, setRiskProbabilityLevel] = useState()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [riskInfo, setRiskInfo] = useState({
    riskID: RiskInfoInitialize.riskID,
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

  return (
    <main className="grid grid-cols-2 gap-12 pt-5">
      {/* Left Column */}
      <div className="flex flex-col gap-8">
        <FormDetailsField
          id="riskID"
          label="Risk Code"
          value={riskInfo.riskID}
          onChange={onChange}
          disabled={disabled}
          required
        />
        <FormDetailsField
          id="riskName"
          label="Risk Name"
          value={riskInfo.riskName}
          onChange={onChange}
          disabled={disabled}
          required
        />
        <FormDetailsField
          id="riskOwner"
          label="Risk Owner"
          value={riskInfo.riskOwner}
          onChange={onChange}
          disabled={disabled}
          required
        />
        <FormDetailsField
          type="date"
          id="createdAt"
          label="Created At"
          value={riskInfo.createdAt}
          onChange={onChange}
          disabled={disabled}
          required
        />
        <FormDetailsField
          id="riskScore"
          label="Risk Score"
          value={riskInfo.riskScore}
          onChange={onChange}
          disabled={disabled}
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
          disabled={disabled}
          required
        />
        <FormDetailsField
          id="riskCategory"
          label="Risk Category"
          value={riskInfo.riskCategory}
          onChange={onChange}
          disabled={disabled}
          required
        />
        <FormDetailsField
          id="riskProbabilityLevel"
          label="Probability Level"
          value={riskInfo.riskProbabilityLevel}
          onChange={onChange}
          disabled={disabled}
          required
        />
        <FormDetailsField
          id="riskDescription"
          label="Risk Description"
          value={riskInfo.riskDescription}
          onChange={onChange}
          disabled={disabled}
          required
        />
        <FormDetailsField
          id="riskResponseActivity"
          label="Response Activity"
          value={riskInfo.riskResponseActivity}
          onChange={onChange}
          disabled={disabled}
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

export function Delete (data){
  const [open, setOpen] = useState(false)
  const RiskInfoInitialize = data.data;
  const [id, setId] = useState("")
  const [riskID, setRiskID] = useState("")
  const [deptId, setDeptId] = useState("")

  const {riskDelete} = useDelete({
    id, riskID, deptId
  })
  const handleDelete = () => {
    console.log("I am working")
    setId(RiskInfoInitialize.id),
    setRiskID(RiskInfoInitialize.riskID),
    setDeptId(RiskInfoInitialize.deptId)
  } 
  
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

  return(
    <div>
    <MdDelete onClick={handleOpen}/>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        <Button onClick={handleDelete}>Delete</Button>
      </Box>
    </Modal>
    </div>
  );
}
