import React from "react";
import styles from "./NewsDetails.module.css";
import Data from "../../data/NewsData.json";

const Event1 = props => {
  return (
      <div className={styles.container}>
            <h1>{Data.EventsItemData.a.head}</h1>
                <ul className={styles.newsDetailsul}>
                   <li>
                      <img className={styles.newsImage} src= {Data.EventsItemData.a.url} alt={"doga"} />
                      </li>
                         <li>
                      <p>{Data.EventsItemData.a.para}</p>
                   </li>
                </ul>
            </div>


  );
};

export default Event1;