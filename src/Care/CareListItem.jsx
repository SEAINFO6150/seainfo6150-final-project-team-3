import React from "react";
import styles from './styles/CareListItem.module.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const CareListItem = ({article, enterDetail}) => {
  const { title, image, slug, shortText, pubDate, pubYear, author} = article;

return (
      <div className={styles.box}> 
        <div className={styles.article}>
          <img className={styles.image} src={image._url} alt="title image" />
          <Link to={`/care/${slug}`}><h1 className={styles.title}>{title}</h1></Link>
          <p className={styles.text}>{shortText}</p>
        </div>
    </div>
  );
};

export default CareListItem;
