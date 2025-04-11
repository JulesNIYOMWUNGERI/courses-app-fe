import { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { UserPanel } from ".."

import './Navbar.css'
import { useLanguage } from '../../contexts/LanguageProviderContext';


const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [profileOpen, setProfileOpen] = useState<boolean>(false);

  const { t } = useLanguage();

  const handleCloseUserPanel = () => {
    setProfileOpen(false);
  }

  const toggleUserPanel = () => {
    setProfileOpen(prev => !prev)
  }
  

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <nav className="navbar">
        <div className="navbar-left">
          <button onClick={toggleSidebar}>
            {sidebarOpen ? <IoMdClose size={30} /> : <AiOutlineMenu size={30} />}
          </button>
          <h1 className="nav-title">{t("coursesApp")}</h1>
        </div>
        <div className="navbar-right">
          <button 
            className="user-icon"
            onClick={toggleUserPanel}
          >
            <FiUser size={35} />
          </button>

          {profileOpen && (
            <UserPanel onClose={handleCloseUserPanel} />
          )}
        </div>
    </nav>
  )
}

export default Navbar;
