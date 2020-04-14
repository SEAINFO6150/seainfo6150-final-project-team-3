

import React from "react";
import PropTypes from 'prop-types';
import styles from "./News.module.css";
import NewsItem from "./NewsItem";
import Foo from "../Foo/Foo";
import { render } from "react-dom";
import Tabs from './Tabs';

import Data from "../data/NewsData.json";

require('./styles.css');


const News = props => {
  return (

    <div>

     <Tabs>
      <div label="NEWS">
        <ul className={styles.newsul}>
        {Object.values(Data.NewsItemData).map(newsitem => (
         <li>
            <NewsItem className={styles.newsImage}
                      url={newsitem.url}
                      title={newsitem.title}
                      head = {newsitem.head}
                      para = {newsitem.para}
                      time = {newsitem.time}
                      newsName = {newsitem.newsName}
            />
         </li>
        ))}
       </ul>
      </div>

      <div label="EVENTS">
        <ul className={styles.newsul}>
         {Object.values(Data.EventsItemData).map(eventsitem => (
         <li>
            <NewsItem className={styles.newsImage}
                      url={eventsitem.url}
                      title={eventsitem.title}
                      head = {eventsitem.head}
                      para = {eventsitem.para}
                      time = {eventsitem.time}
                      newsName = {eventsitem.newsName}
            />
          </li>
            ))}
       </ul>
      </div>

    </Tabs>
    </div>

  );
};

export default News;