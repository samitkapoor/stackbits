import { Document } from '../main';

export const darkThemeLightTheme: Document = {
  sideBar: {
    group: 'Utilities',
    name: 'Dark & Light Theme',
    order: 5
  },
  content: {
    sections: [
      {
        heading: 'Dark & Light Theme',
        content:
          'Easily set up dark and light mode in your TailwindCSS project with a ready-to-use theme config template and a toggle function. Just copy, paste, and customize to define your color scheme, and switch themes effortlessly with the provided function—no extra setup needed!',
        sectionType: 'paragraph'
      },
      {
        heading: 'Install dependencies',
        sectionType: 'component',
        code: `npm i tailwindcss`
      },
      {
        heading: 'Dual Theme TailwindCSS Config Template',
        sectionType: 'component',
        description:
          'You can use this Tailwind CSS dual-theme template for your project, customize it with your own color schemes, and even create utility classes that adapt to both light and dark modes.',
        code: `
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#60d666', // ? Green for Light Mode
          dark: '#66BB6A' // ? Lighter Green for Dark Mode
        },
        secondary: {
          light: '#448AFF', // ? Bright Blue for Light Mode
          dark: '#2979FF' // ? Deep Blue for Dark Mode
        },
        background: {
          light: '#f2f2f2', // ? White for Light Mode
          dark: '#121212' // ? Dark Gray for Dark Mode
        },
        text: {
          light: '#000000', // ? Dark Gray for Light Mode
          dark: '#fdfdfd' // ? Light Gray for Dark Mode
        },
        header: {
          light: '#e8e8e8', // ? Light Gray for Header
          dark: '#1F1F1F' // ? Deep Gray for Header
        },
      },
    }
  },
  class: 'dark',
  plugins: [
    function ({ addComponents }) {
      addComponents({
        // ? You can define more classes here that would work for both light and dark modes 
        '.bg-primary': {
          '@apply bg-primary-light text-text-light transition-all': {},
          '.dark &': {
            '@apply bg-primary-dark text-text-dark transition-all': {}
          }
        },
        '.bg-secondary': {
          '@apply bg-secondary-light text-white transition-all': {},
          '.dark &': {
            '@apply bg-secondary-dark transition-all': {}
          }
        },
        '.text-primary': {
          '@apply text-primary-dark transition-all': {},
          '.dark &': {
            '@apply text-primary-light transition-all': {}
          }
        },
      });
    }
  ]
};

`
      },
      {
        heading: 'How to toggle between light and dark mode?',
        sectionType: 'component',
        description: 'You can use the following code to toggle between light and dark mode.',
        code: `const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark');
}`,
        sentence:
          '💡 Pro tip: Store the value of current theme in localStorage for better user experience.'
      }
    ]
  }
};
