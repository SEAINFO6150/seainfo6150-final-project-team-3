import React from "react";
import PropTypes from "prop-types";

const NewsImage = props => {
  return (
    <img className= {props.className}
         src= {props.url}
         alt={props.title} />
  );
};

NewsImage.propTypes = {
    className: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default NewsImage;