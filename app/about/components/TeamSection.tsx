"use client";

import Image from 'next/image';
import { FC, useState, useEffect } from 'react';
import { getAboutPageData, type AboutPageData, type TeamMember } from '../../lib/api';

interface TeamMemberProps {
  member: TeamMember;
}

const TeamMemberCard: FC<TeamMemberProps> = ({ member }) => {
  return (
    <div className="flex flex-col items-center text-center mb-10">
      <div className="relative w-full aspect-[4/5] mb-4 overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <h3 className="text-xl font-bold text-white mb-1 font-morabba">{member.name}</h3>
      <p className="text-[#C6A15B] mb-2">{member.role}</p>
      <p className="text-gray-400 text-sm max-w-xs">{member.description}</p>
    </div>
  );
};

const TeamSection: FC = () => {
  const [teamData, setTeamData] = useState<AboutPageData['team'] | null>(null);

  useEffect(() => {
    const loadTeamData = async () => {
      const data = await getAboutPageData();
      setTeamData(data.team);
    };
    loadTeamData();
  }, []);

  if (!teamData) {
    return (
      <section className="py-16 bg-[#151515]">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-[#151515]">
      <div className="container mx-auto px-6">        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-morabba">
            {teamData.title}
          </h2>
          <p className="text-gray-300 mx-auto max-w-2xl">
            {teamData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamData.members.map((member) => (
            <TeamMemberCard
              key={member.id}
              member={member}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;