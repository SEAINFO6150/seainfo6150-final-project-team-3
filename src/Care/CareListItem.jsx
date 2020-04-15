import React from "react";
import styles from './styles/CareListItem.module.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const CareListItem = ({article, enterDetail}) => {
  const { title, image, slug, shortText, pubDate, pubYear, author} = article;

  return (
    <div className={styles.container}>
      <Link to={`/care/${slug}`}>
        <img src={image._url} alt="title image" className={styles.img}/>
      </Link>
      <Link className={styles.titleName} to={`/care/${slug}`}>
      {title}
      </Link>
      <p className={styles.p}>{shortText}</p>
    </div>
  );
};

export default CareListItem;
