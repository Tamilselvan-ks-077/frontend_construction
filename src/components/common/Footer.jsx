import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, MapPin, Send } from 'lucide-react';
import Container from './Container';
import Button from './Button';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    setSuccess('Thank you for subscribing!');
    setEmail('');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-250 py-12 text-gray-600">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Logo & Description */}
          <div className="flex flex-col gap-4">
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
            <p className="text-xs md:text-sm leading-relaxed font-normal text-gray-505">
              Building with integrity, precision, and craftsmanship since 2011. Delivering residential and commercial builds.
            </p>
            {/* Socials as clean plain text labels */}
            <div className="flex gap-4 text-xs font-semibold text-gray-500 mt-2">
              <a href="#" className="hover:text-amber-600">Facebook</a>
              <span>•</span>
              <a href="#" className="hover:text-amber-600">Twitter</a>
              <span>•</span>
              <a href="#" className="hover:text-amber-600">LinkedIn</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-xs md:text-sm">
              <li>
                <Link to="/" className="hover:text-amber-600">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-600">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-600">Our Services</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-amber-600">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-600">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Core Services</h3>
            <ul className="flex flex-col gap-2 text-xs md:text-sm">
              <li className="hover:text-amber-600 cursor-pointer">Residential Building</li>
              <li className="hover:text-amber-600 cursor-pointer">Commercial Hubs</li>
              <li className="hover:text-amber-600 cursor-pointer">Villa Renovations</li>
              <li className="hover:text-amber-600 cursor-pointer">3D BIM Architectural Planning</li>
            </ul>
          </div>

          {/* Newsletter Input */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Newsletter</h3>
            <p className="text-xs leading-relaxed text-gray-505">
              Subscribe to stay updated with our latest local project handovers.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (success) setSuccess('');
                  }}
                  className="w-full bg-white border border-gray-300 text-gray-900 rounded pl-3 pr-10 py-2 text-xs focus:outline-none focus:border-amber-600"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-2.5 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors flex items-center justify-center"
                  aria-label="Subscribe"
                >
                  <Send className="h-3 w-3" />
                </button>
              </div>
              {success && <span className="text-xs text-emerald-600 font-medium">{success}</span>}
            </form>
          </div>

        </div>

        <div className="h-px bg-gray-200 my-6" />

        {/* Contact Strip */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-normal text-gray-500">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-amber-600" /> Chennai, India
            </span>
            <span className="flex items-center gap-1">
              <Phone className="h-3.5 w-3.5 text-amber-600" /> +91 (44) 2836-7299
            </span>
          </div>
          <p>© {currentYear} Jothis Construction. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;