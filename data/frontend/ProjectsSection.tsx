import SpotlightGrid from '@/components/ui/spotlight-grid';
import { Document } from '../main';
import ProjectsSection from '@/components/ui/project-section';
import Image from 'next/image';

export const projectsSectionPreview = (
  <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden relative p-8 gap-5">
    <Image src="/project-grid.png" alt="Project Grid" width={1000} height={1000} />
  </div>
);

export const projectsSection: Document = {
  sideBar: {
    group: 'Components',
    name: 'Projects Section',
    order: 3
  },
  content: {
    sections: [
      {
        heading: 'Projects Section',
        content:
          'The ProjectsSection component is a versatile and dynamic React component designed to showcase a collection of projects in a visually appealing manner. It efficiently displays project details such as titles, taglines, descriptions, and links, including hosted and GitHub links, with an engaging layout. This component is perfect for developers looking to enhance their portfolio or project showcase with a modern, responsive design that highlights key project features and encourages user interaction.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-[800px] w-full flex flex-col items-center justify-center gap-2 relative">
            <div className="max-w-xl">
              <ProjectsSection
                projects={[
                  {
                    id: 1,
                    title: 'Stackbits',
                    tagLine: 'Ready to use snippets for your next project',
                    hostedLink: 'https://stackbits.dev',
                    src: 'https://images.unsplash.com/photo-1588200908342-23b585c03e26?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    description: [
                      'StackBits is a robust component library that accelerates web development by providing reusable frontend and backend code snippets. It offers ready-to-use components for React, Next.js, JavaScript, and Tailwind CSS, along with backend utilities like authentication flows and API handlers, eliminating boilerplate code and enhancing efficiency.'
                    ],
                    highlightColor: '#7701FF'
                  },
                  {
                    id: 2,
                    hostedLink: 'https://readmechef.com',
                    title: 'ReadMeChef',
                    tagLine:
                      'What if I told you that you could create a perfect README in just one step?',
                    src: 'https://images.unsplash.com/photo-1608742213509-815b97c30b36?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    description: [
                      'ReadMeChef is an AI-powered tool that generates high-quality, professional README files instantly without any manual input. It offers intelligent content suggestions, customizable templates, and seamless Markdown formatting, ensuring clear and engaging documentation for any project, whether new or existing.'
                    ],
                    highlightColor: '#00ff00'
                  },
                  {
                    id: 2,
                    hostedLink: 'https://peeklink.stackbits.dev',
                    title: 'peeklink',
                    tagLine: 'Perfect your social media presence before your share.',
                    githubLink: 'https://github.com/samitkapoor/peeklink',
                    src: 'https://images.unsplash.com/photo-1578091879915-33ee869e2cd7?q=80&w=3702&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    highlightColor: '#D2D2D2',
                    description: [
                      'Peeklink is a tool designed for builders to preview how their project links will appear when shared on social media platforms. It provides a comprehensive report highlighting any missing OpenGraph tags, ensuring that your links are optimized for the best possible presentation and engagement.'
                    ]
                  }
                ]}
              />
            </div>
          </div>
        )
      },
      {
        heading: 'Follow below steps 👇🏻',
        sectionType: 'heading'
      },
      {
        heading: 'Install dependencies',
        sectionType: 'dependencies',
        code: `npm i framer-motion lucide-react`
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description:
          'Create a file project-section.tsx in your components folder and paste this code',
        code: `'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Github, Globe, MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, useEffect, useState } from 'react';

type ProjectType = {
  id: number;
  hostedLink?: string;
  githubLink?: string;
  title: string;
  tagLine: string;
  description: string[];
  src: string;
  highlightColor?: string;
};

const LinkButton = ({
  href,
  text,
  icon,
  color = 'green'
}: {
  href: string;
  text: string;
  icon: ReactNode;
  color: string;
}) => {
  const [hovering, setHovering] = useState(false);

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <AnimatePresence mode="wait">
        <a
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          href={href}
          target="_blank"
          className="flex items-center gap-1.5 leading-none text-black rounded-full transition-all duration-200 cursor-pointer p-1 text-xs"
          style={{
            color: color
          }}
        >
          {!hovering && (
            <motion.div
              key={href}
              initial={{
                opacity: 0,
                x: -14
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              exit={{
                opacity: 0,
                x: -14
              }}
              transition={{
                duration: 0.2
              }}
            >
              {icon}
            </motion.div>
          )}

          <motion.div
            key={'children' + href}
            layout
            transition={{
              duration: 0.2
            }}
          >
            {text}
          </motion.div>

          {hovering && (
            <motion.div
              key={'right-arrow' + href}
              initial={{
                opacity: 0,
                x: 14
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              exit={{
                opacity: 0,
                x: -14
              }}
              transition={{
                duration: 0.2
              }}
              className="hidden sm:block"
            >
              <MoveUpRight size={16} />
            </motion.div>
          )}
        </a>
      </AnimatePresence>
    </Link>
  );
};

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    setLoading(false);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    !loading && (
      <div className="border-b-[1px] border-white/20 w-full relative group">
        <motion.div
          style={{
            height: isSmallScreen ? 'auto' : '148px'
          }}
          initial={{ height: isSmallScreen ? 'auto' : '148px' }}
          whileHover={{ height: 'auto' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden flex flex-col"
        >
          <div
            style={{
              height: '48px'
            }}
            className="shrink-0"
          />
          <div className="flex sm:flex-row flex-col items-start justify-between">
            <div className="flex flex-col items-start justify-between w-full sm:w-[calc(100%-320px)]">
              <div className="flex flex-col items-start justify-start">
                <p className="font-bold text-white">{project.title}</p>
                <p>{project.tagLine}</p>
              </div>
              <div className="flex items-center gap-5 mt-2">
                {project.hostedLink && (
                  <LinkButton
                    color="#0084ff"
                    href={project.hostedLink}
                    text="Live"
                    icon={<Globe size={16} />}
                  />
                )}
                {project.githubLink && (
                  <LinkButton
                    color="#2dba4e"
                    href={project.githubLink}
                    text="Github"
                    icon={<Github size={16} />}
                  />
                )}
              </div>
            </div>
            <div
              className="relative w-full sm:w-[300px] aspect-video sm:rotate-6 group-hover:rotate-0 transition-all duration-300 sm:mt-0 mt-4 overflow-hidden"
              style={{
                boxShadow: \`0px 0px 40px 1px \${project.highlightColor}7A\`
              }}
            >
              <Image src={project.src || ''} alt={project.title} fill className="object-cover" />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-4 text-justify mt-4">
            {project.description.map((description) => {
              return <p key={description}>{description}</p>;
            })}
          </div>
          <div
            style={{
              height: '48px'
            }}
          />
        </motion.div>
      </div>
    )
  );
};

const ProjectsSection = ({ projects }: { projects: ProjectType[] }) => {
  return (
    <div className="flex flex-col items-start justify-start">
      <div className="flex flex-col items-start justify-start w-full mt-4">
        {projects.map((project) => {
          return <ProjectCard key={project.id + project.title} project={project} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsSection;

`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<ProjectsSection
projects={[
    {
    id: 1,
    title: 'Stackbits',
    tagLine: 'Ready to use snippets for your next project',
    hostedLink: 'https://stackbits.dev',
    src: 'https://images.unsplash.com/photo-1588200908342-23b585c03e26?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: [
        'StackBits is a robust component library that accelerates web development by providing reusable frontend and backend code snippets. It offers ready-to-use components for React, Next.js, JavaScript, and Tailwind CSS, along with backend utilities like authentication flows and API handlers, eliminating boilerplate code and enhancing efficiency.'
    ],
    highlightColor: '#7701FF'
    },
    {
    id: 2,
    hostedLink: 'https://readmechef.com',
    title: 'ReadMeChef',
    tagLine:
        'What if I told you that you could create a perfect README in just one step?',
    src: 'https://images.unsplash.com/photo-1608742213509-815b97c30b36?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: [
        'ReadMeChef is an AI-powered tool that generates high-quality, professional README files instantly without any manual input. It offers intelligent content suggestions, customizable templates, and seamless Markdown formatting, ensuring clear and engaging documentation for any project, whether new or existing.'
    ],
    highlightColor: '#00ff00'
    },
    {
    id: 2,
    hostedLink: 'https://peeklink.stackbits.dev',
    title: 'peeklink',
    tagLine: 'Perfect your social media presence before your share.',
    githubLink: 'https://github.com/samitkapoor/peeklink',
    src: 'https://images.unsplash.com/photo-1578091879915-33ee869e2cd7?q=80&w=3702&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    highlightColor: '#D2D2D2',
    description: [
        'Peeklink is a tool designed for builders to preview how their project links will appear when shared on social media platforms. It provides a comprehensive report highlighting any missing OpenGraph tags, ensuring that your links are optimized for the best possible presentation and engagement.'
    ]
    }
]}
/>`
      }
    ]
  }
};
