
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Timeline from '../components/Timeline';
import MassacreDay from '../components/MassacreDay';
import PhotoGallery from '../components/PhotoGallery';
import Reactions from '../components/Reactions';
import Memorial from '../components/Memorial';
import Resources from '../components/Resources';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <About />
      <Timeline />
      <MassacreDay />
      <PhotoGallery />
      <Reactions />
      <Memorial />
      <Resources />
      <Footer />
    </div>
  );
};

export default Index;
