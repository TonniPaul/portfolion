import { IStacksProp } from '../../types/project.type';
import './projectCard.css';

interface IProjectCardProps {
  image: string;
  description: string;
  liveSite: string;
  github?: string;
  title: string;
  stacks: IStacksProp[];
  design: string;
}

const ProjectCard = ({
  image,
  description,
  liveSite,
  github,
  title,
  stacks,
  design,
}: IProjectCardProps) => {
  return (
    <div className="project-card-container">
      <div
        className="project_image_cont"
        style={{
          background: `url(${image})`,
        }}
      ></div>

      <div className="project-card-sub-container">
        <p className="project--title">{title}</p>

        <p className="project-desc">{description}</p>

        <p className="stacks_description_cont">
          DESIGNED BY: <span className="stacks_description">{design}</span>
        </p>

        <div className="flex stacks_description_cont">
          STACKS USED:
          {stacks.map(({ _id, name }) => {
            return (
              <span key={_id} className="btn stacks_description">
                {name}
              </span>
            );
          })}
        </div>

        <div className="flex project-links-cont">
          {github && (
            <a
              href={github}
              target="blank"
              aria-label="view code base on github"
              className="flex links__cont"
            >
              <span className="project-links">
                <i className="fa-brands fa-github"></i>
              </span>
              <p className="btn link_text">GitHub</p>
            </a>
          )}
          {title !== 'PORTFOLIO WEBSITE' ? (
            <a
              href={liveSite}
              target="blank"
              aria-label="view live site"
              className="flex links__cont"
            >
              <span className="project-links">
                <i className="fa-solid fa-link"></i>
              </span>
              <p className="btn link_text">Live Link</p>
            </a>
          ) : (
            <p className="btn link_text">This Page</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
