import Image from 'next/image';
import React from 'react';
import { Club } from '../types';

interface ClubCardProps {
	club: Club;
}

const ClubCard: React.FC<ClubCardProps> = ({ club }) => {
	return (
		<div className='flex flex-col items-center bg-dark-1 sm:bg-transparent w-full sm:w-max p-5 rounded'>
			<Image
				className='opacity-70'
				src={club.image}
				height={club.style.height}
				width={club.style.width}
				alt='CRUX-BPHC'
			/>
			<h5 className='mt-2 text-center text-gray font-semibold'>{club.name}</h5>
		</div>
	);
};

export default ClubCard;
