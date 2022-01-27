import clsx from 'clsx';
import React from 'react';

interface ScheduleCardProps {
	day: number | string;
	date: number | string;
	month: number | string;
	selected?: boolean;
}

const ScheduleCard = React.forwardRef<HTMLDivElement, ScheduleCardProps>(
	(props, ref) => {
		const { day, date, month, selected } = props;

		return (
			<div
				ref={ref}
				className={clsx([
					'group w-[125px] px-4 py-4 rounded-sm',
					'hover:bg-blue transition-all duration-300 ease-out',
					selected ? 'bg-blue scale-105' : 'bg-dark-1 scale-100',
				])}>
				<div
					className={clsx([
						'w-3/4 pb-3 mb-3 rounded-sm -m-4 py-4 pl-4',
						'group-hover:bg-white transition-all duration-300 ease-out',
						selected ? 'bg-white' : 'bg-dark-2',
					])}>
					<p className='uppercase text-gray text-xs text-left group-hover:text-blue transition-all duration-300 ease-out'>
						Day {day}
					</p>
				</div>
				<div className='flex gap-4 justify-evenly items-end'>
					<p className='text-3xl text-white'>
						{`${date}`.length === 1 ? `0${date}` : date}
					</p>
					<p className='uppercase text-lg text-white'>{month}</p>
				</div>
			</div>
		);
	}
);

ScheduleCard.displayName = 'ScheduleCard';

export default ScheduleCard;
