import React from "react";
import styles from "./NewsDetails.module.css";
import Data from "../../data/NewsData.json";

const News3 = props => {
  return (
      <div className={styles.container}>
            <h1>{Data.NewsItemData.c.head}</h1>
                <ul className={styles.newsDetailsul}>
                   <li>
                      <img className={styles.newsImage} src= {Data.NewsItemData.c.url} alt={"dogc"} />
                      </li>
                         <li>
                      <p>{Data.NewsItemData.c.para}</p>
                   </li>
                </ul>
            </div>


  );
};

export default News3;