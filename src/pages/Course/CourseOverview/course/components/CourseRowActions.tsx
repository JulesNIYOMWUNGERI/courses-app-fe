import { memo } from "react";

import DeleteCourseBtn from "./DeleteCourseBtn";
import OpenCourseBtn from "./OpenCourseBtn";
import { Course } from "../../../types";

export default memo(({ course }: { course: Course }) => {
  return (
    <div className="action-buttons">
      <OpenCourseBtn />
      <DeleteCourseBtn course={course} />
    </div>
  );
});
