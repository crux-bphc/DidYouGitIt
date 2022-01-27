import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import dynamic from 'next/dynamic';

interface LayoutProps {}

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
	ssr: false,
});

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<AnimatedCursor
				// @ts-ignore
				innerSize={20}
				outerSize={20}
				color='255, 255, 255'
				outerAlpha={0.2}
				innerScale={0.7}
				outerScale={5}
			/>
			<div className='lg:grid grid-cols-12 min-h-screen'>
				<div className='col-start-1 col-end-2 bg-dark-1 relative'>
					<Sidebar />
				</div>
				<main className='col-start-2 col-end-13 bg-dark-2'>
					<Header />
					<div className='p-4'>{children}</div>
				</main>
			</div>
		</>
	);
};

export default Layout;
