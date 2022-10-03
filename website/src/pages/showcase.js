import React, { Component } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../pages/showcase.module.css';
import StandWithUkraine from '../components/StandWithUkraine';
import Button from '../components/Showcase/Button';

import Card from '../components/Showcase/Showcase';
// import ShowcaseCard from '../components/Showcase/Card';
// import Card from '../components/Showcase/Card';
// import {Section} from './index';
// import ThemedImage from '@theme/ThemedImage';

function ShowcaseHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Users Showcase</h1>
        <p className="hero__subtitle">Check out who is using Detox to Gray box test their React Native Apps</p>
        <div className={styles.button}>
          <Link className="button" to="/docs/introduction/getting-started">
            Join the Showcase!
          </Link>
        </div>
      </div>
    </header>
  );
}

// function ShowcaseSubHeader() {
//   return (
//     <div className={styles.subButtons}>
//       <a
//         href="https://twitter.com/detoxe2e"
//         className="twitter-follow-button"
//         style={{ color: '#ffffff' }}
//         data-size="large"
//         data-show-count="true"></a>
//     </div>
//   );
// }

// class App extends Component {
//     render() {

//         return (
//             <div className="App">
//                 <Showcase title={title} image={'Hudl'} description={"Some really cool apps are using Detox for testing. If you're interested to see what can be done using Detox, check out these apps!"} link={'Visit their page'} />
//             </div>
//         )
//     }
// }

export default function Home() {
  return (
    <>
      <StandWithUkraine />
      <Layout>
        <ShowcaseHeader />

        <main>
          <Card />
        </main>
      </Layout>
    </>
  );
}
