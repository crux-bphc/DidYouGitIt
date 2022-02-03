import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import dynamic from 'next/dynamic';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { useRouter } from 'next/router';

interface LayoutProps {}

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
	ssr: false,
});

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const router = useRouter();
	const [show, setShow] = React.useState(false);

	return (
		<>
			{process.env.NODE_ENV === 'production' && (
				<AnimatedCursor
					// @ts-ignore
					innerSize={20}
					outerSize={20}
					color='255, 255, 255'
					outerAlpha={0.2}
					innerScale={0.7}
					outerScale={5}
				/>
			)}
			{show && (
				<Sidebar
					show={show}
					onClose={() => setShow(false)}
					className='lg:hidden'
				/>
			)}
			<div className='grid lg:grid-cols-12 min-h-screen'>
				<div className='hidden lg:block md:col-start-1 md:col-end-2 bg-dark-1 relative'>
					<Sidebar />
				</div>
				<main className='lg:col-start-2 lg:col-end-13 bg-dark-2'>
					<Header onOpen={() => setShow(true)} />
					<AnimatePresence exitBeforeEnter>
						<motion.div
							key={router.route}
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.65 }}
							className='p-0 lg:p-4'>
							{children}
						</motion.div>
					</AnimatePresence>
				</main>
			</div>
		</>
	);
};

export default Layout;
