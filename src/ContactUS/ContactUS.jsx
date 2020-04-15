import React from "react";
import styles from "./ContactUS.module.css";


const ContactUs = props => {
  return (
      <div className={styles.container}>
            <header>Contact Us</header>
            <ul className={styles.newsDetailsul}>
                   <li> <img className={styles.ContactUsImage} src= {"/images/contact.jpg"} alt={"cat"} /></li>
                   <li>
                      <div className={styles.contactInfo}>
                         <ul>
                             <li><strong>Street Address</strong><br />
                                    <p>13132 NE 177th Place<br />
                                    Woodinville, WA  98072</p></li>
                             <li><strong>Mailing Address</strong><br />
                                    <p>P.O. Box 2293<br />
                                    Woodinville, WA  98072</p></li>
                             <li><strong>Phone</strong><br />
                                    <p>(206)488.4444</p></li>
                             <li><strong>Emailing Address</strong></li>
                             <li><p><a href="info@homewardpet.org">info@homewardpet.org</a></p></li>
                         </ul>
                      </div>
                   </li>
            </ul>
      </div>
  );
};

export default ContactUs;