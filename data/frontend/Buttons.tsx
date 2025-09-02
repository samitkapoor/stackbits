import ButtonsDemo from '@/components/buttons-demo';
import { Document } from '../main';
import Image from 'next/image';

export const buttonsPreview = (
  <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden bg-black relative gap-5">
    <Image
      src="/buttons.png"
      alt="buttons"
      width={800}
      height={800}
      className="w-full h-full object-contain bg-black"
    />
  </div>
);

export const buttons: Document = {
  sideBar: {
    group: 'Components',
    name: 'Buttons',
    order: 1
  },
  content: {
    sections: [
      {
        heading: 'Buttons',
        content: 'A collection of all the buttons provided by stackbits.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: <ButtonsDemo />
      }
    ]
  }
};
