
import React, { useState } from 'react';
import { Plus, ChevronDown } from 'lucide-react';
import { Slider } from "@/components/ui/slider";

const MoodTracker = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [intensityValue, setIntensityValue] = useState(5);
  
  // Function to get the description based on intensity value
  const getIntensityDescription = (value: number) => {
    if (value <= 2) return "Barely noticeable";
    if (value <= 4) return "Mild";
    if (value <= 6) return "Moderate";
    if (value <= 8) return "Strong";
    return "Overwhelming";
  };
  
  // Function to get the emoji based on intensity value
  const getIntensityEmoji = (value: number) => {
    if (value <= 2) return "😶";
    if (value <= 4) return "🙂";
    if (value <= 6) return "😐";
    if (value <= 8) return "😮";
    return "😲";
  };

  return (
    <>
      <section className="">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-5 relative">
            <div className="">
              <div className="flex-wrap items-center">
                <div className="flex-shrink-0">
                  <a href="#" className="inline-block">
                    <img src="https://static.shuffle.dev/uploads/files/e3/e31d9ad0dda730334cb8ec81d3e19d2bcc0979bf/clamalo.svg" alt="Mindla Logo" className="object-contain"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2"></div>
            <div className="w-auto">
              <div className="flex items-center">
                <div className="w-auto hidden lg:block">
                  <div className="inline-flex items-center">
                    <a href="#" className="mr-4 text-sm text-gray-700 hover:text-gray-900 px-3 py-1 rounded-full flex items-center">
                      <span>Journal</span>
                      <span className="ml-1 font-bold">+</span>
                    </a>
                    <div className="relative inline-block flex items-center">
                      <img src="https://static.shuffle.dev/uploads/files/e3/e31d9ad0dda730334cb8ec81d3e19d2bcc0979bf/marta-profile-sketch.jpg" alt="Profile" className="h-10 w-10 rounded-full border-2 border-purple-200"/>
                      <span className="ml-2 font-medium text-sm">Sarah M.</span>
                    </div>
                  </div>
                </div>
                <div className="lg:hidden relative inline-block mr-3">
                  <img src="https://static.shuffle.dev/uploads/files/e3/e31d9ad0dda730334cb8ec81d3e19d2bcc0979bf/marta-profile-sketch.jpg" alt="Profile" className="h-10 w-10 rounded-full border-2 border-purple-200"/>
                  <span className="ml-2 font-medium text-sm md:inline hidden">Sarah M.</span>
                </div>
                <button className="navbar-burger flex items-center ml-2" onClick={() => setMobileNavOpen(!mobileNavOpen)} aria-label="Open menu">
                  <ChevronDown className="text-gray-800 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50 transform transition ease-out duration-200 ${mobileNavOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" onClick={() => setMobileNavOpen(false)}></div>
          <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <a className="mr-auto text-3xl font-bold leading-none" href="#">
                <img src="https://static.shuffle.dev/uploads/files/e3/e31d9ad0dda730334cb8ec81d3e19d2bcc0979bf/clamalo.svg" alt="Mindla Logo" className="h-10"/>
              </a>
              <button className="navbar-close" onClick={() => setMobileNavOpen(false)}>
                <svg className="h-6 w-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"></svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1"><a className="block p-4 text-sm font-medium text-gray-900 hover:bg-orange-50 rounded" href="#">Journal</a></li>
                <li className="mb-1"><a className="block p-4 text-sm font-medium text-gray-900 hover:bg-orange-50 rounded" href="#">My Therapist</a></li>
                <li className="mb-1"><a className="block p-4 text-sm font-medium text-gray-900 hover:bg-orange-50 rounded" href="#">Dashboard</a></li>
                <li className="mb-1"><a className="block p-4 text-sm font-medium text-gray-900 hover:bg-orange-50 rounded" href="#">My Profile</a></li>
                <li className="mb-1"><a className="block p-4 text-sm font-medium text-gray-900 hover:bg-orange-50 rounded" href="#">My Journals</a></li>
                <li className="mb-1"><a className="block p-4 text-sm font-medium text-gray-900 hover:bg-orange-50 rounded" href="#">For patients</a></li>
                <li className="mb-1"><a className="block p-4 text-sm font-medium text-gray-900 hover:bg-orange-50 rounded" href="#">For providers</a></li>
                <li className="mb-1"><a className="block p-4 text-sm font-medium text-gray-900 hover:bg-orange-50 rounded" href="#">About us</a></li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <div className="flex items-center p-4 mb-4 bg-gray-50 rounded-lg">
                  <img src="https://placehold.co/40x40" alt="Profile" className="h-10 w-10 rounded-full mr-3"/>
                  <div>
                    <p className="text-sm font-medium">Sarah Miller</p>
                    <p className="text-xs text-gray-500">sarah@example.com</p>
                  </div>
                </div>
                <a className="block px-4 py-3 mb-2 text-center text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 rounded-full" href="#">Sign Out</a>
              </div>
            </div>
          </nav>
        </div>
      </section>
      <div className="text-purple-300 text-[200px] font-bold absolute -right-10 top-1/2 transform -translate-y-1/2 opacity-5 z-0 pointer-events-none">+</div>
      <section className="p-6 rounded-2xl border border-1 border-rounded-xl mx-auto relative overflow-hidden bg-cover bg-center my-10 max-w-7xl" style={{backgroundBlendMode: "overlay", backgroundColor: "rgba(255, 255, 255, 0.92)"}}>
        <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-xl text-gray-800 font-heading flex items-center text-center mx-auto justify-center mb-8 bg-gray-50">Take a deep breath and add your entry</h2>
          <h2 className="text-3xl text-gray-800 font-heading flex items-center">How are you feeling?</h2>
          <p className="text-xs text-gray-500 mt-2 mb-6">Start by describing your current mood in your own words — like "Excited but nervous", "Feeling disconnected" or "Calm and content".</p>
          <div className="transition-all duration-300 hover:scale-101 transform">
            <input type="text" placeholder="Enter your mood..." className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 shadow-sm hover:shadow-md transition-shadow"/>
          </div>
          <h2 className="text-3xl text-gray-800 font-heading flex items-center mt-8">Select your emotion</h2>
          <p className="text-xs text-gray-500 mt-2 mb-6">Tap the emotion that best describes how you're feeling right now.</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 mb-8">
            <button className="flex flex-col items-center justify-center bg-green-100 text-black rounded-xl py-4 hover:bg-green-200 transform transition hover:scale-105 hover:shadow-md">
              <span className="text-2xl mb-1">😌</span>
              <span className="text-sm font-heading">Calm</span>
            </button>
            <button className="flex flex-col items-center justify-center bg-yellow-100 text-black rounded-xl py-4 hover:bg-yellow-200 transform transition hover:scale-105 hover:shadow-md">
              <span className="text-2xl mb-1">🤩</span>
              <span className="text-sm font-heading">Excited</span>
            </button>
            <button className="flex flex-col items-center justify-center bg-yellow-100 text-black rounded-xl py-4 hover:bg-yellow-200 transform transition hover:scale-105 hover:shadow-md">
              <span className="text-2xl mb-1">😁</span>
              <span className="text-sm font-heading">Happy</span>
            </button>
            <button className="flex flex-col items-center justify-center bg-blue-100 text-black rounded-xl py-4 hover:bg-blue-200 transform transition hover:scale-105 hover:shadow-md">
              <span className="text-2xl mb-1">😎</span>
              <span className="text-sm font-heading">Confident</span>
            </button>
            <button className="flex flex-col items-center justify-center bg-gray-100 text-black rounded-xl py-4 hover:bg-gray-200 transform transition hover:scale-105 hover:shadow-md">
              <span className="text-2xl mb-1">😐</span>
              <span className="text-sm font-heading">Neutral</span>
            </button>
            <button className="flex flex-col items-center justify-center bg-orange-100 text-black rounded-xl py-4 hover:bg-orange-200 transform transition hover:scale-105 hover:shadow-md">
              <span className="text-2xl mb-1">😣</span>
              <span className="text-sm font-heading">Guilty</span>
            </button>
            <button className="flex flex-col items-center justify-center bg-orange-100 text-black rounded-xl py-4 hover:bg-orange-200 transform transition hover:scale-105 hover:shadow-md">
              <span className="text-2xl mb-1">😤</span>
              <span className="text-sm font-heading">Frustrated</span>
            </button>
            <button className="flex flex-col items-center justify-center bg-red-100 text-black rounded-xl py-4 hover:bg-red-200 transform transition hover:scale-105 hover:shadow-md">
              <span className="text-2xl mb-1">😡</span>
              <span className="text-sm font-heading">Angry</span>
            </button>
            <button className="flex flex-col items-center justify-center bg-purple-100 text-black rounded-xl py-4 hover:bg-purple-200 transform transition hover:scale-105 hover:shadow-md">
              <span className="text-2xl mb-1">😰</span>
              <span className="text-sm font-heading">Anxious</span>
            </button>
            <button className="flex flex-col items-center justify-center bg-blue-100 text-black rounded-xl py-4 hover:bg-blue-200 transform transition hover:scale-105 hover:shadow-md">
              <span className="text-2xl mb-1">😢</span>
              <span className="text-sm font-heading">Sad</span>
            </button>
            <button className="flex flex-col items-center justify-center bg-indigo-100 text-black rounded-xl py-4 hover:bg-indigo-200 transform transition hover:scale-105 hover:shadow-md">
              <span className="text-2xl mb-1">🤯</span>
              <span className="text-sm font-heading">Overwhelmed</span>
            </button>
            <button className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 text-black rounded-xl py-4 hover:bg-purple-50 transform transition hover:scale-105 hover:shadow-md relative bg-white">
              <span className="text-3xl mb-1 font-bold">+</span>
              <span className="text-sm font-heading">Other</span>
              <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-20 transition-opacity"></div>
            </button>
          </div>
          <div>
            <label className="text-3xl text-gray-800 font-heading flex items-center">Emotion Intensity</label>
            <p className="text-xs text-gray-500 mt-2 mb-2">How strongly are you feeling this emotion right now?</p>
            <div className="relative mt-4 p-5 rounded-xl bg-gray-50">
              <div className="flex justify-between mb-2 text-xs text-gray-500">
                <span>Mild</span>
                <span>Moderate</span>
                <span>Intense</span>
              </div>
              <Slider
                defaultValue={[5]}
                max={10}
                min={1}
                step={1}
                onValueChange={(value) => setIntensityValue(value[0])}
                className="w-full accent-purple-500 appearance-none h-3 rounded-lg cursor-pointer"
              />
              <div className="text-center mt-4 text-sm flex items-center justify-center">
                <span className="text-2xl mr-2">{getIntensityEmoji(intensityValue)}</span>
                <div className="bg-purple-100 px-4 py-2 rounded-full">
                  <span className="font-heading text-black">Intensity:</span>
                  <span className="font-bold text-black">{intensityValue}</span>
                  <span className="text-black">/10 —</span>
                  <span className="italic text-black">{getIntensityDescription(intensityValue)}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <label className="text-3xl text-gray-800 font-heading flex items-center">Want to reflect?</label>
            <p className="text-xs text-gray-500 mt-2">Anything you'd like to remember or talk about in therapy.</p>
            <div className="relative mt-6">
              <textarea 
                id="reflection" 
                rows={4} 
                placeholder="Note anything that stood out today — a thought, situation, or feeling you'd like to explore later." 
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 shadow-sm hover:shadow-md transition-all"
              ></textarea>
            </div>
          </div>
        </div>
      </section>
      <div className="fixed bottom-6 right-6 z-50">
        <button className="inline-flex py-4 px-8 items-center justify-center text-lg text-black border border-gray-900 bg-purple-200 hover:bg-purple-300 rounded-full transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
          <span className="mr-2 font-bold">+</span>
          Save Entry
        </button>
      </div>
    </>
  );
};

export default MoodTracker;
