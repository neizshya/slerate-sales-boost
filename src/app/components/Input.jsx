import React from "react";

const Input = ({
  id,
  name,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  icon: Icon,
  disabled = false,
  className = "",
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
        </label>
      )}
      <div className="relative rounded-md shadow-sm">
        {Icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
            {React.cloneElement(Icon, { className: "h-5 w-5 text-gray-400" })}
          </div>
        )}
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          className={`block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 transition-colors duration-200 ease-in-out ${
            Icon ? "pl-10" : "pl-4"
          } pr-4 py-3 ${
            disabled
              ? "cursor-not-allowed bg-gray-200 dark:bg-gray-800 opacity-60"
              : ""
          }`}
        />
      </div>
    </div>
  );
};
export default Input;
