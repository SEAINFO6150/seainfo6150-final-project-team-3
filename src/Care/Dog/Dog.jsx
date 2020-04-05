import React, { useState } from 'react';
import { BrowserRouter as Router, useHistory, useRouteMatch, Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import articles from '../data/DogCare.json';
import CareListItem from '../CareListItem.jsx';

const Dog = () => {
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

Dog.propTypes = {
  articles: PropTypes.array.isRequired
};

export default Dog;