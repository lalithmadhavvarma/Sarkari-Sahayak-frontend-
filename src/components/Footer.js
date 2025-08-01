import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, FileText, Bell } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="ml-2 text-xl font-bold">Sarkari Sahayak</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Empowering citizens with easy access to government schemes and opportunities. 
              Find the perfect scheme for you and stay updated with the latest opportunities.
            </p>
            <div className="flex items-center text-sm text-gray-400">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> in India
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/schemes" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Schemes
                </Link>
              </li>
              <li>
                <Link to="/subscribe" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <Bell className="h-4 w-4 mr-2" />
                  Subscribe
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: contact@sarkarisahayak.com</li>
              <li>Phone: +91 1800-XXX-XXXX</li>
              <li>Address: New Delhi, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Sarkari Sahayak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 