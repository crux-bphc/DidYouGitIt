import React from 'react';
import NavLink from './NavLink';
import { FiTwitter, FiFacebook } from 'react-icons/fi';
import clsx from 'clsx';
import {
	HiOutlineHome,
	HiOutlineInformationCircle,
	HiOutlineViewGrid,
	HiOutlineQuestionMarkCircle,
} from 'react-icons/hi';
import { TiFlowMerge } from 'react-icons/ti';
import { AiOutlineSchedule, AiOutlineTeam } from 'react-icons/ai';
import Divider from '../Divider';

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
					<div className={clsx(['flex-col flex gap-6 mt-20'])}>
						<NavLink
							icon={<HiOutlineHome size={24} />}
							onClick={onClose}
							href='/'>
							Home
						</NavLink>

						<NavLink
							icon={<HiOutlineInformationCircle size={24} />}
							onClick={onClose}
							href='/about'>
							About
						</NavLink>

						<Divider />

						<NavLink
							icon={<TiFlowMerge size={24} />}
							onClick={onClose}
							href='/workflow'>
							Workflow
						</NavLink>

						<NavLink
							icon={<HiOutlineViewGrid size={24} />}
							onClick={onClose}
							href='/projects'>
							Projects
						</NavLink>

						<Divider />

						<NavLink
							icon={<AiOutlineSchedule size={24} />}
							className='block lg:hidden'
							onClick={onClose}
							href='/schedule'>
							Schedule
						</NavLink>

						<NavLink
							icon={<AiOutlineTeam size={24} />}
							onClick={onClose}
							href='/team'>
							Team
						</NavLink>

						<NavLink
							icon={<HiOutlineQuestionMarkCircle size={24} />}
							onClick={onClose}
							href='/faqs'>
							FAQ's
						</NavLink>
					</div>
				</div>
				<div className='flex lg:items-center gap-6 pb-5'>
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
