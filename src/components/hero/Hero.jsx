import "./hero.css";
import hero from "../../assets/hero.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home">
      <div className="hero-main-cont">
        <div className="hero-flex">
          <motion.div
            className="hero-sub-cont-1"
            initial={{ translateX: "-100%" }}
            whileInView={{ translateX: 0 }}
          >
            <p>
              Hello <span className="wave">👋</span> ,
            </p>
            <p>
              I am <span className="alt-text-yellow">TonniPaul</span>
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
          >
            <img src={hero} alt="hero img" className="hero-img" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
