import clsx from 'clsx';
import React from 'react';
import EventCard from './EventCard';
import DateBubble from './DateBubble';

interface ScheduleItemProps {
	orientation: 'left' | 'right';
	date: string;
	title: string;
	year: string;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({
	orientation = 'right',
	date,
	title,
	year,
}) => {
	return (
		<>
			<div
				className={clsx([
					'mb-10 md:flex md:items-center md:gap-x-6 lg:justify-between',
					orientation === 'left' && 'lg:flex-row-reverse',
				])}
			>
				<div className="order-1 hidden md:block lg:w-1/3"></div>
				<div className="z-20 order-1 hidden items-center justify-center md:flex lg:w-1/3">
					<DateBubble date={date} year={year}/>
				</div>
				<div className="order-1 lg:w-1/3">
					<EventCard title={title} date={date} year={year}/>
				</div>
			</div>
		</>
	);
};

export default ScheduleItem;
