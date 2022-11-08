import "./navBar.css";
import ReactSwitch from "react-switch";
import { useState } from "react";
import navData from "../../Object Files/nav";
const NavBar = ({ onChange, checked }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    isOpen && setIsOpen(false);
  };

  return (
    <div className="nav-cont">
      <a href="/" className="logo">
        {"<> TonniPaul </>"}
      </a>
      <div className="switch">
        <ReactSwitch onChange={onChange} checked={checked} />
      </div>
      <ul
        className={`links-container ${isOpen && "show-tab"} `}
        onClick={handleIsOpen}
      >
        {navData.map((items) => {
          return (
            <a key={items.id} href={items.link} className="links">
              <i className={items.icon}></i> {items.description}
            </a>
          );
        })}
      </ul>

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

// getting active states to id links in
