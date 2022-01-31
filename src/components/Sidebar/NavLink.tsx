import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface NavLinkProps {
	href: string;
	onClick?: () => void;
	className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({
	children,
	href,
	onClick,
	className,
}) => {
	const router = useRouter();
	return (
		<>
			<Link href={href}>
				<a
					onClick={onClick}
					className={clsx([
						router.pathname === href && 'text-blue',
						'w-max',
						className,
					])}>
					{children}
				</a>
			</Link>
		</>
	);
};

export default NavLink;
