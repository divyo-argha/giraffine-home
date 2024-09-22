import React from 'react';
import './contact.css';

function ContactInfo({ icon, title, description }) {
  return (
    <div className="icons">
      <i className={icon}></i>
      <h3>{title}:</h3>
      {description}
    </div>
  );
}

export default ContactInfo;


// import React from 'react';
// import './contact.css';

// function Contact() {
//   const contactInfo = [
//     {
//       icon: "fas fa-clock",
//       title: "opening hours",
//       description: "monday - saturday: 07:00am - 05:00pm"
//     },
//     {
//       icon: "fas fa-envelope",
//       title: "email us",
//       description: "support@gmail.com"
//     },
//     {
//       icon: "fas fa-phone",
//       title: "call us",
//       description: "+123-456-7890"
//     }
//   ];

//   return (
//     <section className="contact" id="contact">
//       <h1 className="heading"><span>contact</span> us</h1>
//       <div className="row">
//         <form action="">
//           <input type="text" placeholder="your name" className="box" />
//           <input type="email" placeholder="your email" className="box" />
//           <input type="text" placeholder="your number" className="box" />
//           <textarea name="" placeholder="your message" className="box" id="" cols="30" rows="10"></textarea>
//           <input type="submit" value="send message" className="btn" />
//         </form>
        
//         <div className="info-container">
//           {contactInfo.map((info, index) => (
//             <div className="info" key={index}>
//               <i className={info.icon}></i>
//               <h3>{info.title}</h3>
//               <p>{info.description}</p>
//             </div>
//           ))}
//         </div>

//         <div className="image">
//           <img src="images/contact.gif" alt="Contact" />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;
