import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCopy } from '@fortawesome/free-solid-svg-icons';
import "../App.css"

const Reach = () => {
  const [email, setEmail] = useState('');
  const [emails, setEmails] = useState([]);
  const [copiedEmailIndex, setCopiedEmailIndex] = useState(null);

  const handleCopy = (index, email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmailIndex(index);
    setTimeout(() => {
      setCopiedEmailIndex(null);
    }, 2000); 
  };

  const handleAddEmail = () => {
    setEmails([...emails, email]);
    setEmail('');
  };

  return (
    <section className="bg-[#2d3246] py-8 w-full h-full flex justify-center" id="projects">
      <div className="container mx-auto">
        <div className="mx-auto">
          <div className="mb-8">
            <h2 className="pt-10 text-4xl font-bold text-[#4c8bf5] mb-4">
              Reach Me
            </h2>
            <h3 className="pt-5 text-2xl font-bold text-[#4c8bf5] mb-4">
              Email
            </h3>
            <p className="pt-5 text-xl text-white relative">
              najmilwahdan@gmail.com
              <FontAwesomeIcon
                icon={copiedEmailIndex === null ? faCopy : faCheck}
                className="ml-2 cursor-pointer"
                onClick={() => handleCopy(emails.length, 'najmilwahdan@gmail.com')}
              />
              {copiedEmailIndex !== null && (
                <span className="ml-2 text-green-500 text-xs">Copied!</span>
              )}
            </p>
            <h3 className="pt-7 text-2xl font-bold text-[#4c8bf5] mb-4">
              Socials
            </h3>
            <p className="pt-5 text-xl  text-white">
              <a href="https://www.linkedin.com/in/wahdan-najmil-fata-949aa825a/" className="hover:underline transform hover:scale-110" target="_blank" rel="noopener noreferrer">Linkedin</a>
            </p>
            <p className="pt-5 text-xl  text-white">
              <a href="https://github.com/Wahdannajmil" className="hover:underline transform hover:scale-110" target="_blank" rel="noopener noreferrer">Github</a>
            </p>
            <p className="pt-5 text-xl  text-white">
              <a href="https://www.instagram.com/najmilwahdan_/" className="hover:underline transform hover:scale-110" target="_blank" rel="noopener noreferrer">Instagram</a>
            </p>
            <p className="pt-5 text-xl  text-white">
              <a href="https://wa.me/6282331844648" className="hover:underline transform hover:scale-110" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reach;
