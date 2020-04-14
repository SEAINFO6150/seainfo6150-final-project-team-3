import React from "react";
import styles from "./NewsDetails.module.css";


const News2 = props => {
  return (
      <div className={styles.container}>
          <ul className={styles.newsDetailsul}>
             <li>
                <img className={styles.newsImage} src= {"https://besthqwallpapers.com/img/original/65107/border-collie-brown-dog-pets-human-friend-cute-animals.jpg"} alt={"dog"} />
             </li>
             <li>
                <h1>Save a Canine</h1>
                <p>Raise your glass and make a toast to saving lives with Homeward Pet! Grab your furry friends and walk, wag, and wine with us through Woodinville’s wine district during our Happy Tails Wine Walk. You’ll get to choose samples from a variety of Woodinville’s finest wines (and beers!) – over 50 Woodinville favorites to select from.

                   Tickets not yet available for Homeward Pet’s 8th annual Wine Walk
                   Date and details will be announced when confirmed – check back soon!
                    </p>
             </li>
          </ul>
      </div>


  );
};

export default News2;