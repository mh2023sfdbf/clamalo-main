
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Menu } from 'lucide-react';

const Navigation: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
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
    </>
  );
};

export default Navigation;
