import clsx from 'clsx';
import { GetStaticProps } from 'next';
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { lgColumns, mdColumns } from '../utils/grid';

export const getStaticProps: GetStaticProps = async () => {
	const data = [
		{
			title: 'SWD Nucleus BPHC Frontend',
			domain: 'Web Development',
			desc: 'The current repository holds the entire codebase of frontend of SWD Portal of BITS Pilani,Hyderabad Campus.',
			link: 'https://github.com/Ashish-AVS/SWD-BPHC-Frontend'
		},{
			title: 'SWD Nucleus BPHC Android App',
			domain: 'Android Development',
			desc: 'The SWD app for Android, rebuilt with a new design and using the best practices in Android Development. Built entirely in Koltin.',
			link: 'https://github.com/aryanarora180/SWD_BPHC'
		},
		{
			title: 'SmartCampus Mobile App',
			domain: 'Android Development',
			desc: 'A system to enable cashless payment throughout campus in any case and scenario, be in via mess balance or UPI payments for BPHC.',
			link: 'https://github.com/smart-campus-team/smartcampus-mobile'
		},
		{
			title: 'Chrono Factorem',
			domain: 'Web Development',
			desc: 'A MERN stack Web App that allows students to create draft time tables',
			link: 'https://github.com/crux-bphc/ChronoFactorem'
		},
		{
			title: 'CMS iOS',
			domain: 'iOS Development',
			desc: 'This is the iOS version on the CMS app, written in Swift. The app utilises the API endpoints provided by Moodle from the server hosted on the CMS Website.',
			link: 'https://github.com/crux-bphc/CMS-iOS'
		},
		{
			title: 'CMS Android',
			domain: 'Android Development',
			desc: 'This is the Android version of the CMS BPHC app. The app uses standard Moodle endpoints from the server hosted at the CMS website.',
			link: 'https://github.com/crux-bphc/CMS-Android'
		},
		{
			title: 'Course Reviews',
			domain: 'Web Development',
			desc: 'The application is a simple Express.JS app. Database is SQLite3. Auth is provided by Passport.js. To review and rate courses provided by BPHC.',
			link: 'https://github.com/crux-bphc/course-reviews'
		},
		{
			title: 'Fest Manager',
			domain: 'Web Development',
			desc: 'Fest Manager is a Single Page Express Application that can be used to easily deploy websites for college fests.',
			link: 'https://github.com/crux-bphc/fest-manager'
		},
		{
			title: 'Batchsnap Sorter',
			domain: 'Machine Learning, Web Development',
			desc: 'Identifies unique faces from corpus of photos and allows a person to retrieve all images containing their face. Clustering of images is done on server side by using facial feature embeddings, and the client facing portal is made in React.js.',
			link: 'https://github.com/crux-bphc/batchsnap-sorter'
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

const ProjectsPage: React.FC<ProjectsPageProps> = ({data}) => {
	return (
		<>
			<div className='max-w-6xl mx-auto gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:pb-6 p-4'>
				<h1 className='text-4xl my-5 md:text-[54px] md:mb-10 font-extrabold'>
					Projects
				</h1>

				{data.map((project, i) => {
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
								<ProjectCard 
									title={project.title}
									domain={project.domain}
									desc={project.desc}
									link={project.link}
								/>
							</div>
						);
					})}
			</div>
		</>
	);
};

export default ProjectsPage;
