import React from 'react';
import DateBubble from './DateBubble';

interface EventCardProps {
	title: string;
	date: string;
	year: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, year }) => {
	return (
		<>
			<div
				className="relative mb-4 w-full rounded-sm bg-dark-1 px-4  py-4 md:mb-0 
							md:border md:border-gray md:bg-transparent md:hover:border-white md:hover:shadow-md md:hover:shadow-white"
			>
				<div className="absolute right-0 -top-10 md:hidden">
					<DateBubble size="sm" date={date} year={year} />
				</div>
				<h1 className="mt-12 mb-3 text-[20px] md:mt-6 md:text-center lg:mt-3">
					{title}
				</h1>
			</div>
		</>
	);
};

export default EventCard;
