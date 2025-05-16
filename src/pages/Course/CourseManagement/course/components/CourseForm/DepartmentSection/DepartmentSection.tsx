import { memo } from "react";

import { departmentOptions } from "../../../constants";
import Dropdown from "../../../../../components/Dropdown/Dropdown";
import { useLanguage } from "../../../../../../../contexts/LanguageProviderContext";

const DepartmentSection = () => {
  const { t } = useLanguage();

  return (
    <section className="department-section">
      <h3 className="section-title">{t("courseDepartment")}</h3>
      <Dropdown options={departmentOptions} placeholder="All" />
    </section>
  );
};

export default memo(DepartmentSection);
