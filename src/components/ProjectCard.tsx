import React from 'react';
import Button from './Button';

interface ProjectCardProps {}

const ProjectCard: React.FC<ProjectCardProps> = ({}) => {
	return (
		<>
			<div className='border-[1px] border-gray p-6 hover:border-white hover:shadow-md hover:shadow-white transition-all duration-300 ease-out'>
				<div className='flex items-center justify-between mb-20'>
					<p className='text-lg'>01</p>
					<div>
						Club <br />
						Logo
					</div>
				</div>
				<div>
					<h5 className='uppercase font-medium text-3xl mb-3 max-w-[78%]'>
						Project Name / Repo Name
					</h5>
					<h6 className='uppercase text-blue mb-10'>Android</h6>
					<p className='text-sm text-gray pb-5 lh-15 mb-5'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
						sit amet augue diam. Aliquam tincidunt nisl vitae lobortis
						convallis. Nullam sollicitudin diam vitae sapien tincidunt varius
					</p>
					<div className='text-right'>
						<Button size='sm' href='/'>
							View
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectCard;
