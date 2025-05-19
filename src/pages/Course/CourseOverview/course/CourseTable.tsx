import { useMemo } from "react";

import CourseRowActions from "./components/CourseRowActions";
import { Table } from "../../../../components";
import { Column } from "../../../../components/Table/types";
import { useLanguage } from "../../../../contexts/LanguageProviderContext";
import { useCourseContext } from "../../CourseProviderContext";
import { Course } from "../../types";

const CourseTable = () => {
  const { courseData } = useCourseContext();
  let { t } = useLanguage();
  const courseTableColumns: Column<Course>[] = useMemo(
    () => [
      { key: "name", header: t("courseName"), render: (row) => row.name },
      {
        key: "classification",
        header: t("courseClassification"),
        render: (row) => row.classification,
      },
      {
        key: "department",
        header: t("courseDepartment"),
        render: (row) => row.department,
      },
      {
        key: "participantGroups",
        header: t("courseParticipantGroup"),
        render: (row) => row.participantGroups.join(", "),
      },
      {
        key: "numberOfParticipants",
        header: t("numberOfParticipants"),
        render: (row) => row.numberOfParticipants,
      },
      {
        key: "actions",
        header: "",
        render: (course) => <CourseRowActions course={course} />,
      },
    ],
    [t],
  );
  return (
    <Table
      data={courseData}
      columns={courseTableColumns}
      emptyMessage="Looks like there are no courses yet."
    />
  );
};

export default CourseTable;
