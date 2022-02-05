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
	organizer: Team[];
	maintainer: Team[];
	tech: Team[];
	poc: Team[];
	design: Team[];
	publicity: Team[];
	content: Team[];
}

interface TeamSectionProps {
	data: Team[];
	title: string;
}

const TeamPage: NextPage<TeamPageProps> = ({
	organizer,
	maintainer,
	tech,
	poc,
	design,
	publicity,
	content
}) => {
	return (
		<>
			{organizer && <TeamSection data={organizer} title='Organizers'/>}
			{maintainer && <TeamSection data={maintainer} title='Maintainers'/>}
			{tech && <TeamSection data={tech} title='Website Developers'/>}
			{poc && <TeamSection data={poc} title='Points of Contact'/>}
			{design && <TeamSection data={design} title='Designers'/>}
			{publicity && <TeamSection data={publicity} title='Publicity Team'/>}
			{content && <TeamSection data={content} title='Content Team'/>}
		</>
	);
};

export const TeamSection: React.FC<TeamSectionProps> = ({data, title}) => {
	return (
		<div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 p-4 md:grid-cols-2 lg:grid-cols-3 lg:pb-6">
			<h1 className="my-4 text-center text-4xl font-extrabold md:text-[54px] lg:my-0 lg:mb-10 lg:text-left">
				{title}
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
					])}
				>
					<TeamCard team={team} />
				</div>
			);
			})}
		</div>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const mdData = fs.readFileSync(path.join('data/team.md'), 'utf8');
	const { data } = matter(mdData);

	return {
		props: {
			organizer: data.organizer,
			maintainer: data.maintainer,
			tech: data.tech,
			poc: data.poc,
			design: data.design,
			publicity: data.publicity,
			content: data.content,
		},
	};
};

export default TeamPage;
