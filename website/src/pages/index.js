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
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className={styles.heroBanner.h1}>{siteConfig.title}</h1>
        <h2 className={styles.heroBanner.h2}>{siteConfig.tagline}</h2>
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
    <div className={styles.subheader}>
      <div className="container">
        <div className="col col--3">
          <div className={styles.subButtonsText}>
            Follow us on <b>social networks:</b>
          </div>
        </div>
        <div className={styles.subButtons}>
          <button className={styles.discordButton} onClick={() => window.open('https://discord.gg/CkD5QKheF5')} />
          <button className={styles.twitterButton}>
            <a
              href="https://twitter.com/detoxe2e"
              className="twitter-follow-button"
              style={{ color: '#ffffff' }}
              data-size="large"
              data-show-count="true"></a>
          </button>
          <iframe
            className={styles.githubButton}
            // src="https://ghbtns.com/github-btn.html?user=wix&repo=detox&type=star&count=true&size=large"
            src="https://api.github.com/repos/wix/Detox?page=$i&per_page=100"
            frameBorder="0"
            scrolling="0"
            width="170"
            height="30"
            title="GitHub"
          />
        </div>
      </div>
    </div>
  );
}

export function Section({ element = 'section', children, className, background = 'light' }) {
  const El = element;
  return <El className={className ? `Section ${className} ${background}` : `Section ${background}`}>{children}</El>;
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
