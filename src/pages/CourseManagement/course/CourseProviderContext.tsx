import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { COURSES_STORAGE_KEY, defaultCourseData } from "./constants";
import { Course } from "./types";

interface Option {
  value: string;
  label: string;
}

interface CourseManagementContextType {
  setCourseData: Dispatch<SetStateAction<Course[]>>;
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
  const [courseData, setCourseData] = useState<Course[]>(() => {
    const storedCourses = localStorage.getItem(COURSES_STORAGE_KEY);
    return storedCourses ? JSON.parse(storedCourses) : defaultCourseData;
  });
  const [courseNameFilter, setCourseNameFilter] = useState("");
  const [courseDepartmentFilter, setCourseDepartmentFilter] = useState("");
  const [courseClassificationFilter, setCourseClassificationFilter] =
    useState("");

  const courseNameOptions = useMemo(() => {
    const filtered = courseData.filter(
      (course) => {
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

  useEffect(() => {
    localStorage.setItem(COURSES_STORAGE_KEY, JSON.stringify(courseData));
  }, [courseData]);

  const contextValue = useMemo(
    () => ({
      setCourseData,
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
    ]
  );

  return (
    <CourseManagementContext.Provider value={contextValue}>
      {children}
    </CourseManagementContext.Provider>
  );
};

export const courseManagementContext = () => {
  const context = useContext(CourseManagementContext);
  if (!context) {
    throw new Error(
      "courseManagementContext must be used within a CourseManagementProvider"
    );
  }
  return context;
};
