'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

type TeamMember = {
  name: string;
  role: string;
  slug: string;
  image: string;
  bio: string;
};

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const teamMembers: TeamMember[] = [
  {
    name: 'John Doe',
    role: 'Lead Developer',
    slug: 'john-doe',
    image: 'https://picsum.photos/400/395?random=1',
    bio: 'John is the lead developer with 10 years of experience...',
  },
  {
    name: 'Jane Smith',
    role: 'Project Manager',
    slug: 'jane-smith',
    image: 'https://picsum.photos/400/395?random=2',
    bio: 'Jane manages projects efficiently and effectively...',
  },
  {
    name: 'Mark Johnson',
    role: 'UI/UX Designer',
    slug: 'mark-johnson',
    image: 'https://picsum.photos/400/395?random=3',
    bio: 'Mark designs beautiful user interfaces and experiences...',
  },
  {
    name: 'Emily Davis',
    role: 'QA Engineer',
    slug: 'emily-davis',
    image: 'https://picsum.photos/400/395?random=4',
    bio: 'Emily ensures the highest quality in all our products...',
  },
  {
    name: 'Michael Lee',
    role: 'DevOps Specialist',
    slug: 'michael-lee',
    image: 'https://picsum.photos/400/395?random=5',
    bio: 'Michael keeps our systems running smoothly...',
  },
  {
    name: 'Sophia Wilson',
    role: 'Marketing Head',
    slug: 'sophia-wilson',
    image: 'https://picsum.photos/400/395?random=6',
    bio: 'Sophia leads our marketing campaigns worldwide...',
  },
];

export default function TeamMemberPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [member, setMember] = useState<TeamMember | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMember = async () => {
      const { data, error } = await supabase
        .from('employees')
        .select('*')
        .eq('slug', slug)
        .single();

      if (!error && data) {
        setMember({
          name: data.Name,
          role: data.Department,
          slug: data.slug,
          image: data.image,
          bio: data.bio,
        });
      } else {
        // Fallback to local array
        const localMember = teamMembers.find((m) => m.slug === slug);
        setMember(localMember || null);
      }

      setLoading(false);
    };

    fetchMember();
  }, [slug]);

  if (loading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  if (!member) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-3xl font-bold">Member not found</h2>
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{member.name}</h1>
      <h3 className="text-xl mb-4 text-gray-600">{member.role}</h3>
      <img
        src={member.image}
        alt={member.name}
        className="w-full max-w-md rounded-lg mb-6 object-cover"
      />
      <p className="text-lg">{member.bio}</p>
    </section>
  );
}
