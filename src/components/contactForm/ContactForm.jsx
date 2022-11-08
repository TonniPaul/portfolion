import FlatCard from "../../cards/flatcard/FlatCard";
import "./contactForm.css";
import myLinks from "../../Object Files/links";
import { useForm } from "@formspree/react";
import ThankYou from "./ThankYou";

const ContactForm = () => {
  // ======Function to return on submit success ======
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
      <div className="c">
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
            <form className="my-form" onSubmit={handleSubmit}>
              <h4 className=" alt-text-yellow Message-me">Drop me a message</h4>
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
                  spellCheck
                  required
                ></textarea>
              </div>

              <input
                type="submit"
                disabled={state.submitting}
                value="Send"
                className="submit-btn"
              />
            </form>
          </div>
        </FlatCard>
      </div>
    </section>
  );
};

export default ContactForm;
