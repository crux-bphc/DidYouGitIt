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
					'group h-[130px] w-[40vw] rounded-sm px-4 py-4 sm:w-[30vw] md:h-[auto] md:w-[125px]',
					'transition-all duration-300 ease-out hover:bg-blue',
					selected ? 'scale-105 bg-blue' : 'scale-100 bg-dark-1',
				])}
			>
				<div
					className={clsx([
						'-m-4 mb-3 w-3/4 rounded-sm py-4 pb-3 pl-4',
						'transition-all duration-300 ease-out group-hover:bg-white',
						selected ? 'bg-white' : 'bg-dark-2',
					])}
				>
					<p className="text-left text-xs uppercase text-gray transition-all duration-300 ease-out group-hover:text-blue">
						Day {day}
					</p>
				</div>
				<div className="mt-6 flex items-end gap-2 md:mt-0 md:justify-evenly md:gap-4">
					<p className="text-3xl text-white">
						{`${date}`.length === 1 ? `0${date}` : date}
					</p>
					<p className="text-lg uppercase text-white">{month}</p>
				</div>
			</div>
		);
	}
);

ScheduleCard.displayName = 'ScheduleCard';

export default ScheduleCard;
