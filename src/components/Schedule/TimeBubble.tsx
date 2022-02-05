import clsx from 'clsx';
import React from 'react';

interface TimeBubbleProps {
	startTime?: string;
	endTime?: string;
	size?: 'md' | 'sm';
}

const TimeBubble: React.FC<TimeBubbleProps> = ({
	startTime,
	endTime,
	size = 'md',
}) => {
	return (
		<>
			<div
				className={clsx(
					'relative grid place-items-center rounded-full border-2 border-dashed border-blue bg-dark-1 px-4 py-4 text-center',
					size === 'md' && 'h-[6.5rem] w-[6.5rem] lg:h-[8rem] lg:w-[8rem]',
					size === 'sm' && 'h-[5.85rem] w-[5.85rem]'
				)}
			>
				<div className="border-2-2 absolute left-[50%] -z-10 hidden h-[20rem] border border-dashed border-blue md:block" />
				<div>
					<div className="flex items-center justify-evenly gap-1">
						<p
							className={clsx([
								'text-gray lg:text-lg',
								size === 'sm' && 'text-sm',
							])}
						>
							{startTime.split(' ')[0]}
						</p>
						<p className={clsx(['text-xs uppercase text-gray'])}>
							{startTime.split(' ')[1]}
						</p>
					</div>
					<div className="flex items-center justify-evenly gap-1">
						<p
							className={clsx([
								'text-gray lg:text-lg',
								size === 'sm' && 'text-sm',
							])}
						>
							{endTime.split(' ')[0]}
						</p>
						<p className={clsx(['text-xs uppercase text-gray'])}>
							{endTime.split(' ')[1]}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default TimeBubble;
