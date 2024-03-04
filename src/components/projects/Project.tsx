import { motion } from 'framer-motion';

import ProjectCard from '../../cards/projectCard/ProjectCard';
import './project.css';
import { projectData } from '../../Object Files/projectObject';

const Project = () => {
  return (
    <section id='project'>
      <div className='project-cont'>
        <div className='flex'>
          <div className='abt-image-div'>
            <img
              src='/assets/calander.png'
              alt='3d calender icon'
              className='about-image'
            />
          </div>

          <div>
            <h1 className='project-head-text alt-text'> I Built These</h1>
            <hr className='short-hr project-hr' />
          </div>
        </div>

        <motion.div className='project-container'>
          {projectData.map((items) => {
            return (
              <ProjectCard key={items.id} {...items} />

            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
