import { Document } from '../main';

export const flicker: Document = {
  sideBar: {
    group: 'Frontend',
    name: 'Flicker',
    order: 1
  },
  content: {
    sections: [
      {
        heading: 'Flicker',
        content:
          'Ever wanted your components to have that mysterious glow? Maybe a soft flickering neon effect for a cyberpunk vibe? Or a subtle shimmer that catches the eye? Flicker wraps around any component and gives it a dynamic, flickering shadow—because static UI is just too predictable!',
        contentType: 'paragraph'
      },
      {
        heading: 'Preview',
        contentType: 'preview',
        code: <div className="flicker px-24 py-24 rounded-xl bg-[#1A1A2E]">Watch me glow</div>
      },
      {
        heading: 'Follow below steps 👇🏻',
        contentType: 'heading'
      },
      {
        heading: 'Styles',
        contentType: 'styling',
        code: `@keyframes neon-flicker {
  0%,
  100% {
    opacity: 1;
    box-shadow: 0 0 10px #00ffa3, 0 0 30px #00ffa3;
  }
  50% {
    opacity: 1;
    box-shadow: 0 0 15px #00ffa3, 0 0 40px #00ffa3;
  }
}

.flicker {
  animation: neon-flicker 0.8s infinite alternate;
}`
      }
    ]
  }
};
