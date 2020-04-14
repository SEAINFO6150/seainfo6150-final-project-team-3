import React from "react";
import styles from "./NewsDetails.module.css";
import Data from "../../data/NewsData.json";

const Event3 = props => {
  return (
      <div className={styles.container}>
            <h1>{Data.EventsItemData.c.head}</h1>
                <ul className={styles.newsDetailsul}>
                   <li>
                      <img className={styles.newsImage} src= {Data.EventsItemData.c.url} alt={"dogc"} />
                      </li>
                         <li>
                      <p>{Data.EventsItemData.c.para}</p>
                   </li>
                </ul>
            </div>


  );
};

export default Event3;