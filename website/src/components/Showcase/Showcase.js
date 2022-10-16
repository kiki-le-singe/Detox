import React, { useEffect } from 'react';
import Card from './Card';
import styles from '../../pages/showcase.module.css';
// import cardList from './AppsList';
import cardList from '../../../showcase.json';

function Showcase() {
  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = 'Detox | Showcase';
  }, ['Detox | Showcase']);
  return (
    <section>
      <div className={styles.showcase}>
        <div
          className="row"
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            maxWidth: 1300
          }}>
          {cardList.map((props, idx) => (
            <Card key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

Showcase.title = 'Detox | Showcase';

export default Showcase;
