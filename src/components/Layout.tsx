import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar/index';
import dynamic from 'next/dynamic';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Backdrop from './Backdrop';

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
					color="255, 255, 255"
					outerAlpha={0.2}
					innerScale={0.7}
					outerScale={5}
				/>
			)}
			<AnimatePresence>
				{show && (
					<>
						<Sidebar
							isMotion
							onClose={() => setShow(false)}
							className="fixed top-0 left-0 z-30 h-full w-72 !items-start px-10 py-8 md:w-52 lg:hidden"
							initial={{ x: -1000, opacity: 0 }}
							exit={{ x: -1000, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.5 }}
						/>

						<Backdrop
							initial={{ opacity: 0 }}
							exit={{ opacity: 0 }}
							animate={{ opacity: 0.65 }}
							transition={{ duration: 0.3 }}
							onClose={() => setShow(false)}
						/>
					</>
				)}
			</AnimatePresence>
			<div className="flex min-h-screen">
				<Sidebar className="sticky top-0 hidden h-screen lg:flex" />
				<main className="flex-1 bg-dark-2">
					<Header onOpen={() => setShow(true)} />
					<AnimatePresence exitBeforeEnter>
						<motion.div
							key={router.route}
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.65 }}
							className="p-0 lg:p-4"
						>
							{children}
						</motion.div>
					</AnimatePresence>
				</main>
			</div>
		</>
	);
};

export default Layout;
