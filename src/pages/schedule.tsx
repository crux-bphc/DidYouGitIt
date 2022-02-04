import { Tab } from '@headlessui/react';
import { NextPage } from 'next';
import React from 'react';
import ScheduleCard from '../components/Schedule/ScheduleCard';
import ScheduleItem from '../components/Schedule/ScheduleItem';

const SchedulePage: NextPage = ({}) => {
	return (
		<>
			<h1 className="mb-10 text-center text-[40px]  font-extrabold">
				Schedule Plan
			</h1>

			<Tab.Group as={React.Fragment}>
				<Tab.List
					defaultValue={1}
					className="max-w-screen scrollbar-hidden mb-10 flex w-screen snap-x snap-proximity scroll-mr-10 items-center gap-5 overflow-x-scroll md:mb-12 lg:w-[auto] lg:justify-center"
				>
					<div className="shrink-0 snap-center">
						<div className="snap-0 w-4 sm:w-8"></div>
					</div>
					<Tab className="snap-center">
						{({ selected }) => (
							<ScheduleCard
								selected={selected}
								day={1}
								date={30}
								month={'Jan'}
							/>
						)}
					</Tab>
					<Tab className="snap-center">
						{({ selected }) => (
							<ScheduleCard
								selected={selected}
								day={2}
								date={31}
								month={'Jan'}
							/>
						)}
					</Tab>
					<Tab className="snap-center">
						{({ selected }) => (
							<ScheduleCard
								selected={selected}
								day={3}
								date={1}
								month={'Feb'}
							/>
						)}
					</Tab>
					<Tab className="snap-center">
						{({ selected }) => (
							<ScheduleCard
								selected={selected}
								day={4}
								date={2}
								month={'Feb'}
							/>
						)}
					</Tab>

					<Tab className="snap-center">
						{({ selected }) => (
							<ScheduleCard
								selected={selected}
								day={5}
								date={3}
								month={'Feb'}
							/>
						)}
					</Tab>

					<Tab className="snap-center">
						{({ selected }) => (
							<ScheduleCard
								selected={selected}
								day={6}
								date={4}
								month={'Feb'}
							/>
						)}
					</Tab>

					<Tab className="snap-center">
						{({ selected }) => (
							<ScheduleCard
								selected={selected}
								day={4}
								date={5}
								month={'Feb'}
							/>
						)}
					</Tab>
					<div className="shrink-0 snap-center">
						<div className="snap-0 w-4 sm:w-8"></div>
					</div>
				</Tab.List>

				<Tab.Panels as={React.Fragment}>
					<div className="bg-gray-200 mx-auto h-full lg:container lg:w-5/6">
						<div className="wrap relative h-full overflow-hidden py-10 px-4 lg:p-10">
							<Tab.Panel>
								<ScheduleItem />
								<ScheduleItem orientation="left" />
								<ScheduleItem />
							</Tab.Panel>

							<Tab.Panel>
								<ScheduleItem />
								<ScheduleItem orientation="left" />
							</Tab.Panel>

							<Tab.Panel>
								<ScheduleItem />
								<ScheduleItem orientation="left" />
							</Tab.Panel>

							<Tab.Panel>
								<ScheduleItem />
								<ScheduleItem orientation="left" />
							</Tab.Panel>
						</div>
					</div>
				</Tab.Panels>
			</Tab.Group>
		</>
	);
};

export default SchedulePage;
