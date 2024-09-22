import Lottie from 'lottie-react';
import React from 'react';
import ContactInfo from './ContactInfo';
import './contact.css';
import giraffineGiraffe from './giraffe.json';


function Contact() {
  return (
    <section className="contact" id="contact">
      <h1 className="heading"><span>contact</span> us</h1>

      <div className="icons-container">
        
        <ContactInfo
          icon="fas fa-envelope"
          title="email"
          description={
            <>
              <p>arghastm@gmail.com</p>
              <p>sourav80joy37@gmail.com</p>
            </>
          }
        />
        <Lottie className='lottie' animationData={giraffineGiraffe} />
        <ContactInfo
          icon="fas fa-phone"
          title="phone number"
          description={
            <>
              <p>+880-152-120-0978</p>
              <p>+880-179-212-9116</p>
            </>
          }
        />
      </div>

      {/* <div className="row">
        <div className="image">
          <img src="images/contact.gif" alt="Contact" />
        </div>

        <form action="">
          <h3>get in touch</h3>
          <div className="inputBox">
            <input type="text" placeholder="your name" />
            <input type="email" placeholder="your email" />
          </div>
          <div className="inputBox">
            <input type="number" placeholder="your number" />
            <input type="text" placeholder="your subject" />
          </div>
          <textarea placeholder="your message" cols="30" rows="10"></textarea>
          <input type="submit" value="send message" className="btn" />
        </form>
      </div> */}
    </section>
  );
}

export default Contact;
