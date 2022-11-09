import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { useEffect, useState } from "react";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Project from "./components/projects/Project";
import Skills from "./components/skills/Skills";
import ContactForm from "./components/contactForm/ContactForm";
import { WbSunny, Brightness2 } from "@material-ui/icons";
import { FaArrowCircleUp } from "react-icons/fa";

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

  // ====== Scroll Button Styling ======
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);

  // ==========Scroll Button Styling End ======
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
      <div className="scroll_to_top">
        {visible && <FaArrowCircleUp onClick={scrollToTop} />}
      </div>
    </div>
  );
}

export default App;
