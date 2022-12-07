import { motion } from "framer-motion";
import "./projectCard.css";

const ProjectCard = ({ image, description, liveSite, github, title }) => {
  const headTextAnimate = {
    hidden: {
      x: "-100%",
    },
    show: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.6,
      },
    },
  };
  return (
    <div className="project-card-container">
      <div
        className="project_image_cont"
        style={{
          background: `url(${image})`,
        }}
      ></div>

      <p className="project--title">{title}</p>

      <p className="project-desc">{description}</p>

      <div className="flex project-links-cont">
        <a href={github} className="project-links" aria-label="view code base">
          <i className="fa-brands fa-github class-purple"></i>
        </a>
        <a
          href={liveSite}
          className="project-links"
          aria-label="view live site"
        >
          <i className="fa-solid fa-link class-purple"></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;