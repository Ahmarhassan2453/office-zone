'use client';

import React from 'react';
import Image from 'next/image';

const features = [
  {
    img: 'https://picsum.photos/id/1012/400/300',
    title: 'Flexible Workspaces',
    desc: 'Choose the perfect workspace that suits your team’s needs and style, available in multiple sizes and layouts.',
  },
  {
    img: 'https://picsum.photos/id/1013/400/300',
    title: 'Premium Amenities',
    desc: 'Get access to high-speed internet, meeting rooms, lounges, coffee, and much more for a seamless workday.',
  },
  {
    img: 'https://picsum.photos/id/1015/400/300',
    title: 'Central Locations',
    desc: 'Our offices are located in prime city centers, providing easy accessibility and networking opportunities.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-white text-black">
      <div className="max-w-7xl mx-auto text-center">
       
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          How It Works
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-base sm:text-lg">
          Discover how simple and flexible it is to start working with us.
        </p>

  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:scale-[1.02]"
            >
              <div className="relative w-full h-56 sm:h-64">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

       
        <div className="mt-12">
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition text-sm sm:text-base">
            Browse All
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
