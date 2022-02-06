import clsx from 'clsx';
import { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { lgColumns, mdColumns } from '../utils/grid';
import { Project } from '../types';
import { HiFilter, HiX } from 'react-icons/hi';
import { AnimatePresence, motion } from 'framer-motion';
import FilterItem from '../components/Filter/FilterItem';
import Seo from '../components/Seo';

interface ProjectsPageProps {
	projects: Project[];
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ projects }) => {
	const [showFilters, setShowFilters] = React.useState(false);
	const [data, setData] = React.useState<Project[]>([]);
	const [domains, setDomains] = React.useState<string[]>([]);

	const handleDomain = (domain: string) => {
		const newDomains = domains.includes(domain)
			? domains.filter((d) => d !== domain)
			: [...domains, domain];

		setDomains(newDomains);
	};

	React.useEffect(() => {
		if (domains.length > 0) {
			const newData = projects.filter((project, i) =>
				domains.includes(project.domain.toLowerCase())
			);

			setData(newData);
		} else {
			setData(projects);
		}
	}, [domains, projects]);

	return (
		<>
			<Seo title="Projects" />

			<div
				className={clsx(
					'mx-auto grid grid-cols-1 gap-5 p-4 md:grid-cols-2 lg:pb-6',
					showFilters ? 'max-w-6xl lg:grid-cols-3' : 'max-w-6xl lg:grid-cols-3'
				)}
			>
				<div className="col-start-[1] col-end-[-1] flex items-center justify-between md:mb-10">
					<h1 className="flex-1 text-4xl font-extrabold md:text-[54px]">
						Projects
					</h1>
					<motion.button
						initial={{
							scale: 1,
						}}
						onClick={() => setShowFilters(!showFilters)}
						className="flex items-center gap-x-3 duration-300 ease-out hover:text-blue group-hover:transition-all"
					>
						<span>
							{showFilters ? <HiX size={20} /> : <HiFilter size={20} />}
						</span>
						<span
							className={clsx(
								'text-xl uppercase',
								showFilters && 'block text-center'
							)}
						>
							Filters
						</span>
					</motion.button>
				</div>

				{data.map((project, i) => {
					const lgColumn = lgColumns[(i % (showFilters ? 2 : 3)) + 1];
					const mdColumn = mdColumns[(i % 2) + 1];

					return (
						<motion.div
							key={project.title}
							layout
							className={clsx([
								lgColumn.start,
								lgColumn.end,
								mdColumn.start,
								mdColumn.end,
								'col-start-1 col-end-2',
							])}
						>
							<ProjectCard
								key={`${project.title}-${i}`}
								project={project}
								index={i}
							/>
						</motion.div>
					);
				})}

				<AnimatePresence>
					{showFilters && (
						<motion.div
							layout
							className={clsx(
								showFilters
									? 'row-start-2 block md:col-start-1 md:col-end-[-1] lg:col-start-3 lg:col-end-4 '
									: 'row-start-7'
							)}
							initial={{
								opacity: 0,
								y: -40,
							}}
							animate={{
								opacity: 1,
								y: 0,
							}}
							transition={{
								duration: 0.35,
							}}
						>
							<div className="mb-8">
								<div className="flex flex-col items-center gap-y-3">
									<h1 className="py-3 text-center text-2xl font-semibold uppercase text-white lg:mb-8">
										Domains
									</h1>

									<FilterItem
										onClick={() => {
											setDomains([]);
											setShowFilters(false);
										}}
									>
										Show All
									</FilterItem>

									<FilterItem
										onClick={() => handleDomain('web development')}
										isActive={domains.includes('web development')}
									>
										Web Development
									</FilterItem>

									<FilterItem
										onClick={() => handleDomain('android development')}
										isActive={domains.includes('android development')}
									>
										Android Development
									</FilterItem>

									<FilterItem
										onClick={() => handleDomain('ios development')}
										isActive={domains.includes('ios development')}
									>
										iOS Development
									</FilterItem>

									<FilterItem
										onClick={() => handleDomain('machine learning')}
										isActive={domains.includes('machine learning')}
									>
										Machine Learning
									</FilterItem>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const mdData = fs.readFileSync(path.join('data/projects.md'), 'utf8');
	const { data } = matter(mdData);

	if (!data.projects) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			projects: data.projects,
		},
	};
};

export default ProjectsPage;
