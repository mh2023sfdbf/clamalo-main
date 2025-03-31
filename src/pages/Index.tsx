
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import MoodTracker from '../components/MoodTracker';

const Index = () => {
  return (
    <section className="bg-orange-50 min-h-screen">
      <Navigation />
      <Hero />
      <div className="bg-orange-50 pb-20">
        <MoodTracker />
      </div>
    </section>
  );
};

export default Index;
