import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Workflow } from '../types';
import WorkflowCard from '../components/WorkflowCard';
import clsx from 'clsx';

export const getStaticProps: GetStaticProps = async () => {
	const mdData = fs.readFileSync(path.join('data/workflow.md'), 'utf8');
	const { data } = matter(mdData);

	if (!data.workflow) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			workflow: data.workflow,
		},
	};
};

interface WorkflowPageProps {
	workflow: Workflow[];
}

const WorkflowPage: React.FC<WorkflowPageProps> = ({ workflow }) => {
	return (
		<>
			<div className="mt-10 p-4 md:px-10 lg:mt-0 lg:pl-36">
				<div className="max-w-full md:max-w-5xl">
					<h1
						style={{ lineHeight: 1.1 }}
						className="mb-10 text-3xl font-bold sm:text-5xl md:mb-4 md:text-[50px] lg:mb-8 lg:text-[60px] xl:text-[80px]"
					>
						Workflow
					</h1>

					{workflow.map((step, i) => {
						step.orientation = i % 2 === 0 ? 'left' : 'right';

						return (
							<div
								key={step.title}
								className={clsx([
									'grid',
									i % 2 === 0 ? 'justify-items-start' : 'justify-items-end',
								])}
							>
								<WorkflowCard
									title={step.title}
									desc={step.desc}
									orientation={step.orientation}
									icon={step.icon}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default WorkflowPage;
