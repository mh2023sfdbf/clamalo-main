
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, X, Menu } from 'lucide-react';

const Index = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [yearlyPricing, setYearlyPricing] = useState(false);
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const clairVideoRef = useRef<HTMLVideoElement>(null);

  const playMainVideo = () => {
    if (mainVideoRef.current) {
      setPlaying(true);
      mainVideoRef.current.play();
    }
  };

  const pauseMainVideo = () => {
    if (mainVideoRef.current) {
      setPlaying(false);
      mainVideoRef.current.pause();
    }
  };

  const playClairVideo = () => {
    if (clairVideoRef.current) {
      clairVideoRef.current.play();
    }
  };

  const pauseClairVideo = () => {
    if (clairVideoRef.current) {
      clairVideoRef.current.pause();
    }
  };

  return (
    <div>
      {/* Section 1: Hero */}
      <section className="bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-5 relative">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="inline-block">
                <img src="https://static.shuffle.dev/uploads/files/53/531ff9bb8642803b20f95b82b6df96f0f1130836/clamalo.svg" alt="Clamalo Logo" className="object-contain h-10"/>
              </Link>
            </div>
            {/* Desktop Nav Centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2 hidden xl:block">
              <ul className="flex items-center">
                <li className="mr-9 text-sm">
                  <Link to="/" className="nav-link relative px-1 transition duration-200 text-gray-800 hover:text-black hover:font-medium after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-purple-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">For journalers</Link>
                </li>
                <li className="mr-9 text-sm">
                  <Link to="/best-tools-for-therapists" className="nav-link relative px-1 transition duration-200 text-gray-800 hover:text-black hover:font-medium after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-purple-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">Are you a therapist?</Link>
                </li>
                <li className="mr-9 text-sm">
                  <Link to="/mood-tracking-benefits" className="nav-link relative px-1 transition duration-200 text-gray-800 hover:text-black hover:font-medium after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-purple-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">How it works</Link>
                </li>
                <li className="mr-9 text-sm">
                  <Link to="/anxiety-management" className="nav-link relative px-1 transition duration-200 text-gray-800 hover:text-black hover:font-medium after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-purple-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">Pricing</Link>
                </li>
              </ul>
            </div>
            {/* Desktop Sign In/Register */}
            <div className="hidden xl:flex items-center space-x-2">
              <a href="https://emotional-diary.lovable.app/auth" className="inline-flex py-3 px-6 text-lg font-medium text-black border border-gray-900 rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-yellow-100">Sign In</a>
              <a href="https://emotional-diary.lovable.app/auth" className="inline-flex py-3 px-6 text-lg font-medium text-white bg-black border border-gray-900 rounded-full transition duration-300 hover:bg-gray-800">Register</a>
            </div>
            {/* Hamburger Menu (Visible below xl) */}
            <div className="block xl:hidden">
              <button onClick={() => setMobileNavOpen(!mobileNavOpen)} className="flex items-center justify-center w-10 h-10">
                <Menu className="w-6 h-6 text-gray-800" />
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Nav */}
        <div className={`fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50 ${mobileNavOpen ? 'block' : 'hidden'}`}>
          <div onClick={() => setMobileNavOpen(false)} className="fixed inset-0 bg-gray-800 opacity-80"></div>
          <nav className="relative z-10 bg-white h-full overflow-y-auto rounded-r-2xl shadow-xl">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <Link to="/" className="block">
                <img src="https://static.shuffle.dev/uploads/files/53/531ff9bb8642803b20f95b82b6df96f0f1130836/clamalo.svg" alt="Logo" className="h-10 object-contain"/>
              </Link>
              <button onClick={() => setMobileNavOpen(false)} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li><Link to="/" onClick={() => setMobileNavOpen(false)} className="block py-2 px-4 text-gray-800 hover:bg-purple-100 rounded-lg transition-colors duration-200 hover:text-black font-medium">For journalers</Link></li>
                <li><Link to="/best-tools-for-therapists" onClick={() => setMobileNavOpen(false)} className="block py-2 px-4 text-gray-800 hover:bg-purple-100 rounded-lg transition-colors duration-200 hover:text-black font-medium">Are you a therapist?</Link></li>
                <li><Link to="/mood-tracking-benefits" onClick={() => setMobileNavOpen(false)} className="block py-2 px-4 text-gray-800 hover:bg-purple-100 rounded-lg transition-colors duration-200 hover:text-black font-medium">How it works</Link></li>
                <li><Link to="/anxiety-management" onClick={() => setMobileNavOpen(false)} className="block py-2 px-4 text-gray-800 hover:bg-purple-100 rounded-lg transition-colors duration-200 hover:text-black font-medium">Pricing</Link></li>
              </ul>
              <div className="mt-8 space-y-3">
                <a href="https://emotional-diary.lovable.app/auth" className="block w-full py-3 px-4 text-center font-medium text-black border border-gray-900 rounded-full transition duration-300 hover:bg-purple-200">Sign In</a>
                <a href="https://emotional-diary.lovable.app/auth" className="block w-full py-3 px-4 text-center font-medium text-white bg-black border border-gray-900 rounded-full transition duration-300 hover:bg-gray-800">Register</a>
              </div>
            </div>
          </nav>
        </div>
        {/* CTA Section */}
        <div className="container mx-auto p-4 mt-8 pb-12">
          <div className="flex flex-wrap items-center -m-4 mb-12">
            <div className="w-full lg:w-1/2 p-4">
              <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl mb-5 max-w-md md:max-w-xl">Track your emotions, notice patterns, deepen your self-awareness.</h2>
              <p className="mb-6 max-w-lg">It's journaling made simple! Capture your thoughts, feelings, and reflections—just for you, or shared with your therapist if you choose. Your journal, your way.</p>
              {/* Buttons */}
              <div className="flex flex-wrap -m-2">
                {/* Track Your Mood Button */}
                <div className="w-full sm:w-auto p-2">
                  <Link to="/" className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black border border-gray-900 bg-purple-200 hover:bg-purple-100 rounded-full transition duration-300">Track Your Mood</Link>
                </div>
                {/* Learn More Button */}
                <div className="p-2 w-full sm:w-auto">
                  <Link to="/mood-tracking-benefits" className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black border border-gray-900 bg-[#fbf9bf] hover:bg-yellow-100 rounded-full transition duration-300">Learn More</Link>
                </div>
              </div>
            </div>
            {/* Image */}
            <div className="lg:w-1/2 p-4">
              <img src="https://static.shuffle.dev/uploads/files/53/531ff9bb8642803b20f95b82b6df96f0f1130836/Clamalo-emotion-tracker-journaling-app.png" alt="Clamalo App" />
            </div>
          </div>
          <div className="flex justify-center">
            <a className="text-center inline-block" href="#benefits">
              <div className="inline-block text-gray-900">
                <ChevronDown size={24} />
              </div>
              <p className="text-sm">Scroll to see benefits</p>
            </a>
          </div>
        </div>
      </section>

      {/* Section 2: Benefits */}
      <section id="benefits" className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex mb-4 items-center">
            <div className="w-8 h-8 flex items-center justify-center">
              <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
            </div>
            <span className="inline-block ml-2 text-sm font-medium">Benefits</span>
          </div>
          <div className="border-t pt-16">
            <div className="max-w-xl">
              <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl mb-20">Why Emotional Tracking Matters</h2>
            </div>
            <div>
              <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 px-4 mb-8 lg:mb-0">
                  <div className="h-full py-10 px-5 xs:px-10 bg-orange-50 rounded-2xl">
                    <h5 className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mt-6 mb-4">📈</h5>
                    <h5 className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mt-6 mb-4">+ 24%</h5>
                    <span className="block mb-6 text-base lg:text-xl font-medium">Studies show that people who journal experience a 24% improvement in psychological well-being.</span>
                    <p className="text-gray-700 italic">"Journaling gave me the clarity I needed to understand my emotions and feel more connected to myself." - John M</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-8 lg:mb-0">
                  <div className="flex flex-col h-full">
                    <div className="flex flex-col justify-center h-full mb-8 py-8 px-5 xs:px-8 bg-orange-50 rounded-2xl">
                      <div className="flex">
                        <div className="ml-7">
                          <h5 className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mb-4">+ 15%–30%</h5>
                          <span className="block text-base lg:text-xl font-medium">Regular journaling can reduce anxiety symptoms by 15%–30% within 4 to 12 weeks.</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center h-full py-8 px-5 xs:px-8 bg-orange-50 rounded-2xl">
                      <div className="flex">
                        <div className="ml-7">
                          <h5 className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mb-4">+ 6%</h5>
                          <span className="block text-base lg:text-xl font-medium">Studies show that journaling reduces PTSD symptoms by up to 6% compared to non-journaling clients.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Video */}
      <section className="relative overflow-hidden bg-orange-50 py-36">
        {/* Decorative Blob Background */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] z-0 pointer-events-none">
          <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-70">
            <g transform="translate(300,300)">
              <path d="M138.6,-155.1C173.2,-120.6,182.4,-60.3,175.1,-7.4C167.7,45.6,143.9,91.3,109.3,126.8C74.6,162.3,29.1,187.7,-18.8,199.2C-66.7,210.8,-117,208.4,-156.8,179.1C-196.5,149.9,-225.8,93.9,-227.7,39.4C-229.6,-15.2,-204.2,-68.2,-167.3,-106.2C-130.3,-144.3,-81.8,-167.3,-27.4,-179.6C27.1,-191.9,81.1,-193.6,138.6,-155.1Z" fill="#FEF3C7"></path>
            </g>
          </svg>
        </div>
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          {/* Heading */}
          <p className="text-sm text-black uppercase tracking-widest font-medium mb-3">In Our Own Words</p>
          <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl mb-4">Clamalo - The Everyday Journaler's Friend</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
            Co-Founder & Therapist
            <span className="font-semibold text-gray-900"> Claire Linley </span>
            shares how Clamalo makes it easy for everyone to enjoy the powerful benefits of journaling.
          </p>
          {/* Video Card */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl max-w-4xl mx-auto border border-black/10">
            <video 
              id="clairVideo" 
              ref={clairVideoRef}
              className="w-full h-full object-cover rounded-3xl" 
              playsInline
            >
              <source src="https://res.cloudinary.com/dkkckyvg6/video/upload/v1744202090/Clamalo_-_Client_Introduction_SITE_II_bcmxbg.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
            <div 
              className={`absolute inset-0 flex items-center justify-center hover:bg-opacity-40 transition cursor-pointer ${playing ? 'hidden' : 'flex'}`}
              onClick={playClairVideo}
            >
              <div className="w-10 h-10 md:w-20 md:h-20 bg-white shadow-md rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                <div className="w-2 h-2 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[20px] border-l-yellow-500 ml-1.5"></div>
              </div>
            </div>
            <div 
              className={`absolute inset-0 flex items-center justify-center transition cursor-pointer ${playing ? 'flex' : 'hidden'}`}
              onClick={pauseClairVideo}
            >
              <div className="w-10 h-10 md:w-20 md:h-20 bg-white shadow-md rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-yellow-500 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: How it Works */}
      <section className="relative py-16 lg:py-28 overflow-hidden bg-white">
        {/* Large Yellow Blob - Bottom Left */}
        <div className="absolute bottom-[-50px] right-[-150px] w-[600px] h-[600px] z-0 pointer-events-none">
          <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <g transform="translate(300,300)">
              <path d="M138.6,-155.1C173.2,-120.6,182.4,-60.3,175.1,-7.4C167.7,45.6,143.9,91.3,109.3,126.8C74.6,162.3,29.1,187.7,-18.8,199.2C-66.7,210.8,-117,208.4,-156.8,179.1C-196.5,149.9,-225.8,93.9,-227.7,39.4C-229.6,-15.2,-204.2,-68.2,-167.3,-106.2C-130.3,-144.3,-81.8,-167.3,-27.4,-179.6C27.1,-191.9,81.1,-193.6,138.6,-155.1Z" fill="#fef3c7"></path>
            </g>
          </svg>
        </div>
        {/* Medium Yellow Blob - Top Right */}
        <div className="absolute top-0 right-[-150px] w-[450px] h-[450px] z-0 pointer-events-none">
          <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <g transform="translate(300,300)">
              <path d="M138.6,-155.1C173.2,-120.6,182.4,-60.3,175.1,-7.4C167.7,45.6,143.9,91.3,109.3,126.8C74.6,162.3,29.1,187.7,-18.8,199.2C-66.7,210.8,-117,208.4,-156.8,179.1C-196.5,149.9,-225.8,93.9,-227.7,39.4C-229.6,-15.2,-204.2,-68.2,-167.3,-106.2C-130.3,-144.3,-81.8,-167.3,-27.4,-179.6C27.1,-191.9,81.1,-193.6,138.6,-155.1Z" fill="#E9D8FD"></path>
            </g>
          </svg>
        </div>
        {/* Purple Blob - Top Center Left */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2 w-[700px] h-[700px] z-0 pointer-events-none">
          <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <g transform="translate(300,300)">
              <path d="M138.6,-155.1C173.2,-120.6,182.4,-60.3,175.1,-7.4C167.7,45.6,143.9,91.3,109.3,126.8C74.6,162.3,29.1,187.7,-18.8,199.2C-66.7,210.8,-117,208.4,-156.8,179.1C-196.5,149.9,-225.8,93.9,-227.7,39.4C-229.6,-15.2,-204.2,-68.2,-167.3,-106.2C-130.3,-144.3,-81.8,-167.3,-27.4,-179.6C27.1,-191.9,81.1,-193.6,138.6,-155.1Z" fill="#fef3c7"></path>
            </g>
          </svg>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          {/* Label */}
          <div className="flex mb-4 items-center">
            <div className="w-8 h-8 flex items-center justify-center">
              <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
            </div>
            <span className="inline-block ml-2 text-sm font-medium">Core Features</span>
          </div>
          {/* Heading */}
          <div className="max-w-xl mb-24">
            <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl mb-6">
              See How
              <img src="https://static.shuffle.dev/uploads/files/53/531ff9bb8642803b20f95b82b6df96f0f1130836/clamalo.svg" alt="clamalo" className="inline-block mb-4 h-9 md:h-14"/>
              Helps You To...
            </h2>
            <p className="text-lg text-gray-600 mt-4">Make meaningful connections in your life through simple, consistent journaling. Your entries help you join the dots and see what's really going on beneath the surface.</p>
          </div>
          {/* Features */}
          <div className="space-y-12 md:space-y-32">
            {/* Feature 1 */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h3 className="text-4xl xl:text-5xl mb-6 w-2/3">Track Your Emotions</h3>
                <p className="text-lg mb-6">
                  <span className="italic font-black">Record your </span>
                  <span className="italic font-black">thoughts</span>
                  , 
                  <span className="italic font-black">emotions</span>
                  , and 
                  <span className="italic font-black">experiences</span>
                  regularly
                  <span className="italic font-black"> using text</span>
                  ,
                  <span className="italic font-black"> audio</span>
                  , or
                  <span className="italic font-black"> video</span>
                  . A clear emotional history helps you see the full picture. You can even capture emotionally charged moments or arguments to reflect on them later and improve communication.
                </p>
                <div className="hidden lg:block">
                  <Link to="/" className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black border border-gray-900 rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-yellow-100">Start Tracking</Link>
                </div>
                <div className="lg:hidden">
                  <Link to="/" className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black border border-gray-900 rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-yellow-100">Start Tracking</Link>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img src="https://static.shuffle.dev/uploads/files/53/531ff9bb8642803b20f95b82b6df96f0f1130836/Screenshot-2025-04-02-at-14-58-44.png" alt="" className="w-full object-cover"/>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 flex justify-center">
                <div className="overflow-hidden w-3/4 flex justify-center">
                  <video autoPlay loop muted playsInline className="mx-auto">
                    <source src="https://res.cloudinary.com/dkkckyvg6/video/upload/v1743690615/Beige_and_White_Aesthetic_Minimalist_Modern_Typography_Beauty_Brand_Logo_wib8us.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-4xl xl:text-5xl mb-6 w-3/4">Reflect and Discover Patterns</h3>
                <p className="text-lg mb-6">Identify recurring triggers and patterns. Clamalo's emograph helps you chart your progress and gain deeper awareness of your emotional journey.</p>
                <div className="hidden lg:block">
                  <Link to="/" className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black border border-gray-900 rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-yellow-100">Start Reflecting</Link>
                </div>
                <div className="lg:hidden">
                  <Link to="/" className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black border border-gray-900 rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-yellow-100">Start Reflecting</Link>
                </div>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h3 className="text-4xl xl:text-5xl mb-6 w-3/4">Share with Your Therapist</h3>
                <p className="text-lg mb-6">If you're working with a therapist, you have the option to share your entries—so your sessions can be even more focused, personal, and impactful.</p>
                <div className="hidden lg:block">
                  <Link to="/" className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black border border-gray-900 rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-yellow-100">Share Insights</Link>
                </div>
                <div className="lg:hidden">
                  <Link to="/" className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black border border-gray-900 rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-yellow-100">Share Insights</Link>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img src="https://static.shuffle.dev/uploads/files/53/531ff9bb8642803b20f95b82b6df96f0f1130836/Screenshot-2025-04-02-at-14-47-08.png" alt="" className="w-full object-cover"/>
              </div>
            </div>
            
            {/* Feature 4 */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <img src="https://static.shuffle.dev/uploads/files/53/531ff9bb8642803b20f95b82b6df96f0f1130836/Screenshot-2025-04-02-at-16-12-41.png" alt="" className="w-full object-cover"/>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-4xl xl:text-5xl mb-6 w-3/4">Improve Emotional Well-Being</h3>
                <p className="text-lg mb-6">Gain clarity over your inner world and learn how to make better decisions for your emotional health and the data you track.</p>
                <div className="hidden lg:block">
                  <Link to="/" className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black border border-gray-900 rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-yellow-100">Start Now</Link>
                </div>
                <div className="lg:hidden">
                  <Link to="/" className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black border border-gray-900 rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-yellow-100">Start Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Emotional Tracking Benefits */}
      <section className="py-12 bg-orange-50 lg:py-44">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mb-20">
            <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl mb-20">Sharing your emotional tracking with your therapist allows them to...</h2>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap -mx-4">
            {/* Block 1 */}
            <div className="w-full sm:w-1/3 lg:w-1/3 mb-10 lg:mb-0 px-4">
              <div className="pt-8">
                <h5 className="text-4xl xl:text-5xl mb-4">Gain insight into your emotional trends and triggers</h5>
                <span className="text-base lg:text-lg text-gray-700">Therapy outcomes improved by up to 30% when therapists had access to client emotional data.</span>
              </div>
            </div>
            {/* Mobile Horizontal Divider */}
            <div className="block sm:hidden w-full h-px bg-gray-300 mx-auto my-8"></div>
            {/* Vertical Divider for large screens */}
            <div className="hidden lg:block w-px bg-gray-300 mx-4"></div>
            {/* Block 2 */}
            <div className="w-full sm:w-1/3 lg:w-1/3 px-4 mb-10 lg:mb-0">
              <div className="pt-8">
                <h5 className="text-4xl xl:text-5xl mb-4">Create more accurate and personalised treatment plans</h5>
                <span className="text-base lg:text-lg text-gray-700">Clients reported a 22% increase in therapy session efficiency when they shared emotional records with their therapist.</span>
              </div>
            </div>
            {/* Mobile Horizontal Divider */}
            <div className="block sm:hidden w-full h-px bg-gray-300 mx-auto my-8"></div>
            {/* Vertical Divider for large screens */}
            <div className="hidden lg:block w-px bg-gray-300 mx-4"></div>
            {/* Block 3 */}
            <div className="w-full sm:w-1/3 lg:w-1/3 px-4 mb-10 lg:mb-0">
              <div className="pt-8">
                <h5 className="text-4xl xl:text-5xl mb-4">Greater awareness of your emotional state between sessions</h5>
                <span className="text-base lg:text-lg text-gray-700">"Once my therapist could see my emotional patterns, she was able to tailor sessions to fit me better, and I made much faster progress."</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Testimonials */}
      <section className="py-12 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex mb-4 items-center">
            <div className="w-8 h-8 flex items-center justify-center">
              <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
            </div>
            <span className="inline-block ml-2 text-sm font-medium">Testimonials</span>
          </div>
          <div className="border-t pt-14">
            <div className="max-w-sm sm:max-w-md md:max-w-none mb-20">
              <h1 className="font-heading text-4xl xs:text-5xl sm:text-6xl">What our customers say</h1>
            </div>
            <div className="flex flex-nowrap overflow-x-auto xl:flex-wrap -mx-4 pb-16">
              <div className="flex-shrink-0 w-full sm:w-100 xl:w-1/3 px-4">
                <div className="flex flex-col h-full p-10 shadow-md rounded-2xl">
                  <p className="text-2xl font-medium mb-10">"Journaling helped me process difficult emotions and understand why I was feeling overwhelmed. My therapist was able to give me better advice because they could see what I was feeling between sessions."</p>
                  <div className="mt-auto flex items-center">
                    <img className="block w-14 h-14 rounded-full" src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHw5fHx3b21hbnxlbnwwfDJ8fHwxNzQzNjA3MzQ3fDA&ixlib=rb-4.0.3&q=85&w=1920" alt=""/>
                    <div className="ml-6">
                      <span className="block text-xl font-medium">Emma R., 27</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 w-full sm:w-100 xl:w-1/3 px-4">
                <div className="flex flex-col h-full p-10 shadow-md rounded-2xl">
                  <p className="text-2xl font-medium mb-10">"I struggled with anxiety for years. Clamalo helped me identify my triggers, and once my therapist saw the patterns, we found solutions that actually worked."</p>
                  <div className="mt-auto flex items-center">
                    <img className="block w-14 h-14 rounded-full" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwxOXx8bWFufGVufDB8Mnx8fDE3NDM2MDczNzd8MA&ixlib=rb-4.0.3&q=85&w=1920" alt=""/>
                    <div className="ml-6">
                      <span className="block text-xl font-medium">James T., 35</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 w-full sm:w-100 xl:w-1/3 px-4">
                <div className="flex flex-col h-full p-10 shadow-md rounded-2xl">
                  <p className="text-2xl font-medium mb-10">"Before using Clamalo, I always felt like I was starting over at every session. Now my therapist can see what I've been going through — and we've made more progress in the last 2 months than in the last year."</p>
                  <div className="mt-auto flex items-center">
                    <img className="block w-14 h-14 rounded-full" src="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwyM3x8d29tYW58ZW58MHwyfHx8MTc0MzYwNzM1OXww&ixlib=rb-4.0.3&q=85&w=1920" alt=""/>
                    <div className="ml-6">
                      <span className="block text-xl font-medium">Sophie L., 30</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Pricing */}
      <section className="py-24 bg-orange-50 lg:pb-34">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="max-w-4xl mb-20 text-center mx-auto">
            <p className="text-sm mb-3 flex justify-center items-center">
              <div className="w-8 h-8 flex items-center justify-center mr-2">
                <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
              </div>
              Pricing
            </p>
            <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl mb-4">Always free for Journalers</h2>
            <p className="text-lg text-gray-700 mb-3">
              For clients, and everyday journalers, Clamalo is
              <span className="font-bold"> always free</span>
              . Therapists get 10 days to try it risk-free.
            </p>
            <div className="inline-flex items-center bg-white rounded-lg px-4 py-2 border border-purple-200">
              <p className="text-sm font-medium">Only therapists pay for premium features</p>
            </div>
          </div>
          {/* Toggle */}
          <div className="flex justify-center mb-20">
            <div className="inline-flex items-center bg-white border border-gray-200 rounded-full shadow-sm p-1">
              <button 
                onClick={() => setYearlyPricing(false)} 
                className={`py-2 px-6 rounded-full text-sm transition duration-200 ${!yearlyPricing ? 'bg-purple-200 text-black font-medium' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setYearlyPricing(true)} 
                className={`relative py-2 px-6 rounded-full text-sm transition duration-200 ${yearlyPricing ? 'bg-purple-200 text-black font-medium' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Yearly
                <span className="absolute -top-3 -right-5 bg-[#fbf9bf] text-xs px-2 py-0.5 rounded-full shadow font-medium text-black">25% OFF</span>
              </button>
            </div>
          </div>
          {/* Pricing Cards */}
          <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
            {/* Free Plan */}
            <div className="rounded-2xl p-10 text-center bg-white flex flex-col shadow-lg border-2 border-purple-300 transform scale-105">
              <div className="bg-blue-100 rounded-full text-blue-800 font-medium py-1 px-4 text-xs mb-4 inline-block mx-auto">For Clients and Everyday Journalers</div>
              <h3 className="font-heading text-3xl mb-3 text-gray-900">Always Free</h3>
              <p className="text-5xl font-semibold font-heading mb-2 text-black">$0</p>
              <p className="text-gray-600 mb-6 text-base">Track emotions, journal daily, reflect, and share with your therapist, if you choose — completely free.</p>
              <div className="mt-auto">
                <Link to="/" className="inline-flex py-4 px-6 items-center justify-center text-md xl:text-lg font-medium text-black border border-gray-900 bg-purple-200 hover:bg-purple-100 rounded-full transition duration-300">Start Journaling Free</Link>
              </div>
            </div>
            {/* Premium Plan */}
            <div className="rounded-2xl p-10 text-center bg-white opacity-50">
              <div className="rounded-full font-medium py-1 px-4 text-xs mb-4 inline-block mx-auto bg-gray-100">For Therapists</div>
              <h3 className="font-heading text-3xl mb-3 text-gray-900">Premium</h3>
              <div className="flex items-center justify-center mb-1 relative">
                <p className="text-5xl font-semibold font-heading text-black">
                  {yearlyPricing ? '$261' : '$29'}
                </p>
                {yearlyPricing && <span className="ml-2 text-xs bg-[#fbf9bf] text-black px-2 py-0.5 rounded-full font-medium">Save $87</span>}
              </div>
              <p className="text-sm text-gray-500 mb-4">
                {yearlyPricing ? 'per year' : 'per month'}
              </p>
              <div className="bg-green-50 rounded-lg p-3 mb-6">
                <p className="text-sm text-green-800">Currently includes all Professional features! ($59 value) including unlimited clients and listing in directory.</p>
              </div>
              <p className="mb-6 text-base">Perfect for solo therapists who want deeper client insight and advanced tools.</p>
              <ul className="text-left mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-sm">•</span>
                  <span className="text-sm">10 clients</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-sm">•</span>
                  <span className="text-sm">Listing in therapist database</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-sm">•</span>
                  <span className="text-sm">Advanced analytics</span>
                </li>
              </ul>
              <div className="mt-auto">
                <a href="#" className="inline-flex py-4 px-6 items-center justify-center text-md xl:text-lg font-medium text-white border border-gray-900 bg-gray-900 hover:bg-gray-800 rounded-full transition duration-300 w-full">Start 10-Day Trial</a>
              </div>
            </div>
            {/* Professional Plan */}
            <div className="rounded-2xl p-10 text-center bg-white shadow-sm flex flex-col opacity-50">
              <div className="bg-gray-100 rounded-full text-gray-800 font-medium py-1 px-4 text-xs mb-4 inline-block mx-auto">For Therapists</div>
              <div className="bg-yellow-100 text-yellow-800 rounded-lg px-3 py-1 text-xs font-bold mb-2 inline-block mx-auto">Coming Soon</div>
              <h3 className="font-heading text-3xl mb-3 text-gray-900">Professional</h3>
              <div className="flex items-center justify-center mb-1 relative">
                <p className="text-5xl font-semibold font-heading text-black">
                  {yearlyPricing ? '$531' : '$59'}
                </p>
                {yearlyPricing && <span className="ml-2 text-xs bg-[#fbf9bf] text-black px-2 py-0.5 rounded-full font-medium">Save $177</span>}
              </div>
              <p className="text-sm text-gray-500 mb-4">
                {yearlyPricing ? 'per year' : 'per month'}
              </p>
              <p className="mb-6 text-base">Ideal for therapists ready to expand their client base and be discoverable through our therapist directory.</p>
              <ul className="text-left mb-8 space-y-3 opacity-60">
                <li className="flex items-start">
                  <span className="mr-2 text-sm">•</span>
                  <span className="text-sm">Unlimited clients</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-sm">•</span>
                  <span className="text-sm">Listing in therapist database</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-sm">•</span>
                  <span className="text-sm">Custom branding options</span>
                </li>
              </ul>
              <div className="mt-auto">
                <a href="#" className="inline-flex py-4 px-6 items-center justify-center text-md xl:text-lg font-medium text-black border border-gray-400 cursor-not-allowed rounded-full transition duration-300">Coming Soon</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: About Us */}
      <section className="py-36 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Title Block */}
          <div className="text-center mb-16">
            <p className="text-sm text-black uppercase tracking-wider mb-4 font-medium">Our Story</p>
            <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl">Where It All Began</h2>
          </div>
          {/* Content Block */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">Clamalo was born from real conversations, real therapy, and real connection. It started with Claire, a compassionate therapist who wanted an easy way for clients to continue reflecting and processing emotions between sessions. Her husband, Lou, a tech startup leader, surprised her by building the foundation of what would become Clamalo—and encouraged her to test it with clients.</p>
            <p className="text-xl text-gray-700 leading-relaxed">Marta, a former client and talented designer, knew firsthand how powerful therapy could be—but also how hard it was to recall the emotional nuances between sessions. The idea of journaling through an app immediately resonated with her. That's when the spark turned into action. Together, they combined their skills to create Clamalo—a digital journal designed for instant, effortless self-expression. For Claire, Lou, and Marta, Clamalo isn't just an app—it's a safe, calm space to track personal growth in real-time. And for those working with a therapist, it also offers the option to share entries with a trusted professional.</p>
          </div>
          {/* Founders */}
          <div className="grid grid-cols-3 gap-1 max-w-md mx-auto md:gap-2 md:max-w-xl">
            {/* Claire */}
            <div className="text-center">
              <img className="w-16 h-16 md:w-24 md:h-24 rounded-full mx-auto mb-2 md:mb-4 object-cover border-2 md:border-4 border-orange-50" src="https://media.licdn.com/dms/image/v2/D4D03AQGQHrkimSEtnA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1692281139070?e=1749081600&v=beta&t=fb6DYwkL7lgA4bjDzx12L9eta7Fhj8SqmmHvzgrvfAU" alt="Claire Linley"/>
              <h3 className="text-sm md:text-lg font-semibold text-gray-900">Claire Linley</h3>
              <p className="text-xs md:text-sm text-gray-500">Co-Founder</p>
            </div>
            {/* Lou */}
            <div className="text-center">
              <img className="w-16 h-16 md:w-24 md:h-24 rounded-full mx-auto mb-2 md:mb-4 object-cover border-2 md:border-4 border-orange-50" src="https://media.licdn.com/dms/image/v2/D5603AQGkYSqa2kC7Vw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1732286534370?e=1749081600&v=beta&t=ZkeOKuYEZWgSbxtfl0Vf6W00QzLOYRBd5_sqEamytUo" alt="Lou Schillaci"/>
              <h3 className="text-sm md:text-lg font-semibold text-gray-900">Lou Schillaci</h3>
              <p className="text-xs md:text-sm text-gray-500">Co-Founder</p>
            </div>
            {/* Marta */}
            <div className="text-center">
              <img className="w-16 h-16 md:w-24 md:h-24 rounded-full mx-auto mb-2 md:mb-4 object-cover border-2 md:border-4 border-orange-50" src="https://static.shuffle.dev/uploads/files/53/531ff9bb8642803b20f95b82b6df96f0f1130836/Marta-Herget.png" alt="Marta Herget"/>
              <h3 className="text-sm md:text-lg font-semibold text-gray-900">Marta Herget</h3>
              <p className="text-xs md:text-sm text-gray-500">Co-Founder</p>
            </div>
          </div>
          {/* Divider */}
          <div className="relative max-w-xl mx-auto mt-16">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4">
                <img src="https://static.shuffle.dev/uploads/files/53/531ff9bb8642803b20f95b82b6df96f0f1130836/clamalo.svg" alt="Divider icon" className="w-48 mx-6"/>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Video with Text */}
      <section className="relative overflow-hidden bg-orange-50 pt-36">
        {/* Decorative Blob Background */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] z-0 pointer-events-none">
          <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-90">
            <g transform="translate(300,300)">
              <path d="M138.6,-155.1C173.2,-120.6,182.4,-60.3,175.1,-7.4C167.7,45.6,143.9,91.3,109.3,126.8C74.6,162.3,29.1,187.7,-18.8,199.2C-66.7,210.8,-117,208.4,-156.8,179.1C-196.5,149.9,-225.8,93.9,-227.7,39.4C-229.6,-15.2,-204.2,-68.2,-167.3,-106.2C-130.3,-144.3,-81.8,-167.3,-27.4,-179.6C27.1,-191.9,81.1,-193.6,138.6,-155.1Z" fill="#FEF3C7"></path>
            </g>
          </svg>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-20 border-b md:border-0">
            {/* Left Side - Video */}
            <div className="w-full aspect-square rounded-xl overflow-hidden shadow-lg relative">
              <video 
                id="mainVideo" 
                ref={mainVideoRef}
                className="w-full h-full object-cover" 
                onClick={() => playing ? pauseMainVideo() : playMainVideo()}
                onEnded={() => setPlaying(false)}
              >
                <source src="https://res.cloudinary.com/dkkckyvg6/video/upload/v1744202071/Clamalo_-_About_Clamalo_SITE_II_new_with_music_mn5lkb.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
              <div className={`absolute inset-0 flex items-center justify-center transition cursor-pointer ${playing ? 'hidden' : 'flex'}`} onClick={playMainVideo}>
                <div className="w-20 h-20 bg-white shadow-md rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[20px] border-l-yellow-500 ml-1.5"></div>
                </div>
              </div>
              <div className={`absolute inset-0 flex items-center justify-center transition cursor-pointer ${playing ? 'flex' : 'hidden'}`} onClick={pauseMainVideo}>
                <div className="w-20 h-20 bg-white shadow-md rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                  <div className="w-5 h-5 bg-yellow-500 rounded-sm"></div>
                </div>
              </div>
            </div>
            {/* Right Side - Text */}
            <div className="flex flex-col justify-center">
              <h1 className="font-heading text-4xl xs:text-5xl sm:text-6xl mb-6">Is your therapist using Clamalo?</h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">Hear from Claire, therapist and co-founder, as she shares how Clamalo was born from real conversations, a passion for deeper connection, and a vision to make therapy more effective between sessions.</p>
              <div>
                <div>
                  <Link to="/" className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black border border-gray-900 rounded-full transition duration-300 bg-white hover:bg-gradient-to-r hover:from-purple-200 hover:to-yellow-100">For Journaler</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Call to Action */}
      <section className="relative overflow-hidden py-16 lg:py-28 bg-orange-50">
        {/* Decorative Purple Blob */}
        <div className="absolute -bottom-36 -right-36 w-[500px] h-[500px] z-0 pointer-events-none">
          <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <g transform="translate(300,300)">
              <path d="M138.6,-155.1C173.2,-120.6,182.4,-60.3,175.1,-7.4C167.7,45.6,143.9,91.3,109.3,126.8C74.6,162.3,29.1,187.7,-18.8,199.2C-66.7,210.8,-117,208.4,-156.8,179.1C-196.5,149.9,-225.8,93.9,-227.7,39.4C-229.6,-15.2,-204.2,-68.2,-167.3,-106.2C-130.3,-144.3,-81.8,-167.3,-27.4,-179.6C27.1,-191.9,81.1,-193.6,138.6,-155.1Z" fill="#E9D8FD"></path>
            </g>
          </svg>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl mb-4">Start Your Emotional Journey Today</h2>
            <p className="text-lg text-gray-700 mb-8">Take control of your emotional well-being. Start tracking your emotions and reflecting on your mental health today.</p>
            <Link to="/" className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black border border-gray-900 rounded-full transition duration-300 bg-white hover:bg-gradient-to-r hover:from-purple-200 hover:to-yellow-100">Track Your Mood</Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Image 1 */}
            <div className="rounded-xl overflow-hidden aspect-square shadow">
              <img src="https://static.shuffle.dev/uploads/files/53/531ff9bb8642803b20f95b82b6df96f0f1130836/Clamalo-mental-health-tracking.png" alt="" className="w-full h-full object-cover"/>
            </div>
            {/* Image 2 */}
            <div className="rounded-xl overflow-hidden aspect-square shadow">
              <img src="https://static.shuffle.dev/uploads/files/53/531ff9bb8642803b20f95b82b6df96f0f1130836/Screenshot-2025-04-02-at-16-26-17.png" alt="" className="w-full h-full object-cover"/>
            </div>
            {/* Video */}
            <div className="col-span-2 lg:col-span-1 rounded-xl overflow-hidden aspect-square shadow">
              <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                <source src="https://res.cloudinary.com/dkkckyvg6/video/upload/v1743695841/Beige_and_White_Aesthetic_Minimalist_Modern_Typography_Beauty_Brand_Logo_1_u2cfk2.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Footer */}
      <section className="relative py-24 overflow-hidden bg-orange-50">
        <div className="relative z-10 container mx-auto px-4 md:mt-6">
          <div className="flex flex-wrap -m-6 border-t border-gray-200 md:pt-6 md:pt-8">
            {/* Logo and Description */}
            <div className="w-full md:w-1/2 lg:w-5/12 p-6">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <img className="mb-12" src="https://static.shuffle.dev/uploads/files/53/531ff9bb8642803b20f95b82b6df96f0f1130836/clamalo.svg" alt=""/>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">© 2025 - Clamalo. All Rights Reserved</p>
                </div>
              </div>
            </div>
            {/* Company Section */}
            <div className="w-full md:w-1/2 lg:w-2/12 px-6">
              <div className="h-full">
                <h3 className="mb-9 hidden lg:block font-heading font-semibold text-xs text-gray-500 uppercase tracking-px">Company</h3>
                <ul className="pl-4 lg:pl-0 mt-2 lg:mt-0 space-y-2 lg:space-y-4 mb-4 hidden lg:block">
                  <li><Link to="/" className="font-heading font-medium text-base text-gray-900 hover:text-gray-700">Features</Link></li>
                  <li><Link to="/" className="font-heading font-medium text-base text-gray-900 hover:text-gray-700">Pricing</Link></li>
                  <li><Link to="/" className="font-heading font-medium text-base text-gray-900 hover:text-gray-700">About Us</Link></li>
                </ul>
              </div>
            </div>
            {/* Support Section */}
            <div className="w-full md:w-1/2 lg:w-2/12 px-6">
              <div className="h-full">
                <h3 className="mb-9 hidden lg:block font-heading font-semibold text-xs text-gray-500 uppercase tracking-px">Support</h3>
                <ul className="pl-4 lg:pl-0 mt-2 lg:mt-0 space-y-2 lg:space-y-4 mb-4 hidden lg:block">
                  <li><Link to="/" className="font-heading font-medium text-base text-gray-900 hover:text-gray-700">Account</Link></li>
                  <li><Link to="/" className="font-heading font-medium text-base text-gray-900 hover:text-gray-700">FAQ</Link></li>
                </ul>
              </div>
            </div>
            {/* Legals Section */}
            <div className="w-full md:w-1/2 lg:w-3/12 px-6">
              <div className="h-full">
                <h3 className="mb-9 hidden lg:block font-heading font-semibold text-xs text-gray-500 uppercase tracking-px">Legals</h3>
                <ul className="pl-4 lg:pl-0 mt-2 lg:mt-0 space-y-2 lg:space-y-4 md:mr-14 hidden lg:block">
                  <li><Link to="/" className="font-heading font-medium text-base text-gray-900 hover:text-gray-700">Terms & Conditions</Link></li>
                  <li><Link to="/" className="font-heading font-medium text-base text-gray-900 hover:text-gray-700">Privacy Policy</Link></li>
                  <li className="md:pt-4"><Link to="/" className="font-heading font-medium text-base hover:text-purple-500 bg-pink-50 font-black text-purple-600">Save up to 25% with our Annual Plans.</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
