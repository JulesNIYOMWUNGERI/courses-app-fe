import { memo, useState } from "react";

import { useLanguage } from "../../../../../contexts/LanguageProviderContext";

const ToggleSwitch = () => {
  const { t } = useLanguage();
  const [showAllCourses, setShowAllCourses] = useState(false);

  return (
    <div className="toggle-container">
      <button
        onClick={() => setShowAllCourses(!showAllCourses)}
        className="toggle-button"
      >
        <div className="toggle-switch">
          <div
            className={`toggle-track ${showAllCourses ? "active" : ""}`}
          ></div>
          <div
            className={`toggle-thumb ${showAllCourses ? "active" : ""}`}
          ></div>
        </div>
      </button>
      <span className="toggle-label">{t("showAllCourses")}</span>
    </div>
  );
};

export default memo(ToggleSwitch);
