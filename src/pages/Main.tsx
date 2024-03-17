import { useRef } from 'react';
import About from '../components/about/About';
import ContactForm from '../components/contactForm/ContactForm';
import Hero from '../components/hero/Hero';
import Project from '../components/projects/Project';
import Skills from '../components/skills/Skills';

const Main = () => {
  const contactRef = useRef<HTMLElement>(null);

  const handleClick = () => {
    contactRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="main-container">
      <Hero onClick={handleClick} />
      <About />
      <Project />
      <Skills />
      <ContactForm contactRef={contactRef} />
    </main>
  );
};

export default Main;
