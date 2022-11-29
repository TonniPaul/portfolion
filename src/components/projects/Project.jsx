import ProjectCard from "../../cards/projectCard/ProjectCard";
import "./project.css";
import { projectData } from "../../Object Files/projectObject";
import projectIcon from "../../assets/calander.png";

const Project = () => {
  return (
    <section id="project">
      <div className="project-cont">
        <div className="flex">
          <div className="abt-image-div">
            <img src={projectIcon} alt="" className="about-image" />
          </div>

          <div>
            <h1 className="project-head-text alt-text"> I Built These</h1>
            <hr className="short-hr project-hr" />
          </div>
        </div>

        <div className="project-container">
          {projectData.map((items) => {
            return <ProjectCard key={items.id} {...items} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
