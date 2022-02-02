import React from 'react';
import clsx from 'clsx';
import * as Icons from 'react-icons/fa';

interface WorkflowCardProps {
    title: string;
    desc: string;
    orientation?: 'left' | 'right';
	icon: string;
}

const WorkflowCard: React.FC<WorkflowCardProps> = ({title, desc, orientation, icon}) => {
	const IconComponent = Icons[icon];
	return (
		<>
			<div className={clsx(['py-4 relative mb-14 border border-gray hover:border-white hover:shadow-md hover:shadow-white', 
				'transition-all duration-300 ease-out md:max-w-2xl grid grid-cols-7 grid-flow-dense-row', 
				orientation === 'right' && 'text-right pl-4', orientation === 'left' && 'pr-4'
			])}>
				<div className={clsx(['grid row-span-2 col-span-1 place-items-center', orientation === 'right' && 'order-2'])}>
					<IconComponent size={20} />
				</div>
				<div className={clsx(['col-span-6', orientation === 'right' && 'order-1'])}>
					<h1 className='font-bold mt-6 uppercase text-[20px] mb-3'>{title}</h1>
					<p className='mb-3 wrap text-gray text-sm'>
						{desc}
					</p>
				</div>
			</div>
		</>
	);
};

export default WorkflowCard;