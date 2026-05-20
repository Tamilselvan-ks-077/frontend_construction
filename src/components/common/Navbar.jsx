import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2 } from 'lucide-react';
import Container from './Container';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white border-b ${
        scrolled ? 'py-3 shadow-sm border-gray-200' : 'py-4 border-gray-100'
      }`}
    >
      <Container>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center bg-gradient-to-tr from-amber-700 to-amber-500 p-2 rounded shadow-md text-white transform group-hover:rotate-6 transition-transform duration-200">
              <Building2 className="h-4.5 w-4.5" />
              <span className="absolute -bottom-0.5 -right-0.5 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
              </span>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-gray-900">
              Jothis <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent font-bold">Construction</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.path);

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-150 border-b-2 px-1 py-1 ${
                    isActive
                      ? 'border-amber-600 text-amber-600 font-bold'
                      : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-200'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>



          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 rounded border border-gray-200 text-gray-655 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {/* Simple Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-150 shadow-lg absolute top-full left-0 right-0 overflow-hidden">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.path);

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-base font-semibold block py-2 border-b border-gray-50 ${
                    isActive ? 'text-amber-600' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;