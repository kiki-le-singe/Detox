import React, { useEffect } from 'react';
import styles from '../../pages/showcase.module.css';
// import cardList from './AppsList';
import cardList from '../../../showcase.json';
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
                  <br></br>
                  <Link className={styles.storeButton}>
                    <a href={link1} target="_blank">
                      Google Play
                    </a>
                  </Link>
                  <Link className={styles.storeButton}>
                    <a href={link2} target="_blank">
                      App Store
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
