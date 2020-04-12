import React from "react";
import styles from "./NewsDetails.module.css";


const Event3 = props => {
  return (
      <div className={styles.container}>
          <ul className={styles.newsDetailsul}>
             <li>
                <img className={styles.newsImage} src= {"https://besthqwallpapers.com/img/original/65107/border-collie-brown-dog-pets-human-friend-cute-animals.jpg"} alt={"dog"} />
             </li>
             <li>
                <h1>Great Wine</h1>
                <p>Shake the dust off those holiday sweaters and air out those festive vests. Northwest Cellars and Homeward Pet are at it again with one of our favorite events of the year! Join us for a dog friendly afternoon of wine, food, shopping and hilarious contests to help ensure the animals in our care have a warm and bright holiday season!

                   A portion of ticket sales will benefit the dogs and cats at Homeward Pet. Custom labeled wine will be available for sale with $5 per bottle donated to the shelter – stock up for your holiday gifts and parties!

                   Thank you to those who came out to celebrate with us on November 16th! We can’t wait to party with you again in 2020!

                   Check back for updates about our next Ugly Sweater Holiday Party, and don’t forget about our other fun Homeward Pet Events throughout the year.</p>
             </li>
          </ul>
      </div>


  );
};

export default Event3;