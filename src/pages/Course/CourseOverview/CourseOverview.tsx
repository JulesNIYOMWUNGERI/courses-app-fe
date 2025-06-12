import ToggleSwitch from "./course/components/ToggleSwitch";
import CourseTable from "./course/CourseTable";
import { useLanguage } from "../../../contexts/LanguageProviderContext";
import "./CourseOverview.css";

const CourseOverview = () => {
  const { t } = useLanguage();

  return (
    <main className="course-overview">
      <h1 className="course-overview-title">{t("courseOverview")}</h1>

      <ToggleSwitch />

      <CourseTable />
    </main>
  );
};

export default CourseOverview;
