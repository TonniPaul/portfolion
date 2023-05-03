import FlatCard from "../../cards/flatcard/FlatCard";
import "./contactForm.css";
import myLinks from "../../Object Files/links";
import cont from "../../assets/cont.svg";
import Form from "./Form";
import { motion } from "framer-motion";
import { useRef } from "react";

const ContactForm = () => {
  const nameRef = useRef();

  const handleClick = () => {
    nameRef.current.focus();
  };
  //framer motion animation variants
  const leftVariant = {
    hidden: {
      x: "-100%",
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 3,
      },
    },
  };
  const rightVariant = {
    hidden: {
      x: "100%",
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.1,
        duration: 2,
      },
    },
  };

  return (
    <section id="contact">
      <div className="max-width flex column contact__cont_main">
        <div className="flex">
          <div className="abt-image-div contact_img_div">
            <img src={cont} alt="3d contact icon" className="about-image" />
          </div>

          <div>
            <h1 className="project-head-text alt-text"> Contact Me</h1>
            <hr className="short-hr project-hr right_hr" />
          </div>
        </div>
        <motion.div
          className="max_content"
          initial={"hidden"}
          whileInView={"show"}
          transition={{ staggerChildren: 0.5 }}
        >
          <FlatCard
            customClass="contact-form-cont"
            style={{ overflow: "hidden" }}
          >
            <motion.div className="contact-sub-div" variants={rightVariant}>
              <h1 className="contact-head-text">
                {/* Interested in
                <span className="alt-text-yellow"> collaborating</span>?  */}
                Let's <span className="alt-text-yellow">build </span>
                your
                <span className="alt-text-yellow"> Next project</span>!
              </h1>

              <button onClick={handleClick} className="btn purple">
                Contact Me
                <i className="fa-solid fa-forward"></i>
              </button>

              <div className="flex project-links-cont center-it">
                {myLinks.map((items) => {
                  return (
                    <a
                      key={items.id}
                      href={items.links}
                      className="project-links contact-links"
                      aria-label={items.label}
                      target="blank"
                    >
                      <i className={items.icons}></i>
                    </a>
                  );
                })}
              </div>
            </motion.div>

            <motion.div className="contact-sub-div-2" variants={leftVariant}>
              <Form nameRef={nameRef} />
            </motion.div>
          </FlatCard>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
