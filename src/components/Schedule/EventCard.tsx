import React from 'react';
import TimeBubble from './TimeBubble';

interface EventCardProps {}

const EventCard: React.FC<EventCardProps> = ({}) => {
	return (
		<>
			<div className='px-4 mb-4 md:mb-0 py-4 bg-dark-1 relative rounded-sm'>
				<div className='md:hidden absolute right-0 -top-10'>
					<TimeBubble size='sm' startTime='09:00 AM' endTime='10:00 AM' />
				</div>
				<h1 className='mt-6 uppercase text-[20px] mb-3'>Event 1 </h1>
				<p className='mb-3 wrap text-gray text-sm'>
					Sed a augue nec purus lobortis pretium. Class aptent taciti sociosqu
					ad litora torquent per conubia
				</p>
				<div className='flex items-center justify-end'>
					<button className='py-2 px-4 text-sm font-medium bg-blue text-white rounded-sm hover:opacity-80 transition-all duration-300 ease-out'>
						View
					</button>
				</div>
			</div>
		</>
	);
};

export default EventCard;
