import clsx from 'clsx';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import TeamCard from '../components/TeamCard';
import { lgColumns, mdColumns } from '../utils/grid';

export const getStaticProps: GetStaticProps = async () => {
	
	const data = [
		{
			coverPic: '/assets/rick.jpg',
			name: 'Crux',
			subtitle: 'Sidharth Anand',
			github: 'https://github.com/crux-bphc'
		},
		{
			coverPic: '/assets/rick.jpg',
			name: 'SWD Web',
			subtitle: 'Ashish AVS',
			github: 'https://github.com/Ashish-AVS/SWD-BPHC-Frontend'
		},
		{
			coverPic: '/assets/rick.jpg',
			name: 'SWD Android',
			subtitle: 'Aryan Arora',
			github: 'https://github.com/aryanarora180/SWD_BPHC'
		},
		{
			coverPic: '/assets/rick.jpg',
			name: 'Smart Campus',
			subtitle: 'Aditya Chopra',
			github: 'https://github.com/smart-campus-team'
		},
	]

	return {
		props: {
			data
		}
	}
};

interface ProjectsPageProps {
	data: any;
}

const TeamPage:	React.FC<ProjectsPageProps> = ({data}) => {
	return (
		<>
			<div className='max-w-6xl mx-auto gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:pb-6 p-4'>
				<h1 className='text-4xl my-4 lg:my-0 md:text-[54px] lg:mb-10 text-center lg:text-left font-extrabold'>
					Team
				</h1>

				{data.map((team, i) => {
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
								<TeamCard
									coverPic={team.coverPic}
									name={team.name}
									subtitle={team.subtitle}
									github={team.github}
								/>
							</div>
						);
					})}
			</div>
		</>
	);
};

export default TeamPage;
