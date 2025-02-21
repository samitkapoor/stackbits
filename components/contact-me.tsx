import { Briefcase } from 'lucide-react';
import React from 'react';

const ContactMe = () => {
  return (
    <a href="mailto:samitkapoor77@gmail.com?subject=Interested%20in%20Hiring%20You&body=Hello%20Samit,%0D%0A%0D%0AI%20came%20across%20your%20profile%20and%20I'm%20interested%20in%20hiring%20you%20for%20a%20project.%20Could%20we%20discuss%20the%20details%20further?%0D%0A%0D%0ALooking%20forward%20to%20your%20response.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]%0D%0A[Your%20Company]%0D%0A[Your%20Contact%20Information]">
      <button className="fixed bottom-10 right-10 z-30 rounded-full p-4 bg-yellow-500 hover:bg-yellow-400 cursor-pointer hover:scale-105 transition-all active:scale-100">
        <Briefcase className="text-black" />
      </button>
    </a>
  );
};

export default ContactMe;
