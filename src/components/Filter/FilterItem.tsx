import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { HiArrowRight } from 'react-icons/hi';

interface FilterItemProps {
	isActive?: boolean;
	onClick?: () => void;
}

const FilterItem: React.FC<FilterItemProps> = ({
	children,
	isActive,
	onClick,
}) => {
	return (
		<>
			<motion.button
				onClick={onClick}
				initial={{
					scale: 1,
				}}
				animate={{
					scale: isActive ? 1.15 : 1,
				}}
				className={clsx([isActive ? '!text-blue' : 'text-gray', 'w-max'])}
				whileHover={{
					scale: 1.15,
					color: 'var(--color-white)',
				}}
				transition={{ type: 'spring', stiffness: 380 }}
			>
				<div className="flex items-center gap-x-2">
					<span>{children}</span>
				</div>
			</motion.button>
		</>
	);
};

export default FilterItem;
