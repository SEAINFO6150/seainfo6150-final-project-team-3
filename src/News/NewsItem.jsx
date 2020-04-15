import React from "react";
import styles from "./NewsItem.module.css";
import NewsImage from "./NewsImage";
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

const NewsItem = props => {
    return (
         <div className={styles.container}>
              <Link to={`News/NewsDetails/${props.newsName}`}><NewsImage className={styles.newsImage} url={props.url} title={props.title} /></Link>
              <Link className={styles.newsH1} to={`News/NewsDetails/${props.newsName}`}>{props.head}</Link>
              <p>{props.para}</p>
              <time>{props.time}</time>
         </div>
  );
};

NewsItem.propTypes = {
    className: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    head: PropTypes.string.isRequired,
    para: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    newsName: PropTypes.string.isRequired
};

export default NewsItem;