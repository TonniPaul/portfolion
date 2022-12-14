import { useForm } from "@formspree/react";
import ThankYou from "./ThankYou";
import Typewriter from "typewriter-effect";

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
      <div className=" alt-text-yellow Message-me">
        <Typewriter
          options={{
            strings: ["Drop me a message"],
            autoStart: true,
            loop: true,
            cursor: "📑",
            pauseFor: 5000,
          }}
        />
      </div>
      <div className="form-div">
        <input type="text" name="name" id="name" required />
        <label htmlFor="name"> Name </label>
      </div>
      <div className="form-div">
        <input type="email" name="email" id="email" required />
        <label htmlFor="email"> Email</label>
      </div>
      <div className="form-div">
        <textarea name="message" id="message" spellCheck required />
        <label htmlFor="message"> Message</label>
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
