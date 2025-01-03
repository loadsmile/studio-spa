import React from 'react';
import { MdLocationOn, MdPhone } from 'react-icons/md';
import { FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-mila-sage/10 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">MILÂ STUDIO SPA</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MdLocationOn className="h-5 w-5 mr-2 flex-shrink-0" />
                <p className="text-sm sm:text-base">R. Saraiva de Carvalho 32B, 1250-244 Lisboa</p>
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

          {/* Developer Credit */}
          <div className="text-center text-sm text-gray-600 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-2">
              <span>Developed by Mariana Valadares</span>
              <a
                href="https://github.com/loadsmile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-mila-sage transition-colors"
              >
                <FaGithub className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
