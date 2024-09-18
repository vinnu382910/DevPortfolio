import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './index.css'

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9jxfssg', 'template_0a1dtvd', form.current, {
        publicKey: 'oe35cMOq6Ysi8vAQm',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div class="contact-cont" id='contactus'>
        <div class="form-container">
            <p class="title">Contact Me</p>
            <form class="form" ref={form} onSubmit= {sendEmail}>
                <div class="input-group">
                    <label for="username">User Name</label>
                    <input type="text" name="from_name" id="username" placeholder="Your Name" required />
                </div>
                <div class="input-group">
                    <label for="email">Email</label>
                    <input type="eamil" name="from_email" id="email" placeholder="Your Email" required/>
                </div>
                <div class="input-group">
                    <label for="message">Message</label>
                    <textarea class='textArea' name="from_email" id="message" placeholder="Enter Your Message" required ></textarea>
                </div>
                <button class="sign">  
                    <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path fill="#02a6f7" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                            </svg>
                        </div>
                    </div>
                    <span>Send</span>
                </button>
            </form>
            <div class="social-message">
                <div class="line"></div>
                <p class="message">Social Accounts</p>
                <div class="line"></div>
            </div>
            <div class="social-icons">
                <a href="https://www.instagram.com/mr_dio__07/">
                    <button class="icon">
                        <img src="https://img.icons8.com/?size=100&id=43625&format=png&color=000000" alt='instaLogo' className='logo' />
                    </button>
                </a>
                <a href="https://www.facebook.com/">
                    <button aria-label="Log in with Twitter" class="icon">
                        <img src="https://img.icons8.com/?size=100&id=118501&format=png&color=000000" alt="faceBookLogo" className='logo' />
                    </button>
                </a>
                <a href="https://github.com/vinnu382910">
                    <button aria-label="Log in with GitHub" class="icon">
                        <img src="https://img.icons8.com/?size=100&id=52539&format=png&color=000000" alt="gitLogo" className='logo' />
                    </button>
                </a>
            </div>
        </div>
    </div>
  );
};

export default ContactUs