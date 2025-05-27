'use client';
import React from 'react';

const OfficeVisit = () => {
  return (
    <section
      className="w-full min-h-[561px] bg-cover bg-center relative px-4 py-20 flex items-center justify-center"
      style={{ backgroundImage: "url('https://picsum.photos/1440/561?grayscale')" }}
    >
     
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 text-center max-w-3xl">
        <h2 className="font-['K2D'] font-bold text-white leading-tight tracking-wide mb-6 
                       text-3xl sm:text-4xl md:text-5xl xl:text-6xl">
          Come and visit our <br />
          co-working spaces today!
        </h2>
        <button className="bg-[#141110] text-white px-6 py-3 rounded-full text-base sm:text-lg hover:opacity-90 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default OfficeVisit;
