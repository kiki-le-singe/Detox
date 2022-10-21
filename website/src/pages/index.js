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
            <a className={styles.discordButton} href="https://discord.gg/CkD5QKheF5" target="_blank"></a>
            {/* <button className={styles.twitterButton} onClick={() => window.open('https://twitter.com/detoxe2e')} /> */}
            {/* <div className={styles.twitterFollowers}>
              <a
                className="twitter-follow-button"
                href="https://twitter.com/detoxe2e?ref_src=twsrc%5Etfw"
                src="https://platform.twitter.com/widgets/follow_button.7dae38096d06923d683a2a807172322a.en.html#dnt=false&id=twitter-widget-0&lang=en&screen_name=detoxe2e&show_count=true&show_screen_name=true&size=l&time=1666188622463"
                src="https://platform.twitter.com/widgets/widget_iframe.7dae38096d06923d683a2a807172322a.html?origin=http%3A%2F%2Flocalhost%3A3000"
                href="https://twitter.com/detoxe2e"
                href="https://twitter.com/intent/user?original_referer=https%3A%2F%2Fwix.github.io%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5Edetoxe2e&region=count_link&screen_name=detoxe2e"
                href="https//api.twitter.com/1.1/followers/list.json?cursor=-1&screen_name=detoxe2e&skip_status=true&include_user_entities=false"
                href="https://api.twitter.com/1.1/users/lookup.json?screen_name='.$detoxe2e"
                href="https://api.twitter.com/2/users/by/username/detox?user.fields=public_metrics"
                href="https://twitter.com/detoxe2e"
                data-size="large"
                data-show-count="true"
                data-show-screen-name="false"
                data-scribe="component:count"></a>
            </div> */}
            {/* <a
              className="twitter-follow-button"
              href="https://twitter.com/detoxe2e"
              data-show-screen-name="false"
              data-show-count="true"
              data-size="large"></a> */}
            {/* <a
              href="https://twitter.com/detoxe2e"
              className="twitter-follow-button"
              style={{ color: '#ffffff' }}
              data-size="large"
              data-show-count="true">
                      Follow @detoxe2e       
            </a> */}
            {/* <button className={styles.githubButton} onClick={() => window.open('https://github.com/wix/detox')} />
            <button
              className={styles.githubStar}
              href="https://github.com/wix/detox/stargazers"
              target="_blank"
              rel="noreffer"
              src="https://api.github.com/repos/wix/Detox?page=$i&type=star&count=true&size=large">
              2000
            </button> */}
            <div className={styles.twitterFrame}>
              <iframe
                src="https://platform.twitter.com/widgets/follow_button.html?screen_name=detoxe2e&show_screen_name=false&show_count=true&size=l"
                title="Follow Detox on Twitter"
                width="180"
                height="36"></iframe>

              <iframe
                className={styles.githubStar}
                src="https://ghbtns.com/github-btn.html?user=wix&repo=detox&type=star&count=true&size=large"
                frameBorder="0"
                scrolling="0"
                width="200"
                height="35"
                title="GitHub"
              />
            </div>
            {/* <button className={styles.githubStar} src="https://api.github.com/repos/wix/Detox?page=$i&type=star&count=true&size=large" /> */}
          </div>
        </div>
      </div>
    </div>
  );
  console.log('src', src);
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
