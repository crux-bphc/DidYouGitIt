import React from 'react';
import NavLink from './NavLink';
import { FiTwitter, FiFacebook, FiLinkedin, FiInstagram } from 'react-icons/fi';
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
import Image from 'next/image';
import Link from 'next/link';
import SidebarIconLink from './SidebarIconLink';

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
					'flex flex-col items-center justify-between bg-dark-1',
					'lg:py-4',
					className,
				])}
			>
				<div>
					<div className="py-3 text-center">
						<Link href="/" passHref>
							<a>
								<Image
									className="block cursor-pointer"
									src={'/logo.png'}
									height={40}
									width={100}
									alt="Logo"
								/>
							</a>
						</Link>
					</div>

					<div
						className={clsx([
							'mt-20 flex flex-col gap-y-4 lg:px-6 lg:pr-10',
							navClassName,
						])}
					>
						<NavLink
							icon={<HiOutlineHome size={24} />}
							onClick={onClose}
							href="/"
						>
							Home
						</NavLink>

						<NavLink
							icon={<HiOutlineInformationCircle size={24} />}
							onClick={onClose}
							href="/about"
						>
							About
						</NavLink>

						<Divider />

						<NavLink
							icon={<TiFlowMerge size={24} />}
							onClick={onClose}
							href="/workflow"
						>
							Workflow
						</NavLink>

						<NavLink
							icon={<HiOutlineViewGrid size={24} />}
							onClick={onClose}
							href="/projects"
						>
							Projects
						</NavLink>

						<Divider />

						<NavLink
							icon={<AiOutlineSchedule size={24} />}
							className="block lg:hidden"
							onClick={onClose}
							href="/schedule"
						>
							Schedule
						</NavLink>

						<NavLink
							icon={<AiOutlineTeam size={24} />}
							onClick={onClose}
							href="/team"
						>
							Team
						</NavLink>

						<NavLink
							icon={<HiOutlineQuestionMarkCircle size={24} />}
							onClick={onClose}
							href="/faqs"
						>
							FAQ's
						</NavLink>
					</div>
				</div>
				<div className="flex gap-6 pb-5 md:grid md:grid-cols-2 lg:items-center">
					<SidebarIconLink
						href="https://twitter.com/AcmBphc"
						label="twitter-link"
						icon={<FiTwitter size={26} />}
					/>

					<SidebarIconLink
						href="https://www.facebook.com/pages/category/Software/ACM-BPHC-Chapter-650997138352022/"
						label="facebook-link"
						icon={<FiFacebook size={26} />}
					/>

					<SidebarIconLink
						href="https://in.linkedin.com/company/acm-bphc-chapter"
						label="linkedin-link"
						icon={<FiLinkedin size={26} />}
					/>

					<SidebarIconLink
						href="https://www.instagram.com/acm_bphc/"
						label="instagram-link"
						icon={<FiInstagram size={26} />}
					/>
				</div>
			</Component>
		</>
	);
};

export default Sidebar;
