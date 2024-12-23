import React from 'react';
import { Languages } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Breaking Language Barriers with AI
            </h1>
            <p className="text-lg mb-8">
              India's premier AI-powered translation platform supporting 22+ languages
              and providing seamless communication across the nation.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-orange-500 px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                Start Translating
              </button>
              <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-900 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <Languages size={300} className="text-blue-200 opacity-50" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full bg-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold">22+</div>
              <div className="text-sm">Languages Supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm">Language Services</div>
            </div>
            <div>
              <div className="text-4xl font-bold">100+</div>
              <div className="text-sm">Million Users</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;