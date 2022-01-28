import React from 'react';
import Image from 'next/image';
import { FiTwitter, FiFacebook, FiLinkedin, FiGithub } from 'react-icons/fi';

interface TeamCardProps {
    coverPic: string;
    name: string;
    subtitle: string;
}

const TeamCard: React.FC<TeamCardProps> = ({coverPic, name, subtitle}) => {
	return (
		<>
			<div className='p-6 transition-all duration-300 ease-out'>
				<div className='mb-10 flex items-center'>
					<Image src={coverPic} alt={name} height={319} width={342}/>
				</div>
                <div className='flex justify-center gap-1 mb-10'>
                    <div className='border-[1px] border-gray flex justify-center p-2'><a href='#'><FiFacebook size={20} /></a></div>
                    <div className='border-[1px] border-gray flex justify-center p-2'><a href='#'><FiTwitter size={20} /></a></div>
                    <div className='border-[1px] border-gray flex justify-center p-2'><a href='#'><FiLinkedin size={20} /></a></div>
                    <div className='border-[1px] border-gray flex justify-center p-2'><a href='#'><FiGithub size={20} /></a></div>
                </div>
				<div className='text-center'>
					<h1 className='font-medium text-3xl mb-3'>{name}</h1>
					<h6 className='font-extralight text-md'>{subtitle}</h6>
				</div>
			</div>
		</>
	);
};

export default TeamCard;