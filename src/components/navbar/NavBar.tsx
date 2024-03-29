import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import SvgIcon from '../svg-icon/svg-icon';
import navData from '../../data/nav';

import './navBar.css';
import ShowView from '../show-view/show-view';

interface INavbarProps {
  onClick: () => void;
  theme: string;
}

const NavBar = ({ onClick, theme }: INavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseSidebar = () => {
    isOpen && setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      <header className="full-bleed">
        <nav className="nav-cont">
          <Link to="/" className="logo">
            <span className="logo_text">
              {'< '}tonniPaul{' />'}
            </span>
          </Link>

          <button
            className="switch"
            aria-label="toggle theme"
            onClick={onClick}
          >
            <SvgIcon
              name={theme === 'light' ? 'sun' : 'moon'}
              width="2rem"
              height="2rem"
            />
          </button>

          <ul
            className={`links-container ${isOpen && 'show-tab'} `}
            onClick={handleCloseSidebar}
          >
            <button
              className="menu-icon close-icon"
              onClick={handleCloseSidebar}
            >
              <i className="fa-solid fa-x x"></i>
            </button>
            {navData.map((items) => {
              return (
                <li key={items.id}>
                  <a
                    href={`${items.link}`}
                    className="links"
                    onClick={handleCloseSidebar}
                  >
                    <i className={items.icon}></i>
                    {items.description}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            className={`menu-icon ${isOpen && 'dark-tab-icon'} `}
            onClick={() => setIsOpen(true)}
          >
            {isOpen ? (
              <i className="fa-solid fa-x x"></i>
            ) : (
              <i className="fa-solid fa-bars "></i>
            )}
          </button>
        </nav>
      </header>

      <ShowView when={isOpen}>
        <div className="overlay" onClick={handleCloseSidebar} />
      </ShowView>
    </>
  );
};

export default NavBar;
