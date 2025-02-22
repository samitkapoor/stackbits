'use client';

import { motion } from 'framer-motion';
import React from 'react';
import MovingBorderButton from './ui/moving-border-button';
import BuiltForDevelopers from './built-for-developers';
import Link from 'next/link';
import IconWheel from './ui/icon-wheel';
import WaveNoiseBackground from './ui/wave-noise-background';
import RainbowText from './ui/rainbow-text';
import Image from 'next/image';
import GridBackground from './ui/grid-background';
import { ClipboardPaste, Copy } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Why reinvent the wheel with every project?',
      illustration: (
        <IconWheel
          icons={[
            '/css.png',
            '/framermotion.png',
            '/javascript.png',
            '/nextjs.png',
            '/nodejs.png',
            '/reactjs.png',
            '/tailwindcss.png',
            '/typescript.png'
          ]}
        />
      )
    },
    {
      title: 'Your time is valuable—why waste it on boilerplate?',
      illustration: (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.5, duration: 0.5 }
          }}
          viewport={{ once: true }}
        >
          <WaveNoiseBackground
            style={{
              backgroundImage:
                'linear-gradient(to right bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12)'
            }}
            className="w-full bg-white flex flex-col md:flex-row items-center justify-center md:items-end md:justify-start pt-20 rounded rounded-se-lg max-h-[650px]"
          >
            <Image
              src="/debounce-code.png"
              className="w-[95%] md:w-[70%] lg:w-[50%] rounded-lg md:rounded-ee-none md:rounded-ss-none md:rounded-es-none md:rounded-se-lg"
              alt="debounce-code-preview"
              width={1000}
              height={1000}
            />
            <motion.div
              initial={{
                opacity: 0
              }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1, delay: 0.5 }
              }}
              viewport={{
                once: true
              }}
              className="w-full md:w-[40%] lg:w-[50%] p-4 xl:p-10 lg:text-3xl xl:text-5xl font-extrabold text-center md:text-left"
            >
              <p>Skip the setup.</p>
              <p>Start Building.</p>
            </motion.div>
          </WaveNoiseBackground>
        </motion.div>
      )
    },
    {
      title: 'Spend less time on setup, more time on innovation',
      illustration: (
        <div className="flex flex-col w-full items-center justify-center">
          <div className="grid grid-cols-2 justify-center items-center w-full sm:h-[200px] md:h-[250px]">
            <div className="w-full h-full flex flex-col items-center justify-center gap-1">
              <Copy className="h-16 w-16 font-bold opacity-50" />
              <motion.p
                initial={{
                  opacity: 0.5
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    repeat: Infinity,
                    duration: 0.1,
                    repeatDelay: 0.3,
                    repeatType: 'reverse'
                  }
                }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold opacity-0"
              >
                Ctrl + C
              </motion.p>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center gap-1">
              <ClipboardPaste className="h-16 w-16 font-bold opacity-50" />
              <motion.p
                initial={{
                  opacity: 0.3
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    repeat: Infinity,
                    duration: 0.1,
                    delay: 0.5,
                    repeatDelay: 0.3,
                    repeatType: 'reverse'
                  }
                }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold opacity-0"
              >
                Ctrl + V
              </motion.p>
            </div>
          </div>
          <RainbowText
            duration={8}
            className="text-center text-xl md:text-2xl lg:text-4xl font-extrabold"
          >
            Yes, it&apos;s that easy.
          </RainbowText>
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-col w-screen items-center justify-center bg-black">
      <GridBackground>
        <div className="flex flex-col items-center justify-center w-full mt-20 gap-10">
          <div className="flex flex-col max-w-[65%] w-full mt-20 gap-10">
            {features.map((feature) => {
              return (
                <div key={feature.title + Date.now().toString()}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        duration: 0.5
                      }
                    }}
                    exit={{
                      opacity: 0,
                      transition: {
                        duration: 0.5
                      }
                    }}
                    className={`flex items-center justify-center text-center w-full text-xl md:text-2xl lg:text-4xl font-semibold`}
                  >
                    <p className="max-w-[500px]">{feature.title}</p>
                  </motion.div>
                  <div className={`w-full flex items-center justify-center my-10 relative`}>
                    {feature.illustration}
                  </div>
                </div>
              );
            })}
          </div>

          <Link href="/docs/introduction">
            <MovingBorderButton className="text-lg md:text-xl lg:text-3xl font-medium !px-5 sm:!px-10 py-4">
              Join the speedforce
            </MovingBorderButton>
          </Link>
        </div>
      </GridBackground>
      <BuiltForDevelopers />
    </div>
  );
};

export default FeaturesSection;
