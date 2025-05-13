import React from "react";

export type InputSize = "small" | "medium" | "large";

interface InputFieldProps {
  id: string;
  value?: string;
  label?: string;
  placeholder: string;
  type?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  inputStyles: string;
  inputContainerStyles: string;
  inputLabelStyles: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  value,
  label,
  placeholder,
  type = "text",
  name,
  onChange,
  required = false,
  inputStyles,
  inputContainerStyles,
  inputLabelStyles,
}) => {
  return (
    <div className={`${inputContainerStyles}`}>
      {label && (
        <label htmlFor={id} className={`${inputLabelStyles}`}>
          {label}
        </label>
      )}
      <input
        id={id}
        className={`${inputStyles}`}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        aria-required={required}
      />
    </div>
  );
};

export default InputField;
