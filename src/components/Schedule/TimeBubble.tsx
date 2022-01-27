import React from 'react';

interface TimeBubbleProps {
	startTime?: string;
	endTime?: string;
}

const TimeBubble: React.FC<TimeBubbleProps> = ({ startTime, endTime }) => {
	return (
		<>
			<div className='px-4 py-4 h-[8rem] w-[8rem] bg-dark-1 text-center border-2 border-blue rounded-full border-dashed grid place-items-center'>
				<div>
					<div className='flex gap-1 justify-evenly items-center'>
						<p className='text-gray text-lg'>{startTime.split(' ')[0]}</p>
						<p className='text-xs text-gray uppercase'>
							{startTime.split(' ')[1]}
						</p>
					</div>
					<div className='flex gap-1 justify-evenly items-center'>
						<p className='text-gray text-lg'>{endTime.split(' ')[0]}</p>
						<p className='text-xs text-gray uppercase'>
							{endTime.split(' ')[1]}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default TimeBubble;
