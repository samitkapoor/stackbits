import crypto from 'crypto';

import { Document } from '../main';
import CopyButton from '@/components/ui/copy-button';
import { Copy } from 'lucide-react';
import EncryptionDecryptionDemo from '@/components/encryption-decryption';

const generateCryptoSecret = () => {
  const secret = crypto.randomBytes(32).toString('base64');
  navigator.clipboard.writeText(secret);
};

export const encryptionDecryption: Document = {
  sideBar: {
    group: 'Utilities',
    name: 'Encryption Decryption',
    order: 1
  },
  content: {
    sections: [
      {
        heading: 'Encryption Decryption',
        content:
          "Easily encrypt and decrypt data with secure, hassle-free functions. Whether you're protecting sensitive information or just hiding your secret taco recipe, we've got you covered!",
        sectionType: 'paragraph'
      },
      {
        heading: 'See it in Action 👇🏻',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex items-center justify-center">
            <EncryptionDecryptionDemo />
          </div>
        )
      },
      {
        heading: 'Follow below steps 👇🏻',
        sectionType: 'heading'
      },
      {
        heading: 'Secret Key',
        sectionType: 'custom-code',
        code: (
          <div className="flex flex-col">
            <p className="text-sm sm:text-[16px] mb-2">
              Copy a secret key using the button below and store it in your .env file or somewhere
              safe.
            </p>
            <CopyButton
              icon={<Copy className="w-4 h-4" />}
              handle="Copy a new secret"
              onCopy={generateCryptoSecret}
            />
          </div>
        )
      },
      {
        heading: 'Encryption / Decryption Handlers',
        sectionType: 'component',
        description:
          'Secure your data with ease using the functions below. Simply copy and paste them into your code to encrypt sensitive information and decrypt it when needed. No hassle, just seamless security!',
        code: `import crypto from 'crypto';

const IV_LENGTH = 16;

const CRYPTO_SECRET = <YOUR SECRET KEY>; // Replace with your own secret key

// * Encrypt the payload
const encryptData = (payload) => {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(CRYPTO_SECRET, 'base64'), iv);

  let encrypted = cipher.update(JSON.stringify(payload), 'utf8', 'base64');
  encrypted += cipher.final('base64');

  return { encryptedData: encrypted, iv: iv.toString('base64') };
};

// * Decrypt the payload
const decryptData = (encryptedData, iv) => {
  const decipher = crypto.createDecipheriv(
    'aes-256-cbc',
    Buffer.from(CRYPTO_SECRET, 'base64'),
    Buffer.from(iv, 'base64')
  );

  let decrypted = decipher.update(encryptedData, 'base64', 'utf8');
  decrypted += decipher.final('utf8');

  return JSON.parse(decrypted);
};`
      }
    ]
  }
};
