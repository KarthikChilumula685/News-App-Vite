import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo / Brand */}
          <div className="flex-shrink-0 text-2xl font-bold text-blue-600 hover:scale-105 transition-transform duration-300">
            <Link to="/">NEWSAPP</Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
            <Link
              to="/"
              className="hover:text-blue-600 transition-colors duration-200 hover:underline"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-blue-600 transition-colors duration-200 hover:underline"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-600 transition-colors duration-200 hover:underline"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden sm:flex">
            <Link
              to="/subscribe"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 shadow hover:scale-105"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
