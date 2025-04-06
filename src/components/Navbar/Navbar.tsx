import { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { FiUser } from "react-icons/fi";

import './Navbar.css'


const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageChange = (languageId: string) => {
    setSelectedLanguage(languageId);
  };
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }


  const Languages = [
    {
      id: 'en',
      name: 'English',
      flag: (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" fill="#00247D"/>
          <path d="M0 0 L24 24 M24 0 L0 24" stroke="#FFFFFF" strokeWidth="2"/>
          <path d="M12 0 L12 24 M0 12 L24 12" stroke="#FFFFFF" strokeWidth="4"/>
          <path d="M12 0 L12 24 M0 12 L24 12" stroke="#CF142B" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 'de',
      name: 'German',
      flag: (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="8" fill="#000000" />
          <rect width="24" height="8" y="8" fill="#FF0000" />
          <rect width="24" height="8" y="16" fill="#FFCC00" />
        </svg>
      )
    }
  ]

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="navbar-left">
          <button onClick={toggleSidebar}>
            {sidebarOpen ? <IoMdClose size={30} /> : <AiOutlineMenu size={30} />}
          </button>
          <h1 className="nav-title">Courses App</h1>
        </div>
        <div className="navbar-right">
          <span 
            className="user-icon"
            onClick={() => setProfileOpen(!profileOpen)}
          >
            <FiUser size={35} />
          </span>

          {profileOpen && (
            <div className="user-panel">
              <div>
                <h3>WELCOME USER1</h3>
              </div>

              <div className="language-container">
                <span className='title'>LANGUAGE</span>
                <div className="language-box">
                  {Languages.map((language) => (
                    <label
                      key={language.id}
                    >
                      <div className="language-card">
                        <input 
                          type="radio" 
                          name="language"
                          value={language.id}
                          defaultChecked={language.id === selectedLanguage} 
                          onChange={(e) => handleLanguageChange(e.target.value)} 
                        />
                        <div className="language-flag">
                          <div className="flag-icon">
                            {language.flag}
                          </div>
                          <span>{language.name}</span>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="logout-container">
                <button className="">Log out</button>
              </div>
            </div>
        )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar