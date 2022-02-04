import React from 'react';
import Button from './Button';
import { HiMenuAlt1 } from 'react-icons/hi';
import { FaDiscord } from 'react-icons/fa';
import Image from 'next/image';

interface HeaderProps {
	onOpen?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpen }) => {
	return (
		<>
			<div className="sticky top-0 z-10 flex items-center justify-between bg-dark-2 py-5 px-3 md:static md:bg-transparent md:px-8 lg:min-h-[6rem] lg:justify-end lg:py-4">
				<div className="flex items-center gap-5 lg:hidden">
					<HiMenuAlt1 onClick={onOpen} size={25} />
					<Image
						className="block cursor-pointer"
						src={'/logo.png'}
						height={30}
						width={75}
						alt="Logo"
					/>
				</div>
				<div className="flex items-center gap-x-3">
					<div className="flex items-center gap-x-3">
						<Button
							className="md:hidden"
							href="https://discord.gg/E4Cb78Rz"
							isExternal
						>
							<FaDiscord size={20} />
						</Button>

						<Button
							variant="white"
							isExternal
							className="hidden md:block"
							href="https://discord.gg/E4Cb78Rz"
						>
							Join Discord
						</Button>
					</div>

					<Button variant="white" className="hidden md:block" href="/schedule">
						Schedule
					</Button>
					<Button isExternal href="https://forms.gle/qGXawKSGnFVdTqSW8">
						Register Now
					</Button>
				</div>
			</div>
		</>
	);
};

export default Header;
