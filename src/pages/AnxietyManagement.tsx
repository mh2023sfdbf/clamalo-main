
import React from 'react';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

const AnxietyManagement = () => {
  return (
    <section className="bg-orange-50 min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Anxiety Management Strategies</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Understanding Anxiety</h2>
          <p className="text-gray-700 mb-6">
            Anxiety is a natural response to stress, but when it becomes overwhelming, it can interfere with daily life.
            Effective anxiety management involves recognizing triggers, developing coping strategies, and creating
            sustainable practices for long-term mental wellness.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3 text-purple-900">Recognize Your Triggers</h3>
              <p className="text-gray-700">
                Identifying what causes your anxiety is the first step toward managing it. Keep track of situations, 
                thoughts, and physical sensations that arise when you feel anxious.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3 text-blue-900">Breathing Techniques</h3>
              <p className="text-gray-700">
                Deep breathing exercises can help calm your nervous system. Try box breathing: inhale for 4 counts,
                hold for 4, exhale for 4, and pause for 4 before repeating.
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Daily Practices for Anxiety Reduction</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Mindfulness meditation for 10-15 minutes per day</li>
            <li>Regular physical activity to reduce stress hormones</li>
            <li>Adequate sleep (7-9 hours for most adults)</li>
            <li>Limiting caffeine and alcohol consumption</li>
            <li>Consistent journaling to process thoughts</li>
            <li>Setting boundaries in professional and personal relationships</li>
          </ul>
          
          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-medium mb-3 text-yellow-900">When to Seek Professional Help</h3>
            <p className="text-gray-700">
              While self-management techniques are effective, it's important to seek professional help if anxiety
              significantly impacts your daily functioning, relationships, or overall quality of life.
              A mental health professional can provide personalized strategies and support.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            to="/" 
            className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black border border-gray-900 rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-yellow-100"
          >
            Start Your Wellness Journey Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AnxietyManagement;
