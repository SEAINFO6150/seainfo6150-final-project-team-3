import React from "react";
import styles from "./ContactUS.module.css";


const ContactUs = props => {
  return (
      <div className={styles.container}>
          <ul>
            <li> <img className={styles.ContactUsImage} src= {"https://wallpapercave.com/wp/kdWBfdm.jpg"} alt={"cat"} /></li>
            <li>
                <div className={styles.contactInfo}>

              <ul>
                 <li><header>CONTACT US</header></li>
                  <li><strong>Street Address</strong><br />
                  13132 NE 177th Place
                  Woodinville, WA  98072</li>


                  <li><strong>Mailing Address</strong><br />
                  P.O. Box 2293
                  Woodinville, WA  98072</li>


                  <li><strong>Phone</strong><br />
                  (206)488.4444</li>


                  <li><strong>Emailing Address</strong></li>
                  <li>For information about Adoptable animals:  <a href="info@homewardpet.org">info@homewardpet.org</a></li>
                  <li>For Pet Surrender:  <a href = "katie@homewardpet.org">katie@homewardpet.org</a></li>
              </ul>
                </div>
            </li>
           </ul>
      </div>
  );
};

export default ContactUs;