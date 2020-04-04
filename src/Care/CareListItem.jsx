import React from "react";
import style from './styles/CareListItem.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const CareListItem = ({article, enterDetail}) => {
  const { title, image, slug, shortText, pubDate, pubYear, author} = article;

return (
      <div className="article-container">
        
        <img className="article-img" src={image._url} alt={title} />
        <div className="article-content">
          <Link to={`/care/${slug}`}><h3>{title}</h3></Link>
          <p className="article-text">{shortText}</p>
        </div>
        <div className="left-button">
        </div>
    </div>
  );
};

export default CareListItem;
