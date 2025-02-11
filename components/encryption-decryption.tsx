import React from 'react';
import MovingBorderButton from './ui/moving-border-button';
import crypto from 'crypto';

const IV_LENGTH = 16;

const CRYPTO_SECRET = 'SzQmRj8ci4ro6xiw6jJasKJJLnhMn9VGSS0Wcfb95fI=';

// * Encrypt the payload
const encryptData = (payload: string) => {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(CRYPTO_SECRET, 'base64'), iv);

  let encrypted = cipher.update(JSON.stringify(payload), 'utf8', 'base64');
  encrypted += cipher.final('base64');

  return { encryptedData: encrypted, iv: iv.toString('base64') };
};

const EncryptionDecryptionDemo = () => {
  const [data, setData] = React.useState('');
  const [encryptedData, setEncryptedData] = React.useState('');

  return (
    <div className="flex flex-col items-center justify-center gap-4 text-xs sm:text-[16px]">
      <input
        onChange={(e) => setData(e.target.value)}
        placeholder="Enter your data"
        className="max-w-[300px] bg-gray-800 px-3 py-2 rounded-lg outline-none text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        maxLength={15}
      />
      <MovingBorderButton
        type="button"
        onClick={() => setEncryptedData(encryptData(data).encryptedData)}
        wrapperClassName="w-min whitespace-nowrap"
        className="sm:!px-4 sm:!py-2"
      >
        Encrypt Data
      </MovingBorderButton>
      {encryptedData && (
        <div className="flex flex-col items-center justify-center gap-2 mt-5 animate-fadeIn">
          <p className="text-gray-300 font-medium">Encrypted Data</p>
          <p className="bg-gray-800 text-green-400 p-2 rounded-md w-full text-center font-mono select-all shadow-md">
            {encryptedData}
          </p>
        </div>
      )}
    </div>
  );
};

export default EncryptionDecryptionDemo;
