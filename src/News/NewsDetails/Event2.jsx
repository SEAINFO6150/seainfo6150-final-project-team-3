import React from "react";
import styles from "./NewsDetails.module.css";


const Event2 = props => {
  return (
      <div className={styles.container}>
          <ul className={styles.newsDetailsul}>
             <li>
                <img className={styles.newsImage} src= {"https://besthqwallpapers.com/img/original/65107/border-collie-brown-dog-pets-human-friend-cute-animals.jpg"} alt={"dog"} />
             </li>
             <li>
                <h1>Holiday Giving Tree</h1>
                <p>Homeward Pet’s Holiday Giving Tree is an opportunity for community members to help provide food and supplies for the care of the homeless dogs and cats that come through our doors.

                   Hosting a Holiday Giving Tree at your business or collecting these gifts is a simple, creative, and tangible way to help out the animals in need in your community. Homeward Pet will provide hang-able tree ornaments with suggested items that help in the care of the dogs and cats in the shelter. You can display the tags as ornaments on your giving tree in a common space, or do something new and creative with them that inspires the holiday spirit.

                   If you are interested in learning more or organizing a Holiday Giving Tree, please contact:

                   Natasha Danzinger, Event Manager
                   natasha@homewardpet.org
                   425-488-4444 ext. 4015

                    </p>
             </li>
          </ul>
      </div>


  );
};

export default Event2;