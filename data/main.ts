import { ReactNode } from 'react';

// import { flicker, flickerPreview } from './frontend/Flicker';
import { installation } from './getting-started/installation';
import { introduction } from './getting-started/introduction';
// import { storyAvatar, storyAvatarPreview } from './frontend/StoryAvatar';
// import { flipBadge, flipBadgePreview } from './frontend/FlipBadge';
import { encryptionDecryption } from './utilities/EncryptionDecryption';
import { regexValidations } from './utilities/RegexValidations';
import { debounce } from './utilities/Debounce';
import { lumeCard, lumeCardPreview } from './frontend/LumeCard';
// import { customScrollbar } from './frontend/CustomScrollbar';
import { glitchText, glitchTextPreview } from './frontend/GlitchText';
import { yupValidations } from './utilities/YupValidations';
import { darkThemeLightTheme } from './utilities/DarkThemeLightTheme';
import { accordion, accordionPreview } from './frontend/Accordion';
import { rainbowText, rainbowTextPreview } from './frontend/RainbowText';
import { customLogger } from './utilities/CustomLogger';
import { skewedText, skewedTextPreview } from './frontend/SkewedText';
import { barricadeTape, barricadeTapePreview } from './frontend/BarricadeTape';
import { expandableIconButton, expandableIconButtonPreview } from './frontend/ExpandableIconButton';
import { countUp, countUpPreview } from './frontend/CountUp';
import { copyTextButton, copyTextButtonPreview } from './frontend/CopyTextButton';
import {
  animatedGradientButton,
  animatedGradientButtonPreview
} from './frontend/AnimatedGradientButton';
import { glassButton, glassButtonPreview } from './frontend/GlassButton';
import { toggleButton, toggleButtonPreview } from './frontend/ToggleButton';
import { glassCard, glassCardPreview } from './frontend/GlassCard';
import { tradingCard, tradingCardPreview } from './frontend/TradingCard';
import { SearchResult } from '@/components/support-plugin';
import { expressServer } from './utilities/ExpressServer';
import { axiosInterceptor } from './utilities/AxiosInterceptor';
import { prismaticHaze, prismaticHazePreview } from './frontend/PrismaticHaze';
// import { colorCyclone, colorCyclonePreview } from './frontend/ColorCyclone';
import { movingBorderButton, movingBorderButtonPreview } from './frontend/MovingBorderButton';
import { wavyBackgroundPreview, wavyBackground } from './frontend/WavyBackground';
import { navigationButton, navigationButtonPreview } from './frontend/NavigationButton';
import { shineButton, shineButtonPreview } from './frontend/ShineButton';
import { fadeInText, fadeInTextPreview } from './frontend/FadeInText';
import { wavyText, wavyTextPreview } from './frontend/WavyText';
import { blurText, blurTextPreview } from './frontend/BlurText';
// import { flipRevealCard, flipRevealCardPreview } from './frontend/FlipRevealCard';
import { movingBorderCard, movingBorderCardPreview } from './frontend/MovingBorderCard';
import { iconWheel, iconWheelPreview } from './frontend/IconWheel';
import { waveNoiseBackground, waveNoiseBackgroundPreview } from './frontend/WaveNoiseBackground';
import { topographyBackground, topographyBackgroundPreview } from './frontend/TopographyBackground';
// import { textureBackground, textureBackgroundPreview } from './frontend/TextureBackground';
import { epicNameDrop, epicNameDropPreview } from './frontend/EpicNameDrop';
import {
  glowingDotsBackground,
  glowingDotsBackgroundPreview
} from './frontend/GlowingDotsBackground';
// import { footer, footerPreview } from './frontend/Footer';
import { masonryGrid, masonryGridPreview } from './frontend/MasonryGrid';
import { fileStack, fileStackPreview } from './frontend/FileStack';
import { skeumorphicMusicCard, skeumorphicMusicCardPreview } from './frontend/SkeumorphicMusicCard';
import { imagePile, imagePilePreview } from './frontend/ImagePile';
import { dottedText } from './frontend/DottedText';
import { dottedTextPreview } from './frontend/DottedText';
import { gaugeChart, gaugeChartPreview } from './frontend/GaugeChart';
import { browserWindow, browserWindowPreview } from './frontend/BrowserWIndow';
import { gooeyWords, gooeyWordsPreview } from './frontend/GooeyWords';
import { clothButton, clothButtonPreview } from './frontend/ClothButton';
import { playingCardsPreview } from './frontend/PlayingCards';
import { playingCards } from './frontend/PlayingCards';

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
    title: 'Texts',
    children: [
      {
        name: 'Blur Text',
        href: '/docs/blurtext',
        content: blurText,
        preview: blurTextPreview
      },
      {
        name: 'Count Up',
        href: '/docs/countup',
        content: countUp,
        preview: countUpPreview
      },
      {
        name: 'Dotted Text',
        href: '/docs/dottedtext',
        content: dottedText,
        preview: dottedTextPreview,
        isNew: true
      },
      {
        name: 'Fade In Text',
        href: '/docs/fadeintext',
        content: fadeInText,
        preview: fadeInTextPreview
      },
      {
        name: 'Glitch Text',
        href: '/docs/glitchtext',
        content: glitchText,
        preview: glitchTextPreview
      },
      {
        name: 'Gooey Words',
        href: '/docs/gooeywords',
        content: gooeyWords,
        preview: gooeyWordsPreview,
        isNew: true
      },
      {
        name: 'Rainbow Text',
        href: '/docs/rainbowtext',
        content: rainbowText,
        preview: rainbowTextPreview
      },
      {
        name: 'Skewed Text',
        href: '/docs/skewedtext',
        content: skewedText,
        preview: skewedTextPreview
      },
      {
        name: 'Wavy Text',
        href: '/docs/wavytext',
        content: wavyText,
        preview: wavyTextPreview
      }
    ]
  },
  {
    title: 'Backgrounds',
    children: [
      // {
      //   name: 'Color Cyclone',
      //   href: '/docs/colorCyclone',
      //   content: colorCyclone,
      //   preview: colorCyclonePreview
      // },
      {
        name: 'Glowing Dots Background',
        href: '/docs/glowingDotsBackground',
        content: glowingDotsBackground,
        preview: glowingDotsBackgroundPreview
      },
      {
        name: 'Prismatic Haze',
        href: '/docs/prismaticHaze',
        content: prismaticHaze,
        preview: prismaticHazePreview
      },
      // {
      //   name: 'Texture Background',
      //   href: '/docs/textureBackground',
      //   content: textureBackground,
      //   preview: textureBackgroundPreview
      // },
      {
        name: 'Topography Background',
        href: '/docs/topographyBackground',
        content: topographyBackground,
        preview: topographyBackgroundPreview
      },
      {
        name: 'Wave Noise Background',
        href: '/docs/waveNoiseBackground',
        content: waveNoiseBackground,
        preview: waveNoiseBackgroundPreview
      },
      {
        name: 'Wavy Background',
        href: '/docs/wavybackground',
        content: wavyBackground,
        preview: wavyBackgroundPreview
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
        preview: animatedGradientButtonPreview
      },
      {
        name: 'Cloth Button',
        href: '/docs/clothbutton',
        content: clothButton,
        preview: clothButtonPreview,
        isNew: true
      },
      {
        name: 'Copy Text Button',
        href: '/docs/copytextbutton',
        content: copyTextButton,
        preview: copyTextButtonPreview
      },
      {
        name: 'Glass Button',
        href: '/docs/glassbutton',
        content: glassButton,
        preview: glassButtonPreview
      },
      {
        name: 'Expandable Icon Button',
        href: '/docs/expandableiconbutton',
        content: expandableIconButton,
        preview: expandableIconButtonPreview
      },
      {
        name: 'Moving Border Button',
        href: '/docs/movingborderbutton',
        content: movingBorderButton,
        preview: movingBorderButtonPreview
      },
      {
        name: 'Navigation Button',
        href: '/docs/navigationbutton',
        content: navigationButton,
        preview: navigationButtonPreview
      },
      {
        name: 'Shine Button',
        href: '/docs/shinebutton',
        content: shineButton,
        preview: shineButtonPreview
      },
      {
        name: 'Toggle Button',
        href: '/docs/togglebutton',
        content: toggleButton,
        preview: toggleButtonPreview
      }
    ]
  },
  {
    title: 'Cards',
    children: [
      // {
      //   name: 'Flip Reveal Card',
      //   href: '/docs/fliprevealcard',
      //   content: flipRevealCard,
      //   preview: flipRevealCardPreview
      // },
      {
        name: 'Glass Card',
        href: '/docs/glasscard',
        content: glassCard,
        preview: glassCardPreview
      },
      {
        name: 'Lume Card',
        href: '/docs/lumecard',
        content: lumeCard,
        preview: lumeCardPreview
      },
      {
        name: 'Moving Border Card',
        href: '/docs/movingbordercard',
        content: movingBorderCard,
        preview: movingBorderCardPreview
      },
      {
        name: 'Skeumorphic Music Card',
        href: '/docs/skeumorphicMusicCard',
        content: skeumorphicMusicCard,
        preview: skeumorphicMusicCardPreview,
        isNew: true
      },
      {
        name: 'Trading Card',
        href: '/docs/tradingCard',
        content: tradingCard,
        preview: tradingCardPreview
      }
    ]
  },
  {
    title: 'Components',
    children: [
      {
        name: 'Accordion',
        href: '/docs/accordion',
        content: accordion,
        preview: accordionPreview
      },
      {
        name: 'Barricade Tape',
        href: '/docs/barricadeTape',
        content: barricadeTape,
        preview: barricadeTapePreview
      },
      {
        name: 'Browser Window',
        href: '/docs/browserwindow',
        content: browserWindow,
        preview: browserWindowPreview
      },
      {
        name: 'Epic Name Drop',
        href: '/docs/epicNameDrop',
        content: epicNameDrop,
        preview: epicNameDropPreview
      },
      {
        name: 'File Stack',
        href: '/docs/fileStack',
        content: fileStack,
        preview: fileStackPreview,
        isNew: true
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
      {
        name: 'Gauge Chart',
        href: '/docs/gaugechart',
        content: gaugeChart,
        preview: gaugeChartPreview
      },
      {
        name: 'Icon Wheel',
        href: '/docs/iconwheel',
        content: iconWheel,
        preview: iconWheelPreview
      },
      {
        name: 'Image Pile',
        href: '/docs/imagepile',
        content: imagePile,
        preview: imagePilePreview,
        isNew: true
      },
      {
        name: 'Masonry Grid',
        href: '/docs/masonrygrid',
        content: masonryGrid,
        preview: masonryGridPreview,
        isNew: true
      },
      {
        name: 'Playing Cards',
        href: '/docs/playingcards',
        content: playingCards,
        preview: playingCardsPreview,
        isNew: true
      }
      // {
      //   name: 'Story Avatar',
      //   href: '/docs/storyavatar',
      //   content: storyAvatar,
      //   preview: storyAvatarPreview
      // }
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

export const categories = ['buttons', 'backgrounds', 'texts', 'cards', 'components'];

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
