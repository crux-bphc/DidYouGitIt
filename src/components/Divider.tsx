import React from 'react';

interface DividerProps {}

const Divider: React.FC<DividerProps> = ({}) => {
	return (
		<>
			<hr className='bg-gray opacity-20' />
		</>
	);
};

export default Divider;
