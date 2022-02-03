import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

const AboutUsPage: NextPage = ({}) => {
	return (
		<>
			<div className='lg:pl-36 md:px-10 mt-10 lg:mt-0 p-4'>
				<div className='max-w-full md:max-w-4xl prose prose-invert'>
					<h1 className='mt-14 text-4xl sm:text-5xl md:text-[50px] lg:text-[60px] xl:text-[80px] font-bold mb-3 lg:mb-7'>
						About
					</h1>
					<p className='text-gray'>
						Did You Git It? is a N-day Hackathon to promote open source
						practices among both budding and experienced student developers. We
						aim to encourage enthusiastic minds to come up with innovative
						solutions to software problems. The Hackathon comprises of projects
						hosted as open source on GitHub and participants work to contribute
						to these projects. Enter the world of open source software
						technology, and express your ingenious ideas to make people’s lives
						easier.
					</p>
				</div>

				<div className='mt-36 flex gap-8 items-center'>
					<div className='rounded px-5 pt-5'>
						<Image
							className='opacity-70'
							src='/assets/acm.png'
							height={60}
							width={160}
							alt='ACM-BPHC'
						/>
						<h5 className='pb-4 mt-2 text-center text-gray font-semibold'>
							ACM BPHC
						</h5>
					</div>
					<div className='flex flex-col items-center rounded px-5 pt-5'>
						<Image
							className='opacity-70'
							src='/assets/crux.png'
							height={68}
							width={68}
							alt='CRUX-BPHC'
						/>
						<h5 className='pb-4 mt-2 text-center text-gray font-semibold'>
							CRUX
						</h5>
					</div>

					<div className='flex flex-col items-center rounded px-5 pt-5'>
						<Image
							className='opacity-70'
							src='/assets/smartcampus.png'
							height={68}
							width={68}
							alt='ACM-BPHC'
						/>
						<h5 className='pb-4 text-gray uppercase mt-2 text-center font-semibold'>
							Smart Campus
						</h5>
					</div>

					<div className='flex flex-col items-center rounded px-5 pt-5'>
						<Image
							className='opacity-70'
							src='/assets/swd.png'
							height={70}
							width={70}
							alt='ACM-BPHC'
						/>
						<h5 className='pb-4 mt-2 text-center text-gray font-semibold'>
							SWD BPHC
						</h5>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutUsPage;
