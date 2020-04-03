import React, { useState } from 'react';
import { useHistory, useRouteMatch, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import articles from '../data/article.json';
import CareListItem from '../CareListItem.jsx';

const CareList = () => {
  let { url } = useRouteMatch();
  let history = useHistory();

  const handleEnter = careId => {
    history.push(`${url}/${careId}`);
  };
  const articleListData = Object.values(articles);
  return (
    <div className="article-list-container">
      {articleListData.map((article, idx) => (
        <CareListItem
          article={article}
          key={idx}
          enterDetail={careId => handleEnter(careId)}
        />
      ))}
    </div>
  );
};

CareList.propTypes = {
  articles: PropTypes.array.isRequired
};

export default CareList;
