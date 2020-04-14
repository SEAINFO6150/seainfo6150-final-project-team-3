import React from "react";
import styles from "./NewsDetails.module.css";
import Data from "../../data/NewsData.json";


const News1 = props => {
  return (
      <div className={styles.container}>
      <header>{Data.NewsItemData.a.head}</header>
          <ul className={styles.newsDetailsul}>
             <li>
                <img className={styles.newsImage} src= {Data.NewsItemData.a.url} alt={"doga"} />
                </li>
                   <li>
                <p>{Data.NewsItemData.a.para}</p>
             </li>
          </ul>
      </div>

  );
};

export default News1;