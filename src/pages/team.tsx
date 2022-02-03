import clsx from 'clsx';
import matter from 'gray-matter';
import { GetStaticProps, NextPage } from 'next';
import path from 'path';
import React from 'react';
import TeamCard from '../components/TeamCard';
import { lgColumns, mdColumns } from '../utils/grid';
import fs from 'fs';
import { Team } from '../types';

interface TeamPageProps {
	data: Team[];
}

const TeamPage: NextPage<TeamPageProps> = ({ data }) => {
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
							<TeamCard team={team} />
						</div>
					);
				})}
			</div>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const mdData = fs.readFileSync(path.join('data/team.md'), 'utf8');
	const { data } = matter(mdData);

	if (!data.team) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			data: data.team,
		},
	};
};

export default TeamPage;
