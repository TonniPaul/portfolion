import FlatCard from "../../cards/flatcard/FlatCard";
import "./contactForm.css";
import myLinks from "../../Object Files/links";
import cont from "../../assets/cont.svg";
import Form from "./Form";

const ContactForm = () => {
  return (
    <section id="contact">
      <div className="flex column">
        <div className="flex">
          <div className="abt-image-div contact_img_div">
            <img src={cont} alt="" className="about-image" />
          </div>
          <div>
            <h1 className="project-head-text alt-text"> Contact Me</h1>
            <hr className="short-hr project-hr right_hr" />
          </div>
        </div>
        <FlatCard className="contact-form-cont">
          <div className="contact-sub-div">
            <h1 className="contact-head-text">
              Interested in
              <span className="alt-text-yellow"> collaborating</span>? Let's{" "}
              <span className="alt-text-yellow">build </span>
              your
              <span className="alt-text-yellow"> Next project</span>!
            </h1>
            <a href="#name" className="btn purple">
              Contact Me
              <i className="fa-solid fa-forward"></i>
            </a>
            <div className="flex project-links-cont center-it">
              {myLinks.map((items) => {
                return (
                  <a
                    key={items.id}
                    href={items.links}
                    className="project-links contact-links"
                    target="blank"
                  >
                    <i className={items.icons}></i>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="contact-sub-div-2">
            <Form />
          </div>
        </FlatCard>
      </div>
    </section>
  );
};

export default ContactForm;
