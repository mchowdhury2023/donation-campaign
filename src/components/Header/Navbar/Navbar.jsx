import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      <nav className="flex justify-between items-center py-6">
        <img src={Logo} alt="" className="w-16" />

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-5">
          <li>
            <NavLink
              to="/" 
              className={({ isActive }) => isActive ? "text-red-400 underline" : ""}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donations" 
              className={({ isActive }) => isActive ? "text-red-400 underline" : ""}
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics" 
              className={({ isActive }) => isActive ? "text-red-400 underline" : ""}
            >
              Statistics
            </NavLink>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          <span className="block w-6 h-0.5 bg-black mb-1.5"></span>
          <span className="block w-6 h-0.5 bg-black mb-1.5"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
      </nav>

      {/* Mobile menu */}
      <ul className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} mt-4`}>
        <li className="mb-2">
          <NavLink
            to="/" 
            className={({ isActive }) => isActive ? "text-red-400 underline" : ""}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="/donations" 
            className={({ isActive }) => isActive ? "text-red-400 underline" : ""}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Donation
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/statistics" 
            className={({ isActive }) => isActive ? "text-red-400 underline" : ""}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Statistics
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
