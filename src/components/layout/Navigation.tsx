import React, { useState, useEffect } from "react";
import CompanyLogo from "../ui/CompanyLogo";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-gray-900 ${
      scrolled ? "bg-gray-900 shadow-xl" : "bg-gradient-to-b from-gray-900/80 to-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20 ">
          
          {/* Logo - Always visible */}
          <Link to="/" className="z-50">
            <CompanyLogo 
              variant="text" 
              size="lg" 
              className="text-white hover:text-green-400 transition-colors duration-300" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 ">
            {["/", "/products", "/about", "/contact"].map((path) => (
              <Link
                key={path}
                to={path}
                className={`relative px-5 py-3 text-sm font-medium transition-all duration-300 group ${
                  location.pathname === path ? "text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                {path === "/" ? "Home" : path.replace("/", "").replace(/^\w/, c => c.toUpperCase())}
                
                {/* Active indicator bar */}
                {location.pathname === path && (
                  <span className="absolute left-0 bottom-0 w-full h-1 bg-green-400 rounded-full"></span>
                )}
                
                {/* Hover effect */}
                <span className="absolute inset-0 bg-white/5 rounded-lg scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-white focus:outline-none z-50 "
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      <div className={`md:hidden fixed inset-0 bg-gray-900 backdrop-blur-lg z-40 transition-all duration-500 ease-in-out ${
        isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full bg-gray-900"
      }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {["/", "/products", "/about", "/contact"].map((path) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-2xl font-medium px-6 py-3 relative transition-all duration-300 ${
                location.pathname === path ? "text-green-400" : "text-white hover:text-green-300"
              }`}
            >
              {path === "/" ? "Home" : path.replace("/", "").replace(/^\w/, c => c.toUpperCase())}
              
              {/* Mobile active indicator */}
              {location.pathname === path && (
                <span className="absolute left-1/2 -bottom-1 h-0.5 w-8 bg-green-400 transform -translate-x-1/2 rounded-full"></span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;