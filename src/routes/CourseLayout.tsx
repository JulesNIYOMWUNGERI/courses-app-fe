import { useLocation, Outlet, Navigate } from "react-router-dom";

import { CourseProviderContext } from "../pages/Course/CourseProviderContext";

const CourseLayout = () => {
  const location = useLocation();

  if (location.pathname.replaceAll("/", "") === "course") {
    return <Navigate to="overview" replace />;
  }

  return (
    <CourseProviderContext>
      <Outlet />
    </CourseProviderContext>
  );
};

export default CourseLayout;
