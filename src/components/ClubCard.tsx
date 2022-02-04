import Image from 'next/image';
import React from 'react';
import { Club } from '../types';

interface ClubCardProps {
	club: Club;
}

const ClubCard: React.FC<ClubCardProps> = ({ club }) => {
	return (
		<div className="flex w-full flex-col items-center rounded bg-dark-1 p-5 sm:w-max sm:bg-transparent">
			<Image
				className="opacity-70"
				src={club.image}
				height={club.style.height}
				width={club.style.width}
				alt="CRUX-BPHC"
			/>
			<h5 className="mt-2 text-center font-semibold text-gray">{club.name}</h5>
		</div>
	);
};

export default ClubCard;
