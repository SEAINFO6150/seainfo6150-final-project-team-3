import React from "react";
import styles from "./NewsDetails.module.css";
import Data from "../../data/NewsData.json";

const Event3 = () => {
  return (
      <div className={styles.container}>
            <header>{Data.EventsItemData.c.head}</header>
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