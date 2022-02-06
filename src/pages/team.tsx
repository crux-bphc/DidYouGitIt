import matter from 'gray-matter';
import { GetStaticProps, NextPage } from 'next';
import path from 'path';
import React from 'react';
import fs from 'fs';
import { Team } from '../types';
import TeamSection from '../components/TeamSection';

interface TeamPageProps {
	data: {
		[key: string]: Team[];
	};
}

const TeamPage: NextPage<TeamPageProps> = ({ data }) => {
	return (
		<>
			{Object.keys(data).map((key) => {
				return <TeamSection team={data[key] as any} key={key} />;
			})}
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const mdData = fs.readFileSync(path.join('data/team.md'), 'utf8');
	const { data } = matter(mdData);

	if (!data.teamData) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			data: data.teamData,
		},
	};
};

export default TeamPage;
