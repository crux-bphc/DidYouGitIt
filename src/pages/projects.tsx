import clsx from 'clsx';
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { lgColumns, mdColumns } from '../utils/grid';

interface ProjectsPageProps {}

const ProjectsPage: React.FC<ProjectsPageProps> = ({}) => {
	return (
		<>
			<div className='max-w-6xl mx-auto gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:pb-6 p-4'>
				<h1 className='text-4xl my-5 md:text-[54px] md:mb-10 font-extrabold'>
					Projects
				</h1>

				{Array(9)
					.fill(0)
					.map((_, i) => {
						const lgColumn = lgColumns[(i % 3) + 1];
						const mdColumn = mdColumns[(i % 2) + 1];

						return (
							<div
								key={i}
								className={clsx([
									lgColumn.start,
									lgColumn.end,
									mdColumn.start,
									mdColumn.end,
									'col-start-1 col-end-2',
								])}>
								<ProjectCard />
							</div>
						);
					})}
			</div>
		</>
	);
};

export default ProjectsPage;
