import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Route, Routes } from 'react-router-dom';

import NavBar from './components/navbar/NavBar';
import ScrollToTop from './components/ScrollToTop';
import ErrorPage from './components/Error/Error';
import Main from './pages/Main';

import './App.css';

function App() {
  // Toggle Theme Function
  const [theme, setTheme] = useState(
    localStorage.getItem('themeColor')
      ? localStorage.getItem('themeColor').toString()
      : 'light'
  );

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    localStorage.setItem('themeColor', theme);
  }, [theme]);

  return (
    <div className="App" id={theme}>
      <NavBar onClick={toggleTheme}>
        <img
          src={theme === 'light' ? '/assets/sun.png' : '/assets/moon.png'}
          alt=""
          className="switchIcon"
          width={20}
          height={20}
        />
      </NavBar>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {/* SCROLL TO TOP ICON  */}
      <ScrollToTop />
      <footer className="flex column footer">
        <small> &copy; {new Date().getFullYear()}, all rights reserved</small>
        <small>
          Designed & Built by{' '}
          <span className="alt-text TNP">TonniPaul&#xae;</span>
        </small>
      </footer>
      <Analytics />
    </div>
  );
}

export default App;
