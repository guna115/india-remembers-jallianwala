
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center text-center text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('/lovable-uploads/053922fa-c3be-44a3-bf7f-accd71937c67.png')`
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
          Jallianwala Bagh Massacre
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-gray-200">
          April 13, 1919
        </p>
        <blockquote className="text-lg md:text-xl italic mb-8 text-red-200 max-w-2xl mx-auto">
          "The day India bled for freedom"
        </blockquote>
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-red-800 hover:bg-red-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 mx-auto"
        >
          Explore the Story
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
