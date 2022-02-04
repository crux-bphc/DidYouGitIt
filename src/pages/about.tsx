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
			<div className='lg:pl-36 md:px-10 -mt-5 lg:mt-0 p-4'>
				<div className='max-w-full md:max-w-4xl prose prose-invert'>
					<h1 className='mt-14 text-4xl sm:text-5xl md:text-[50px] lg:text-[60px] xl:text-[80px] font-bold mb-3 lg:mb-7'>
						About
					</h1>
					<div
						className='text-gray'
						dangerouslySetInnerHTML={{
							__html: marked(content),
						}}
					/>
				</div>

				<div className='mt-6 md:max-w-4xl'>
					<h3 className='text-xl font-semibold mb-4 text-blue'>Organizers</h3>
					<div className='flex gap-6 flex-wrap'>
						{data.organizers.map((club) => (
							<ClubCard key={club.name} club={club} />
						))}
					</div>
				</div>

				<div className='mt-6 md:max-w-4xl'>
					<h3 className='text-xl font-semibold mb-4 text-blue'>Participants</h3>
					<div className='flex gap-6 flex-wrap'>
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
