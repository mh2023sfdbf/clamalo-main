
import React from 'react';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

const MoodTrackingBenefits = () => {
  return (
    <section className="bg-orange-50 min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Benefits of Mood Tracking</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 mb-10">
          <p className="text-lg text-gray-700 mb-8">
            Regular mood tracking is a powerful practice that can transform your relationship with your emotions
            and provide valuable insights for improved mental wellness. Discover the many benefits below.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3 text-purple-900">Pattern Recognition</h3>
              <p className="text-gray-700">
                Identify trends in your emotional states and potential triggers. Recognizing patterns helps you anticipate 
                and prepare for challenging emotional situations.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3 text-blue-900">Improved Emotional Awareness</h3>
              <p className="text-gray-700">
                Regular tracking builds your emotional vocabulary and helps you differentiate between similar feelings,
                leading to greater emotional intelligence.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3 text-green-900">Better Communication</h3>
              <p className="text-gray-700">
                With enhanced emotional awareness, you can more accurately express your feelings to others, improving
                relationships and reducing misunderstandings.
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Clinical Benefits of Mood Tracking</h2>
          <div className="mb-8">
            <div className="flex items-start mb-4">
              <div className="bg-purple-100 rounded-full p-2 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">More Effective Treatment</h3>
                <p className="text-gray-700">
                  Therapists can develop more targeted interventions when they have access to detailed mood data.
                </p>
              </div>
            </div>
            
            <div className="flex items-start mb-4">
              <div className="bg-purple-100 rounded-full p-2 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Early Warning System</h3>
                <p className="text-gray-700">
                  Tracking can help identify the early signs of depression or anxiety relapse, allowing for prompt intervention.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-purple-100 rounded-full p-2 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Medication Effectiveness</h3>
                <p className="text-gray-700">
                  Mood tracking helps both patients and doctors assess how well medications are working and make informed adjustments.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3 text-yellow-900">Getting Started with Mood Tracking</h3>
            <p className="text-gray-700 mb-4">
              Begin with simple daily check-ins, noting your primary emotions and their intensity. Over time, 
              you can add more detail such as potential triggers, physical sensations, and coping strategies used.
              Consistency is more important than complexity.
            </p>
            <p className="text-gray-700">
              Our mood tracking tool makes this process seamless, providing you with valuable insights and visualization
              of your emotional patterns over time.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            to="/" 
            className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black border border-gray-900 rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-yellow-100"
          >
            Try Our Mood Tracker Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MoodTrackingBenefits;
