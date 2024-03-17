import { LegacyRef, useRef } from 'react';
import { motion } from 'framer-motion';

import myLinks from '../../data/links';

import SvgIcon from '../svg-icon/svg-icon';
import FlatCard from '../../cards/flatcard/FlatCard';
import Form from './Form';

import './contactForm.css';

interface IContactProps {
  contactRef: LegacyRef<HTMLElement> | null;
}

const ContactForm = ({ contactRef }: IContactProps) => {
  const nameRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    nameRef?.current?.focus();
  };

  //framer motion animation variants
  const leftVariant = {
    hidden: {
      x: '-100%',
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: 3,
      },
    },
  };
  const rightVariant = {
    hidden: {
      x: '100%',
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.1,
        duration: 2,
      },
    },
  };

  return (
    <section id="contact" ref={contactRef}>
      <div className="section-header-flex-container">
        <div className="abt-image-div contact_img_div">
          <img
            src="/assets/contact-us.png"
            alt="3d contact icon"
            className="about-image"
          />
        </div>

        <div>
          <h2 className="section-header-text"> Contact Me</h2>
          <hr className="short-hr project-hr right_hr" />
        </div>
      </div>

      <div className="max-width contact__cont_main">
        <motion.div
          className="max_content"
          initial={'hidden'}
          whileInView={'show'}
          transition={{ staggerChildren: 0.5 }}
        >
          <FlatCard
            customClass="contact-form-cont"
            style={{ overflow: 'hidden' }}
          >
            <motion.div className="contact-sub-div" variants={rightVariant}>
              <h1 className="contact-head-text">
                Let's <span className="alt-text-yellow">build </span>
                your
                <span className="alt-text-yellow"> Next project</span>!
              </h1>

              <button onClick={handleClick} className="submit-btn purple">
                Contact Me
                <i className="fa-solid fa-forward"></i>
              </button>

              <div className="flex project-links-cont center-it">
                {myLinks.map((items) => {
                  return (
                    <a
                      key={items.id}
                      href={items.link}
                      className="project-links contact-links"
                      aria-label={items.label}
                      target="blank"
                    >
                      <SvgIcon name={items.icon} />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            <motion.div className="contact-sub-div-2" variants={leftVariant}>
              <Form nameInputRef={nameRef} />
            </motion.div>
          </FlatCard>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
