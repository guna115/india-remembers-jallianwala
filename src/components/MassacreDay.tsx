
import React from 'react';

const MassacreDay = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-serif">
            The Massacre Day
          </h2>
          <p className="text-xl text-gray-600 mb-4">April 13, 1919 - Baisakhi Festival</p>
          <div className="w-24 h-1 bg-red-800 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-800">
              <h3 className="text-xl font-bold mb-3 text-red-900">4:00 PM - The Gathering</h3>
              <p className="text-gray-700">
                Thousands of people, including families with children, gathered at Jallianwala Bagh 
                for the Baisakhi festival and to protest the arrest of their leaders. Many were 
                unaware of the prohibitory orders issued by General Dyer.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
              <h3 className="text-xl font-bold mb-3 text-gray-900">5:15 PM - Dyer Arrives</h3>
              <p className="text-gray-700">
                Colonel Reginald Dyer arrived with 50 riflemen from the Gurkha and Balochi regiments. 
                Without warning, he ordered his men to position themselves at the only entrance and 
                prepare to fire.
              </p>
            </div>
            
            <div className="bg-red-100 p-6 rounded-lg border-l-4 border-red-600">
              <h3 className="text-xl font-bold mb-3 text-red-900">5:30 PM - The Firing Begins</h3>
              <p className="text-gray-700">
                Without any warning or order to disperse, Dyer commanded his troops to open fire. 
                The shooting continued for approximately 10 minutes until ammunition ran low. 
                People trapped in the walled garden had nowhere to escape.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div 
              className="h-64 bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: `url('/lovable-uploads/67028182-3632-47bb-8c8d-3b89b465b959.png')`
              }}
            />
            
            <div className="bg-gray-900 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Dyer's Own Words</h3>
              <blockquote className="italic text-gray-300 mb-4">
                "I thought I would be doing a jolly lot of good... It was no longer a question of 
                merely dispersing the crowd, but one of producing a sufficient moral effect."
              </blockquote>
              <p className="text-sm text-gray-400">- General Dyer's testimony to the Hunter Commission</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-red-800 text-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold">1,650</div>
                <div className="text-sm">Bullets Fired</div>
              </div>
              <div className="bg-gray-800 text-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold">10</div>
                <div className="text-sm">Minutes of Terror</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MassacreDay;
