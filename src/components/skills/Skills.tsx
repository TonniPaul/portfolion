import './skills.css';
import CircleCard from '../../cards/circleCards/CircleCard';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { client, imageSource } from '../../sanity/client.config';

interface ISkillsProps {
  _id: string;
  skillImage: string;
  name: string;
}

const Skills = () => {
  const [skillsData, setSkillsData] = useState<ISkillsProps[]>([]);

  useEffect(() => {
    client
      ?.fetch(`*[_type == "skill"] | order(order asc)`)
      .then((data) => setSkillsData(data));
  }, []);

  return (
    <section id="skill">
      <div className="skills-container">
        <div className="flex">
          <div className="abt-image-div">
            <img
              src="/assets/tool.png"
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
          {skillsData.map((skill) => {
            return (
              <motion.div
                key={skill._id}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2, staggerChildren: 0.2 }}
              >
                <CircleCard
                  skillImage={imageSource(skill.skillImage).url()}
                  name={skill.name}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
