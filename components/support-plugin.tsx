import React from 'react';
import CopyButton from './ui/copy-button';
import { Mail, Twitter } from 'lucide-react';

const SupportPlugin = () => {
  return (
    <div className="flex flex-col gap-2 text-xs">
      <p>
        Got a question or feedback?
        <br /> Feel free to reach out!
      </p>

      <CopyButton handle="samitkapoorr" icon={<Twitter className="w-4 h-4" />} variant="small" />
      <CopyButton
        handle="samitkapoor77@gmail.com"
        icon={<Mail className="w-4 h-4" />}
        variant="small"
      />
    </div>
  );
};

export default SupportPlugin;
