import { ReactNode } from 'react';

import { flicker } from './frontend/Flicker';
import { installation } from './getting-started/installation';
import { introduction } from './getting-started/introduction';
import { storyAvatar } from './frontend/StoryAvatar';
import { flipBadge } from './frontend/FlipBadge';
import { encryptionDecryption } from './utilities/EncryptionDecryption';
import { regexValidations } from './utilities/RegexValidations';
import { debounce } from './utilities/Debounce';
import { expandableCard } from './frontend/ExpandableCard';
// import { customScrollbar } from './frontend/CustomScrollbar';
import { glitchText } from './frontend/GlitchText';
import { yupValidations } from './utilities/YupValidations';
import { darkThemeLightTheme } from './utilities/DarkThemeLightTheme';
import { accordion } from './frontend/Accordion';
import { rainbowText } from './frontend/RainbowText';
import { customLogger } from './utilities/CustomLogger';
import { skewedText } from './frontend/SkewedText';
import { barricadeTape } from './frontend/BarricadeTape';
import { expandableIconButton } from './frontend/ExpandableIconButton';
import { countUp } from './frontend/CountUp';
import { copyTextButton } from './frontend/CopyTextButton';
import { animatedGradientButton } from './frontend/AnimatedGradientButton';
import { glassButton } from './frontend/GlassButton';
import { toggleButton } from './frontend/ToggleButton';
import { glassCard } from './frontend/GlassCard';
import { tradingCard } from './frontend/TradingCard';
import { SearchResult } from '@/components/support-plugin';

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
    title: 'Texts',
    children: [
      {
        name: 'Count Up',
        href: '/docs/countup',
        content: countUp,
        isNew: true
      },
      { name: 'Glitch Text', href: '/docs/glitchtext', content: glitchText },
      { name: 'Rainbow Text', href: '/docs/rainbowtext', content: rainbowText },
      {
        name: 'Skewed Text',
        href: '/docs/skewedtext',
        content: skewedText
      }
    ]
  },
  {
    title: 'Buttons',
    children: [
      {
        name: 'Animated Gradient Button',
        href: '/docs/animatedgradientbutton',
        content: animatedGradientButton,
        isNew: true
      },
      {
        name: 'Copy Text Button',
        href: '/docs/copytextbutton',
        content: copyTextButton,
        isNew: true
      },
      {
        name: 'Glass Button',
        href: '/docs/glassbutton',
        content: glassButton,
        isNew: true
      },
      {
        name: 'Expandable Icon Button',
        href: '/docs/expandableiconbutton',
        content: expandableIconButton,
        isNew: true
      },
      {
        name: 'Toggle Button',
        href: '/docs/togglebutton',
        content: toggleButton,
        isNew: true
      }
    ]
  },
  {
    title: 'Cards',
    children: [
      {
        name: 'Trading Card',
        href: '/docs/tradingCard',
        content: tradingCard,
        isNew: true
      },
      {
        name: 'Glass Card',
        href: '/docs/glasscard',
        content: glassCard,
        isNew: true
      },
      {
        name: 'Expandable Card',
        href: '/docs/expandablecard',
        content: expandableCard
      }
    ]
  },
  {
    title: 'Components',
    children: [
      {
        name: 'Accordion',
        href: '/docs/accordion',
        content: accordion
      },
      {
        name: 'Barricade Tape',
        href: '/docs/barricadeTape',
        content: barricadeTape,
        isNew: true
      },
      // { name: 'CustomScrollbar', href: '/docs/customscrollbar', content: customScrollbar },
      { name: 'Flicker Box', href: '/docs/flickerbox', content: flicker },
      { name: 'Flip Badge', href: '/docs/flipbadge', content: flipBadge },
      { name: 'Story Avatar', href: '/docs/storyavatar', content: storyAvatar }
    ]
  },
  {
    title: 'Utilities',
    children: [
      {
        name: 'Custom Logger',
        href: '/docs/customlogger',
        content: customLogger,
        isNew: true
      },
      {
        name: 'Dark & Light Theme',
        href: '/docs/dark&lighttheme',
        content: darkThemeLightTheme
      },
      {
        name: 'Debounce',
        href: '/docs/debounce',
        content: debounce
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
      },
      {
        name: 'Yup Validations',
        href: '/docs/yupvalidations',
        content: yupValidations
      }
    ]
  }
];

export const getDocs = (docId: string) => {
  const group = sideBarOptions.filter((tab) =>
    tab.children.find((child) => {
      return (
        child.name.toLowerCase().replaceAll(' ', '') === decodeURIComponent(docId.toLowerCase())
      );
    })
  );

  return group[0].children.filter(
    (child) =>
      child.name.toLowerCase().replaceAll(' ', '') === decodeURIComponent(docId.toLowerCase())
  )[0].content;
};

const extractSubstring = (A: string, B: string) => {
  const index = B.toLowerCase().indexOf(A.toLowerCase());
  if (index !== -1) {
    return B.substring(index);
  }
  return '';
};

export const searchDocs = (q: string): Array<SearchResult> => {
  const query = q.toLowerCase();
  if (query === '') return [];

  const results: Array<SearchResult> = [];

  sideBarOptions.forEach((sideBarGroup) => {
    const { children } = sideBarGroup;

    children.forEach((doc) => {
      const sections = doc.content.content.sections;

      let takeIt: boolean = false;
      let preview: string = '';

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const { sectionType, heading, content, sentence, code, description } = section;

        if (sectionType === 'ordered-list') {
          continue;
        }

        if (heading?.toLowerCase().includes(query)) {
          takeIt = true;
          preview = extractSubstring(query, heading);
        } else if (typeof content === 'string' && content.toLowerCase().includes(query)) {
          takeIt = true;
          preview = extractSubstring(query, content);
        } else if (sentence?.toLowerCase().includes(query)) {
          takeIt = true;
          preview = extractSubstring(query, sentence);
        } else if (typeof code === 'string' && code?.toLowerCase().includes(query)) {
          takeIt = true;
          preview = extractSubstring(query, code);
        } else if (description?.toLowerCase().includes(query)) {
          takeIt = true;
          preview = extractSubstring(query, description);
        }
      }

      if (takeIt) {
        results.push({
          name: doc.name,
          preview,
          to: doc.href
        });
      }
    });
  });

  return results.slice(0, 5);
};
