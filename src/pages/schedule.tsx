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

			<Tab.Group>
				<Tab.List
					defaultValue={1}
					className='flex gap-5 justify-center items-center mb-12'>
					<Tab>
						{({ selected }) => (
							<ScheduleCard
								selected={selected}
								day={1}
								date={30}
								month={'Jan'}
							/>
						)}
					</Tab>
					<Tab>
						{({ selected }) => (
							<ScheduleCard
								selected={selected}
								day={2}
								date={31}
								month={'Jan'}
							/>
						)}
					</Tab>
					<Tab>
						{({ selected }) => (
							<ScheduleCard
								selected={selected}
								day={3}
								date={1}
								month={'Feb'}
							/>
						)}
					</Tab>
					<Tab>
						{({ selected }) => (
							<ScheduleCard
								selected={selected}
								day={4}
								date={2}
								month={'Feb'}
							/>
						)}
					</Tab>
				</Tab.List>

				<Tab.Panels>
					<div className='container bg-gray-200 mx-auto w-5/6 h-full'>
						<div className=' relative wrap overflow-hidden p-10 h-full'>
							<div
								className='z-0 border-2-2 absolute border-blue h-full border border-dashed'
								style={{ left: '50%' }}></div>

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
