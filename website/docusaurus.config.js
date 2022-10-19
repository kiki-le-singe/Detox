// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Detox',
  tagline: 'Gray box end-to-end testing and automation framework for mobile apps',
  url: 'https://wix.github.io',
  baseUrl: '/Detox/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.ico',
  organizationName: 'wix',
  projectName: 'Detox',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/wix/Detox/edit/master/docs/',
          docLayoutComponent: '@site/src/components/CustomLayout',
          remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]]
        },
        pages: {
          remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]]
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Detox',
        logo: {
          alt: 'Detox Logo',
          src: '/img/logo.png'
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started',
            position: 'left',
            label: 'Docs'
          },
          {
            href: 'https://wix.github.io/Detox/docs/config/overview',
            target: '_self',
            docId: 'API-reference',
            position: 'left',
            label: 'API'
          },
          {
            href: 'https://github.com/wix/Detox',
            target: '_self',
            docId: 'blog',
            position: 'left',
            label: 'Blog'
          },
          {
            href: 'https://github.com/wix/Showcase',
            target: '_self',
            label: 'Showcase',
            position: 'left',
            className: 'header-showcase-link'
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true
          },
          {
            href: 'https://github.com/wix/Detox', // remove the aria label and un-comment lines 121 - 138 in custom.css to add a GH logo here
            // label: 'Github',
            'aria-label': 'GitHub',
            position: 'right',
            className: 'header-github-link'
          }
        ]
      },
      algolia: {
        appId: 'KTM5GBP42S',
        apiKey: 'd01d9c1bae30c64fa2b9bfbdad9adbfd',
        indexName: 'detox'
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: 'docs/introduction/getting-started'
              },
              {
                label: 'Contributing to Detox',
                to: 'docs/contributing'
              }
            ]
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Ask a question on Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/detox'
              },
              {
                label: 'Create new issue on Github',
                href: 'https://github.com/wix/Detox/issues/new/choose'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/wix/Detox',
                position: 'left',
                className: 'footer-ghfooter',
                favicon: '/static/img/showcase/ghfooter.svg'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/detoxe2e/',
                position: 'left',
                className: 'footer-twitterfooter',
                favicon: '/static/img/showcase/twitterfooter.png'
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/CkD5QKheF5',
                position: 'left',
                className: 'footer-discordfooter',
                favicon: '/static/img/showcase/discordfooter.png'
              }
            ]
          }
        ]
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false
      }
    }),
  scripts: [
    {
      src: 'https://platform.twitter.com/widgets.js',
      async: true
    }
  ]
};

module.exports = config;
