'use client';

import { ReactNode, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

type ContactType = {
  name: string;
  id: string;
  logo: ReactNode;
  message: string;
  link: string;
};

const ContactSection = ({ contacts }: { contacts: ContactType[] }) => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="max-w-[600px] flex flex-col gap-4 w-full items-start justify-start">
      <div className="flex sm:p-10 font-bold text-4xl w-full h-[300px] sm:h-[400px] rounded-3xl border-white/20 relative border-[1px] items-center justify-center">
        <div
          style={{
            perspective: '1000px',
            transform: 'rotateZ(-10deg) rotateY(25deg) rotateX(30deg)'
          }}
          className="h-[100px] sm:h-[150px] w-[95%] sm:w-[90%] bg-white/10 border-2 border-white/10 shadow-inner shadow-black/40 rounded-3xl flex items-center justify-center overflow-hidden"
        >
          <AnimatePresence mode="popLayout">
            {contacts.map((contact) => {
              return (
                contact.name === hovered && (
                  <motion.div
                    key={contact.name + contact.id}
                    initial={{
                      opacity: 0,
                      y: 100
                    }}
                    animate={{
                      opacity: 1,
                      y: 0
                    }}
                    exit={{
                      opacity: 0,
                      y: -100
                    }}
                    className="absolute inset-0 w-full h-full flex items-center justify-start whitespace-nowrap p-5 text-white"
                  >
                    <p className="text-xl sm:text-2xl">{contact.id}</p>
                  </motion.div>
                )
              );
            })}
          </AnimatePresence>
        </div>
        <AnimatePresence mode="popLayout">
          {contacts.map((contact) => {
            return (
              contact.name === hovered && (
                <motion.div
                  key={contact.name + contact.id + contact.logo + contact.message}
                  initial={{
                    opacity: 0
                  }}
                  animate={{
                    opacity: 1
                  }}
                  exit={{
                    opacity: 0
                  }}
                  className="absolute bottom-0 w-full flex items-center justify-start whitespace-nowrap p-5 text-sm md:text-base max-w-[1000px] text-white/85"
                >
                  <p>{contact.message}</p>
                </motion.div>
              )
            );
          })}
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-start w-full">
        {contacts.map((contact) => {
          return (
            <Link key={contact.id + contact.link} href={contact.link} target="_blank">
              <motion.div
                initial={{
                  y: 0,
                  scale: 1
                }}
                whileHover={{
                  y: -10,
                  scale: 1.1
                }}
                className="cursor-pointer p-3 shrink-0"
                onTouchStart={() => setHovered(contact.name)}
                onTouchEnd={() => setHovered(null)}
                onMouseEnter={() => setHovered(contact.name)}
                onMouseLeave={() => setHovered(null)}
              >
                {contact.logo}
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ContactSection;
