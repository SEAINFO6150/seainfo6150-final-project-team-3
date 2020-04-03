import React, { useState } from 'react';
import { useHistory, Switch, Route, useRouteMatch, useLocation, useParams} from 'react-router-dom';
import PropTypes from 'prop-types';

const CareDetail = () => {
  let location = useLocation();
  console.log('careId', location);

return <div className="care-detail-container">xxx</div>;
};


CareDetail.propTypes = {
  articles: PropTypes.array.isRequired
};

export default CareDetail;
