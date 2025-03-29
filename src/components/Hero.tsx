
import React from 'react';

const Hero = () => {
  return (
    <div className="container mx-auto p-4 mt-8 pb-12">
      <div className="flex flex-wrap items-center -m-4 mb-12">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 p-4">
          <h1 className="font-heading text-black text-4xl md:text-5xl font-normal mb-5 max-w-xs md:max-w-md">
            Track emotions, reflect on your mood, and share with your therapist.
          </h1>
          <p className="text-gray-600 mb-6 max-w-lg">
            Journaling made simple — Understand your emotional patterns, reflect on your thoughts, and share valuable insights with your therapist.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-wrap -m-2">
            {/* Track Your Mood Button */}
            <div className="w-full sm:w-auto p-2">
              <a 
                href="#" 
                className="inline-flex py-4 px-6 items-center justify-center text-lg font-normal text-black border border-gray-900 bg-purple-200 hover:bg-purple-100 rounded-full transition duration-300"
              >
                Track Your Mood
              </a>
            </div>
            
            {/* Learn More Button */}
            <div className="p-2 w-full sm:w-auto">
              <a 
                href="#" 
                className="inline-flex py-4 px-6 items-center justify-center text-lg font-normal text-black border border-gray-900 bg-[#fbf9bf] hover:bg-yellow-100 rounded-full transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        
        {/* Image */}
        <div className="lg:w-1/2 p-4">
          <img 
            src="https://static.shuffle.dev/uploads/files/53/531ff9bb8642803b20f95b82b6df96f0f1130836/Screenshot-2025-03-23-at-19-28-24.png" 
            alt="Mindla App Screenshot"
            className="rounded-lg shadow-lg w-full" 
          />
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="flex justify-center">
        <a className="text-center inline-block" href="#">
          <div className="inline-block text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M13 16.2929L16.1464 13.1464C16.3417 12.9512 16.6583 12.9512 16.8536 13.1464C17.0488 13.3417 17.0488 13.6583 16.8536 13.8536L12.8536 17.8536C12.6583 18.0488 12.3417 18.0488 12.1464 17.8536L8.14645 13.8536C7.95118 13.6583 7.95118 13.3417 8.14645 13.1464C8.34171 12.9512 8.65829 12.9512 8.85355 13.1464L12 16.2929V6.5C12 6.22386 12.2239 6 12.5 6C12.7761 6 13 6.22386 13 6.5V16.2929Z" fill="black"></path>
            </svg>
          </div>
          <p className="text-sm">Scroll to see benefits</p>
        </a>
      </div>
    </div>
  );
};

export default Hero;
