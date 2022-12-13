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
        <a
          href={github}
          aria-label="view code base on github"
          className="flex links__cont"
        >
          <span className="project-links">
            <i className="fa-brands fa-github"></i>
          </span>
          <p className="btn link_text">GitHub</p>
        </a>
        <a
          href={liveSite}
          aria-label="view live site"
          className="flex links__cont"
        >
          <span className="project-links">
            <i className="fa-solid fa-link"></i>
          </span>
          <p className="btn link_text">Live Site</p>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
