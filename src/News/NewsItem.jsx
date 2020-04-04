

import React from "react";
import styles from "./NewsItem.module.css";
import NewsImage from "./NewsImage";
import PropTypes from 'prop-types'


const NewsItem = props => {
  return (
            <div className={styles.container}>
                       <NewsImage className={styles.newsImage} url={props.url} title={props.title} />

                       <h1>{props.head}</h1>
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
  time: PropTypes.string.isRequired
};
export default NewsItem;