import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { useEffect, useState } from "react";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Project from "./components/projects/Project";
import Skills from "./components/skills/Skills";
import ContactForm from "./components/contactForm/ContactForm";
import { WbSunny, Brightness2 } from "@material-ui/icons";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  // Toggle Theme Function
  // const [isDark, setIsDark] = useState(false);

  // useEffect(() => {
  //   const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
  //   setIsDark(darkTheme.matches);
  // }, []);
  const [theme, setTheme] = useState(
    localStorage.getItem("themeColor")
      ? localStorage.getItem("themeColor").toString()
      : "dark"
  );

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("themeColor", theme);
  }, [theme]);

  return (
    <div className="App" id={theme}>
      <NavBar onClick={toggleTheme}>
        {theme === "light" ? <Brightness2 /> : <WbSunny />}
      </NavBar>
      <Hero />
      <About />
      <Project />
      <Skills />
      <ContactForm />
      {/* SCROLL TO TOP ICON  */}
      <ScrollToTop />
    </div>
  );
}

export default App;
