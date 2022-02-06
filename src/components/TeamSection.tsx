import clsx from 'clsx';
import { Team } from '../types';
import { lgColumns, mdColumns } from '../utils/grid';
import TeamMemberCard from './TeamMemberCard';

interface TeamSectionProps {
	team: Team;
}

const TeamSection: React.FC<TeamSectionProps> = ({ team }) => {
	return (
		<div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 p-4 md:grid-cols-2 lg:grid-cols-3 lg:pb-6">
			<h1 className="col-start-1 col-end-[-1] my-4 text-center text-4xl font-extrabold md:text-[54px] lg:my-0 lg:mb-10 lg:text-left">
				{team.title}
			</h1>

			{team.team.map((person, i) => {
				const lgColumn = lgColumns[(i % 3) + 1];
				const mdColumn = mdColumns[(i % 2) + 1];

				return (
					<div
						key={i}
						className={clsx([
							lgColumn.start,
							lgColumn.end,
							mdColumn.start,
							mdColumn.end,
							'col-start-1 col-end-2',
						])}
					>
						<TeamMemberCard person={person} />
					</div>
				);
			})}
		</div>
	);
};

export default TeamSection;
