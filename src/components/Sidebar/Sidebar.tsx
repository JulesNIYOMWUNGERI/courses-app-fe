import { IoIosArrowBack } from "react-icons/io";

import "./Sidebar.css";
import { Views } from "../../utils/utils";
import { ViewTypes } from "../../utils/types";
import { useLanguage } from "../../contexts/LanguageProviderContext";
import { useNavigate } from "react-router-dom";

type SidebarProps = {
  sidebarOpen: boolean;
  onClick: () => void;
};

const Sidebar = ({ sidebarOpen, onClick }: SidebarProps) => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    return () => {
      onClick();
      navigate(path);
    };
  };

  return (
    <>
      <aside className={`sidebar ${sidebarOpen ? "show" : ""}`}>
        <div className="sidebar-title-container">
          <button onClick={onClick} className="close-button">
            <IoIosArrowBack size={30} />
          </button>
        </div>
        <ul className="sidebar-menu">
          {Views.map((view: ViewTypes) => (
            <li
              key={view.id}
              onClick={handleNavigation(view.path)}
              className="menu-item"
            >
              {t(view.title)}
            </li>
          ))}
        </ul>
      </aside>

      <div className={`sidebar-overlay ${sidebarOpen ? "show" : ""}`} onClick={onClick} />
    </>
  );
};

export default Sidebar;
