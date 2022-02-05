import React from 'react';
import Image from 'next/image';
import { FiTwitter, FiFacebook, FiLinkedin, FiGithub } from 'react-icons/fi';
import { Team } from '../types';

interface TeamCardProps {
	team: Team;
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
	const { coverPic, name, subtitle, github, facebook, twitter, linkedin } = team;

	return (
		<>
			<div className="py-6 transition-all duration-300 ease-out">
				<div className="mb-5 flex items-center justify-center">
					<Image src={coverPic} alt={name} height={319} width={342} />
				</div>
				<div className="mb-4 flex items-center justify-center gap-1">
					<a
						className="flex justify-center rounded-full bg-dark-1 p-2 transition-all duration-300 ease-out hover:bg-blue focus:bg-blue"
						href={facebook ? facebook : '#'}
					>
						<FiFacebook size={20} />
					</a>
					<a
						className="flex justify-center rounded-full bg-dark-1 p-2 transition-all duration-300 ease-out hover:bg-blue focus:bg-blue"
						href={twitter ? twitter : '#'}
					>
						<FiTwitter size={20} />
					</a>
					<a
						className="flex justify-center rounded-full bg-dark-1 p-2 transition-all duration-300 ease-out hover:bg-blue focus:bg-blue"
						href={linkedin ? linkedin : '#'}
					>
						<FiLinkedin size={20} />
					</a>
					<a
						className="flex justify-center rounded-full bg-dark-1 p-2 transition-all duration-300 ease-out hover:bg-blue focus:bg-blue"
						href={github}
					>
						<FiGithub size={20} />
					</a>
				</div>
				<div className="text-center">
					<h1 className="mb-1 text-3xl font-medium">{name}</h1>
					<h6 className="text-md font-extralight text-gray">{subtitle}</h6>
				</div>
			</div>
		</>
	);
};

export default TeamCard;
