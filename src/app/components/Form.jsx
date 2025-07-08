import React, { useState } from "react";
import Input from "./Input";
import { BuildingIcon, MailIcon, UserIcon } from "./icons/Icons";
import Button from "./Button";

const Form = ({ onSubmit, onCancel, isLoading }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    affiliateType: "individual",
    affiliateName: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Input
        id="name"
        name="name"
        label="Full Name"
        value={formData.name}
        onChange={handleChange}
        placeholder="John Doe"
        icon={<UserIcon />}
      />
      <Input
        id="email"
        name="email"
        label="Email Address"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="you@example.com"
        icon={<MailIcon />}
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          You are a...
        </label>
        <div className="flex items-center space-x-6 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-3">
          <div className="flex items-center">
            <input
              id="individual"
              name="affiliateType"
              type="radio"
              value="individual"
              checked={formData.affiliateType === "individual"}
              onChange={handleChange}
              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
            />
            <label
              htmlFor="individual"
              className="ml-2 block text-sm text-gray-900 dark:text-gray-200">
              Individual
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="company"
              name="affiliateType"
              type="radio"
              value="company"
              checked={formData.affiliateType === "company"}
              onChange={handleChange}
              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
            />
            <label
              htmlFor="company"
              className="ml-2 block text-sm text-gray-900 dark:text-gray-200">
              Company
            </label>
          </div>
        </div>
      </div>

      <Input
        id="affiliateName"
        name="affiliateName"
        label={
          formData.affiliateType === "company"
            ? "Company Name"
            : "Individual/Brand Name"
        }
        value={formData.affiliateName}
        onChange={handleChange}
        placeholder={`Enter ${formData.affiliateType} name`}
        icon={
          formData.affiliateType === "company" ? <BuildingIcon /> : <UserIcon />
        }
      />

      <div className="flex flex-col sm:flex-row-reverse gap-3 pt-2">
        <Button
          type="submit"
          variant="primary"
          disabled={isLoading ? false : true}>
          {isLoading ? "Sending Email...." : "Join"}
        </Button>
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
};
export default Form;
