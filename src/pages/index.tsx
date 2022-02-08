import { NextPage } from 'next';
import React from 'react';
import Button from '../components/Button';
import CountdownCard from '../components/CountdownCard';
import Seo from '../components/Seo';
import { TimeCalc } from '../utils/timeCalc';

const HomePage: NextPage = ({}) => {
	const [timeLeft, setTimeLeft] = React.useState(TimeCalc()) as any;

	React.useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(TimeCalc);
		}, 1000);

		return () => clearTimeout(timer);
	});

	return (
		<>
			<Seo />
			<div className="mt-10 p-4 md:px-10 lg:mt-0 lg:pl-36">
				<div className="flex items-center justify-start gap-2 md:gap-5">
					<CountdownCard unit="days" value={timeLeft.days} />
					<CountdownCard unit="hours" value={timeLeft.hours} />
					<CountdownCard unit="minutes" value={timeLeft.minutes} />
					<CountdownCard unit="seconds" value={timeLeft.seconds} />
				</div>
				<div className="prose prose-invert max-w-full prose-p:text-gray md:max-w-5xl">
					<h1 className="mt-8 mb-3 text-4xl font-bold sm:text-5xl md:text-[50px] lg:mb-7 lg:text-[60px] xl:text-[80px]">
						Did You Git It?
					</h1>

					<p>
						Are you one of those people who have a lot to contribute to making a
						project better but can't pick the right way to do so?
					</p>
					<p>
						Well, here's your chance to put that creative mindset to good use.
						We, at ACM BPHC, bring you "Did You Git It?" - a 10-day open source
						event for developers just like you to model solutions to problems we
						encounter in our daily lives.
					</p>
					<p>
						Tune into the <a href={process.env.NEXT_PUBLIC_SITE_URL}>Website</a>{' '}
						on Feb 14th, 2022 for the event. Let's improve the development
						culture together, shall we?
					</p>
					<div className="my-10">
						<Button href="/workflow">Learn More</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePage;
