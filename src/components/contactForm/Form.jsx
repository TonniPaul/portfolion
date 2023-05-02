import { useRef, useState } from "react";
import ThankYou from "./ThankYou";
import emailjs from "@emailjs/browser";
import Typewriter from "typewriter-effect";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    message: "",
  });

  const form = useRef();

  const handleNameChange = (e) => {
    setUsername(e.target.value);
    setErrors((prevState) => ({ ...prevState, username: "" }));
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors((prevState) => ({ ...prevState, email: "" }));
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setErrors((prevState) => ({ ...prevState, message: "" }));
  };

  const sendMail = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setErrors((prevState) => ({
        ...prevState,
        username: "Name is required !!",
      }));
    }
    if (!email.trim()) {
      setErrors((prevState) => ({
        ...prevState,
        email: "Email is required !!",
      }));
    }
    if (!message.trim()) {
      setErrors((prevState) => ({
        ...prevState,
        message: "Message is required !!",
      }));
    }
    if (!username.trim() || !email.trim() || !message.trim()) {
      setErrors({
        username: "Name is required !!",
        email: "Email is required !!",
        message: "Message is required !!",
      });
      setIsDisabled(true);
      return;
    }
    emailjs
      .sendForm(
        "service_ecmjeo4",
        "template_o0cc06o",
        form.current,
        "6TapqbYUbWDSDnGeW"
      )

      .then(
        (result) => {
          console.log(result.text);
          setIsEmailSent(true);
          setEmail("");
          setUsername("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  if (isEmailSent) {
    return (
      <div className="center-div">
        <ThankYou />
      </div>
    );
  }

  return (
    <form className="my-form" ref={form} onSubmit={sendMail}>
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
        <input
          type="text"
          name="user_name"
          id="name"
          value={username}
          onChange={handleNameChange}
          required
        />
        <label htmlFor="name"> Name </label>
        {errors.username && (
          <small className="error_message"> {errors.username} </small>
        )}
      </div>
      <div className="form-div">
        <input
          type="email"
          name="user_email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <label htmlFor="email"> Email</label>
        {errors.email && (
          <small className="error_message"> {errors.email} </small>
        )}
      </div>
      <div className="form-div">
        <textarea
          name="message"
          id="message"
          value={message}
          onChange={handleMessageChange}
          spellCheck
          required
        />
        <label htmlFor="message"> Message</label>
        {errors.message && (
          <small className="error_message"> {errors.message} </small>
        )}
      </div>

      <input
        type="submit"
        disabled={!isDisabled}
        value="Send"
        className="submit-btn"
      />
    </form>
  );
};

export default Form;
