import { ReactNode } from 'react';

import { flicker } from './frontend/Flicker';
import { installation } from './getting-started/installation';
import { introduction } from './getting-started/introduction';
import { storyAvatar } from './frontend/StoryAvatar';
import { flipBadge } from './frontend/FlipBadge';
import { encryptionDecryption } from './backend/EncryptionDecryption';
import { regexValidations } from './backend/RegexValidations';
import { debounce } from './backend/Debounce';
import { expandableCard } from './frontend/ExpandableCard';
import { customScrollbar } from './frontend/CustomScrollbar';
import { glitchText } from './frontend/GlitchText';

export type SideBarSectionInDocument = {
  group: string;
  name: string;
  order: number;
};

export type SectionInDocument = {
  heading?: string;
  content?: string | Array<{ id: number; heading: string; content: string }>;
  sentence?: string;
  code?: ReactNode | string;
  preview?: ReactNode;
  description?: string;
  sectionType: string;
};

export type ContentInDocument = {
  sections: Array<SectionInDocument>;
};

export type Document = {
  sideBar: SideBarSectionInDocument;
  content: ContentInDocument;
};

export const getSideBarTabs = () => {
  return sideBarOptions;
};

const sideBarOptions: Array<{
  title: string;
  children: Array<{ name: string; href: string; content: Document; isNew?: boolean }>;
}> = [
  {
    title: 'Getting Started',
    children: [
      { name: 'Introduction', href: '/docs/introduction', content: introduction },
      {
        name: 'Installation',
        href: '/docs/installation',
        content: installation
      }
    ]
  },
  {
    title: 'Components',
    children: [
      { name: 'CustomScrollbar', href: '/docs/customscrollbar', content: customScrollbar },
      { name: 'GlitchText', href: '/docs/glitchtext', content: glitchText, isNew: true },
      {
        name: 'ExpandableCard',
        href: '/docs/expandablecard',
        content: expandableCard,
        isNew: true
      },
      { name: 'FlickerBox', href: '/docs/flickerbox', content: flicker },
      { name: 'FlipBadge', href: '/docs/flipbadge', content: flipBadge },
      { name: 'StoryAvatar', href: '/docs/storyavatar', content: storyAvatar }
    ]
  },
  {
    title: 'Utilities',
    children: [
      {
        name: 'Debounce',
        href: '/docs/debounce',
        content: debounce,
        isNew: true
      },
      {
        name: 'Encryption Decryption',
        href: '/docs/encryptiondecryption',
        content: encryptionDecryption
      },
      {
        name: 'Regex Validations',
        href: '/docs/regexvalidations',
        content: regexValidations
      }
    ]
  }
];

export const getDocs = (docId: string) => {
  const group = sideBarOptions.filter((tab) =>
    tab.children.find((child) => {
      return child.name.toLowerCase().replaceAll(' ', '') === docId.toLowerCase();
    })
  );

  return group[0].children.filter(
    (child) => child.name.toLowerCase().replaceAll(' ', '') === docId.toLowerCase()
  )[0].content;
};
