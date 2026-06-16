import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docusaurus-portfolio/__docusaurus/debug',
    component: ComponentCreator('/docusaurus-portfolio/__docusaurus/debug', '171'),
    exact: true
  },
  {
    path: '/docusaurus-portfolio/__docusaurus/debug/config',
    component: ComponentCreator('/docusaurus-portfolio/__docusaurus/debug/config', '1d2'),
    exact: true
  },
  {
    path: '/docusaurus-portfolio/__docusaurus/debug/content',
    component: ComponentCreator('/docusaurus-portfolio/__docusaurus/debug/content', '44d'),
    exact: true
  },
  {
    path: '/docusaurus-portfolio/__docusaurus/debug/globalData',
    component: ComponentCreator('/docusaurus-portfolio/__docusaurus/debug/globalData', '21d'),
    exact: true
  },
  {
    path: '/docusaurus-portfolio/__docusaurus/debug/metadata',
    component: ComponentCreator('/docusaurus-portfolio/__docusaurus/debug/metadata', 'ea8'),
    exact: true
  },
  {
    path: '/docusaurus-portfolio/__docusaurus/debug/registry',
    component: ComponentCreator('/docusaurus-portfolio/__docusaurus/debug/registry', '84a'),
    exact: true
  },
  {
    path: '/docusaurus-portfolio/__docusaurus/debug/routes',
    component: ComponentCreator('/docusaurus-portfolio/__docusaurus/debug/routes', '87e'),
    exact: true
  },
  {
    path: '/docusaurus-portfolio/blog',
    component: ComponentCreator('/docusaurus-portfolio/blog', '758'),
    exact: true
  },
  {
    path: '/docusaurus-portfolio/markdown-page',
    component: ComponentCreator('/docusaurus-portfolio/markdown-page', 'e50'),
    exact: true
  },
  {
    path: '/docusaurus-portfolio/portfolio',
    component: ComponentCreator('/docusaurus-portfolio/portfolio', '25b'),
    routes: [
      {
        path: '/docusaurus-portfolio/portfolio',
        component: ComponentCreator('/docusaurus-portfolio/portfolio', 'cd1'),
        routes: [
          {
            path: '/docusaurus-portfolio/portfolio',
            component: ComponentCreator('/docusaurus-portfolio/portfolio', '62f'),
            routes: [
              {
                path: '/docusaurus-portfolio/portfolio/category/tutorial---basics',
                component: ComponentCreator('/docusaurus-portfolio/portfolio/category/tutorial---basics', '951'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-portfolio/portfolio/category/tutorial---extras',
                component: ComponentCreator('/docusaurus-portfolio/portfolio/category/tutorial---extras', '8eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-portfolio/portfolio/intro',
                component: ComponentCreator('/docusaurus-portfolio/portfolio/intro', '054'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-portfolio/portfolio/tutorial-basics/congratulations',
                component: ComponentCreator('/docusaurus-portfolio/portfolio/tutorial-basics/congratulations', '659'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-portfolio/portfolio/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docusaurus-portfolio/portfolio/tutorial-basics/create-a-blog-post', 'd9d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-portfolio/portfolio/tutorial-basics/create-a-document',
                component: ComponentCreator('/docusaurus-portfolio/portfolio/tutorial-basics/create-a-document', 'c05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-portfolio/portfolio/tutorial-basics/create-a-page',
                component: ComponentCreator('/docusaurus-portfolio/portfolio/tutorial-basics/create-a-page', '810'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-portfolio/portfolio/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docusaurus-portfolio/portfolio/tutorial-basics/deploy-your-site', '1ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-portfolio/portfolio/tutorial-basics/markdown-features',
                component: ComponentCreator('/docusaurus-portfolio/portfolio/tutorial-basics/markdown-features', '810'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-portfolio/portfolio/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docusaurus-portfolio/portfolio/tutorial-extras/manage-docs-versions', '5ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-portfolio/portfolio/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docusaurus-portfolio/portfolio/tutorial-extras/translate-your-site', 'a70'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docusaurus-portfolio/',
    component: ComponentCreator('/docusaurus-portfolio/', 'f10'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
