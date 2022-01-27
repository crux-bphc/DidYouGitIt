import Link from 'next/link';
import React from 'react';

const sizes = {
	md: 'py-4 px-6 font-semibold',
	sm: 'py-2 px-4 text-sm font-medium',
};

interface ButtonProps {
	href: string;
	size?: keyof typeof sizes;
}

const Button: React.FC<ButtonProps> = ({ href, children, size = 'md' }) => {
	return (
		<>
			<Link href={href} passHref>
				<button
					className={`${sizes[size]} bg-blue text-white rounded-sm hover:opacity-80 transition-all duration-300 ease-out`}>
					{children}
				</button>
			</Link>
		</>
	);
};

export default Button;
