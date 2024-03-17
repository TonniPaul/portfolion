import './about.css';
import ImageCard from '../../cards/imageCard/ImageCard';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import Button from '../../cards/buttons/Button';
import { PortableText } from '@portabletext/react';
import RichTextComponent from '../rich-text/rich-text';
import { useEffect, useState } from 'react';
import { IAboutTypes } from '../../types/about.types';
import { client } from '../../sanity/client.config';

const defaultData: IAboutTypes = {
  name: '',
  description: '',
  image: '',
  about: {
    _type: 'block',
    children: [],
  },
  interest: [],
};

const About = () => {
  const [aboutData, setAboutData] = useState<IAboutTypes>(defaultData);

  const fetchedData = async () => {
    const data = await client?.fetch(`*[_type == "about"] | order(order asc)`);

    setAboutData(data[0]);
  };

  useEffect(() => {
    fetchedData();
  }, []);

  //framer motion animation variants
  const leftAboutVariant = {
    hidden: {
      x: '-100%',
      opacity: 0,
      scale: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      rotate: 360,
      scale: 1,
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: 1,
      },
    },
  };
  const rightAboutVariant = {
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
        duration: 1,
      },
    },
  };

  return (
    <section id="about">
      <motion.div
        className="about-main-container"
        initial={'hidden'}
        whileInView={'show'}
        transition={{ staggerChildren: 0.2 }}
      >
        <div className="about-container">
          <motion.div
            viewport={{ once: false, amount: 0.5 }}
            variants={leftAboutVariant}
          >
            <ImageCard img="/assets/about__.png" alt="3D image" />
          </motion.div>

          <motion.div
            className="about-sub-cont"
            viewport={{ once: false, amount: 0.5 }}
            variants={rightAboutVariant}
          >
            <div className="flex">
              <div className="abt-image-div">
                <img
                  src="/assets/about.png"
                  alt="note book icon"
                  className="about-image"
                />
              </div>

              <h2 className="section-header-text">About Me</h2>
            </div>

            <div className="about-header-text-container">
              <p>{aboutData.name}</p>
              <p className="alt-text">{aboutData.description}</p>
            </div>

            <hr className="short-hr" />

            <PortableText
              value={aboutData.about}
              components={RichTextComponent}
            />

            <div className="flex left_align">
              Interests:
              <Typewriter
                options={{
                  strings: aboutData.interest,
                  autoStart: true,
                  loop: true,
                  cursor: '✍️',
                }}
              />
            </div>

            <Button
              href="https://1drv.ms/b/s!AqOoOpxoiQY4gRrIPX5ofiVuX5RY?e=n5e2Pl"
              className="btn alt-text isBigger"
              target="blank"
            >
              Download CV
              <i className="fa-solid fa-download"></i>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
