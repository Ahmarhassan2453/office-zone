"use client";

import React, { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectValue,
} from "@/app/components/ui/select";

const Hero = () => {
  const [location, setLocation] = useState("");
  const [size, setSize] = useState("");
  const [city, setCity] = useState("");

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://picsum.photos/id/1011/1600/900')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center text-white px-4 max-w-5xl w-full font-poppins">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Find Your Next Coworking Office
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Discover beautiful spaces tailored for your team's success.
        </p>

        <div className="bg-white text-black w-full rounded-xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between px-4 py-4 gap-4 shadow-xl font-poppins">
       
          <Select onValueChange={setLocation}>
            <SelectTrigger className="w-full sm:w-[180px] border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/50 font-poppins">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent className="bg-white backdrop-blur-md rounded-xl font-poppins">
              <SelectGroup>
                <SelectItem value="Pakistan">Pakistan</SelectItem>
                <SelectItem value="New York">New York</SelectItem>
                <SelectItem value="San Francisco">San Francisco</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

         
          <Select onValueChange={setSize}>
            <SelectTrigger className="w-full sm:w-[180px] border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/50 font-poppins">
              <SelectValue placeholder="Size" />
            </SelectTrigger>
            <SelectContent className="bg-white backdrop-blur-md rounded-xl font-poppins">
              <SelectGroup>
                <SelectItem value="Small">Small Team</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Large">Large</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

        
          <Select onValueChange={setCity}>
            <SelectTrigger className="w-full sm:w-[180px] border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/50 font-poppins">
              <SelectValue placeholder="City" />
            </SelectTrigger>
            <SelectContent className="bg-white backdrop-blur-md rounded-xl font-poppins">
              <SelectGroup>
                <SelectItem value="MA">MA</SelectItem>
                <SelectItem value="NYC">NYC</SelectItem>
                <SelectItem value="LA">LA</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

         
          <button className="w-full sm:w-auto bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-900 transition font-poppins">
            Search Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
