import "./CourseManagement.css";
import FilterSection from "./course/components/FilterSection/FilterSection";
import CourseForm from "./course/components/CourseForm/CourseForm";
import { CourseManagementProvider } from "./course/CourseProviderContext";
import { useLanguage } from "../../contexts/LanguageProviderContext";

const CourseManagement = () => {
  const { t } = useLanguage();
  return (
    <main className="course-management">
      <h1 className="course-management-title">{t("courseManagement")}</h1>
      <CourseManagementProvider>
        <div className="course-management-content">
          <FilterSection />
          <CourseForm />
        </div>
      </CourseManagementProvider>
    </main>
  );
};

export default CourseManagement;
