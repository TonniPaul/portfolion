import "./navBar.css";
import { useState } from "react";
import Scrollspy from "react-scrollspy";

const NavBar = ({ onClick, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    isOpen && setIsOpen(false);
  };

  return (
    <div className="nav-cont">
      <a href="/" className="logo">
        {"<> TonniPaul </>"}
      </a>
      <div className="switch" onClick={onClick}>
        {children}
      </div>
      <>
        <Scrollspy
          items={["home", "about", "project", "skill", "contact"]}
          currentClassName="active"
          className={`links-container ${isOpen && "show-tab"} `}
          onClick={handleIsOpen}
        >
          <a href="#home" className="links">
            <i className="fa-solid fa-house"></i>
            Home
          </a>
          <a href="#about" className="links">
            <i className="fa-solid fa-address-card"></i>
            About
          </a>
          <a href="#project" className="links">
            <i className="fa-solid fa-code"></i>
            Projects
          </a>
          <a href="#skill" className="links">
            <i className="fa-solid fa-toolbox"></i>
            Skills
          </a>
          <a href="#contact" className="links">
            <i className="fa-solid fa-envelope"></i>
            Contact
          </a>
        </Scrollspy>
      </>

      <div
        className={`tab-icon ${isOpen && "dark-tab-icon"} `}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <i className="fa-solid fa-x"></i>
        ) : (
          <i className="fa-solid fa-bars "></i>
        )}
      </div>
    </div>
  );
};

export default NavBar;
