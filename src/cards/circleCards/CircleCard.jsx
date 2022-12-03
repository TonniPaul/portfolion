import { motion } from "framer-motion";
import "./circle-card.css";

const CircleCard = ({ skillImage, logo_text, logo }) => {
  return (
    <div className="circle">
      <motion.div
        className=" flex column circle-card-cont"
        initial={{
          opacity: 0,
          rotate: 360,
          x: "100%",
        }}
        whileInView={{
          opacity: 1,
          rotate: 0,
          x: 0,
        }}
        transition={{
          type: "spring",
          bounce: 100,
          duration: 0.5,
        }}
      >
        <img src={skillImage} alt={logo} className="circle-img" />
      </motion.div>
      <p className="logo_name">{logo_text}</p>
    </div>
  );
};

export default CircleCard;
