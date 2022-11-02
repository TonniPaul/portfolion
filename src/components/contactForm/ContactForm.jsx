import FlatCard from "../../cards/flatcard/FlatCard";
import "./contactForm.css";

const ContactForm = () => {
  return (
    <section id="contact">
      <FlatCard className="contact-form-cont">
        <div className="contact-sub-div">
          <h1 className="contact-head-text">
            I'd love to help with your next project
          </h1>
          <p className="btn purple">
            Contact Me
            <i className="fa-solid fa-forward"></i>
          </p>
        </div>
        <div className="contact-sub-div-2">
          <form className="my-form">
            <div className="form-div">
              <label htmlFor="name"> Your Name </label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="form-div">
              <label htmlFor="Email"> Your Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="form-div">
              <label htmlFor="message"> Your Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
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
