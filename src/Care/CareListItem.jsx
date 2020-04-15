import React from "react";
import styles from './styles/CareListItem.module.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const CareListItem = ({article, enterDetail}) => {
  const { title, image, slug, shortText, pubDate, pubYear, author} = article;

  return (
    <div className={styles.container}>
      <Link className={styles.left} to={`/care/${slug}`}>
        <img src={image._url} alt="title image"/>
      </Link>
      <div className={styles.right}>
          <Link className={styles.titleName} to={`/care/${slug}`}>
              {title}
          </Link>
          <p className={styles.p}>{shortText}</p>
      </div>
    </div>
  );
};

export default CareListItem;
