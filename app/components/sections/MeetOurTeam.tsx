'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Lead Developer',
    slug: 'john-doe',
    image: 'https://picsum.photos/400/395?random=1',
  },
  {
    name: 'Jane Smith',
    role: 'Project Manager',
    slug: 'jane-smith',
    image: 'https://picsum.photos/400/395?random=2',
  },
  {
    name: 'Mark Johnson',
    role: 'UI/UX Designer',
    slug: 'mark-johnson',
    image: 'https://picsum.photos/400/395?random=3',
  },
  {
    name: 'Emily Davis',
    role: 'QA Engineer',
    slug: 'emily-davis',
    image: 'https://picsum.photos/400/395?random=4',
  },
  {
    name: 'Michael Lee',
    role: 'DevOps Specialist',
    slug: 'michael-lee',
    image: 'https://picsum.photos/400/395?random=5',
  },
  {
    name: 'Sophia Wilson',
    role: 'Marketing Head',
    slug: 'sophia-wilson',
    image: 'https://picsum.photos/400/395?random=6',
  },
];

const MeetOurTeam = () => {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['K2D'] text-black">
          Meet Our Team
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-normal font-['K2D'] text-gray-600 mt-4">
          A team of passionate professionals behind our success.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto">
        {teamMembers.map((member) => (
          <Link
            href={`/team/${member.slug}`}
            key={member.slug}
            className="group"
          >
            <div className="bg-[#FCFCFC] p-6 flex flex-col rounded-lg shadow-md hover:shadow-xl transition mx-auto w-full max-w-sm h-full">
              <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold font-['K2D'] text-black">
                  {member.name}
                </h3>
                <p className="text-sm sm:text-base font-normal font-['K2D'] text-gray-700">
                  {member.role}
                </p>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
                <Image src="/x.svg" alt="X" width={24} height={24} />
                <Image src="/wheel.svg" alt="Wheel" width={24} height={24} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MeetOurTeam;
