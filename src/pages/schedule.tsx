import { Tab } from '@headlessui/react';
import { NextPage } from 'next';
import React from 'react';
import ScheduleCard from '../components/Schedule/ScheduleCard';
import ScheduleItem from '../components/Schedule/ScheduleItem';

const SchedulePage: NextPage = ({}) => {
	return (
		<>
			<h1 className='text-center font-extrabold text-[40px]  mb-10'>
				Schedule Plan
			</h1>

			<Tab.Group as={React.Fragment}>
				<Tab.List
					defaultValue={1}
					className='flex gap-5 w-screen lg:w-[auto] max-w-screen lg:justify-center items-center snap-x snap-proximity mb-10 md:mb-12 overflow-x-scroll scroll-mr-10 scrollbar-hidden'>
					<div className='snap-center shrink-0'>
						<div className='snap-0 w-4 sm:w-8'></div>
					</div>
					<Tab className='snap-center'>
						{({ selected }) => (
							<ScheduleCard
								selected={selected}
								day={1}
								date={30}
								month={'Jan'}
							/>
						)}
					</Tab>
					<Tab className='snap-center'>
						{({ selected }) => (
							<ScheduleCard
								selected={selected}
								day={2}
								date={31}
								month={'Jan'}
							/>
						)}
					</Tab>
					<Tab className='snap-center'>
						{({ selected }) => (
							<ScheduleCard
								selected={selected}
								day={3}
								date={1}
								month={'Feb'}
							/>
						)}
					</Tab>
					<Tab className='snap-center'>
						{({ selected }) => (
							<ScheduleCard
								selected={selected}
								day={4}
								date={2}
								month={'Feb'}
							/>
						)}
					</Tab>

					<Tab className='snap-center'>
						{({ selected }) => (
							<ScheduleCard
								selected={selected}
								day={5}
								date={3}
								month={'Feb'}
							/>
						)}
					</Tab>

					<Tab className='snap-center'>
						{({ selected }) => (
							<ScheduleCard
								selected={selected}
								day={6}
								date={4}
								month={'Feb'}
							/>
						)}
					</Tab>

					<Tab className='snap-center'>
						{({ selected }) => (
							<ScheduleCard
								selected={selected}
								day={4}
								date={5}
								month={'Feb'}
							/>
						)}
					</Tab>
					<div className='snap-center shrink-0'>
						<div className='snap-0 w-4 sm:w-8'></div>
					</div>
				</Tab.List>

				<Tab.Panels as={React.Fragment}>
					<div className='lg:container bg-gray-200 mx-auto lg:w-5/6 h-full'>
						<div className='relative wrap overflow-hidden py-10 px-4 lg:p-10 h-full'>
							<Tab.Panel>
								<ScheduleItem />
								<ScheduleItem orientation='left' />
								<ScheduleItem />
							</Tab.Panel>

							<Tab.Panel>
								<ScheduleItem />
								<ScheduleItem orientation='left' />
							</Tab.Panel>

							<Tab.Panel>
								<ScheduleItem />
								<ScheduleItem orientation='left' />
							</Tab.Panel>

							<Tab.Panel>
								<ScheduleItem />
								<ScheduleItem orientation='left' />
							</Tab.Panel>
						</div>
					</div>
				</Tab.Panels>
			</Tab.Group>
		</>
	);
};

export default SchedulePage;
