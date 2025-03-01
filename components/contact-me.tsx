import { Send } from 'lucide-react';
import React from 'react';

const ContactMe = () => {
  return (
    <a
      href="mailto:samitkapoor77@gmail.com"
      className="fixed bottom-10 right-10 z-30"
      aria-label="Contact via email"
    >
      <button
        className="group relative flex items-center justify-center rounded-full p-4 text-white/60 hover:text-white border-2 border-white/60 hover:border-white/80 cursor-pointer hover:scale-105 transition-all active:scale-100"
        title="Send email"
      >
        <div className="h-3 w-3 transition-all duration-500 bg-green-500 rounded-full absolute -right-1 -top-1">
          <span className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-75"></span>
        </div>
        <Send className="mr-1" />
      </button>
    </a>
  );
};

export default ContactMe;
