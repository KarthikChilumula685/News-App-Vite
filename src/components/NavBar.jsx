import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // optional: install lucide-react or use any icons

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo / Brand */}
          <div className="flex-shrink-0 text-2xl font-bold text-blue-600 hover:scale-105 transition-transform duration-300">
            <Link to="/">NEWSAPP</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
            <Link to="/" className="hover:text-blue-600 transition-colors duration-200 hover:underline">Home</Link>
            <Link to="/about" className="hover:text-blue-600 transition-colors duration-200 hover:underline">About</Link>
            <Link to="/contact" className="hover:text-blue-600 transition-colors duration-200 hover:underline">Contact</Link>
          </div>

          {/* CTA Button for md and up */}
          <div className="hidden sm:flex">
            <Link to="/subscribe" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 shadow hover:scale-105">
              Subscribe
            </Link>
          </div>

          {/* Hamburger Icon for small screens */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 focus:outline-none">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-3 py-4 px-4 bg-white shadow rounded-md text-gray-700 font-medium">
            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">About</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Contact</Link>
            <Link to="/subscribe" onClick={() => setMenuOpen(false)} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Subscribe
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
