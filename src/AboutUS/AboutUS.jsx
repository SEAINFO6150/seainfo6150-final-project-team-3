import React from "react";
import styles from "./AboutUS.module.css";


const AboutUS = props => {
  return (
      <div className={styles.container}>
          <div>
              <img className={styles.aboutUsImage} src= {"https://besthqwallpapers.com/img/original/65107/border-collie-brown-dog-pets-human-friend-cute-animals.jpg"} alt={"dog"} />
          </div>
          <div className={styles.aboutInfo}>
              <ul><header>About Us</header></ul>
              <ul>
                  <li><strong>Our History</strong></li>
                  <li>Homeward Pet Adoption Center was founded in 1990 as Hooterville Pet Safehaus. Our founder, Peggy Barnish, established Hooterville with the belief that there could be an animal shelter where euthanasia was a last resort – used only to ease suffering from injury or illness – and every adoptable animal would eventually find their forever home. In the first year of operation, we found new homes for 350 cats and 20 dogs (all adopted out of foster care, as we didn’t yet have the space to house available dogs).</li>
              </ul>
              <ul>
                  <li><strong>Community Programs</strong></li>
                  <li>Homeward Pet is dedicated to helping our community by offering pet services to those in need. Our Low Cost Spay & Neuter Clinic provides affordable surgeries for pet owners, helping to reduce the number of unwanted pets in our community. The Homeward Pet Food Bank provides pet food and supplies to needy families, lending a hand to help keep pets in their homes.</li>
              </ul>
          </div>
      </div>
  );
};

export default AboutUS;