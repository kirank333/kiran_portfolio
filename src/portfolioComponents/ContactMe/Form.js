import React from 'react';
import './Form.css';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

export default function Form() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_wi3pt5d',
        'template_1wjk4jy',
        e.target,
        'xA63AFmA5-3Lx5OYB'
      )
      .then(
        (result) => {
          toast.success('Mail sent successfully!');
        },
        (error) => {
          toast.error('Something went wrong!');
        }
      );
    e.target.reset();
  };
  return (
    <div className="form-container">
      <form onSubmit={sendEmail}>
        <div className="input-container">
          <label> Name </label>{' '}
          <div>
            <input type="text" name="name" required />
          </div>{' '}
        </div>{' '}
        <div className="input-container">
          <label> Email </label>{' '}
          <div>
            <input type="text" name="email" required />
          </div>{' '}
        </div>{' '}
        <div className="input-container">
          <label> Message </label>{' '}
          <div>
            <textarea
              type="text"
              id="message"
              name="message"
              defaultValue={''}
              required
            ></textarea>{' '}
          </div>{' '}
        </div>{' '}
        <button className="send-button" type="submit">
          Send <i className="fa-solid fa-paper-plane"> </i>{' '}
        </button>{' '}
      </form>{' '}
    </div>
  );
}
