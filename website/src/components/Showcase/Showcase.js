import React from 'react';
import clsx from 'clsx';
// import styles from './Card.module.css'
import styles from '../../pages/showcase.module.css';
import cardList from './AppsList';
// import cardList from '../../../showcase.json';
import Link from '@docusaurus/Link';

function Card({ title, image, link1, link2 }) {
  return (
    <section>
      <div>
        <div className={styles.showcaseSection}>
          <div className={styles.logos}>
            <div className={styles.showcaseSection.showcaseCard}>
              <div className={styles.iconBox}>
                <img src={image} className="imageShowcase" />
              </div>
              <div>
                <div>
                  <h3>{title}</h3>
                  <p className="showcaseLinks"></p>
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
    <section>
      <div className={styles.showcase}>
        <div className="row" style={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          maxWidth: 1300,
        }}>
          {cardList.map((props, idx) => (
            <Card key={idx} {...props} />
          ))}
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
