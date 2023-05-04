import { useRef } from "react";
import About from "../components/about/About";
import ContactForm from "../components/contactForm/ContactForm";
import Hero from "../components/hero/Hero";
import Project from "../components/projects/Project";
import Skills from "../components/skills/Skills";

const Main = () => {
  const contactClick = useRef("#contact");

  const handleClick = () => {
    contactClick.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Hero onClick={handleClick} />
      <About />
      <Project />
      <Skills />
      <ContactForm contact={contactClick} />
    </div>
  );
};

export default Main;
