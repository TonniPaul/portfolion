import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { IProjectTypes } from '../../types/project.type';
import { client, imageSource } from '../../sanity/client.config';

import ProjectCard from '../../cards/projectCard/ProjectCard';
import SvgIcon from '../svg-icon/svg-icon';

import './project.css';

const Project = () => {
  const [projects, setProjects] = useState<IProjectTypes[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const ITEMS_PER_PAGE = 6;

  const fetchProjectsData = async () => {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    const data = await client?.fetch(
      `*[_type == "project"] {
          ...,
          stacks[]->
        } | order(order asc) [${offset}...${offset + ITEMS_PER_PAGE}]`
    );
    setProjects(data);

    // get total projects
    const totalCount = await client?.fetch(`count(*[_type == "project"])`);
    setTotalPages(Math.ceil(totalCount / ITEMS_PER_PAGE));
  };

  useEffect(() => {
    fetchProjectsData();
  }, [currentPage]);

  return (
    <section id="project">
      <div>
        <div className="section-header-flex-container">
          <div className="abt-image-div">
            <img
              src="/assets/calander.png"
              alt="3d calender icon"
              className="about-image"
            />
          </div>

          <div>
            <h2 className="section-header-text">Some Things I’ve Built</h2>
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

        <div className="pagination-container">
          <button
            className="next-prev-btn"
            aria-label="previous-projects"
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
          >
            <span>
              <SvgIcon name="previous" />
            </span>
            <p className="btn pagination-btn-text">Prev</p>
          </button>

          <button
            className="next-prev-btn"
            aria-label="previous-projects"
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
          >
            <p className="btn pagination-btn-text next">Next</p>
            <span>
              <SvgIcon name="next" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;
