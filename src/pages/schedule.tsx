import { NextPage } from 'next';
import React from 'react';
import EventCard from '../components/Event Card';
import ScheduleCard from '../components/ScheduleCard';
import TimeBubble from '../components/TimeBubble';

const SchedulePage: NextPage = ({}) => {
	return (
		<>
			<h1 className='text-center font-extrabold text-[40px]  mb-10'>
                Schedule Plan
            </h1>

            <div className='flex gap-5 justify-center items-center mb-12'>
                <ScheduleCard />
                <ScheduleCard />
                <ScheduleCard />
                <ScheduleCard />
            </div>

            <div className="container bg-gray-200 mx-auto w-5/6 h-full">
                <div className=" relative wrap overflow-hidden p-10 h-full">
                    
                    <div className="z-0 border-2-2 absolute border-blue h-full border border-dashed" style={{left: "50%"}}></div>

                    <div className=" mb-8 flex justify-between items-center  right-timeline">
                        <div className="order-1 w-1/3"></div>
                        <div className="z-20  flex items-center order-1">
                            <TimeBubble />
                        </div>
                        <div className='order-1 w-1/3'>
                            <EventCard />
                        </div>
                    </div>

    
                    <div className=" mb-8 flex justify-between flex-row-reverse items-center  left-timeline">
                        <div className="order-1 w-1/3"></div>
                        <div className="z-20  flex items-center order-1">
                            <TimeBubble />
                        </div>
                        <div className='order-1 w-1/3'>
                            <EventCard />
                        </div>
                    </div>
                </div>
            </div>
		</>
	);
};

export default SchedulePage;