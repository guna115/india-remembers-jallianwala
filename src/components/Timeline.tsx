
import React from 'react';

const Timeline = () => {
  const events = [
    {
      date: "February 1919",
      title: "Rowlatt Act Passed",
      description: "The British government passes the Rowlatt Act, allowing imprisonment without trial and suppressing civil liberties."
    },
    {
      date: "April 6, 1919",
      title: "Gandhi's Satyagraha",
      description: "Mahatma Gandhi calls for a day of protest and fasting against the Rowlatt Act across India."
    },
    {
      date: "April 10, 1919",
      title: "Leaders Arrested",
      description: "Dr. Kitchlew and Dr. Satyapal, popular local leaders, are arrested and deported from Amritsar, sparking unrest."
    },
    {
      date: "April 13, 1919",
      title: "The Massacre",
      description: "Colonel Dyer and his troops open fire on peaceful protesters at Jallianwala Bagh during Baisakhi celebrations."
    },
    {
      date: "April 14, 1919",
      title: "Martial Law Imposed",
      description: "General Dyer declares martial law in Punjab, imposing strict curfews and public humiliation orders."
    },
    {
      date: "May 1919",
      title: "Tagore Renounces Knighthood",
      description: "Rabindranath Tagore renounces his knighthood in protest against the massacre."
    },
    {
      date: "1920",
      title: "Hunter Commission",
      description: "The British government establishes the Hunter Commission to investigate the massacre."
    },
    {
      date: "1940",
      title: "Udham Singh's Revenge",
      description: "Udham Singh assassinates Michael O'Dwyer, the former Lieutenant Governor of Punjab, in London."
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-serif">
            Timeline of Events
          </h2>
          <div className="w-24 h-1 bg-red-800 mx-auto"></div>
        </div>
        
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-red-800 transform md:-translate-x-1/2"></div>
          
          {events.map((event, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                <div className="bg-white p-6 rounded-lg shadow-lg ml-12 md:ml-0">
                  <div className="text-red-800 font-bold text-sm mb-2">{event.date}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{event.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{event.description}</p>
                </div>
              </div>
              
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-red-800 rounded-full transform md:-translate-x-1/2 border-4 border-white"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
