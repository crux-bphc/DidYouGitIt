import React from 'react';
import TimeBubble from './TimeBubble';

interface EventCardProps {}

const EventCard: React.FC<EventCardProps> = ({}) => {
	return (
		<>
			<div className="relative mb-4 rounded-sm bg-dark-1 px-4 py-4 md:mb-0">
				<div className="absolute right-0 -top-10 md:hidden">
					<TimeBubble size="sm" startTime="09:00 AM" endTime="10:00 AM" />
				</div>
				<h1 className="mt-6 mb-3 text-[20px] uppercase">Event 1 </h1>
				<p className="wrap mb-3 text-sm text-gray">
					Sed a augue nec purus lobortis pretium. Class aptent taciti sociosqu
					ad litora torquent per conubia
				</p>
				<div className="flex items-center justify-end">
					<button className="rounded-sm bg-blue py-2 px-4 text-sm font-medium text-white transition-all duration-300 ease-out hover:opacity-80">
						View
					</button>
				</div>
			</div>
		</>
	);
};

export default EventCard;
