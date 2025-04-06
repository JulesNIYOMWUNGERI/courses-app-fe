import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { Navbar } from "../components";
import Home from "../pages/Home/Home";



const Layout = () => {
  return (
    <div className="container">
        {/* <div>
            SideBar
        </div> */}
        <div>
            <Navbar />
            <Outlet />
        </div>
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
                path: '/home',
                element: <Home />,
            },
        ]
      },
]);

export default router;
