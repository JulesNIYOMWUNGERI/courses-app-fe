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

interface CourseManagementContextType {
  courseData: Course[];
  setCourseData: Dispatch<SetStateAction<Course[]>>;
}

const CourseContext = createContext<CourseManagementContextType | undefined>(
  undefined,
);

export const CourseProviderContext = ({ children }: PropsWithChildren) => {
  const [courseData, setCourseData] = useState<Course[]>(() => {
    const storedCourses = localStorage.getItem(COURSES_STORAGE_KEY);
    return storedCourses ? JSON.parse(storedCourses) : defaultCourseData;
  });

  useEffect(() => {
    localStorage.setItem(COURSES_STORAGE_KEY, JSON.stringify(courseData));
  }, [courseData]);

  const contextValue = useMemo(
    () => ({
      courseData,
      setCourseData,
    }),
    [courseData],
  );

  return (
    <CourseContext.Provider value={contextValue}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourseContext = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error(
      "useCourseContext must be used within a CourseProviderContext",
    );
  }
  return context;
};
