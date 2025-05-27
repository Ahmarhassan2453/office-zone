'use client';
import React from 'react';
import Image from 'next/image';

const Cti = () => {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto flex flex-col-reverse lg:flex-row items-center relative gap-12">
        
   
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight font-['K2D'] text-black">
            Are you a certified teacher? <br /> Become an instructor
          </h2>

          <p className="text-base sm:text-lg md:text-xl font-normal font-['K2D'] text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Volutpat cursus nullam purus hac. Justo nibh consequat non arcu sed. Neque tempus et tortor id. Massa dictumst quis dignissim volut.
          </p>

          <div>
            <button className="mt-4 px-6 py-2 text-sm sm:text-base font-semibold font-['K2D'] bg-[#141110] text-white rounded-full hover:opacity-90 transition">
              Browse All
            </button>
          </div>
        </div>

       
        <div className="absolute top-[75%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-4">
          {[['Small', '2–8 people'], ['Medium', '8–15 people'], ['Large', '15+ people']].map(
            ([size, desc]) => (
              <div
                key={size}
                className="w-[220px] h-[75px] bg-[#F0F0F0] rounded-full flex flex-col justify-center px-5 shadow"
              >
                <p className="text-[16px] font-semibold font-['K2D'] text-black">For {size} Teams</p>
                <p className="text-[14px] text-gray-700 font-normal font-['K2D'] leading-[22px]">
                  {desc}
                </p>
              </div>
            )
          )}
        </div>

        <div className="w-full lg:w-[542px] h-[400px] sm:h-[500px] lg:h-[661px] relative">
          <Image
            src="/cti.png"
            alt="Instructor"
            fill
            className="rounded-lg object-cover"
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   542px"
          />
        </div>
      </div>
    </section>
  );
};

export default Cti;
