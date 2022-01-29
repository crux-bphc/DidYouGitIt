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
					'px-4 py-4 relative bg-dark-1 text-center border-2 border-blue rounded-full border-dashed grid place-items-center',
					size === 'md' && 'h-[6.5rem] w-[6.5rem] lg:h-[8rem] lg:w-[8rem]',
					size === 'sm' && 'h-[5.85rem] w-[5.85rem]'
				)}>
				<div className='border-2-2 h-[20rem] hidden md:block absolute left-[50%] border-blue border border-dashed -z-10' />
				<div>
					<div className='flex gap-1 justify-evenly items-center'>
						<p
							className={clsx([
								'text-gray lg:text-lg',
								size === 'sm' && 'text-sm',
							])}>
							{startTime.split(' ')[0]}
						</p>
						<p className={clsx(['text-xs text-gray uppercase'])}>
							{startTime.split(' ')[1]}
						</p>
					</div>
					<div className='flex gap-1 justify-evenly items-center'>
						<p
							className={clsx([
								'text-gray lg:text-lg',
								size === 'sm' && 'text-sm',
							])}>
							{endTime.split(' ')[0]}
						</p>
						<p className={clsx(['text-xs text-gray uppercase'])}>
							{endTime.split(' ')[1]}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default TimeBubble;
