import clsx from 'clsx';
import React from 'react';
import ProjectCard from '../components/ProjectCard';

interface ProjectsPageProps {}

const lgColumns = {
	1: {
		start: 'col-start-1',
		end: 'col-end-2',
	},
	2: {
		start: 'col-start-2',
		end: 'col-end-3',
	},
	3: {
		start: 'col-start-3',
		end: 'col-end-4',
	},
};

const ProjectsPage: React.FC<ProjectsPageProps> = ({}) => {
	return (
		<>
			<div className='max-w-6xl mx-auto gap-5 grid grid-cols-3 lg:pb-6'>
				<h1 className='text-[54px] mb-10 font-extrabold'>Projects</h1>

				{Array(9)
					.fill(0)
					.map((_, i) => {
						const column = lgColumns[(i % 3) + 1];

						return (
							<div key={i} className={clsx([column.start, column.end])}>
								<ProjectCard />
							</div>
						);
					})}
			</div>
		</>
	);
};

export default ProjectsPage;
