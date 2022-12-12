import "./projectCard.css";

const ProjectCard = ({
  image,
  description,
  liveSite,
  github,
  title,
  children,
  design,
}) => {
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

      <p className="stacks_description_cont">
        DESIGN: <span className="stacks_description">{design}</span>
      </p>

      <div className="flex stacks_description_cont">
        STACKS USED:
        {children}
      </div>

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
