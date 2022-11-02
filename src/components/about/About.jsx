import "./about.css";
import about from "../../assets/about01.png";
import microphone from "../../assets/about.png";
import ImageCard from "../../cards/imageCard/ImageCard";
import cv from "../../cv/paulcv.pdf";

const About = () => {
  return (
    <section id="about">
      <div className="about-main-container">
        <div className="about-container">
          <ImageCard img={about} alt="about-icon" />

          <div className="about-sub-cont">
            <div className="flex">
              <div className="abt-image-div">
                <img src={microphone} alt="" className="about-image" />
              </div>
              <h1 className="abt-header alt-text">About Me</h1>
            </div>
            <div className="column">
              <p>Paul Oluwatoni Ariyo-Adeoye</p>
              <p className="alt-text"> Frontend Developer </p>
            </div>
            <hr className="short-hr" />
            <p className="about-me-text">
              As a FrontEnd developer, I am passionate about creating
              eye-catching web applications, cross-platform mobile user
              interfaces, and implementing web security practices. I am
              currently perusing a software engineering course at ALX in order
              to enhance my knowledge.
            </p>
            <a href={cv} className="btn alt-text">
              Download CV
              <i className="fa-solid fa-download"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
