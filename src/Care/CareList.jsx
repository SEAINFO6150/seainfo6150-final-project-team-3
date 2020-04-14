import React, { useState } from 'react';
import { useHistory, useRouteMatch, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import articles from '../data/CareList.json';
import CareListItem from './CareListItem.jsx';
import styles from './styles/CareList.module.css'

const CareList = () => {
  let { url } = useRouteMatch();
  let history = useHistory();

  const handleEnter = careId => {
    history.push(`${url}/${careId}`);
  };
  const articleListData = Object.values(articles);
  return (
    <ul className={styles.ul}>
        {articleListData.map((article, idx) => (
          <li>
            <CareListItem
                article={article}
                key={idx}
                enterDetail={careId => handleEnter(careId)}
            />
          </li>
          ))
        }
    </ul>
  );
};

CareList.propTypes = {
  articles: PropTypes.array.isRequired
};

export default CareList;
