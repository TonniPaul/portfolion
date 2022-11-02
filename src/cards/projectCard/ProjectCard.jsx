import "./projectCard.css";

const ProjectCard = ({ image, description, liveSite, github, title }) => {
  return (
    <div className="project-card-container">
      <img src={image} alt={title} className="project-card-image" />
      <p className="project--title">{title}</p>
      <p className="project-desc">{description}</p>
      <div className="flex project-links-cont">
        <a href={github} className="project-links">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href={liveSite} className="project-links">
          <i className="fa-solid fa-link"></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
