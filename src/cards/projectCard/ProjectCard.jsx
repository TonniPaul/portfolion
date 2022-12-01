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
    <motion.div
      className="project-card-container"
      initial={"hidden"}
      whileInView={"show"}
      transition={{ staggerChildren: 0.5 }}
    >
      <div
        className="project_image_cont"
        style={{
          background: `url(${image})`,
        }}
      ></div>

      <motion.p className="project--title" variants={headTextAnimate}>
        {title}
      </motion.p>

      <motion.p className="project-desc" variants={headTextAnimate}>
        {description}
      </motion.p>

      <motion.div className="flex project-links-cont">
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
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;

  // const animateImage = {
  //   hidden: {
  //     y: "-100%",
  //   },
  //   show: {
  //     y: 0,
  //     transition: {
  //       type: "spring",
  //       bounce: 0.4,
  //       duration: 0.6,
  //     },
  //   },
  // };