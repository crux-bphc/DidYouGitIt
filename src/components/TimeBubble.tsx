import React from 'react';

interface TimeBubbleProps {}

const TimeBubble: React.FC<TimeBubbleProps> = ({}) => {
	return (
		<>
			<div className='px-4 py-4 bg-dark-1 text-center border-blue rounded-full border-dashed '>
                <div className='flex gap-1 justify-evenly items-center'>
                    <p className='text-gray text-lg'>09:00</p>
                    <p className='text-xs text-gray'>AM</p>
                </div>
                <div className='flex gap-1 justify-evenly items-center'>
                    <p className='text-gray text-lg'>10:00</p>
                    <p className='text-xs text-gray'>AM</p>
                </div>
				
				
			</div>
		</>
	);
};

export default TimeBubble;