import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Route, Routes } from 'react-router-dom';

import NavBar from './components/navbar/NavBar';
import ScrollToTop from './components/ScrollToTop';
import ErrorPage from './components/Error/Error';
import Main from './pages/Main';

function App() {
  // Toggle Theme Function
  const [theme, setTheme] = useState(
    localStorage.getItem('themeColor') ?? 'light'
  );

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    localStorage.setItem('themeColor', theme);
  }, [theme]);

  return (
    <div className="App" id={theme}>
      <img
        src="/assets/bubbles.png"
        alt="background-image"
        className="background-image"
      />
      <NavBar onClick={toggleTheme} theme={theme} />

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
