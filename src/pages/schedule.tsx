import matter from 'gray-matter';
import { GetStaticProps, NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ScheduleItem from '../components/Schedule/ScheduleItem';
import { Schedule } from '../types';
import Seo from '../components/Seo';

interface SchedulePageProps {
	schedule: Schedule[];
}

const SchedulePage: NextPage<SchedulePageProps> = ({ schedule }) => {
	return (
		<>
			<Seo title="Schedule" />

			<h1 className="mb-10 text-center text-[40px]  font-extrabold">
				Schedule Plan
			</h1>

			<div className="bg-gray-200 mx-auto h-full lg:container lg:w-5/6">
				<div className="wrap relative h-full overflow-hidden py-10 px-4 lg:p-10">
					{schedule.map((curr, i) => {
						curr.orientation = i % 2 === 0 ? 'left' : 'right';

						return (
							<div key={curr.title}>
								<ScheduleItem
									title={curr.title}
									date={curr.date}
									year={curr.year}
									orientation={curr.orientation}
								/>
							</div>
						);
					})}

					{/* <ScheduleItem />
					<ScheduleItem orientation="left" />
					<ScheduleItem />
					<ScheduleItem orientation="left" />
				

				
					<ScheduleItem />
					<ScheduleItem orientation="left" />
				

				
					<ScheduleItem />
					<ScheduleItem orientation="left" /> */}
				</div>
			</div>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const mdData = fs.readFileSync(path.join('data/schedule.md'), 'utf8');
	const { data } = matter(mdData);

	if (!data.schedule) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			schedule: data.schedule,
		},
	};
};
export default SchedulePage;
