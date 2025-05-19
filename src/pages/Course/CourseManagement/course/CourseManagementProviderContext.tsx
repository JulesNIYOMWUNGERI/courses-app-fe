import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";

import { useCourseContext } from "../../CourseProviderContext";
import { Option } from "../../types";

interface CourseManagementContextType {
  courseNameOptions: Option[];
  courseNameFilter: string;
  setCourseNameFilter: Dispatch<SetStateAction<string>>;
  courseDepartmentFilter: string;
  setCourseDepartmentFilter: Dispatch<SetStateAction<string>>;
  courseClassificationFilter: string;
  setCourseClassificationFilter: Dispatch<SetStateAction<string>>;
  clearFilter: () => void;
}

const CourseManagementContext = createContext<
  CourseManagementContextType | undefined
>(undefined);

export const CourseManagementProvider = ({ children }: PropsWithChildren) => {
  const { courseData } = useCourseContext();
  const [courseNameFilter, setCourseNameFilter] = useState("");
  const [courseDepartmentFilter, setCourseDepartmentFilter] = useState("");
  const [courseClassificationFilter, setCourseClassificationFilter] =
    useState("");

  const courseNameOptions = useMemo(() => {
    const filtered = courseData.filter((course) => {
      const matchesDept =
        courseDepartmentFilter && courseDepartmentFilter !== "all"
          ? course.department === courseDepartmentFilter
          : true;
      const matchesClass =
        courseClassificationFilter && courseClassificationFilter !== "all"
          ? course.classification === courseClassificationFilter
          : true;

      return matchesDept && matchesClass;
    });

    return filtered.map((course) => ({
      value: course.id,
      label: course.name,
    }));
  }, [courseData, courseDepartmentFilter, courseClassificationFilter]);

  const clearFilter = () => {
    setCourseNameFilter("");
    setCourseDepartmentFilter("");
    setCourseClassificationFilter("");
  };

  const contextValue = useMemo(
    () => ({
      courseNameOptions,
      courseNameFilter,
      setCourseNameFilter,
      courseDepartmentFilter,
      setCourseDepartmentFilter,
      courseClassificationFilter,
      setCourseClassificationFilter,
      clearFilter,
    }),
    [
      courseData,
      courseNameOptions,
      courseNameFilter,
      courseDepartmentFilter,
      courseClassificationFilter,
    ],
  );

  return (
    <CourseManagementContext.Provider value={contextValue}>
      {children}
    </CourseManagementContext.Provider>
  );
};

export const useCourseManagementContext = () => {
  const context = useContext(CourseManagementContext);
  if (!context) {
    throw new Error(
      "useCourseManagementContext must be used within a CourseManagementProvider",
    );
  }
  return context;
};
