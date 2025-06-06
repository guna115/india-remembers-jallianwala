
import React from 'react';

const Reactions = () => {
  const reactions = [
    {
      name: "Rabindranath Tagore",
      role: "Nobel Laureate & Poet",
      quote: "The time has come when badges of honour make our shame glaring in their incongruous context of humiliation, and I for my part, wish to stand, shorn, of all special distinctions, by the side of those of my countrymen who, for their so called insignificance, are liable to suffer degradation not fit for human beings.",
      action: "Renounced his Knighthood in protest"
    },
    {
      name: "Mahatma Gandhi",
      role: "Freedom Fighter & Leader",
      quote: "The Punjab crime was greater than the German crimes which the world condemned. The Jallianwala Bagh massacre was an extraordinary event, a monstrous event, an event which stands in singular and sinister isolation.",
      action: "Led the Non-Cooperation Movement"
    },
    {
      name: "Pandit Motilal Nehru",
      role: "Congress Leader",
      quote: "The massacre at Jallianwala Bagh represents the British Government at its worst and the Punjab Government at its most incompetent.",
      action: "Demanded immediate justice and reforms"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-serif">
            Voices & Reactions
          </h2>
          <p className="text-xl text-gray-600 mb-4">How India's leaders responded to the tragedy</p>
          <div className="w-24 h-1 bg-red-800 mx-auto"></div>
        </div>
        
        <div className="space-y-12">
          {reactions.map((reaction, index) => (
            <div key={index} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-red-800">
                  <blockquote className="text-lg italic text-gray-700 mb-6 leading-relaxed">
                    "{reaction.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{reaction.name}</h3>
                    <p className="text-red-800 font-semibold mb-2">{reaction.role}</p>
                    <p className="text-sm text-gray-600 bg-red-50 p-2 rounded">{reaction.action}</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="bg-red-800 text-white p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Impact on Freedom Struggle</h3>
                  <p className="text-red-100 leading-relaxed">
                    The massacre marked a turning point in India's independence movement. It united 
                    people across religious and regional lines against British rule, transforming 
                    the freedom struggle from a political movement to a mass uprising.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-900 text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">International Response</h3>
          <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto">
            The massacre drew international condemnation. British newspapers, initially supportive of Dyer, 
            later criticized the action. The House of Commons censured Dyer, though the House of Lords supported him. 
            This divided response highlighted the moral bankruptcy of colonial rule.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reactions;
