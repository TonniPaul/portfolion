import { useState } from 'react';
import { Link } from 'react-router-dom';

import SvgIcon from '../svg-icon/svg-icon';
import navData from '../../data/nav';

import './navBar.css';

interface INavbarProps {
  onClick: () => void;
  theme: string;
}

const NavBar = ({ onClick, theme }: INavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    isOpen && setIsOpen(false);
  };

  return (
    <header className="full-bleed">
      <nav className="nav-cont">
        <Link to="/" className="logo">
          <span className="logo_text">
            {'<'} tonniPaul {'/>'}
          </span>
        </Link>

        <button className="switch" aria-label="toggle theme" onClick={onClick}>
          <SvgIcon
            name={theme === 'light' ? 'sun' : 'moon'}
            width="2rem"
            height="2rem"
          />
        </button>

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
    </header>
  );
};

export default NavBar;
