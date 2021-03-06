

module.exports = {
  title: 'Tesbo',
  tagline: 'Built For Tester, Build By Tester',
  url: 'https://tesbo-doc.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'Tesbo', // Usually your GitHub org/user name.
  projectName: 'Tesbo-Doc', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Tesbo Documentation',
        src: 'img/logo1.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },

        // Please keep GitHub link to the right for consistency.
        {
          href: 'https://github.com/Tesbo/Tesbo-Web',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
       
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/tesbo',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/TesboHQ',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/x6MNGNE',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Tesbo/Tesbo-Web',
            },
          ],
        },
       
      ],
      logo: {
        alt: 'QAble',
        src: 'img/logo.e2549a42.svg',
        href: 'https://qable.io',
      },
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} QAble. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
   
          editUrl:
            'https://github.com/Tesbo/Tesbo-Doc/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Tesbo/Tesbo-Doc/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
