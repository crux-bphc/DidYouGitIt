import type { NextPage } from 'next';
import Image from 'next/image';
import Button from '../components/Button';

const NotFoundPage: NextPage = ({}) => {
	return (
		<>
			<div className="mt-32 grid place-items-center md:mt-4">
				<Image
					src={'/not-found.png'}
					alt={'not-found'}
					height={600}
					width={900}
				/>
				<div className="mt-8 md:mt-2 lg:mt-0">
					<Button href="/">Back To Home</Button>
				</div>
			</div>
		</>
	);
};

export default NotFoundPage;
