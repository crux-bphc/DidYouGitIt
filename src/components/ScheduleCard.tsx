import React from 'react';

interface ScheduleCardProps {}

const ScheduleCard: React.FC<ScheduleCardProps> = ({}) => {
	return (
        <div className='group px-4 py-4 bg-dark-1 hover:bg-blue'>
            <div className='w-3/4 pb-3 mb-3 group-hover:bg-white -m-4 py-4 pl-4'>
                <p className='uppercase text-gray text-xs group-hover:text-blue'>Day 1</p>
            </div>
            <div className='flex gap-4 justify-evenly items-end'>
                <p className='text-3xl text-white'>30</p>
                <p className='uppercase text-lg text-white'>Jan</p>
            </div>
        </div>
	);
};

export default ScheduleCard;
