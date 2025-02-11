import { Document } from '../main';

export const introduction: Document = {
  sideBar: {
    group: 'Getting Started',
    name: 'Introduction',
    order: 1
  },
  content: {
    sections: [
      {
        heading: 'What is Stackbits?',
        content:
          'StackBits is a full-stack component library designed to speed up development by providing plug-and-play code snippets for both frontend and backend. Whether you need React components, API endpoints, utility functions, or authentication flows, StackBits has got you covered.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Why use Stackbits?',
        content: [
          {
            id: 1,
            heading: 'Save Time',
            content: 'No need to rewrite common functionality.'
          },
          {
            id: 2,
            heading: 'Battle-Tested Code',
            content: 'Use reliable, well-structured snippets.'
          },
          {
            id: 3,
            heading: 'Full-Stack Coverage',
            content: 'From UI components to backend logic.'
          },
          {
            id: 4,
            heading: 'Easy Integration',
            content: 'Copy, paste, and tweak to fit your project.'
          },
          {
            id: 5,
            heading: 'Developer Experience',
            content: 'Focus on your app, not the code.'
          }
        ],
        sectionType: 'ordered-list'
      },
      {
        heading: 'How it works?',
        content: [
          {
            id: 1,
            heading: 'Find a Snippet',
            content: 'Browse components categorized for easy access.'
          },
          {
            id: 2,
            heading: 'See It in Action',
            content: 'Preview live examples before using them.'
          },
          {
            id: 3,
            heading: 'Copy & Implement',
            content: 'Grab the code and integrate it instantly.'
          }
        ],
        sectionType: 'stepper'
      }
    ]
  }
};
