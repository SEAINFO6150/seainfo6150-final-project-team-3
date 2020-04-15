import React from "react";
import styles from './styles/CareListItem.module.css'
import { Link } from 'react-router-dom';

const CareListItem = ({article}) => {
  const { title, image, slug, shortText} = article;

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
