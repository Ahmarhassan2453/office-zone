"use client";

import React, { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectValue,
} from "@/app/components/ui/select";

const Hero = () => {
  const [location, setLocation] = useState("");
  const [size, setSize] = useState("");
  const [city, setCity] = useState("");

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/id/1011/1600/900')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center text-white px-4 max-w-5xl w-full">
        <h1 className="text-4xl font-bold mb-4">Find Your Next Coworking Office</h1>
        <p className="text-lg mb-8">Find & make your interior stand out from the box.</p>

        <div className="bg-white text-black w-full rounded-xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between px-4 py-4 gap-4 shadow-lg">

          <Select onValueChange={setLocation}>
            <SelectTrigger className="w-full sm:w-[180px] border border-gray-300 rounded-full">
            <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Location</SelectLabel>
                <SelectItem value="New York">New York</SelectItem>
                <SelectItem value="San Francisco">San Francisco</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select onValueChange={setSize}>
            <SelectTrigger className="w-full sm:w-[180px] border border-gray-300 rounded-full">
              <SelectValue placeholder="Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Size</SelectLabel>
                <SelectItem value="Small Team">Small Team</SelectItem>
                <SelectItem value="Large">Large</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select onValueChange={setCity}>
            <SelectTrigger className="w-full sm:w-[180px] border border-gray-300 rounded-full">
              <SelectValue placeholder="City" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>City</SelectLabel>
                <SelectItem value="NYC">NYC</SelectItem>
                <SelectItem value="LA">LA</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <button className="w-full sm:w-auto bg-black text-white px-6 py-2 rounded-full">
            Search Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
