import clsx from 'clsx';
import React from 'react';

import cardList from '@site/showcase.json';

import Card from './Card';
import styles from './Showcase.module.css';

function Showcase() {
  const cards = cardList.map((props) => (
    <Card key={props.title} {...props} />
  ));

  return (
    <section className={clsx('container', styles.container)}>
      <ul className={clsx('col', 'col--12', styles.list)}>
        {cards}
      </ul>
    </section>
  );
}

export default Showcase;
