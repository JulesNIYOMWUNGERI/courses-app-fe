import { useLanguage } from "../../../../../../contexts/LanguageProviderContext";
import { courseManagementContext } from "../../../CourseProviderContext";

interface ButtonSectionProps {
  onCancel: () => void;
}

const ButtonSection = ({ onCancel }: ButtonSectionProps) => {
  const { courseNameFilter } = courseManagementContext();
  const { t } = useLanguage()

  return (
    <div className="button-container">
      <button
        type="submit"
        disabled={courseNameFilter.length > 0}
        className={`${courseNameFilter && "disabled"} new-course-btn`}
      >
        {t("createNewCourse")}
      </button>
      <button
        type="submit"
        disabled={courseNameFilter.length === 0}
        className={`${!courseNameFilter && "disabled"} save-btn`}
      >
        {t("save")}
      </button>
      <button type="button" onClick={onCancel} className="cancel-btn">
        {t("cancel")}
      </button>
    </div>
  );
};

export default ButtonSection;
