import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className='lg:grid grid-cols-12 min-h-screen'>
			<div className='col-start-1 col-end-2 bg-dark-1'>
				<Sidebar />
			</div>
			<main className='col-start-2 col-end-13 bg-dark-2'>
				<Header />
				<div className='p-4'>{children}</div>
			</main>
		</div>
	);
};

export default Layout;
