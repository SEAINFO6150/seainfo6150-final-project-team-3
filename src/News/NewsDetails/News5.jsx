import React from "react";
import styles from "./NewsDetails.module.css";
import Data from "../../data/NewsData.json";

const News5 = props => {
  return (
      <div className={styles.container}>
            <h1>{Data.NewsItemData.e.head}</h1>
                <ul className={styles.newsDetailsul}>
                   <li>
                      <img className={styles.newsImage} src= {Data.NewsItemData.e.url} alt={"doge"} />
                      </li>
                         <li>
                      <p>{Data.NewsItemData.e.para}</p>
                   </li>
                </ul>
            </div>


  );
};

export default News5;