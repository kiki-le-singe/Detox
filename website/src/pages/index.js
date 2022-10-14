import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import StandWithUkraine from '../components/StandWithUkraine';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <h2 className="hero__subtitle">{siteConfig.tagline}</h2>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/introduction/getting-started">
            Getting Started <b>with Detox</b>
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageSubHeader() {
  return (
    <div className={styles.subButtons}>
      <a
        href="https://twitter.com/detoxe2e"
        className="twitter-follow-button"
        style={{ color: '#ffffff' }}
        data-size="large"
        data-show-count="true">
        Follow us on <b>social networks</b>
      </a>
      <button className={styles.discordButton} onClick={() => window.open('https://discord.gg/CkD5QKheF5')} />
      <iframe
        className={styles.githubStar}
        src="https://ghbtns.com/github-btn.html?user=wix&repo=detox&type=star&count=true&size=large"
        frameBorder="0"
        scrolling="0"
        width="170"
        height="30"
        title="GitHub"
      />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <StandWithUkraine />
      <Layout>
        <HomepageHeader />
        <HomepageSubHeader />
        <main>
          <HomepageFeatures />
        </main>
      </Layout>
    </>
  );
}
