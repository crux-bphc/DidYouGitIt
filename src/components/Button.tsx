import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

const sizes = {
	md: 'py-3 px-4 text-sm md:text-md md:py-4 md:px-6 font-semibold',
	sm: 'py-2 px-3 md:py-2 md:px-4 text-sm font-medium',
};

const variants = {
	blue: 'bg-blue text-white border-blue',
	white: 'bg-transparent text-white border-white',
};

interface ButtonProps {
	href: string;
	size?: keyof typeof sizes;
	variant?: keyof typeof variants;
	isExternal?: boolean;
	className?: string;
}

const Button: React.FC<ButtonProps> = ({
	href,
	children,
	size = 'md',
	variant = 'blue',
	isExternal = false,
	className,
}) => {
	const Component = isExternal ? 'a' : 'button';

	return (
		<>
			<Link href={href} passHref>
				<Component
					target={isExternal ? '_blank' : undefined}
					className={clsx([
						'rounded-sm border-2 transition-all duration-300 ease-out hover:opacity-80',
						sizes[size],
						variants[variant],
						className,
					])}
				>
					{children}
				</Component>
			</Link>
		</>
	);
};

export default Button;
