import React from 'react';
// import clsx from 'clsx';
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
        <div className="row">
          <div className="col">
            <h1 className={styles.heroBanner.h1}>{siteConfig.title}</h1>
            <h2 className={styles.heroBanner.h2}>{siteConfig.tagline}</h2>
            <div className={styles.buttons}>
              <Link className="button button--secondary button--lg" to="/docs/introduction/getting-started">
                Getting Started <strong>with Detox</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function HomepageSubHeader() {
  return (
    <div className={styles.subheader}>
      <div className="container">
        <div className="row sub-buttons-text">
          <div className="col col--4">
            <div>
              Follow us on <strong>social networks:</strong>
            </div>
          </div>
          <div className="col col--8 flex-jc-fe">
            <button className={styles.discordButton} onClick={() => window.open('https://discord.gg/CkD5QKheF5')} />
            <button className={styles.twitterButton}>
              <a href="https://twitter.com/detoxe2e" target="_blank" rel="noreferrer"></a>
            </button>
            <button className={styles.twitterFollowers}>
              <a
                src="https://platform.twitter.com/widgets/follow_button.7dae38096d06923d683a2a807172322a.en.html#dnt=false&id=twitter-widget-0&lang=en&screen_name=detoxe2e&show_count=true&show_screen_name=true&size=l&time=1666188622463"
                href="https://twitter.com/detoxe2e"
                data-size="large"
                data-show-count="true">
                Followers
              </a>
            </button>
            <button className={styles.githubButton}>
              <a href="https://github.com/wix/detox" target="_blank" rel="noreferrer"></a>
            </button>
            <button className={styles.githubStar}>
              <a
                href="https://github.com/wix/detox/stargazers"
                target="_blank"
                rel="noreffer"
                src="https://api.github.com/repos/wix/Detox?page=$i&type=star&coutn=true&size=large">
                2000
              </a>
            </button>
            <button className={styles.githubStar} src="https://api.github.com/repos/wix/Detox?page=$i&type=star&coutn=true&size=large" />
          </div>
        </div>
      </div>
    </div>
  );
}

// export function Section({ element = 'section', children, className, background = 'light' }) {
//   const El = element;
//   return <El className={className ? `Section ${className} ${background}` : `Section ${background}`}>{children}</El>;
// }

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
