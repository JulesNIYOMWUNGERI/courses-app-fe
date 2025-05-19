import { useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

import { CourseProviderContext } from "../pages/Course/CourseProviderContext";

const CourseLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/course") {
      navigate("course_overview", { replace: true });
    }
  }, []);

  return (
    <CourseProviderContext>
      <Outlet />
    </CourseProviderContext>
  );
};

export default CourseLayout;
