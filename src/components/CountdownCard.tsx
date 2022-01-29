import React from 'react';

interface CountdownCardProps {}

const CountdownCard: React.FC<CountdownCardProps> = ({}) => {
	return (
		<>
			<div className='px-4 py-4 text-center bg-dark-1'>
				<p className='uppercase mb-3 text-gray text-sm md:text-md'>hours</p>
				<p className='text-3xl md:text-6xl text-gray'>00</p>
			</div>
		</>
	);
};

export default CountdownCard;
