import { memo } from "react";
import { useLanguage } from "../../../../../../contexts/LanguageProviderContext";
import { departmentOptions } from "../../../constants";
import Dropdown from "../../Dropdown/Dropdown";

const DepartmentSection = () => {
  const { t } = useLanguage();

  return (
    <section className="department-section">
      <h3 className="section-title">{t("courseDepartment")}</h3>
      <Dropdown
        options={departmentOptions}
        placeholder="All"
      />
    </section>
  );
};

export default memo(DepartmentSection);
