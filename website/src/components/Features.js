import React from 'react';
import './Features.css';
// import FeatureList from '../../../website/FeatureList.json';
import FeatureList from './FeatureList';

function Feature({ Svg, title, description }) {
  return (
    <div className="col col--4 features-gap">
      <div>
        <Svg className="featureImage" alt={title} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Feature;
