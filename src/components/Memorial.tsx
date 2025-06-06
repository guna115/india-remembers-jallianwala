
import React from 'react';

const Memorial = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-serif">
            Memorial Today
          </h2>
          <p className="text-xl text-gray-600 mb-4">Preserving the memory for future generations</p>
          <div className="w-24 h-1 bg-red-800 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div 
              className="h-80 bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: `url('/lovable-uploads/bbde71d5-1669-42e8-b00d-f58e7cb6136f.png')`
              }}
            />
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Visit Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-semibold">Location:</span>
                  <span>Golden Temple Road, Amritsar</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Opening Hours:</span>
                  <span>6:00 AM - 7:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Entry Fee:</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Best Time:</span>
                  <span>Morning or Evening</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">What You'll See</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Original bullet marks on the walls, preserved as evidence</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Memorial flame that burns continuously</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0"></div>
                  <span>The well into which people jumped to escape bullets</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Museum with historical photographs and documents</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Memorial gallery showcasing freedom fighters</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-red-800 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Memorial Significance</h3>
              <p className="text-red-100 leading-relaxed">
                The Jallianwala Bagh National Memorial was established in 1951 to honor those who 
                lost their lives. The site serves as a reminder of the sacrifices made for India's 
                independence and educates visitors about this crucial period in history.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-800">
              <h4 className="font-bold mb-2">Getting There</h4>
              <p className="text-gray-700 text-sm mb-3">
                Located just 500 meters from the Golden Temple, the memorial is easily accessible 
                by auto-rickshaw, taxi, or on foot from the main market area.
              </p>
              <button className="bg-red-800 text-white px-4 py-2 rounded text-sm hover:bg-red-700 transition-colors">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memorial;
