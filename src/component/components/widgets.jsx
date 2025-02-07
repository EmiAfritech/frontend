import Select from "react-select";

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
        className={`w-full p-2 bg-[#07073C] rounded-xl text-white rounded ${className} ${
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
    fieldLabel = false,
    value,
    onChange,
    error,
    required = false,
    id,
    label,
    options = [],
    group = true,
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
        {fieldLabel && <div className="my-2.5" />}
        <Select
          id={id}
          isMulti={isMulti}
          required={required}
          isSearchable={true}
          options={options}
          onChange={(selectedOption) =>
            group
              ? onChange(id, selectedOption ? selectedOption.value : "")
              : onChange(selectedOption.value)
          }
          defaultValue={
            group ? options.find((option) => option.value === value) : value
          }
          isClearable={true}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              height: "40px",
              padding: "2px",
              backgroundColor: "#E5E7EB",
              border: "none",
              borderRadius: "0",
            }),
          }}>
          <option>select ...</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </div>
    );
  };