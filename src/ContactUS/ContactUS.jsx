import React from "react";
import styles from "./ContactUS.module.css";


const ContactUs = props => {
  return (
      <div className={styles.container}>
          <div>
              <img className={styles.ContactUsImage} src= {"https://wallpapercave.com/wp/kdWBfdm.jpg"} alt={"cat"} />
          </div>
          <div className={styles.contactInfo}>
              <ul><header>CONTACT US</header></ul>
              <ul>
                  <li><strong>Street Address</strong></li>
                  <li>13132 NE 177th Place</li>
                  <li>Woodinville, WA  98072</li>
              </ul>
              <ul>
                  <li><strong>Mailing Address</strong></li>
                  <li>P.O. Box 2293</li>
                  <li>Woodinville, WA  98072</li>
              </ul>
              <ul>
                  <li><strong>Phone</strong></li>
                  <li>(206)488.4444</li>
              </ul>
              <ul>
                  <li><strong>Emailing Address</strong></li>
                  <li>For information about Adoptable animals: <br/> <a href="info@homewardpet.org">info@homewardpet.org</a></li>
                  <li>For Pet Surrender: <br/> <a href = "katie@homewardpet.org">katie@homewardpet.org</a></li>
              </ul>
          </div>
      </div>
  );
};

export default ContactUs;