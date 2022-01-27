import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface NavLinkProps {
	href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ children, href }) => {
	const router = useRouter();
	return (
		<>
			<Link href={href}>
				<a className={router.pathname === href ? 'text-blue' : ''}>
					{children}
				</a>
			</Link>
		</>
	);
};

export default NavLink;
