import React, { useState } from "react";

import "./UserDialog.css";
import { User } from "../../../pages/Administration/user/types";
import { useUserContext } from "../../../pages/Administration/user/UserProviderContext";
import InputField from "../../InputField/InputField";
import Dialog from "../Dialog";
import { useLanguage } from "../../../contexts/LanguageProviderContext";

function initForm(user?: User): User {
  if (user) return user;
  return {
    firstName: "",
    lastName: "",
  } as User;
}

interface UserDialogProps {
  user?: User;
  onClose(): void;
}

function UserDialog({ user, onClose }: UserDialogProps) {
  const [errors, setErrors] = useState<
    Partial<Record<keyof Omit<User, "id">, string>>
  >({});
  const [form, setForm] = useState<User>(initForm(user));
  const { setUsers } = useUserContext();

  const { t } = useLanguage();

  const validate = (): boolean => {
    const newErrors: { firstName?: string; lastName?: string } = {};

    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      if (form.id) {
        setUsers((prev) => prev.map((u) => (u.id === form.id ? form : u)));
      } else {
        setUsers((prev) => [...prev, { ...form, id: crypto.randomUUID() }]);
      }
      onClose();
    }
  };

  return (
    <Dialog
      isOpen={true}
      onClose={onClose}
      title={`${form.id ? t("edit") : t("createNew")} ${t("user")}`}
    >
      <form onSubmit={handleSubmit}>
        <div className="form-inputs-container">
          <div className="input-group">
            <InputField
              id="firstName"
              value={form.firstName}
              label={t("firstName")}
              placeholder={t("enterFirstName")}
              type="text"
              name="firstName"
              onChange={handleInputChange}
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
              value={form.lastName}
              label={t("lastName")}
              placeholder={t("enterLastName")}
              type="text"
              name="lastName"
              onChange={handleInputChange}
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
            {t("save")}
          </button>
          <button type="button" className="btns" onClick={onClose}>
            {t("cancel")}
          </button>
        </div>
      </form>
    </Dialog>
  );
}

export default UserDialog;
