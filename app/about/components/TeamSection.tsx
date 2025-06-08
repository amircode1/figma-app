"use client";

import Image from "next/image";
import { FC, useState, useEffect } from "react";
import {
  getAboutPageData,
  type AboutPageData,
  type TeamMember,
} from "../../lib/api";

interface TeamMemberProps {
  member: TeamMember;
}

const TeamMemberCard: FC<TeamMemberProps> = ({ member }) => {
  return (
    <div className="flex flex-col items-center text-center mb-6 sm:mb-8 lg:mb-10">
      <div className="relative w-full aspect-[4/5] mb-3 sm:mb-4 overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-white mb-1 font-morabba">
        {member.name}
      </h3>
      <p className="text-[#C6A15B] mb-2 text-sm sm:text-base">{member.role}</p>
      <p className="text-gray-400 text-xs sm:text-sm max-w-xs leading-relaxed">
        {member.description}
      </p>
    </div>
  );
};

const TeamSection: FC = () => {
  const [teamData, setTeamData] = useState<AboutPageData["team"] | null>(null);

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
    <section className="py-8 sm:py-12 lg:py-16 bg-[#151515]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 font-morabba leading-tight">
            {teamData.title}
          </h2>
          <p className="text-gray-300 mx-auto max-w-2xl text-sm sm:text-base leading-relaxed px-4">
            {teamData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teamData.members.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
