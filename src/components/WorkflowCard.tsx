import React from 'react';
import clsx from 'clsx';
import {
	FaBookmark,
	FaCheck,
	FaRegistered,
	FaSortAmountUpAlt,
	FaThumbsUp,
} from 'react-icons/fa';

interface WorkflowCardProps {
	title: string;
	desc: string;
	orientation?: 'left' | 'right';
	icon: string;
}

const icons = {
	FaRegistered,
	FaThumbsUp,
	FaCheck,
	FaBookmark,
	FaSortAmountUpAlt,
};

const WorkflowCard: React.FC<WorkflowCardProps> = ({
	title,
	desc,
	orientation,
	icon,
}) => {
	const IconComponent = icons[icon];
	return (
		<>
			<div
				className={clsx([
					'relative mb-14 border border-gray py-4 hover:border-white hover:shadow-md hover:shadow-white',
					'grid-flow-dense-row grid grid-cols-7 transition-all duration-300 ease-out md:max-w-2xl',
					orientation === 'right' && 'pl-4 text-right',
					orientation === 'left' && 'pr-4',
				])}
			>
				<div
					className={clsx([
						'col-span-1 row-span-2 mt-7 flex justify-center ',
						orientation === 'right' && 'order-2',
					])}
				>
					<IconComponent size={24} />
				</div>
				<div
					className={clsx(['col-span-6', orientation === 'right' && 'order-1'])}
				>
					<h1 className="mt-6 mb-3 text-[20px] font-bold uppercase text-blue">
						{title}
					</h1>
					<p className="wrap mb-3 text-sm text-gray">{desc}</p>
				</div>
			</div>
		</>
	);
};

export default WorkflowCard;
