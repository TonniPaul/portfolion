import "./hero.css";
import hero from "../../assets/hero.png";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section id="home">
      <div className="hero-main-cont">
        <div className="hero-flex">
          <motion.div
            className="hero-sub-cont-1"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1, rotate: 360 }}
            transition={{
              type: "tween",
            }}
          >
            <p>
              Hello <span className="wave">👋</span> ,
            </p>
            <p className="flex">
              I am
              <span className="alt-text-yellow">
                <Typewriter
                  options={{
                    strings: ["TonniPaul"],
                    autoStart: true,
                    loop: true,
                    cursor: "✏️",
                    skipAddStyles: false,
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
          <motion.div
            className="hero-sub-cont"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ delay: 0.7, ease: "circInOut" }}
          >
            <img src={hero} alt="hero img" className="hero-img" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
