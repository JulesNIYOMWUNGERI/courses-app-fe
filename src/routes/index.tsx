import { useState } from "react";
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";

import { Navbar, Sidebar } from "../components";
import Administration from "../pages/Administration/Administration";
import Home from "../pages/Home/Home";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="container">
      <Sidebar sidebarOpen={sidebarOpen} onClick={toggleSidebar} />
      <>
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Outlet />
      </>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/administration",
        element: <Administration />,
      },
    ],
  },
]);

export default router;
