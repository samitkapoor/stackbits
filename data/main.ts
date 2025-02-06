import { introduction } from './getting-started/introduction';

export const getSideBarTabs = () => {
  return sideBarOptions;
};

const sideBarOptions = [
  {
    title: 'Getting Started',
    children: [
      { name: 'Introduction', href: '/docs/introduction', content: introduction },
      {
        name: 'Installation',
        href: '/docs/installation'
      }
    ]
  },
  {
    title: 'Frontend',
    children: []
  }
];

export const getDocs = (docId: string) => {
  const group = sideBarOptions.filter((tab) =>
    tab.children.find((child) => child.name.toLowerCase() === docId.toLowerCase())
  );

  return group[0].children.filter((child) => child.name.toLowerCase() === docId.toLowerCase())[0]
    .content;
};
