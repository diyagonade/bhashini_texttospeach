import React from 'react';
import { Languages, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1a237e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src="https://bhashini.gov.in/assets/images/emblem-white.png" 
              alt="Government of India Emblem"
              className="h-12 w-auto"
            />
            <div className="ml-4">
              <div className="text-sm">National Language Translation Mission</div>
              <div className="text-xs italic">Harnessing technology to transcend language barriers</div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a href="#" className="px-3 py-2 rounded-md text-sm hover:bg-blue-900">Home</a>
              <a href="#" className="px-3 py-2 rounded-md text-sm hover:bg-blue-900">About</a>
              <a href="#" className="px-3 py-2 rounded-md text-sm hover:bg-blue-900">Services</a>
              <a href="#" className="px-3 py-2 rounded-md text-sm hover:bg-blue-900">Resources</a>
              <button className="bg-orange-500 px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600">
                BhashaDaan
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base hover:bg-blue-900">Home</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base hover:bg-blue-900">About</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base hover:bg-blue-900">Services</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base hover:bg-blue-900">Resources</a>
            <button className="w-full text-left bg-orange-500 px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600">
              BhashaDaan
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;