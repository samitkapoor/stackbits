'use client';

import { Send } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import axios from 'axios';
const LinkTo = ({ children, href }: { children: React.ReactNode; href: string }) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <span className="text-purple-500 hover:underline">{children}</span>
    </Link>
  );
};

const PromptPage = () => {
  const handleSendMessage = async (message: string) => {
    try {
      console.log(message);
      await axios.post(
        'https://unicore-theta.vercel.app/stackbits/prompt',
        {
          prompt: message
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.25)_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/50 via-purple-500/20 to-transparent bg-[length:400%_400%] animate-gradient-slow" />
      <div className="absolute inset-0 bg-gradient-to-bl from-yellow-400/40 via-orange-800/10 to-transparent bg-[length:400%_400%] animate-gradient-medium" />

      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-transparent bg-[length:400%_400%] animate-gradient-slower" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,1)_100%)] " />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-800/40 via-black/70 to-black/90" />

      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold mt-6 sm:mt-8 md:mt-10">
          Got an idea? Just ask.
        </h1>
        <p className="text-white/60 text-base sm:text-lg md:text-xl lg:text-2xl my-3 sm:my-4 md:my-5 text-center">
          Need a UI element or backend feature? Submit a prompt, and we&apos;ll build it for you!
        </p>

        <div className="p-3 max-w-3xl w-full">
          <div
            style={{
              boxShadow: '-5px -5px 30px 0px rgba(125, 0, 255, 0.4)'
            }}
            className="flex items-end gap-4 rounded-lg backdrop-blur-3xl bg-gradient-to-r from-transparent to-purple-900/40 border-[1px] border-purple-500/40"
          >
            <textarea
              id="message"
              className="w-full m-4 resize-none outline-none border-none bg-transparent text-white placeholder-gray-400 h-[100px]"
              placeholder="Build me a..."
            ></textarea>

            <button
              onClick={(e) => {
                e.preventDefault();
                const message = document.getElementById('message') as HTMLTextAreaElement;
                handleSendMessage(message.value);
              }}
              className="p-3 bg-purple-500/90 text-white rounded-lg hover:bg-purple-500 transition-colors mr-4 mb-4 group cursor-pointer"
            >
              <Send
                size={20}
                className="group-hover:rotate-45 mr-0.5 group-hover:mr-1 transition-all duration-150"
              />
            </button>
          </div>
        </div>

        <div className="max-w-3xl text-center text-sm text-white/60 fixed bottom-10">
          Your idea could be my next favorite thing to build!
          <br />
          If it&apos;s reusable and awesome, I&apos;ll bring it to life in my free time.
          <br />
          Want to check in? Ping me on{' '}
          <LinkTo href="https://peerlist.io/samitkapoor">Peerlist</LinkTo>,{' '}
          <LinkTo href="https://x.com/samitkapoorr">X (Twitter)</LinkTo>, or{' '}
          <LinkTo href="mailto:samitkapoor77@gmail.com">Gmail</LinkTo>.
        </div>
      </div>
    </div>
  );
};

export default PromptPage;
