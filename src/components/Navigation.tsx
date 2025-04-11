
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between py-5 relative">
        {/* Logo Section */}
        <div>
          <div className="flex-wrap items-center">
            <div className="mr-14 flex-shrink-0">
              <Link to="/" className="inline-block">
                <img 
                  src="https://static.shuffle.dev/uploads/files/e3/e31d9ad0dda730334cb8ec81d3e19d2bcc0979bf/clamalo.svg" 
                  alt="Mindla Logo" 
                  className="object-contain h-10"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="flex flex-wrap items-center">
            <div className="w-auto hidden lg:block">
              <ul className="flex items-center">
                <li className="mr-9 text-sm hover:text-gray-700">
                  <a href="/anxiety-management">Anxiety Management</a>
                </li>
                <li className="mr-9 text-sm hover:text-gray-700">
                  <a href="/mood-tracking-benefits">Mood Tracking Benefits</a>
                </li>
                <li className="mr-9 text-sm hover:text-gray-700">
                  <a href="/best-tools-for-therapists">Tools for Therapists</a>
                </li>
                <li className="text-sm hover:text-gray-700">
                  <a href="#">Pricing</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Trial Button & Mobile Menu Toggle */}
        <div className="w-auto">
          <div className="hidden lg:block">
            <Link 
              to="/" 
              className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black border border-gray-900 rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-yellow-100"
            >
              Try 14 Days Free Trial
            </Link>
          </div>
          <div className="lg:hidden flex items-center">
            <button onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileNavOpen && (
        <div className="fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
          <div 
            className="fixed inset-0 bg-gray-800 opacity-80"
            onClick={() => setMobileNavOpen(false)}
          />
          <nav className="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
            <div className="flex flex-wrap h-full">
              <div className="w-full">
                <div className="flex flex-col w-full">
                  <ul>
                    <li className="mb-6"><Link className="text-sm hover:text-gray-700" to="/anxiety-management">Anxiety Management</Link></li>
                    <li className="mb-6"><Link className="text-sm hover:text-gray-700" to="/mood-tracking-benefits">Mood Tracking Benefits</Link></li>
                    <li className="mb-6"><Link className="text-sm hover:text-gray-700" to="/best-tools-for-therapists">Tools for Therapists</Link></li>
                    <li className="mb-6"><Link className="text-sm hover:text-gray-700" to="#">Pricing</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navigation;
