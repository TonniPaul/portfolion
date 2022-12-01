import Hero from "../components/hero/Hero";
import { Suspense, lazy } from "react";

const About = lazy(() => import("../components/about/About"));
const Project = lazy(() => import("../components/projects/Project"));
const Skills = lazy(() => import("../components/skills/Skills"));
const ContactForm = lazy(() => import("../components/contactForm/ContactForm"));

const Main = () => {
  return (
    <div>
      <Hero />
      <Suspense fallback={<div>Hello there</div>}>
        <About />
        <Project />
        <Skills />
        <ContactForm />
      </Suspense>
    </div>
  );
};

export default Main;
