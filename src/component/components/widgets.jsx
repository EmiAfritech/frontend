import Select from "react-select";
import LoadingPopup from "../../api/sessions";
import { useTranslation } from "react-i18next";
import { useState } from "react";

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
          className={`block text-[12.5px] text-[#08376B] ${
            error ? "text-red-500" : ""
          }`}>
          {label} {required && <span className="required">*</span>}
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
            className={`block min-w-[100px] text-[12.5px] whitespace-nowrap text-[#08376B] ${
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
          className={`block text-[12.5px] min-w-[100px] whitespace-nowrap text-[#08376B] ${error ? "text-red-500" : ""}`}>
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


export function RiskDetailsSideTabs() {
  const [activeTab, setActiveTab] = useState("Risk Info");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  console.log(activeTab);
  const renderComponent = () => {
    switch (activeTab) {
      case "Risk Info":
        return <RiskInfo />;
      case "Mitigate":
        return <MitigateRIsk />;
      case "Review":
        return <ReviewRIsk />;
      default:
        return <RiskInfo />;
    }
  };

  return (
    <div>
      <LoadingPopup />
      <RiskDetailNavigation onTabChange={handleTabChange} />
      <div className="mt-6">{renderComponent()}</div>
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

export function RiskInfo({
  onChange,
  value,
  disabled,
  options,
  isSubmitting,
  handleSubmit,
  auth
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

export function MitigateRIsk() {
  return <div>Mitigate Risk</div>;
}

export function ReviewRIsk() {
  return <div>Review Risk</div>;
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
];
