import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

import './hero.css';

interface IHeroProps {
  onClick: () => void;
}

const Hero = ({ onClick }: IHeroProps) => {
  //framer motion animation variants
  const leftVariant = {
    hidden: {
      x: '-100%',
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: 3,
      },
    },
  };
  const rightVariant = {
    hidden: {
      x: '100%',
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  return (
    <section id="home">
      <div className="hero-main-cont">
        <motion.div
          className="hero-flex"
          initial={'hidden'}
          whileInView={'show'}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.div className="hero-sub-cont-1" variants={leftVariant}>
            <p>
              Hello <span className="wave">👋</span> ,
            </p>
            <div className="flex left_align">
              I am
              <span className="alt-text-yellow">
                <Typewriter
                  options={{
                    strings: ['TonniPaul'],
                    autoStart: true,
                    loop: true,
                    cursor: '✍️',
                  }}
                />
              </span>
            </div>
            <h1 className="hero-main-text ">
              I create <span className="alt-text">beautiful</span> and
              <span className="alt-text"> interactive</span> user interfaces
            </h1>

            <div className="btn-div">
              <button className="btn" onClick={onClick}>
                Get in touch!
              </button>
            </div>
          </motion.div>
          <motion.div className="hero-sub-cont" variants={rightVariant}>
            <img
              src="/assets/dev-hero.png"
              alt="3D icon"
              className="hero-img"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
