import React from "react";

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div>
        <label htmlFor={name} className="text-sm font-medium text-gray-900 ">
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold px-1.5 py-1 text-xs text-black border-2 border-gray-200 bg-gray-200 rounded-lg my-2 ml-3 transition-all hover:scale-105"
          >
            Surprise Me
          </button>
        )}

        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="bg-gray-50 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none border block w-full p-3 mt-1"
          required
        />
      </div>
    </div>
  );
};

export default FormField;
