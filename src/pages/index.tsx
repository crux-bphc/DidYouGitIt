import { NextPage } from 'next';
import React from 'react';
import CountdownCard from '../components/CountdownCard';

const HomePage: NextPage = ({}) => {
	return (
		<>
			<h1 className='pl-36'>
				<div className='flex gap-5 justify-start items-center'>
					<CountdownCard />
					<CountdownCard />
					<CountdownCard />
					<CountdownCard />
				</div>
				<div>
					<h1
						style={{ lineHeight: 1.1 }}
						className='mt-14 text-[90px] font-extrabold mb-8'>
						Phasellus hendrerit <br /> ultrices just ac.
					</h1>
					<p className='text-[20px] text-gray ml-2'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
						Integer egestas non turpis eget facilisis.
					</p>
					<div></div>
				</div>
			</h1>
		</>
	);
};

export default HomePage;
