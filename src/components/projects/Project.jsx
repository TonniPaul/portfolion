import ProjectCard from "../../cards/projectCard/ProjectCard";
import "./project.css";
import { projectData } from "../../Object Files/projectObject";
import projectIcon from "../../assets/calander.png";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <section id="project">
      <div className="project-cont">
        <div className="flex">
          <div className="abt-image-div">
            <img
              src={projectIcon}
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
          {projectData.map((items) => {
            return (
              <motion.div
                key={items.id}
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: "0", opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <ProjectCard {...items} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
