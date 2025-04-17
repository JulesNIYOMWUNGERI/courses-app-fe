import React, { useState } from "react";
import Dialog from "../Dialog";

import "./UserDialog.css";
import { UserData } from "../../../utils/types";
import InputField from "../../InputField/InputField";

interface UserFormProps {
  onSubmit: (user: UserData) => void;
  onCancel: () => void;
  isDialogOpen: boolean;
  initialValues: UserData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedUserId: string | null | undefined
}

const UserDialog = ({
  onSubmit,
  onCancel,
  isDialogOpen,
  initialValues,
  onInputChange,
  selectedUserId
}: UserFormProps) => {
  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
  }>({});

  const validate = (): boolean => {
    const newErrors: { firstName?: string; lastName?: string } = {};

    if (!initialValues.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!initialValues.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      onSubmit({ firstName: initialValues.firstName, lastName: initialValues.lastName });
    }
  };

  

  return (
    <Dialog isOpen={isDialogOpen} onClose={onCancel} title={`${selectedUserId ? "Edit" : "Create New"} User`}>
      <form onSubmit={handleSubmit}>
        <div className="form-inputs-container">
          <div className="input-group">
            <InputField
              id="firstName"
              value={initialValues.firstName}
              label="First Name"
              placeholder="Enter first name"
              type="text"
              name="firstName"
              onChange={onInputChange}
              inputStyles="input-field"
              inputContainerStyles="input-container"
              inputLabelStyles="input-label"
            />
            {errors.firstName && (
              <div className="error-message">{errors.firstName}</div>
            )}
          </div>

          <div className="input-group">
            <InputField
              id="lastName"
              value={initialValues.lastName}
              label="Last Name"
              placeholder="Enter last name"
              type="text"
              name="lastName"
              onChange={onInputChange}
              inputStyles="input-field"
              inputContainerStyles="input-container"
              inputLabelStyles="input-label"
            />
            {errors.lastName && (
              <div className="error-message">{errors.lastName}</div>
            )}
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btns">
            Save
          </button>
          <button type="button" className="btns" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </Dialog>
  );
};

export default UserDialog;
