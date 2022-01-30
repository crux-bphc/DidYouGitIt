import React from 'react';
import Button from './Button';
import { HiMenuAlt1 } from 'react-icons/hi';

interface HeaderProps {
	onOpen?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpen }) => {
	return (
		<>
			<div className='z-10 lg:min-h-[8rem] py-5 lg:py-5 px-3 md:px-8 flex items-center justify-between lg:justify-end md:static md:bg-transparent bg-dark-2 sticky top-0'>
				<div className='flex items-center gap-5 lg:hidden'>
					<HiMenuAlt1 onClick={onOpen} size={25} />
					<p>LOGO</p>
				</div>
				<Button href='https://forms.gle/qGXawKSGnFVdTqSW8'>Register</Button>
			</div>
		</>
	);
};

export default Header;
