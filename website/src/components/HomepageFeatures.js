import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
// import FeatureList from '../../../website/FeatureList.json';
import FeatureList from './FeatureList';
import Feature from './Features';

function HomepageFeatures() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="benefits-header">Detox benefits</h1>
          </div>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomepageFeatures;
