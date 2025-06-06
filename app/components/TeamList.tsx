'use client'

import { useEffect, useState } from 'react'

type TeamMember = {
  id: number
  name: string
  role: string
  profile_image: string
  bio: string
  linkedin?: string
  twitter?: string
  website?: string
}

const getTeamMembers = async (): Promise<TeamMember[]> => {
  const res = await fetch('/api/team-members', { cache: 'no-store' }) // No cache here
  if (!res.ok) {
    console.error('Failed to fetch')
    return []
  }
  const data = await res.json()
  return data
}

export default function TeamList() {
  const [members, setMembers] = useState<TeamMember[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTeamMembers()
      setMembers(data)
    }
    fetchData()
  }, [])

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Meet Our Team</h1>

      {members.length === 0 ? (
        <p className="text-center text-gray-500">No team members found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => (
            <div key={member.id} className="bg-white rounded-xl shadow-md p-4 text-center">
              <img
                src={member.profile_image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
              />
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p className="text-sm text-gray-600">{member.role}</p>
              <p className="text-sm mt-2 text-gray-500">{member.bio}</p>
              <div className="flex justify-center gap-3 mt-4 text-xl">
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    🔗
                  </a>
                )}
                {member.twitter && (
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                    🐦
                  </a>
                )}
                {member.website && (
                  <a href={member.website} target="_blank" rel="noopener noreferrer">
                    🌐
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
