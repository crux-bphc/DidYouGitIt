import React from 'react';
import Button from './Button';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
	return (
		<>
			<div className='min-h-[8rem] px-8 flex items-center justify-end'>
				<Button href='/'>Register</Button>
			</div>
		</>
	);
};

export default Header;
