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
import { motion, MotionProps } from 'framer-motion';

interface SidebarProps extends MotionProps {
	className?: string;
	navClassName?: string;
	onClose?: () => void;
	isMotion?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
	className,
	onClose,
	navClassName,
	isMotion,
	initial,
	animate,
	exit,
	transition,
}) => {
	const Component = isMotion ? motion.aside : 'aside';

	return (
		<>
			<Component
				initial={initial}
				animate={animate}
				exit={exit}
				transition={transition}
				className={clsx([
					'flex flex-col items-center bg-dark-1 justify-between',
					'lg:py-4 lg:px-6 lg:pr-10',
					className,
				])}>
				<div>
					<div className='text-center'>Logo</div>
					<div className={clsx(['flex-col flex gap-y-4 mt-20', navClassName])}>
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
			</Component>
		</>
	);
};

export default Sidebar;
