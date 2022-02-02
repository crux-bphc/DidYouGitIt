import React from 'react';
import clsx from 'clsx';

interface WorkflowCardProps {
    title: string;
    desc: string;
    orientation?: 'left' | 'right';
	icon?: string;
}

const WorkflowCard: React.FC<WorkflowCardProps> = ({title, desc, orientation}) => {
	return (
		<>
			<div className={clsx(['p-4 bg-dark-1 relative mb-14 border border-gray hover:border-white hover:shadow-md hover:shadow-white transition-all duration-300 ease-out md:max-w-2xl', orientation === 'right' && 'text-right'])}>
				<h1 className='font-bold mt-6 uppercase text-[20px] mb-3'>{title}</h1>
				<p className='mb-3 wrap text-gray text-sm'>
					{desc}
				</p>
			</div>
		</>
	);
};

export default WorkflowCard;