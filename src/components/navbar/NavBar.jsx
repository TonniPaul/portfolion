import "./navBar.css";
import { useState } from "react";
import Scrollspy from "react-scrollspy";
import navData from "../../Object Files/nav";

const NavBar = ({ onClick, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    isOpen && setIsOpen(false);
  };

  return (
    <nav className="nav-cont">
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
          {navData.map((items) => {
            return (
              <li className="links">
                <a
                  href={`/${items.link}`}
                  key={items.id}
                  className="flex"
                  onClick={handleIsOpen}
                >
                  <i className={items.icon}></i>
                  {items.description}
                </a>
              </li>
            );
          })}
        </Scrollspy>
      </>

      <div
        className={`tab-icon ${isOpen && "dark-tab-icon"} `}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <i className="fa-solid fa-x x"></i>
        ) : (
          <i className="fa-solid fa-bars "></i>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
