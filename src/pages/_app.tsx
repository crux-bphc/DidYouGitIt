import { AppProps } from 'next/app';
import React from 'react';
import '../styles/main.css';
import Layout from '../components/Layout';
import { AnimateSharedLayout } from 'framer-motion';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Layout>
				<AnimateSharedLayout>
					<Component {...pageProps} />
				</AnimateSharedLayout>
			</Layout>
		</>
	);
};

export default App;
