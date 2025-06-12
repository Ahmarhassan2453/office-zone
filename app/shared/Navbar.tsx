'use client';

import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 text-white shadow-md"
      style={{ background: '#00000052' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8 py-4">
        <div className="text-2xl font-bold">Office Zone</div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-base lg:text-lg">
          <a href="#about" className="hover:text-gray-300 transition">About</a>
          <a href="#spaces" className="hover:text-gray-300 transition">Spaces</a>
          <a href="#location" className="hover:text-gray-300 transition">Location</a>
          <a href="/add-member" className="text-blue-300 hover:text-blue-500 transition">Add Member</a>
        </div>

        {/* Contact Button Desktop */}
        <div className="hidden md:block">
          <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Items */}
      {menuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4" style={{ background: '#00000052' }}>
          <a href="#about" className="block py-2 text-base hover:text-gray-300 transition">About</a>
          <a href="#spaces" className="block py-2 text-base hover:text-gray-300 transition">Spaces</a>
          <a href="#location" className="block py-2 text-base hover:text-gray-300 transition">Location</a>
          <a href="/add-member" className="block py-2 text-blue-300 hover:text-blue-500 transition">Add Member</a>
          <button className="mt-4 w-full bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
