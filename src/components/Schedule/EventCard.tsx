import React from 'react';

interface EventCardProps {}

const EventCard: React.FC<EventCardProps> = ({}) => {
	return (
		<>
			<div className='px-4 py-4 bg-dark-1 rounded-sm'>
				<h1 className='mt-6 uppercase text-[20px] mb-3'>Event 1 </h1>
				<p className=' mb-3 text-gray text-sm'>
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
