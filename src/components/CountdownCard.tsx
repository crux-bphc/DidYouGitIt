import React from 'react';

interface CountdownCardProps {
	unit: 'days' | 'hours' | 'minutes' | 'seconds';
	value: number;
}

const CountdownCard: React.FC<CountdownCardProps> = ({unit, value}) => {
	return (
		<>
			<div className="bg-dark-1 px-4 py-4 text-center">
				<p className="md:text-md mb-3 text-sm uppercase text-gray">{unit}</p>
				<p className="text-3xl text-blue md:text-6xl">{value.toString().length == 1 ? '0' + value: value}</p>
			</div>
		</>
	);
};

export default CountdownCard;
