import React from "react";
import styles from "./NewsDetails.module.css";


const Event1 = props => {
  return (
      <div className={styles.container}>
          <ul className={styles.newsDetailsul}>
             <li>
                <img className={styles.newsImage} src= {"https://besthqwallpapers.com/img/original/65107/border-collie-brown-dog-pets-human-friend-cute-animals.jpg"} alt={"dog"} />
             </li>
             <li>
                <h1>Fundraise for Homeward Pet</h1>
                <p>Fundraisers come in all shapes and sizes, from a small office bake sale to a black tie gala or city wide half marathon. If you’re looking for a way to support the animals at Homeward Pet, we’d love to help get you started.

                   Check out some of our ideas here, or email us with your own!

                   For general requests to use the Homeward Pet logo and/or Homeward Pet content:

                   Contact: Natasha Danzinger, Event Manager
                   Phone: 425-488-4444 ext. 4015
                   Email: natasha@homewardpet.org</p>
             </li>
          </ul>
      </div>


  );
};

export default Event1;