import { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { LanguageSelect } from ".."

import './Navbar.css'


const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [profileOpen, setProfileOpen] = useState<boolean>(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <nav className="navbar">
        <div className="navbar-left">
          <button onClick={toggleSidebar}>
            {sidebarOpen ? <IoMdClose size={30} /> : <AiOutlineMenu size={30} />}
          </button>
          <h1 className="nav-title">Courses App</h1>
        </div>
        <div className="navbar-right">
          <button 
            className="user-icon"
            onClick={() => setProfileOpen(!profileOpen)}
          >
            <FiUser size={35} />
          </button>

          {profileOpen && (
            <div className="user-panel">
              <h3>WELCOME USER1</h3>

              <hr className="separator" />

              <LanguageSelect />

              <hr className="separator" />

              <button className="logout-button">Log out</button>
            </div>
        )}
        </div>
    </nav>
  )
}

export default Navbar