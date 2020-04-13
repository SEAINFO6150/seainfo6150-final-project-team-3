import React from "react";
import styles from "./NewsDetails.module.css";


const News3 = props => {
  return (
      <div className={styles.container}>
          <ul className={styles.newsDetailsul}>
             <li>
                <img className={styles.newsImage} src= {"https://besthqwallpapers.com/img/original/65107/border-collie-brown-dog-pets-human-friend-cute-animals.jpg"} alt={"dog"} />
             </li>
             <li>
                <h1>Easter B’egg Hunt</h1>
                <p>"In light of the ban on large events and social gatherings, we have decided
                    to cancel our plans for the Easter B’egg Hunt on Saturday, April 4, 2020
                    This event was to take place at the Willis Tucker Park off-leash dog area in Snohomish.
                    Though we are disappointed, we have made this decision with safety as our top priority.
                    We are so humbled and grateful to be part of such a generous and giving community. Since we have lost fundraising revenue from events for the near future, we are in need of extra support at this critical time to continue providing care for homeless animals. If you are able to support us during this tough time, we would greatly appreciate it."</p>
             </li>
          </ul>
      </div>


  );
};

export default News3;