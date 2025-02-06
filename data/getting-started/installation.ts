import { Document } from '../main';

export const installation: Document = {
  sideBar: {
    group: 'Getting Started',
    name: 'Installation',
    order: 2
  },
  content: {
    sections: [
      {
        heading: 'Installation?',
        content: "You don't need any!",
        contentType: 'paragraph'
      },
      {
        heading: 'No Setup, No Hassle',
        content:
          'StackBits is designed to be as simple as possible. No installations—just copy, paste, and go!',
        contentType: 'paragraph'
      },
      {
        sentence: 'Why waste time setting up when you can start coding right away?',
        contentType: 'italic-line'
      }
    ]
  }
};
