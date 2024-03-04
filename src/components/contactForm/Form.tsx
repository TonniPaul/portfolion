import { ChangeEvent, FormEvent, LegacyRef, useRef, useState } from 'react';
import ThankYou from './ThankYou';
import emailjs from '@emailjs/browser';
import Typewriter from 'typewriter-effect';

interface IFormProps {
  nameRef: LegacyRef<HTMLInputElement> | undefined;
}

const Form = ({ nameRef }: IFormProps) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [sendFailedMessage, setSendFailedMessage] = useState<string | null>(
    null
  );

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    message: '',
  });

  const form = useRef<HTMLFormElement>(null);
  const emailJsServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID as string;
  const emailJsTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string;
  const emailJsPublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_K as string;

  console.log('PKID:', emailJsPublicKey);
  console.log('TIID:', emailJsTemplateId);
  console.log('SIID:', emailJsServiceId);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    setErrors((prevState) => ({ ...prevState, username: '' }));
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setErrors((prevState) => ({ ...prevState, email: '' }));
  };
  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    setErrors((prevState) => ({ ...prevState, message: '' }));
  };

  const sendMail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username.trim()) {
      setErrors((prevState) => ({
        ...prevState,
        username: 'Name is required !!',
      }));
    }
    if (!email.trim()) {
      setErrors((prevState) => ({
        ...prevState,
        email: 'Email is required !!',
      }));
    }
    if (!message.trim()) {
      setErrors((prevState) => ({
        ...prevState,
        message: 'Message is required !!',
      }));
    }
    if (!username.trim() || !email.trim() || !message.trim()) {
      setErrors({
        username: 'Name is required !!',
        email: 'Email is required !!',
        message: 'Message is required !!',
      });
      setIsDisabled(true);
      return;
    }
    if (form.current) {
      emailjs
        .sendForm(
          emailJsServiceId,
          emailJsTemplateId,
          form.current,
          emailJsPublicKey
        )
        .then(() => {
          setIsEmailSent(true);
          setIsDisabled(true);
          setEmail('');
          setUsername('');
          setMessage('');
        })
        .catch(() => {
          const sendFailedTimeout = setTimeout(() => {
            return setSendFailedMessage(
              'An error occurred while sending the email. Please try again later.'
            );
          }, 30000);

          clearTimeout(sendFailedTimeout);
        });
    }
  };

  if (isEmailSent) {
    return (
      <div className="center-div">
        <ThankYou />
      </div>
    );
  }

  return (
    <>
      <form className="my-form" ref={form} onSubmit={sendMail}>
        <div className=" alt-text-yellow Message-me">
          <Typewriter
            options={{
              strings: ['Drop me a message'],
              autoStart: true,
              loop: true,
              cursor: '📑',
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
            ref={nameRef}
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
          disabled={isDisabled}
          value="Send"
          className="submit-btn"
        />
      </form>

      {sendFailedMessage && (
        <div className="error-toast-container">
          <p>{sendFailedMessage}</p>
        </div>
      )}
    </>
  );
};

export default Form;
