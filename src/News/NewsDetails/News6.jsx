import React from "react";
import styles from "./NewsDetails.module.css";
import Data from "../../data/NewsData.json";

const News6 = props => {
  return (
      <div className={styles.container}>
      <h1>{Data.NewsItemData.f.head}</h1>
          <ul className={styles.newsDetailsul}>
             <li>
                <img className={styles.newsImage} src= {Data.NewsItemData.f.url} alt={"dogf"} />
                </li>
                   <li>
                <p>{Data.NewsItemData.f.para}</p>
             </li>
          </ul>
      </div>


  );
};

export default News6;