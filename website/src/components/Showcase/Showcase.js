import React from 'react';
import clsx from 'clsx';
// import styles from './Card.module.css'
import styles from '../../pages/showcase.module.css';
import cardList from './AppsList';
// import cardList from '../../../showcase.json';
import Link from '@docusaurus/Link';

function Card({ title, image, link1, link2, description = '' }) {
  return (
    <section className={styles.showcase}>
      <div className={clsx('col col--4')}>
        <div className={styles.showcaseSection}>
          <div className={styles.logos}>
            <div className={styles.showcaseSection.showcase}>
              <div className={styles.iconBox}>
                <img src={image} className="imageShowcase" />
              </div>
              <div className={styles.showcaseContent}>
                <div>
                  <h3>{title}</h3>
                  <p className="showcaseLinks">{description}</p>
                  <button className={styles.storeButton}>
                    <a href={link1}>Google Play</a>
                  </button>
                  <button className={styles.storeButton}>
                    <a href={link2}>App Store</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section className={styles.showcase}>
      <div className={styles.showcase}>
        <div className="showcase">
          <div>
            <div className="showcase">
        <div className="row">
          {cardList.map((props, idx) => (
            <Card key={idx} {...props} />
          ))}
        </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// function ShowcaseCard () {

//   return (

//     <div className='Showcase'>
//         {cardItems.map((cardItems) => <div key={card}> {cardItems}</div>)}
//     </div>
//   )
// }
// Showcase.title = "SHOWCASE | Detox";

export default Showcase;
