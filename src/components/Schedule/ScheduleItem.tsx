import clsx from 'clsx';
import React from 'react';
import EventCard from './EventCard';
import TimeBubble from './TimeBubble';

interface ScheduleItemProps {
	orientation?: 'left' | 'right';
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({
	orientation = 'right',
}) => {
	return (
		<>
			<div
				className={clsx([
					'mb-10 flex lg:justify-between items-center gap-x-6',
					orientation === 'left' && 'lg:flex-row-reverse',
				])}>
				<div className='order-1 lg:w-1/3 hidden md:block'></div>
				<div className='z-20 hidden md:flex  lg:w-1/3 justify-center items-center order-1'>
					<TimeBubble startTime='09:00 AM' endTime='10:00 AM' />
				</div>
				<div className='order-1 lg:w-1/3'>
					<EventCard />
				</div>
			</div>
		</>
	);
};

export default ScheduleItem;
