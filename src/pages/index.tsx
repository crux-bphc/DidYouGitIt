import { NextPage } from 'next';
import React from 'react';
import Button from '../components/Button';
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
				<div className='max-w-full md:max-w-5xl prose prose-invert prose-p:text-gray'>
					<h1 className='mt-14 text-4xl sm:text-5xl md:text-[50px] lg:text-[60px] xl:text-[80px] font-bold mb-3 lg:mb-7'>
						Did You Git It?
					</h1>

					<p>
						Are you one of those people who have a lot to contribute to making a
						project better but can't pick the right way to do so?
					</p>
					<p>
						Well, here's your chance to put that creative mindset to good use.
						We, at ACM BPHC, bring you "Did You Git It?" - a N-day open source
						event for developers just like you to model solutions to problems we
						encounter in our daily lives.
					</p>
					<p>
						Tune into XYZ-link on ABC-date for the event. Let's improve the
						development culture together, shall we?
					</p>
					<div className='mt-10'>
						<Button href='/workflow'>Learn More</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePage;
