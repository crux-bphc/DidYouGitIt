import React from 'react';
import NavLink from './NavLink';
import { FiTwitter, FiFacebook } from 'react-icons/fi';
import clsx from 'clsx';

interface SidebarProps {
	className?: string;
	onClose?: () => void;
	show?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ className, onClose }) => {
	return (
		<>
			<div
				onClick={() => onClose?.()}
				className='fixed z-20 bg-dark-1 opacity-70 h-full w-full lg:hidden'></div>
			<div
				className={clsx([
					'z-30 pl-14 lg:pl-0 px-2 sm:px-4 md:px-10 py-10 flex flex-col justify-between h-full lg:items-center fixed top-0 left-0',
					'bg-dark-1 lg:bg-transparent min-w-[75vw] sm:min-w-[45vw] md:min-w-[35vw] lg:min-w-[inherit] lg:w-[9.5%]',
					className,
				])}>
				<div>
					<div>
						<h1 className='text-lg lg:text-center'>Logo</h1>
					</div>
					<div
						className={clsx([
							'flex-col-reverse lg:flex-row lg:-rotate-90 flex gap-6 lg:items-center mt-20 lg:mt-64',
						])}>
						<NavLink onClick={onClose} href='/faqs'>
							FAQ's
						</NavLink>
						<NavLink onClick={onClose} href='/team'>
							Team
						</NavLink>
						<NavLink
							className='block lg:hidden'
							onClick={onClose}
							href='/schedule'>
							Schedule
						</NavLink>
						<NavLink onClick={onClose} href='/projects'>
							Projects
						</NavLink>
						<NavLink onClick={onClose} href='/about'>
							About Us
						</NavLink>
						<NavLink onClick={onClose} href='/'>
							Home
						</NavLink>
					</div>
				</div>
				<div className='flex flex-col lg:items-center gap-6 pb-5'>
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
