
import React from 'react';
import Navigation from '../components/Navigation';
import MoodTracker from '../components/MoodTracker';

const Index = () => {
  return (
    <section className="bg-orange-50 min-h-screen">
      <Navigation />
      <div className="bg-orange-50 pb-20">
        <MoodTracker />
      </div>
    </section>
  );
};

export default Index;
