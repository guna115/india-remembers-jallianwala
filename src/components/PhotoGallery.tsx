
import React, { useState } from 'react';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const images = [
    {
      src: '/lovable-uploads/053922fa-c3be-44a3-bf7f-accd71937c67.png',
      caption: 'Jallianwala Bagh - The memorial site today with preserved bullet marks'
    },
    {
      src: '/lovable-uploads/bbde71d5-1669-42e8-b00d-f58e7cb6136f.png',
      caption: 'Memorial monument at Jallianwala Bagh commemorating the victims'
    },
    {
      src: '/lovable-uploads/67028182-3632-47bb-8c8d-3b89b465b959.png',
      caption: 'Artistic depiction of the peaceful gathering before the massacre'
    },
    {
      src: '/lovable-uploads/6982732b-6a9b-4653-986a-8ce9d277a23d.png',
      caption: 'Historical illustration showing the chaos and tragedy of April 13, 1919'
    },
    {
      src: '/lovable-uploads/b2b1af3d-5e7e-47ee-9cee-8416b85e54e1.png',
      caption: 'Artistic representation of the British troops opening fire on unarmed civilians'
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-serif">
            Historical Gallery
          </h2>
          <div className="w-24 h-1 bg-red-800 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={image.src} 
                  alt={image.caption}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 text-sm">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Modal for enlarged image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-full">
              <img 
                src={selectedImage} 
                alt="Enlarged view"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
