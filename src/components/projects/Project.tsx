import { motion } from 'framer-motion';

import ProjectCard from '../../cards/projectCard/ProjectCard';
import './project.css';
// import { projectData } from '../../Object Files/projectObject';
import { useEffect, useState } from 'react';
import { IProjectTypes } from '../../types/project.type';
import { client, imageSource } from '../../sanity/client.config';

const Project = () => {
  const [projects, setProjects] = useState<IProjectTypes[]>([]);

  useEffect(() => {
    client
      ?.fetch(
        `*[_type == "project"] {
  ...,
   stacks[]-> 
} | order(order asc)`
      )
      .then((data) => setProjects(data));
  }, []);

  return (
    <section id="project">
      <div className="project-cont">
        <div className="flex">
          <div className="abt-image-div">
            <img
              src="/assets/calander.png"
              alt="3d calender icon"
              className="about-image"
            />
          </div>

          <div>
            <h1 className="project-head-text alt-text"> I Built These</h1>
            <hr className="short-hr project-hr" />
          </div>
        </div>

        <motion.div className="project-container">
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project._id}
                image={imageSource(project.image).url()}
                description={project.description}
                title={project.title}
                stacks={project.stacks}
                design={project.designer}
                liveSite={project.liveSite}
                github={project.github}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
