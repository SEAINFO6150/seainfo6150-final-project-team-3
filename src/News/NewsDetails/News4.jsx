import React from "react";
import styles from "./NewsDetails.module.css";
import Data from "../../data/NewsData.json";

const News4 = () => {
  return (
      <div className={styles.container}>
            <header>{Data.NewsItemData.d.head}</header>
                <ul className={styles.newsDetailsul}>
                   <li>
                      <img className={styles.newsImage} src= {Data.NewsItemData.d.url} alt={"dogd"} />
                      </li>
                         <li>
                      <p>{Data.NewsItemData.d.para}</p>
                   </li>
                </ul>
            </div>


  );
};

export default News4;