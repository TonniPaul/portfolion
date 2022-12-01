import "./skills.css";
import projectIcon from "../../assets/tool.png";
import CircleCard from "../../cards/circleCards/CircleCard";
import skillData from "../../Object Files/skillData";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section id="skill">
      <div className="skills-container">
        <div className="flex">
          <div className="abt-image-div">
            <img
              src={projectIcon}
              alt="bulb toolbox icon"
              className="about-image"
            />
          </div>
          <div>
            <h1 className="project-head-text alt-text"> Skills and Tools</h1>
            <hr className="short-hr project-hr" />
          </div>
        </div>
        <div className="my-skills-container">
          {skillData.map((items) => {
            return (
              <motion.div
                key={items.id}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, staggerChildren: 0.5 }}
                viewport={{ once: false, amount: 1 }}
              >
                <CircleCard {...items} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
