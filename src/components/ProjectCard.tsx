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
			<div className="mb-10 flex flex-col border-[1px] border-gray p-6 transition-all duration-300 ease-out hover:border-white hover:shadow-md hover:shadow-white md:min-h-[550px]">
				<div className="mb-20 flex items-center justify-between">
					<p className="text-lg">
						{(index + 1).toString().length == 1 ? '0' + (index + 1) : index + 1}
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
				<div className="flex flex-1 flex-col justify-between">
					<div>
						<div className="min-h-[150px]">
							<h5 className="mb-3 max-w-[78%] text-3xl font-medium uppercase">
								{project.title}
							</h5>
							<h6 className="mb-10 uppercase text-blue">
								{project.domain.map((domain, i) => (
									<div key={i}>{domain}</div>
								))}
							</h6>
						</div>

						<p className="lh-15 mb-5 pb-5 text-sm text-gray">
							{project.description}
						</p>
					</div>

					<div className="text-right">
						<Button isExternal size="sm" href={project.link}>
							View
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectCard;
