import { ReactNode, useState } from 'react';

import './navBar.css';

import navData from '../../Object Files/nav';

interface INavbarProps {
  onClick: () => void;
  children: ReactNode;
}

const NavBar = ({ onClick, children }: INavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    isOpen && setIsOpen(false);
  };

  return (
    <nav className="nav-cont">
      <a href="/" className="logo">
        <img
          src="/assets/tonnipaul_.png"
          alt="TonniPaul"
          className="circle-card-cont logo_img"
        />
        <span className="logo_text">TonniPaul</span>
      </a>
      <div className="switch" title="Toggle Theme" onClick={onClick}>
        {children}
      </div>

      <div
        className={`links-container ${isOpen && 'show-tab'} `}
        onClick={handleIsOpen}
      >
        {navData.map((items) => {
          return (
            <li key={items.id}>
              <a
                href={`${items.link}`}
                className="flex links"
                onClick={handleIsOpen}
              >
                <i className={items.icon}></i>
                {items.description}
              </a>
            </li>
          );
        })}
      </div>

      <div
        className={`tab-icon ${isOpen && 'dark-tab-icon'} `}
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
