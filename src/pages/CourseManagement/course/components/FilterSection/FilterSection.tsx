import { useLanguage } from "../../../../../contexts/LanguageProviderContext";
import { classificationOptions, departmentOptions } from "../../constants";
import { courseManagementContext } from "../../CourseProviderContext";
import Dropdown from "../Dropdown/Dropdown";
import "./FilterSection.css";

const FilterSection = () => {
  const { t } = useLanguage()
  const {
    courseNameFilter,
    courseDepartmentFilter,
    courseClassificationFilter,
    courseNameOptions,
    setCourseNameFilter,
    setCourseDepartmentFilter,
    setCourseClassificationFilter,
  } = courseManagementContext();

  const handleCourseNameFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => setCourseNameFilter(e.target.value);

  const handleCourseDepartmentFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCourseDepartmentFilter(e.target.value);
    setCourseNameFilter("");
  };

  const handleCourseClassificationFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCourseClassificationFilter(e.target.value);
    setCourseNameFilter("");
  };

  return (
    <section className="filter-section">
      <h3 className="section-title">{t("filter")}</h3>
      <div className="filters-container">
        <Dropdown
          options={courseNameOptions}
          value={courseNameFilter}
          onChange={handleCourseNameFilterChange}
          placeholder={t("courseName")}
        />
        <Dropdown
          options={departmentOptions}
          value={courseDepartmentFilter}
          onChange={handleCourseDepartmentFilterChange}
          placeholder={t("courseDepartment")}
        />
        <Dropdown
          options={classificationOptions}
          value={courseClassificationFilter}
          onChange={handleCourseClassificationFilterChange}
          placeholder={t("courseClassification")}
        />
      </div>
    </section>
  );
};

export default FilterSection;
