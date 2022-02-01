import React from 'react';
import Button from './Button';
import { HiMenuAlt1 } from 'react-icons/hi';
import { FaDiscord } from 'react-icons/fa';

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
				<div className='flex items-center gap-x-3'>
					<div className='flex items-center gap-x-3'>
						<a
							className='md:hidden bg-blue hover:bg-blue focus:bg-blue rounded-full flex justify-center p-3 transition-all duration-300 ease-out'
							href='#'>
							<FaDiscord size={20} />
						</a>
						<Button className='hidden md:block' href='#'>
							Join Discord
						</Button>
					</div>
					
					<Button variant='white' className='hidden md:block' href='/schedule'>
						Schedule
					</Button>
					<Button href='https://forms.gle/qGXawKSGnFVdTqSW8'>
						Register Now
					</Button>
				</div>
			</div>
		</>
	);
};

export default Header;
