// @ts-check

const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const lightCodeTheme = require('prism-react-renderer/themes/github')

const baseUrl = require('./baseUrl')

const pluginContentDocsConfig = {
  breadcrumbs: true,
  path: 'docs',
  routeBasePath: '/',
  sidebarPath: 'sidebars.js',
}

const themeClassicConfig = {
  customCss: require.resolve('./src/css/custom.css'),
}

const themeConfig = {
  colorMode: {
    defaultMode: 'light',
    disableSwitch: true,
  },
  docs: {
    sidebar: {
      autoCollapseCategories: true,
      hideable: true,
    },
  },
  navbar: {
    hideOnScroll: false,
    items: [
      {
        activeBaseRegex: `(${baseUrl}$|intro/.+)`,
        label: 'Getting Started',
        to: '/',
      },
      {
        activeBaseRegex: '(infrastructure|architecture|dev-ops)',
        items: [
          {
            activeBasePath: 'infrastructure',
            label: 'Infrastructure',
            to: 'infrastructure/infrastructure_architecture',
          },
          {
            activeBasePath: 'architecture',
            label: 'Architecture',
            to: 'architecture/high_level_vision',
          },
          {
            activeBasePath: 'dev-ops',
            label: 'DevOps',
            to: 'dev-ops/intro',
          },
        ],
        label: 'DIH Platform',
        to: 'infrastructure/infrastructure_architecture',
      },
      {
        activeBaseRegex: 'governance',
        items: [
          {
            activeBasePath: 'governance/intro',
            label: 'Overview',
            to: 'governance/intro',
          },
          {
            activeBasePath: 'governance/team',
            label: 'Organization',
            to: 'governance/team',
          },
          {
            activeBasePath: 'governance/processes_metrics',
            label: 'Metrics',
            to: 'governance/processes_metrics',
          },
        ],
        label: 'Governance',
        to: 'governance/intro',
      },
      {
        activeBaseRegex: '(guidelines|contribute)',
        items: [
          {
            activeBasePath: 'guidelines',
            label: 'Guidelines',
            to: 'guidelines/development',
          },
          {
            activeBasePath: 'contribute',
            label: 'Contribute',
            to: 'contribute/',
          },
        ],
        label: 'Learn',
        to: 'guidelines/development',
      },
    ],
  },
  prism: {
    darkTheme: darkCodeTheme,
    theme: lightCodeTheme,
  },
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  baseUrl,
  favicon: 'img/favicon.ico',
  i18n: { defaultLocale: 'en', locales: ['en'] },
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  plugins: [
    './plugins/micro-lc.plugin.js',
    '@docusaurus/plugin-content-pages',
    ['@docusaurus/plugin-content-docs', pluginContentDocsConfig],
  ],
  projectName: 'dev-portal-docusaurus',
  tagline: 'Developer Portal Documentation',
  themeConfig,
  themes: [['@docusaurus/theme-classic', themeClassicConfig]],
  title: 'Documentation',
  url: 'https://your-docusaurus-test-site.com',
}

module.exports = config
