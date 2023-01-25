import "./navBar.css";
import { useState } from "react";
import Scrollspy from "react-scrollspy";
import navData from "../../Object Files/nav";
import tonnipaul from "../../assets/tonnipaul_.png";

const NavBar = ({ onClick, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    isOpen && setIsOpen(false);
  };

  return (
    <nav className="nav-cont">
      <a href="/" className="logo">
        <img
          src={tonnipaul}
          alt="TonniPaul"
          className=" circle-card-cont logo_img"
        />
        <span className="logo_text">TonniPaul</span>
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
              <li key={items.id}>
                <a
                  href={`/${items.link}`}
                  className="flex links"
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
