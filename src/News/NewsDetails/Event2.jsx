import React from "react";
import styles from "./NewsDetails.module.css";
import Data from "../../data/NewsData.json";

const Event2 = props => {
  return (
      <div className={styles.container}>
            <header>{Data.EventsItemData.b.head}</header>
                <ul className={styles.newsDetailsul}>
                   <li>
                      <img className={styles.newsImage} src= {Data.EventsItemData.b.url} alt={"dogb"} />
                      </li>
                         <li>
                      <p>{Data.EventsItemData.b.para}</p>
                   </li>
                </ul>
            </div>


  );
};

export default Event2;