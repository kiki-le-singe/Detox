import React from 'react';
import styles from './HomepageFeatures.module.css';
import FeatureList from './FeatureList';
import Feature from './Features';

function HomepageFeatures() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className={styles.benefitsHeader}>Detox benefits</h1>
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
