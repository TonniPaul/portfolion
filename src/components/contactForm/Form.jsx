import { useForm } from "@formspree/react";
import ThankYou from "./ThankYou";

const Form = () => {
  const [state, handleSubmit] = useForm("mvoyvdyb");
  // ======Function to return on submit success ======
  if (state.succeeded) {
    return (
      <div className="center-div">
        <ThankYou />
      </div>
    );
  }
  return (
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
        />
      </div>

      <input
        type="submit"
        disabled={state.submitting}
        value="Send"
        className="submit-btn"
      />
    </form>
  );
};

export default Form;
