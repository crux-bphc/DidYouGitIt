import { AppProps } from 'next/app';
import React from 'react';
import '../styles/main.css';
import Layout from '../components/Layout';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
};

export default App;
