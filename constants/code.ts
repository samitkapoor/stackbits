export const cnCode = {
  heading: 'Component',
  sectionType: 'component',
  description: 'Create a file lib/utils.ts and paste this code',
  code: `import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
return twMerge(clsx(inputs));
}
`
};
