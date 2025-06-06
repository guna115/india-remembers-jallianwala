
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-serif">
            About the Event
          </h2>
          <div className="w-24 h-1 bg-red-800 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              The Jallianwala Bagh massacre was a pivotal moment in India's struggle for independence. 
              On April 13, 1919, British troops under the command of Colonel Reginald Dyer opened fire 
              on thousands of unarmed Indian civilians who had gathered for a peaceful protest.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              The gathering was in response to the Rowlatt Act, which allowed the British government 
              to imprison people without trial. What began as a peaceful assembly during the Baisakhi 
              festival turned into one of the most tragic events in Indian history.
            </p>
            
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-800">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Historical Context</h3>
              <p className="text-gray-700">
                The Rowlatt Act of 1919 gave the British colonial government emergency powers to 
                suppress civil liberties. The arrest of popular leaders Dr. Kitchlew and Dr. Satyapal 
                sparked widespread protests across Punjab.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Key Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">Date:</span>
                <span>April 13, 1919</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">Location:</span>
                <span>Amritsar, Punjab</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">Bullets Fired:</span>
                <span>~1,650 rounds</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">Official Casualties:</span>
                <span>379 killed, 1,200+ wounded</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Duration:</span>
                <span>10 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
