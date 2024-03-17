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
  const fetchSkills = async () => {
    const data = await client?.fetch(`*[_type == "skill"] | order(order asc)`);

    setSkillsData(data);
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <section id="skill">
      <div className="skills-container">
        <div className="section-header-flex-container">
          <div className="abt-image-div">
            <img
              src="/assets/tool.png"
              alt="bulb toolbox icon"
              className="about-image"
            />
          </div>
          <div>
            <h2 className="section-header-text"> Skills and Tools</h2>
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
                transition={{ duration: 0.1, staggerChildren: 0.2 }}
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
