
import React from 'react';

const Resources = () => {
  const resources = [
    {
      title: "Hunter Commission Report",
      description: "Official British investigation into the massacre",
      type: "Historical Document"
    },
    {
      title: "Tagore's Letter of Protest",
      description: "Nobel laureate's letter renouncing his knighthood",
      type: "Primary Source"
    },
    {
      title: "Gandhi's Speeches",
      description: "Mahatma Gandhi's responses to the massacre",
      type: "Speech Collection"
    },
    {
      title: "Contemporary Newspaper Reports",
      description: "Original press coverage from 1919",
      type: "Media Archive"
    }
  ];

  const links = [
    {
      title: "National Archives of India",
      url: "#",
      description: "Official government historical records"
    },
    {
      title: "Jallianwala Bagh Memorial Trust",
      url: "#",
      description: "Official memorial foundation"
    },
    {
      title: "Punjab State Archives",
      url: "#",
      description: "Regional historical documentation"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-serif">
            Educational Resources
          </h2>
          <p className="text-xl text-gray-600 mb-4">Documents, reports, and research materials</p>
          <div className="w-24 h-1 bg-red-800 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Historical Documents</h3>
            <div className="space-y-6">
              {resources.map((resource, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-800 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-gray-900">{resource.title}</h4>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">{resource.type}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{resource.description}</p>
                  <button className="bg-red-800 text-white px-4 py-2 rounded text-sm hover:bg-red-700 transition-colors">
                    Download PDF
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-900">External Links</h3>
            <div className="space-y-6">
              {links.map((link, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{link.title}</h4>
                  <p className="text-gray-700 mb-4">{link.description}</p>
                  <a 
                    href={link.url} 
                    className="text-red-800 hover:text-red-600 font-semibold text-sm"
                  >
                    Visit Website →
                  </a>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-red-800 text-white p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4">For Educators</h4>
              <p className="text-red-100 mb-4">
                Special resources available for teachers and students including lesson plans, 
                discussion guides, and interactive materials.
              </p>
              <button className="bg-white text-red-800 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition-colors">
                Teacher Resources
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Stay Updated</h3>
            <p className="text-gray-700 mb-6">
              Subscribe to receive updates about new historical findings, educational programs, and memorial events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-800"
              />
              <button className="bg-red-800 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
