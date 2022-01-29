import React from 'react';
import Image from 'next/image';
import { FiTwitter, FiFacebook, FiLinkedin, FiGithub } from 'react-icons/fi';

interface TeamCardProps {
	coverPic: string;
	name: string;
	subtitle: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ coverPic, name, subtitle }) => {
	return (
		<>
			<div className='py-6 transition-all duration-300 ease-out'>
				<div className='mb-5 flex justify-center items-center'>
					<Image src={coverPic} alt={name} height={319} width={342} />
				</div>
				<div className='flex items-center justify-center gap-1 mb-4'>
					<a
						className='bg-dark-1 hover:bg-blue focus:bg-blue rounded-full flex justify-center p-2 transition-all duration-300 ease-out'
						href='#'>
						<FiFacebook size={20} />
					</a>
					<a
						className='bg-dark-1 hover:bg-blue focus:bg-blue rounded-full flex justify-center p-2 transition-all duration-300 ease-out'
						href='#'>
						<FiTwitter size={20} />
					</a>
					<a
						className='bg-dark-1 hover:bg-blue focus:bg-blue rounded-full flex justify-center p-2 transition-all duration-300 ease-out'
						href='#'>
						<FiLinkedin size={20} />
					</a>
					<a
						className='bg-dark-1 hover:bg-blue focus:bg-blue rounded-full flex justify-center p-2 transition-all duration-300 ease-out'
						href='#'>
						<FiGithub size={20} />
					</a>
				</div>
				<div className='text-center'>
					<h1 className='font-medium text-3xl mb-1'>{name}</h1>
					<h6 className='font-extralight text-gray text-md'>{subtitle}</h6>
				</div>
			</div>
		</>
	);
};

export default TeamCard;
