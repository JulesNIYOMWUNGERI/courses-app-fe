import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
import { useParams } from "react-router-dom";

import { useCourseContext } from "../../CourseProviderContext";
import { Course } from "../../types";

interface CourseDetailsContextType {
  currentCourseDetails: Course | null;
}

const CourseDetailsContext = createContext<
  CourseDetailsContextType | undefined
>(undefined);

export const CourseDetailsProviderContext = ({
  children,
}: PropsWithChildren) => {
  const { courseData } = useCourseContext();
  const { id } = useParams<{ id: string }>();

  const [currentCourseDetails] = useState<Course | null>(() => {
    return courseData.find((course) => course?.id === id) || null;
  });

  const contextValue = useMemo(
    () => ({
      currentCourseDetails,
    }),
    [currentCourseDetails],
  );

  return (
    <CourseDetailsContext.Provider value={contextValue}>
      {children}
    </CourseDetailsContext.Provider>
  );
};

export const useCourseDetailsContext = () => {
  const context = useContext(CourseDetailsContext);
  if (!context) {
    throw new Error(
      "useCourseDetailsContext must be used within a CourseDetailsProviderContext",
    );
  }
  return context;
};
