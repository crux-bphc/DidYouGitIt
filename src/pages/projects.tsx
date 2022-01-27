import React from 'react';
import ProjectCard from '../components/ProjectCard';

interface ProjectsPageProps {}

const ProjectsPage: React.FC<ProjectsPageProps> = ({}) => {
	return (
		<>
			<div className='max-w-6xl mx-auto gap-5 grid grid-cols-3'>
				<h1 className='text-[54px] mb-10 font-extrabold'>Projects</h1>

				<div className='col-start-1 col-end-2'>
					<ProjectCard />
				</div>
				<div className='col-start-2 col-end-3'>
					<ProjectCard />
				</div>
				<div className='col-start-3 col-end-4'>
					<ProjectCard />
				</div>
			</div>
		</>
	);
};

export default ProjectsPage;
