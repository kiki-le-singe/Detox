import React from 'react';
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
              <Link className="button button--secondary button--lg" href="/docs/introduction/getting-started" target="_blank">
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
    <div className={styles.subHeader}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <div className={styles.subText}>
              Follow us on <strong>social networks:</strong>
            </div>
          </div>
          <div className="col col--8 flex-jc-fe">
            <a
              className={styles.discordButton}
              src="../../static/img/join-us-white.svg"
              href="https://discord.gg/CkD5QKheF5"
              target="_blank"></a>
            <div className={styles.twitterFrame}>
              <iframe
                src="https://platform.twitter.com/widgets/follow_button.html?screen_name=detoxe2e&show_screen_name=false&show_count=true&size=l"
                title="Follow Detox on Twitter"
                width="200"
                height="37"></iframe>
              <iframe
                className={styles.githubStar}
                src="https://ghbtns.com/github-btn.html?user=wix&repo=detox&type=star&count=true&size=large"
                frameBorder="0"
                scrolling="0"
                width="200"
                height="37"
                title="GitHub"
              />
            </div>
          </div>
        </div>
      </div>
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
