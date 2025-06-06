import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 font-serif">Jallianwala Bagh Memorial</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Preserving the memory of those who sacrificed their lives for India's freedom. 
              A testament to the courage and resilience of the Indian people.
            </p>
            <div className="text-gray-400 text-sm">
              <p>📍 Golden Temple Road, Amritsar, Punjab, India</p>
              <p>🕒 Open: 6:00 AM - 7:30 PM (Daily)</p>
              <p>📞 Contact: +91-183-255-3954</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#timeline" className="hover:text-white transition-colors">Timeline</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#memorial" className="hover:text-white transition-colors">Visit Memorial</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Educational</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Teacher Resources</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Student Programs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Research Papers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Virtual Tours</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Historical Archives</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 Jallianwala Bagh Memorial. Educational website dedicated to historical preservation.
            </div>
            <div className="text-gray-400 text-sm mt-4 md:mt-0">
              In memory of those who gave their lives for freedom | Never Forget • Never Again
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
