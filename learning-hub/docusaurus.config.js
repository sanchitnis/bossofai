// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Boss of AI — Learning Hub',
  tagline: 'Learn & Build - Collaborate & Innovate with AI',
  favicon: 'img/favicon.ico',

  url: process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : 'https://bossofai.org'),
  baseUrl: process.env.DOCS_BASE_URL || '/learn/',
  organizationName: 'sanchitnis',
  projectName: 'learning-hub',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,


  onBrokenLinks: 'warn',
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // Serve docs at the root
        },
        blog: {}, // Enable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    async function tailwindPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("@tailwindcss/postcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Boss of AI',
        logo: {
          alt: 'Boss of AI Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/intro#explore-our-courses',
            position: 'left',
            label: 'Contents',
          },
          {
            to: '/intro',
            position: 'left',
            label: 'Introduction',
            activeBasePath: 'never-active', // Prevents double highlighting of root pages
          },
          {
            to: '/intro#interactive-presentations',
            position: 'left',
            label: 'Microlearning',
          },
          {
            to: '/pdf500-faculty-guides/pdf501-content-creation',
            position: 'left',
            label: 'Create Content',
          },
          {
            to: '/blog',
            position: 'left',
            label: 'Blogs',
          },
          {
            to: '/Common-Resources',
            position: 'left',
            label: 'Resources',
          },
          {
            href: 'https://bossofai.org',
            label: 'Boss of AI',
            position: 'right',
          },
          {
            href: 'pathname:///aihub',
            position: 'right',
            label: 'AI Hub',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Platform',
            items: [
              {
                label: 'Boss of AI',
                href: 'https://bossofai.org',
              },
              {
                label: 'AI Hub Portal',
                href: 'pathname:///aihub',
              },
            ],
          },
          {
            title: 'Community & Connect',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/company/bossofai',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Boss of AI. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};


export default config;
