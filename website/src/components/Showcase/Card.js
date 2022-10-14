import clsx from 'clsx';
import Link from '@docusaurus/Link';
import React from 'react';

import styles from './Card.module.css';

function Card({ className, title, image, linkGoogle, linkApple }) {
  return (
    <li className={clsx(className, styles.card)}>
      <img src={require(`@site/static/${image}`).default} className={styles.image} />
      <span className={styles.title}>{title}</span>
      <div className={styles.actions}>
        <Link className={styles.storeButton} href={linkGoogle}>
          Google Play
        </Link>
        <Link className={styles.storeButton} href={linkApple}>
          App Store
        </Link>
      </div>
    </li>
  );
}

export default Card;
