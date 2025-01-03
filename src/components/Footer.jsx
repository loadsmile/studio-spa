import React from 'react';
import { MdLocationOn, MdPhone } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-mila-sage/10 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-6">
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">MILÂ STUDIO SPA</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MdLocationOn className="h-5 w-5 mr-2 flex-shrink-0" />
                <p className="text-sm sm:text-base">R. Saraiva de Carvalho 32B, 1250-244 Lisboa - Campo de Ourique</p>
              </div>
              <div className="flex items-center">
                <MdPhone className="h-5 w-5 mr-2 flex-shrink-0" />
                <p className="text-sm sm:text-base">912 030 345</p>
              </div>
              <div className="flex items-center">
                <FaInstagram className="h-5 w-5 mr-2 flex-shrink-0" />
                <a
                  href="https://www.instagram.com/milastudiospa_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base hover:text-mila-sage transition-colors"
                >
                  @milastudiospa_
                </a>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-600 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-2">
              <span>Developed by Mariana <span className="text-gray-900">♥</span></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
