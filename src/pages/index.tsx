import { NextPage } from 'next';
import React from 'react';
import CountdownCard from '../components/CountdownCard';

const HomePage: NextPage = ({}) => {
	return (
		<>
			<div className='lg:pl-36 md:px-10 mt-10 lg:mt-0 p-4'>
				<div className='flex gap-2 md:gap-5 justify-start items-center'>
					<CountdownCard />
					<CountdownCard />
					<CountdownCard />
					<CountdownCard />
				</div>
				<div className='max-w-full md:max-w-3xl'>
					<h1
						style={{ lineHeight: 1.1 }}
						className='mt-14 text-4xl sm:text-5xl md:text-[60px] lg:text-[70px] xl:text-[90px] font-extrabold mb-3 lg:mb-8'>
						Phasellus hen ultrices just ac.
					</h1>
					<p className='text-sm md:text-md lg:text-xl text-gray lg:ml-2'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
						egestas non turpis eget facilisis.
					</p>
					<div></div>
				</div>
			</div>
		</>
	);
};

export default HomePage;
