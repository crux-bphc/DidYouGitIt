import React from 'react';
import Image from 'next/image';
import { FiTwitter, FiFacebook, FiLinkedin, FiGithub } from 'react-icons/fi';
import { Person } from '../types';

interface TeamMemberCardProps {
	person: Person;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ person }) => {
	const { coverPic, name, subtitle, github, facebook, twitter, linkedin } =
		person;

	return (
		<>
			<div className="py-6 transition-all duration-300 ease-out">
				<div className="mb-5 flex items-center justify-center">
					<Image
						src={coverPic}
						alt={name}
						height={342}
						objectFit="cover"
						objectPosition="top"
						width={342}
					/>
				</div>
				<div className="mb-4 flex items-center justify-center gap-1">
					{github && (
						<a
							className="flex justify-center rounded-full bg-dark-1 p-2 transition-all duration-300 ease-out hover:bg-blue focus:bg-blue"
							href={github}
							target="_blank"
							rel="noreferrer"
						>
							<FiGithub size={20} />
						</a>
					)}
					{linkedin && (
						<a
							className="flex justify-center rounded-full bg-dark-1 p-2 transition-all duration-300 ease-out hover:bg-blue focus:bg-blue"
							href={linkedin ? linkedin : '#'}
							target="_blank"
							rel="noreferrer"
						>
							<FiLinkedin size={20} />
						</a>
					)}
					{facebook && (
						<a
							className="flex justify-center rounded-full bg-dark-1 p-2 transition-all duration-300 ease-out hover:bg-blue focus:bg-blue"
							href={facebook ? facebook : '#'}
							target="_blank"
							rel="noreferrer"
						>
							<FiFacebook size={20} />
						</a>
					)}
					{twitter && (
						<a
							className="flex justify-center rounded-full bg-dark-1 p-2 transition-all duration-300 ease-out hover:bg-blue focus:bg-blue"
							href={twitter ? twitter : '#'}
							target="_blank"
							rel="noreferrer"
						>
							<FiTwitter size={20} />
						</a>
					)}
				</div>
				<div className="text-center">
					<h1 className="mb-1 text-3xl font-medium">{name}</h1>
					<h6 className="text-md font-extralight text-gray">{subtitle}</h6>
				</div>
			</div>
		</>
	);
};

export default TeamMemberCard;
