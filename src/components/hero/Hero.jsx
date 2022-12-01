import "./hero.css";
import hero from "../../assets/hero.png";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Hero = () => {
  //framer motion animation variants
  const leftVariant = {
    hidden: {
      x: "-100%",
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 3,
      },
    },
  };
  const rightVariant = {
    hidden: {
      x: "100%",
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2,
      },
    },
  };

  return (
    <section id="home">
      <div className="hero-main-cont">
        <motion.div
          className="hero-flex"
          initial={"hidden"}
          whileInView={"show"}
          transition={{ staggerChildren: 0.5 }}
        >
          <motion.div className="hero-sub-cont-1" variants={leftVariant}>
            <p>
              Hello <span className="wave">👋</span> ,
            </p>
            <p className="flex left_align">
              I am
              <span className="alt-text-yellow">
                <Typewriter
                  options={{
                    strings: ["TonniPaul"],
                    autoStart: true,
                    loop: true,
                    cursor: "✍️",
                    pauseFor: 5000,
                  }}
                />
              </span>
            </p>
            <h1 className="hero-main-text ">
              I create <span className="alt-text">beautiful</span> and
              <span className="alt-text"> interactive</span> user interfaces
            </h1>

            <div className="btn-div">
              <a href="#about" className="btn">
                Explore More
              </a>
              <a
                href="https://1drv.ms/b/s!AqOoOpxoiQY4gRrIPX5ofiVuX5RY?e=n5e2Pl"
                target="blank"
                className="btn"
              >
                Download CV
                <i className="fa-solid fa-download"></i>
              </a>
            </div>
          </motion.div>
          <motion.div className="hero-sub-cont" variants={rightVariant}>
            <img src={hero} alt="3D-Image" className="hero-img" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
