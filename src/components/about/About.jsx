import "./about.css";
import about from "../../assets/about__.png";
import microphone from "../../assets/about.png";
import ImageCard from "../../cards/imageCard/ImageCard";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Button from "../../cards/buttons/Button";

const About = () => {
  //framer motion animation variants
  const leftAboutVariant = {
    hidden: {
      x: "-100%",
      opacity: 0,
      scale: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      rotate: 360,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1,
      },
    },
  };
  const rightAboutVariant = {
    hidden: {
      x: "100%",
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.1,
        duration: 1,
      },
    },
  };
  return (
    <section id="about">
      <motion.div
        className="about-main-container"
        initial={"hidden"}
        whileInView={"show"}
        transition={{ staggerChildren: 0.2 }}
      >
        <div className="about-container">
          <motion.div
            viewport={{ once: false, amount: 0.5 }}
            variants={leftAboutVariant}
          >
            <ImageCard img={about} alt="3D image" />
          </motion.div>

          <motion.div
            className="about-sub-cont"
            viewport={{ once: false, amount: 0.5 }}
            variants={rightAboutVariant}
          >
            <div className="flex">
              <div className="abt-image-div">
                <img
                  src={microphone}
                  alt="note book icon"
                  className="about-image"
                />
              </div>

              <h1 className="abt-header alt-text">About Me</h1>
            </div>

            <div className="column">
              <p>Paul Oluwatoni Ariyo-Adeoye</p>
              <p className="alt-text"> Frontend Developer </p>
            </div>

            <hr className="short-hr" />

            <p className="about-me-text">
              I enjoy creating eye-catching web applications, and cross-platform
              mobile user interfaces as well as implementing web security
              practices in my work as a Frontend developer. As part of my
              efforts to enhance my knowledge, I am currently attending ALX for
              a software engineering course.
            </p>

            <div className="flex left_align">
              Interests:
              <Typewriter
                options={{
                  strings: [
                    "???? Music",
                    "???? Fashion",
                    "??? Football",
                    " Movies",
                    "???? Game",
                  ],
                  autoStart: true,
                  loop: true,
                  cursor: "??????",
                  pauseFor: 3000,
                }}
              />
            </div>

            <Button
              href="https://1drv.ms/b/s!AqOoOpxoiQY4gRrIPX5ofiVuX5RY?e=n5e2Pl"
              className="btn alt-text"
              target="blank"
            >
              Download CV
              <i className="fa-solid fa-download"></i>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
