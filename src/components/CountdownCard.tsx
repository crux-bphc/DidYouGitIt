import React from 'react';

interface CountdownCardProps {}

const CountdownCard: React.FC<CountdownCardProps> = ({}) => {
	return (
		<>
			<div className="bg-dark-1 px-4 py-4 text-center">
				<p className="md:text-md mb-3 text-sm uppercase text-gray">hours</p>
				<p className="text-3xl text-blue md:text-6xl">00</p>
			</div>
		</>
	);
};

export default CountdownCard;
