/* eslint-disable react/no-unescaped-entities */
import { NextPage } from 'next';
import React from 'react';

const HomePage: NextPage = ({}) => {
	return (
		<>
			<div className='lg:pl-36 md:px-10 mt-10 lg:mt-0 p-4'>
				<div className='max-w-full md:max-w-5xl'>
					<h1
						style={{ lineHeight: 1.1 }}
						className='mt-14 text-2xl sm:text-5xl md:text-[50px] lg:text-[60px] xl:text-[80px] font-bold mb-3 lg:mb-8'>
						About Us
					</h1>
					<p className='text-sm md:text-md lg:text-xl text-gray mb-10'>
                        Did You Git It? is a N-day Hackathon to promote open source practices among both budding and experienced student developers. 
                        We aim to encourage enthusiastic minds to come up with innovative solutions to software problems. 
                        The Hackathon comprises of projects hosted as open source on GitHub and participants work to contribute to these projects.
                        Enter the world of open source software technology, and express your ingenious ideas to make people’s lives easier.
					</p>
                    <p className='text-sm md:text-md lg:text-xl text-gray text-center'>This Hackathon is brought to you by X, Y, Z etc.</p>
					<div></div>
				</div>
			</div>
		</>
	);
};

export default HomePage;
