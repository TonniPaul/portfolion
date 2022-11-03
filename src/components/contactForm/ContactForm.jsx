import FlatCard from "../../cards/flatcard/FlatCard";
import "./contactForm.css";
import myLinks from "../../Object Files/links";
import { useForm, ValidationError } from "@formspree/react";
import ThankYou from "./ThankYou";

const ContactForm = () => {
  // ======Function for Validating Input======
  const [state, handleSubmit] = useForm("mvoyvdyb");
  if (state.succeeded) {
    return (
      <div className="center-div">
        <ThankYou />
      </div>
    );
  }
  return (
    <section id="contact">
      <FlatCard className="contact-form-cont">
        <div className="contact-sub-div">
          <h1 className="contact-head-text">
            I'd love to build your{" "}
            <span className="alt-text-yellow">next project</span>
          </h1>
          <p className="btn purple">
            Contact Me
            <i className="fa-solid fa-forward"></i>
          </p>
          <div className="flex project-links-cont">
            {myLinks.map((items) => {
              return (
                <a
                  key={items.id}
                  href={items.links}
                  className="project-links contact-links"
                >
                  <i className={items.icons}></i>
                </a>
              );
            })}
          </div>
        </div>
        <div className="contact-sub-div-2">
          <h4 className=" alt-text-yellow Message-me">
            Message me (I respond within 24 hours){" "}
          </h4>
          <form className="my-form" onSubmit={handleSubmit}>
            <div className="form-div">
              <label htmlFor="name"> Your Name </label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="form-div">
              <label htmlFor="Email"> Your Email</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="form-div">
              <label htmlFor="message"> Your Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                required
              ></textarea>
            </div>

            <input type="submit" value="Send" className="submit-btn" />
          </form>
        </div>
      </FlatCard>
    </section>
  );
};

export default ContactForm;
