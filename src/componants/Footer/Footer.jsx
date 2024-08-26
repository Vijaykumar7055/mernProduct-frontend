import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
          
          {/* Column 1: About */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about-us" className="hover:text-blue-400 transition">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-blue-400 transition">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-blue-400 transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-blue-400 transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Customer Service */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact-us" className="hover:text-blue-400 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-blue-400 transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-blue-400 transition">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-blue-400 transition">
                  Shipping Information
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Policies */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Policies</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:text-blue-400 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-400 transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-400 transition">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="hover:text-blue-400 transition">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
          <div className="flex justify-center  flex-col gap-2  ">
          <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
            <a href="#" target="_blank" rel="noreferrer" className="hover:text-blue-500">
              Facebook
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="hover:text-blue-500">
              Twitter
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="hover:text-blue-500">
              Instagram
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="hover:text-blue-500">
              LinkedIn
            </a>
          </div>
          </div>
          
        </div>

        {/* Bottom Section: Copyrigh & Social Media */}
        <div className="mt-8 text-center border-t border-zinc-700 pt-4">
          <p className="text-zinc-400">&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
