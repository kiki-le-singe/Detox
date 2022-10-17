import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
// import FeatureList from '../../../website/FeatureList.json';
import FeatureList from './FeatureList';
import Feature from './Features';

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Detox benefits</h1>
          </div>
        </div>
        <div className={styles.features}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomepageFeatures;
