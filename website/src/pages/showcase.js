import React, { Component } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../pages/showcase.module.css';
import StandWithUkraine from '../components/StandWithUkraine';
import Showcase from '../components/Showcase/Showcase';

function ShowcaseHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Users Showcase</h1>
        <h2 className="hero__subtitle">Check out who is using Detox to Gray box test their React Native Apps</h2>

        <Link to="/docs/introduction/getting-started" className={styles.button}>
          Join the Showcase!
        </Link>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <>
      <StandWithUkraine />
      <Layout>
        <ShowcaseHeader />
        <main>
          <Showcase />
        </main>
      </Layout>
    </>
  );
}
