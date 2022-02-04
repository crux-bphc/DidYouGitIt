import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface NavLinkProps {
	href: string;
	onClick?: () => void;
	className?: string;
	icon: React.ReactElement;
}

const NavLink: React.FC<NavLinkProps> = ({
	children,
	href,
	onClick,
	className,
	icon,
}) => {
	const router = useRouter();
	return (
		<>
			<Link href={href}>
				<a
					onClick={onClick}
					className={clsx([
						router.pathname === href && 'text-blue',
						'flex w-max items-center gap-x-4',
						className,
					])}
				>
					<span>{icon}</span>
					<span className="text-xl md:text-base">{children}</span>
				</a>
			</Link>
		</>
	);
};

export default NavLink;
