import { useState } from 'react';

import Accordion from './components/accordion';

// ? Content of the accordions
const accordionItems = [
  {
    title: '📜 No Boring Documentation',
    content:
      'Our docs are actually *fun* to read. No 10,000-word essays—just quick, clear explanations so you can get back to building cool stuff.'
  },
  {
    title: '⚡ Copy. Paste. Ship.',
    content:
      'Other devs *write* code. You? You *assemble* greatness. With StackBits, you get copy-paste-ready snippets that actually work (yes, really).'
  },
  {
    title: '🛠️ Backend Included',
    content:
      'Think we just give you UI components? Nah. We also include backend logic, so you don’t have to keep Googling “how to hash a password securely.”'
  }
];

const AccordionDemo = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  // ? Toggles the accordion
  const toggleAccordion = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 space-y-4">
      {accordionItems.map((item, index) => (
        <Accordion
          key={index}
          isOpen={expanded === index}
          selectAccordion={toggleAccordion}
          item={item}
          index={index}
        />
      ))}
    </div>
  );
};

export default AccordionDemo;
