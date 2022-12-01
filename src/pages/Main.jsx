import About from "../components/about/About";
import ContactForm from "../components/contactForm/ContactForm";
import Hero from "../components/hero/Hero";
import Project from "../components/projects/Project";
import Skills from "../components/skills/Skills";

const Main = () => {
  return (
    <div>
      <Hero />
      <About />
      <Project />
      <Skills />
      <ContactForm />
    </div>
  );
};

export default Main;
