import React from 'react';
import NavLink from './NavLink';
import { FiTwitter, FiFacebook } from 'react-icons/fi';

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = ({}) => {
	return (
		<>
			<div className='px-4 w-[8%] py-10 flex flex-col justify-between h-full items-center fixed top-0 left-0'>
				<div>
					<div>
						<h1 className='text-lg text-center'>Logo</h1>
					</div>
					<div className='-rotate-90 flex gap-8 items-center mt-64'>
						<NavLink href='/team'>Team</NavLink>
						<NavLink href='/schedule'>Schedule</NavLink>
						<NavLink href='/projects'>Projects</NavLink>
						<NavLink href='/'>Home</NavLink>
					</div>
				</div>
				<div className='flex flex-col items-center gap-8 pb-5'>
					<a href='#'>
						<FiTwitter size={26} />
					</a>
					<a href='#'>
						<FiFacebook size={26} />
					</a>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
