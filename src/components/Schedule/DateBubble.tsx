import clsx from 'clsx';
import React from 'react';

interface DateBubbleProps {
	date: string;
	year: string;
	size?: 'md' | 'sm';
}

const DateBubble: React.FC<DateBubbleProps> = ({ date, year, size = 'md' }) => {
	return (
		<>
			<div
				className={clsx(
					'relative grid place-items-center rounded-full border-2 border-dashed border-blue bg-dark-1 px-4 py-4 text-center',
					size === 'md' && 'h-[6.5rem] w-[6.5rem] lg:h-[8rem] lg:w-[8rem]',
					size === 'sm' && 'h-[5.25rem] w-[5.25rem]'
				)}
			>
				<div className="border-2-2 absolute left-[50%] -z-10 hidden h-[12rem] border border-dashed border-blue md:block" />
				<div>
					<div className="flex items-center justify-evenly gap-1">
						<p
							className={clsx([
								'text-gray lg:text-lg',
								size === 'sm' && 'text-sm',
							])}
						>
							{date}
						</p>
					</div>
					<div className="flex items-center justify-evenly gap-1">
						<p
							className={clsx([
								'text-gray lg:text-lg',
								size === 'sm' && 'text-sm',
							])}
						>
							{year}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default DateBubble;
