import Image from 'next/image';
import React from 'react';
import { Project } from '../types';
import Button from './Button';

interface ProjectCardProps {
	project: Project;
	index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
	return (
		<>
			<div className='flex flex-col border-[1px] md:min-h-[540px] border-gray p-6 hover:border-white hover:shadow-md hover:shadow-white transition-all duration-300 ease-out mb-10'>
				<div className='flex items-center justify-between mb-20'>
					<p className='text-lg'>
						{`${index}`.length === 1 ? `0${index + 1}` : index + 1}
					</p>
					<div>
						<Image
							src={project.logo}
							height={60}
							width={60}
							alt={project.title}
						/>
					</div>
				</div>
				<div className='flex-1 flex flex-col justify-between'>
					<div>
						<h5 className='uppercase font-medium text-3xl mb-3 max-w-[78%]'>
							{project.title}
						</h5>
						<h6 className='uppercase text-blue mb-10'>{project.domain}</h6>
						<p className='text-sm text-gray pb-5 lh-15 mb-5'>
							{project.description}
						</p>
					</div>

					<div className='text-right'>
						<Button isExternal size='sm' href={project.link}>
							View
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectCard;
