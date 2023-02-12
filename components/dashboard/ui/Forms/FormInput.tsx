import React from "react";

type Props = {
  label: string;
  type?: string;
  id?: string;
  name?: string;
};

const FormInput = ({ label, ...otherProps }: Props) => {
  return (
    <div className="group flex flex-col items-start gap-2 my-4">
      <label htmlFor={label} className="text-black font-semibold text-lg">
        {label}{" "}
      </label>
      <input
        {...otherProps}
        className="bg-gray-200 focus:outline-gray-300 text-gray-800 px-3 py-2 w-full rounded"
      />
    </div>
  );
};

export default FormInput;
