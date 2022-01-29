import clsx from 'clsx';
import { NextPage } from 'next';
import React from 'react';
import TeamCard from '../components/TeamCard';
import { lgColumns, mdColumns } from '../utils/grid';

const TeamPage: NextPage = ({}) => {
	return (
		<>
			<div className='max-w-6xl mx-auto gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:pb-6 p-4'>
				<h1 className='text-4xl my-4 lg:my-0 md:text-[54px] lg:mb-10 text-center lg:text-left font-extrabold'>
					Team
				</h1>

				{Array(3)
					.fill(0)
					.map((_, i) => {
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
									coverPic='/assets/rick.jpg'
									name='Sreekar'
									subtitle='Thope'
								/>
							</div>
						);
					})}
			</div>
		</>
	);
};

export default TeamPage;
