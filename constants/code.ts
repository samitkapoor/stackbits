export const cnCode = {
  heading: 'Utility function',
  sectionType: 'component',
  description: 'Create a file lib/utils.ts and paste this code',
  code: `import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`
};

export const installDependenciesCode = ({
  framerMotion = false,
  lucide = false,
  tailwindcss = false,
  tablerIcons = false,
  useHooks = false
}: {
  framerMotion?: boolean;
  lucide?: boolean;
  tailwindcss?: boolean;
  tablerIcons?: boolean;
  useHooks?: boolean;
}) => {
  return {
    heading: 'Install dependencies',
    sectionType: 'dependencies',
    code: `npm i ${framerMotion ? 'framer-motion' : ''} ${lucide ? 'lucide-react' : ''} ${
      tailwindcss ? 'tailwindcss' : ''
    } ${tablerIcons ? '@tabler/icons-react' : ''} ${useHooks ? 'usehooks-ts' : ''}`
  };
};
