import React from 'react';

interface SidebarIconLinkProps {
	href: string;
	label: string;
	icon: React.ReactNode;
}

const SidebarIconLink: React.FC<SidebarIconLinkProps> = ({
	href,
	label,
	icon,
}) => {
	return (
		<>
			<a
				href={href}
				aria-label={label}
				className="transition-all duration-300 ease-out hover:text-blue focus:text-blue"
				target="_blank"
				rel="noreferrer"
			>
				{icon}
			</a>
		</>
	);
};

export default SidebarIconLink;
