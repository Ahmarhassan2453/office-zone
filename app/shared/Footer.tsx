'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

       
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Office <span className="font-medium">Zone</span>
          </h1>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
            <form className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md bg-gray-100 w-full sm:w-auto"
              />
              <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-2">
              By subscribing you agree to our <a href="#" className="underline">Privacy Policy</a>
            </p>
          </div>
        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

     
          <div>
            <h3 className="text-md font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Our Story</a></li>
              <li><a href="#" className="hover:underline">Our Team</a></li>
              <li><a href="#" className="hover:underline">News</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-md font-semibold mb-4">Spaces</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Small Team</a></li>
              <li><a href="#" className="hover:underline">Medium Team</a></li>
              <li><a href="#" className="hover:underline">Large Team</a></li>
              <li><a href="#" className="hover:underline">Corporate</a></li>
            </ul>
          </div>

       
          <div>
            <h3 className="text-md font-semibold mb-4">Locations</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">New York</a></li>
              <li><a href="#" className="hover:underline">Chicago</a></li>
              <li><a href="#" className="hover:underline">Los Angeles</a></li>
              <li><a href="#" className="hover:underline">San Francisco</a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
