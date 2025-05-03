'use client';

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
                boxShadow: `0px 0px 40px 1px ${project.highlightColor}7A`
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
