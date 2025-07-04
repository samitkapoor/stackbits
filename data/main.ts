import { ReactNode } from 'react';

// import { flicker, flickerPreview } from './frontend/Flicker';
import { installation } from './getting-started/installation';
import { introduction } from './getting-started/introduction';
// import { storyAvatar, storyAvatarPreview } from './frontend/StoryAvatar';
// import { flipBadge, flipBadgePreview } from './frontend/FlipBadge';
import { encryptionDecryption } from './utilities/EncryptionDecryption';
import { regexValidations } from './utilities/RegexValidations';
import { debounce } from './utilities/Debounce';
// import { lumeCard, lumeCardPreview } from './frontend/LumeCard';
// // import { customScrollbar } from './frontend/CustomScrollbar';
import { yupValidations } from './utilities/YupValidations';
import { darkThemeLightTheme } from './utilities/DarkThemeLightTheme';
import { accordion, accordionPreview } from './frontend/Accordion';
import { customLogger } from './utilities/CustomLogger';
import { barricadeTape, barricadeTapePreview } from './frontend/BarricadeTape';
// import { glassCard, glassCardPreview } from './frontend/GlassCard';
import { tradingCard, tradingCardPreview } from './frontend/TradingCard';
import { SearchResult } from '@/components/support-plugin';
import { expressServer } from './utilities/ExpressServer';
import { axiosInterceptor } from './utilities/AxiosInterceptor';
import { prismaticHaze, prismaticHazePreview } from './frontend/PrismaticHaze';
// // import { colorCyclone, colorCyclonePreview } from './frontend/ColorCyclone';
import { wavyBackgroundPreview, wavyBackground } from './frontend/WavyBackground';
// // import { flipRevealCard, flipRevealCardPreview } from './frontend/FlipRevealCard';
// import { movingBorderCard, movingBorderCardPreview } from './frontend/MovingBorderCard';
// import { iconWheel, iconWheelPreview } from './frontend/IconWheel';
// import { waveNoiseBackground, waveNoiseBackgroundPreview } from './frontend/WaveNoiseBackground';
// import { topographyBackground, topographyBackgroundPreview } from './frontend/TopographyBackground';
// // import { textureBackground, textureBackgroundPreview } from './frontend/TextureBackground';
// import { epicNameDrop, epicNameDropPreview } from './frontend/EpicNameDrop';
import {
  glowingDotsBackground,
  glowingDotsBackgroundPreview
} from './frontend/GlowingDotsBackground';
// // import { footer, footerPreview } from './frontend/Footer';
import { masonryGrid, masonryGridPreview } from './frontend/MasonryGrid';
import { fileStack, fileStackPreview } from './frontend/FileStack';
import { buttons, buttonsPreview } from './frontend/Buttons';
import { texts, textsPreview } from './frontend/Texts';
import { gooeyWords, gooeyWordsPreview } from './frontend/GooeyWords';
import { skeumorphicMusicCard, skeumorphicMusicCardPreview } from './frontend/SkeumorphicMusicCard';
import { imagePile, imagePilePreview } from './frontend/ImagePile';
// import { gaugeChart, gaugeChartPreview } from './frontend/GaugeChart';
import { browserWindow, browserWindowPreview } from './frontend/BrowserWIndow';
// import { playingCardsPreview } from './frontend/PlayingCards';
// import { playingCards } from './frontend/PlayingCards';
import { spotlightGrid, spotlightGridPreview } from './frontend/SpotlightGrid';
import { projectsSection, projectsSectionPreview } from './frontend/ProjectsSection';
import { contactSection, contactSectionPreview } from './frontend/ContactSection';
import { magnetTabs, magnetTabsPreview } from './frontend/MagnetTabs';
import { jellyLoader, jellyLoaderPreview } from './frontend/JellyLoader';
import { proximityLiftGrid, proximityLiftGridPreview } from './frontend/ProximityLiftGrid';
import { proximityBackground, proximityBackgroundPreview } from './frontend/ProximityBackground';
import { maskCursorEffect, maskCursorEffectPreview } from './frontend/MaskCursorEffect';
import { pixelatedCarousel, pixelatedCarouselPreview } from './frontend/PixelatedCarousel';
import { pixelatedText, pixelatedTextPreview } from './frontend/PixelatedText';
// import { navBarPreview, navBar } from './frontend/NavBar';

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
  designer?: Array<{ name: string; link: string }>;
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
  children: Array<{
    name: string;
    href: string;
    content: Document;
    isNew?: boolean;
    preview?: ReactNode;
  }>;
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
      // {
      //   name: 'Flip Reveal Card',
      //   href: '/docs/fliprevealcard',
      //   content: flipRevealCard,
      //   preview: flipRevealCardPreview
      // },
      {
        name: 'Accordion',
        href: '/docs/accordion',
        content: accordion,
        preview: accordionPreview,
        isNew: false
      },
      // {
      //   name: 'Color Cyclone',
      //   href: '/docs/colorCyclone',
      //   content: colorCyclone,
      //   preview: colorCyclonePreview
      // },
      // {
      //   name: 'Texture Background',
      //   href: '/docs/textureBackground',
      //   content: textureBackground,
      //   preview: textureBackgroundPreview
      // },
      // {
      //   name: 'Topography Background',
      //   href: '/docs/topographyBackground',
      //   content: topographyBackground,
      //   preview: topographyBackgroundPreview
      // },
      // {
      //   name: 'Wave Noise Background',
      //   href: '/docs/waveNoiseBackground',
      //   content: waveNoiseBackground,
      //   preview: waveNoiseBackgroundPreview
      // },

      {
        name: 'Barricade Tape',
        href: '/docs/barricadeTape',
        content: barricadeTape,
        preview: barricadeTapePreview,
        isNew: false
      },
      {
        name: 'Buttons',
        href: '/docs/buttons',
        content: buttons,
        preview: buttonsPreview,
        isNew: false
      },
      {
        name: 'Browser Window',
        href: '/docs/browserwindow',
        content: browserWindow,
        preview: browserWindowPreview
      },
      {
        name: 'Contact Section',
        href: '/docs/contactsection',
        content: contactSection,
        preview: contactSectionPreview,
        isNew: false
      },
      // {
      //   name: 'Epic Name Drop',
      //   href: '/docs/epicNameDrop',
      //   content: epicNameDrop,
      //   preview: epicNameDropPreview
      // },
      {
        name: 'File Stack',
        href: '/docs/fileStack',
        content: fileStack,
        preview: fileStackPreview,
        isNew: false
      },

      // { name: 'CustomScrollbar', href: '/docs/customscrollbar', content: customScrollbar },
      // { name: 'Flicker Box', href: '/docs/flickerbox', content: flicker, preview: flickerPreview },
      // {
      //   name: 'Flip Badge',
      //   href: '/docs/flipbadge',
      //   content: flipBadge,
      //   preview: flipBadgePreview
      // },
      // {
      //   name: 'Footer',
      //   href: '/docs/footer',
      //   content: footer,
      //   preview: footerPreview
      // },
      // {
      //   name: 'Gauge Chart',
      //   href: '/docs/gaugechart',
      //   content: gaugeChart,
      //   preview: gaugeChartPreview
      // },
      // {
      //   name: 'Glass Card',
      //   href: '/docs/glasscard',
      //   content: glassCard,
      //   preview: glassCardPreview
      // },
      //   name: 'Gooey Words',
      {
        name: 'Gooey Words',
        href: '/docs/gooeywords',
        content: gooeyWords,
        preview: gooeyWordsPreview,
        isNew: false
      },
      {
        name: 'Glowing Dots Background',
        href: '/docs/glowingDotsBackground',
        content: glowingDotsBackground,
        preview: glowingDotsBackgroundPreview,
        isNew: false
      },

      // {
      //   name: 'Icon Wheel',
      //   href: '/docs/iconwheel',
      //   content: iconWheel,
      //   preview: iconWheelPreview
      // },
      {
        name: 'Image Pile',
        href: '/docs/imagepile',
        content: imagePile,
        preview: imagePilePreview,
        isNew: false
      },
      {
        name: 'Jelly Loader',
        href: '/docs/jellyloader',
        content: jellyLoader,
        preview: jellyLoaderPreview,
        isNew: false
      },
      // {
      //   name: 'Lume Card',
      //   href: '/docs/lumecard',
      //   content: lumeCard,
      //   preview: lumeCardPreview
      // },
      {
        name: 'Mask Cursor Effect',
        href: '/docs/maskcursoreffect',
        content: maskCursorEffect,
        preview: maskCursorEffectPreview,
        isNew: true
      },
      {
        name: 'Magnet Tabs',
        href: '/docs/magnettabs',
        content: magnetTabs,
        preview: magnetTabsPreview,
        isNew: false
      },

      {
        name: 'Masonry Grid',
        href: '/docs/masonrygrid',
        content: masonryGrid,
        preview: masonryGridPreview,
        isNew: false
      },
      // {
      //   name: 'Moving Border Card',
      //   href: '/docs/movingbordercard',
      //   content: movingBorderCard,
      //   preview: movingBorderCardPreview
      // },
      // {
      //   name: 'NavBar',
      //   href: '/docs/navbar',
      //   content: navBar,
      //   preview: navBarPreview,
      //   isNew: false
      // },
      // {
      //   name: 'Playing Cards',
      //   href: '/docs/playingcards',
      //   content: playingCards,
      //   preview: playingCardsPreview,
      //   isNew: false
      // },
      {
        name: 'Pixelated Carousel',
        href: '/docs/pixelatedcarousel',
        content: pixelatedCarousel,
        preview: pixelatedCarouselPreview,
        isNew: true
      },
      {
        name: 'Pixelated Text',
        href: '/docs/pixelatedtext',
        content: pixelatedText,
        preview: pixelatedTextPreview,
        isNew: true
      },
      {
        name: 'Prismatic Haze Background',
        href: '/docs/prismaticHazeBackground',
        content: prismaticHaze,
        preview: prismaticHazePreview,
        isNew: false
      },
      {
        name: 'Projects Section',
        href: '/docs/projectssection',
        content: projectsSection,
        preview: projectsSectionPreview,
        isNew: false
      },
      {
        name: 'Proximity Background',
        href: '/docs/proximitybackground',
        content: proximityBackground,
        preview: proximityBackgroundPreview,
        isNew: false
      },
      {
        name: 'Proximity Lift Grid',
        href: '/docs/proximityliftgrid',
        content: proximityLiftGrid,
        preview: proximityLiftGridPreview,
        isNew: false
      },
      {
        name: 'Skeumorphic Music Card',
        href: '/docs/skeumorphicMusicCard',
        content: skeumorphicMusicCard,
        preview: skeumorphicMusicCardPreview,
        isNew: false
      },
      {
        name: 'Spotlight Grid',
        href: '/docs/spotlightgrid',
        content: spotlightGrid,
        preview: spotlightGridPreview,
        isNew: false
      },
      {
        name: 'Texts',
        href: '/docs/texts',
        content: texts,
        preview: textsPreview,
        isNew: false
      },
      {
        name: 'Trading Card',
        href: '/docs/tradingCard',
        content: tradingCard,
        preview: tradingCardPreview,
        isNew: false
      },
      // {
      //   name: 'Story Avatar',
      //   href: '/docs/storyavatar',
      //   content: storyAvatar,
      //   preview: storyAvatarPreview
      // }
      {
        name: 'Wavy Background',
        href: '/docs/wavybackground',
        content: wavyBackground,
        preview: wavyBackgroundPreview,
        isNew: true
      }
    ]
  },
  {
    title: 'Utilities',
    children: [
      {
        name: 'Axios Interceptor',
        href: '/docs/axiosinterceptor',
        content: axiosInterceptor
      },
      {
        name: 'Custom Logger',
        href: '/docs/customlogger',
        content: customLogger
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
        name: 'Express Server',
        href: '/docs/expressserver',
        content: expressServer
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

export const categories = ['components'];

export const getDocs = (docId: string) => {
  const group = sideBarOptions.filter((tab) =>
    tab.children.find((child) => {
      return (
        child.name.toLowerCase().replaceAll(' ', '') === decodeURIComponent(docId.toLowerCase())
      );
    })
  );

  return group[0]?.children.filter(
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
  if (query === '' || query.length < 3) return [];

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

export const getCategory = (docId: string) => {
  const group = sideBarOptions.filter((tab) => {
    return tab.title.toLowerCase().replaceAll(' ', '') === docId.toLowerCase();
  });

  return group;
};
