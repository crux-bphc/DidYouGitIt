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
					'mb-10 flex justify-between items-center',
					orientation === 'left' && 'flex-row-reverse',
				])}>
				<div className='order-1 w-1/3'></div>
				<div className='z-20 flex items-center order-1'>
					<TimeBubble startTime='09:00 AM' endTime='10:00 AM' />
				</div>
				<div className='order-1 w-1/3'>
					<EventCard />
				</div>
			</div>
		</>
	);
};

export default ScheduleItem;
