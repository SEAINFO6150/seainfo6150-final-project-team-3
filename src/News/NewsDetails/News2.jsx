import React from "react";
import styles from "./NewsDetails.module.css";
import Data from "../../data/NewsData.json";

const News2 = props => {
  return (
      <div className={styles.container}>
            <h1>{Data.NewsItemData.b.head}</h1>
                <ul className={styles.newsDetailsul}>
                   <li>
                      <img className={styles.newsImage} src= {Data.NewsItemData.b.url} alt={"dogb"} />
                      </li>
                         <li>
                      <p>{Data.NewsItemData.b.para}</p>
                   </li>
                </ul>
            </div>


  );
};

export default News2;