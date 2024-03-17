import { ChangeEvent, FC, FormEvent, LegacyRef, useRef, useState } from 'react';
import Typewriter from 'typewriter-effect';
import emailjs from '@emailjs/browser';

import {
  EMAIL_JS_PUBLIC_KEY,
  EMAIL_JS_SERVICE_ID,
  EMAIL_JS_TEMPLATE_ID,
} from '../../data/constants';

import ThankYou from './ThankYou';

interface IFormProps {
  nameInputRef: LegacyRef<HTMLInputElement> | null;
}

const Form: FC<IFormProps> = ({ nameInputRef }) => {
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
          EMAIL_JS_SERVICE_ID,
          EMAIL_JS_TEMPLATE_ID,
          form.current,
          EMAIL_JS_PUBLIC_KEY
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
            ref={nameInputRef}
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
