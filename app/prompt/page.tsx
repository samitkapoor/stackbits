'use client';

import { Send, Loader2 } from 'lucide-react';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const LinkTo = ({ children, href }: { children: React.ReactNode; href: string }) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <span className="text-purple-500 hover:underline">{children}</span>
    </Link>
  );
};

const PromptPage = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '' });
  const dialogRef = useRef<HTMLDivElement>(null);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = { name: '', email: '' };
    let isValid = true;

    if (!name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSendMessage = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await axios.post(
        'https://unicore-theta.vercel.app/stackbits/prompt',
        {
          prompt,
          name,
          email
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      // Reset form
      setPrompt('');
      setName('');
      setEmail('');
      setShowDialog(false);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenDialog = () => {
    const message = document.getElementById('message') as HTMLTextAreaElement;
    if (message?.value) {
      setPrompt(message.value);
      setShowDialog(true);
    }
  };

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        setShowDialog(false);
      }
    };

    if (showDialog) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDialog]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.25)_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/50 via-purple-500/20 to-transparent bg-[length:400%_400%] animate-gradient-slow" />
      <div className="absolute inset-0 bg-gradient-to-bl from-yellow-400/40 via-orange-800/10 to-transparent bg-[length:400%_400%] animate-gradient-medium" />

      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-transparent bg-[length:400%_400%] animate-gradient-slower" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,1)_100%)] " />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-800/40 via-black/70 to-black/90" />

      {/* Contact Dialog */}
      {showDialog && (
        <div
          style={{ zIndex: 10000 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center h-screen w-screen"
        >
          <div
            ref={dialogRef}
            className="bg-gradient-to-r from-purple-900/80 to-black/80 p-6 rounded-lg border border-purple-500/40 backdrop-blur-xl max-w-md w-full"
          >
            <h2 className="text-white text-xl font-semibold mb-4">Who's asking?</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-white text-sm mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  className={`w-full bg-black/50 border ${
                    errors.name ? 'border-red-500' : 'border-purple-500/40'
                  } rounded-md p-2 text-white`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-white text-sm mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  className={`w-full bg-black/50 border ${
                    errors.email ? 'border-red-500' : 'border-purple-500/40'
                  } rounded-md p-2 text-white`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setShowDialog(false)}
                  className="px-4 py-2 bg-transparent border border-purple-500/40 text-white rounded-md hover:bg-purple-900/30 disabled:opacity-50"
                  disabled={isLoading}
                >
                  Cancel
                </button>
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:opacity-50 flex items-center justify-center min-w-[80px]"
                  disabled={isLoading}
                >
                  {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Submit'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            ></textarea>

            <button
              onClick={handleOpenDialog}
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
