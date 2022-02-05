import matter from 'gray-matter';
import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import path from 'path';
import React from 'react';
import fs from 'fs';
import { Club } from '../types';
import { marked } from 'marked';
import ClubCard from '../components/ClubCard';

interface AboutPageProps {
	content: string;
	data: {
		organizers: Club[];
		participants: Club[];
	};
}

const AboutUsPage: NextPage<AboutPageProps> = ({ content, data }) => {
	return (
		<>
			<div className="-mt-5 p-4 md:px-10 lg:mt-0 lg:pl-36">
				<div className="prose prose-invert max-w-full md:max-w-4xl">
					<h1 className="mt-14 mb-3 text-4xl font-bold sm:text-5xl md:text-[50px] lg:mb-7 lg:text-[60px] xl:text-[80px]">
						About
					</h1>
					<div
						className="text-gray"
						dangerouslySetInnerHTML={{
							__html: marked(content),
						}}
					/>
				</div>

				<div className="mt-6 md:max-w-4xl">
					<h3 className="mb-4 text-xl font-semibold text-blue">Organizers</h3>
					<div className="flex flex-wrap gap-6">
						{data.organizers.map((club) => (
							<ClubCard key={club.name} club={club} />
						))}
					</div>
				</div>

				<div className="mt-6 md:max-w-4xl">
					<h3 className="mb-4 text-xl font-semibold text-blue">Participants</h3>
					<div className="flex flex-wrap gap-6">
						{data.participants.map((club) => (
							<ClubCard key={club.name} club={club} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export const getStaticProps: GetStaticProps = () => {
	const mdData = fs.readFileSync(path.join('data/about.md'), 'utf8');
	const { data, content } = matter(mdData);

	if (!data || !content) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			data,
			content,
		},
	};
};

export default AboutUsPage;
