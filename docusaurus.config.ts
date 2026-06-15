import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Carolina Menezes',
  tagline: 'Welcome to my portfolio!',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-portfolio.com', // Update when deploying
  baseUrl: '/',

  organizationName: 'carolinasacramento', 
  projectName: 'portfolio', 

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'portfolio', // Changes URL from /docs/ to /portfolio/
        },
        blog: {
          showReadingTime: true,
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/portfolio-social-card.jpg',
    colorMode: {
      defaultMode: 'light',        // Garante que o site sempre abra no modo claro
      disableSwitch: true,         // Esconde o botão de Lua/Sol da Navbar
      respectPrefersColorScheme: false, // Ignora se o Windows/Mac do usuário estiver no modo escuro
    },
    navbar: {
      title: 'Carolina Menezes',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg', 
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar', 
          position: 'left',
          label: 'Case Studies',
        },
        {to: '/blog', label: 'Articles & Insights', position: 'left'},
        {
          href: 'https://github.com/carol-smenezes',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://linkedin.com/in/carol-smenezes/',
          label: 'LinkedIn',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Navigation',
          items: [
            {
              label: 'Case Studies',
              to: '/portfolio/intro',
            },
            {
              label: 'Articles',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/carol-smenezes/',
            },
            {
              label: 'Email',
              href: 'mailto:carol_sacramento_menezes@outlook.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Carolina Menezes. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;