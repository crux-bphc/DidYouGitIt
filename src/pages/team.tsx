import { NextPage } from 'next';
import React from 'react';
import TeamCard from '../components/TeamCard';

const TeamPage: NextPage = ({}) => {
	return (
		<>
			<div>
				<h1 className='font-extrabold text-[54px] mb-10 ml-40'>Team</h1>
				<div className='max-w-6xl mx-auto gap-3 grid grid-cols-3 lg:pb-6'>
					<TeamCard coverPic='/assets/rick.jpg' name='Sreekar' subtitle='Thope'/>
					<TeamCard coverPic='/assets/rick.jpg' name='Sreekar' subtitle='Thope'/>
					<TeamCard coverPic='/assets/rick.jpg' name='Sreekar' subtitle='Thope'/>
				</div>
			</div>
			
		</>
	);
};

export default TeamPage;
