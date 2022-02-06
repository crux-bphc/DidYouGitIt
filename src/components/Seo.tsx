import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

interface SeoProps {
	title?: string;
	description?: string;
}

const Seo: React.FC<SeoProps> = ({
	title = 'Open Source Event',
	children,
	description = 'Open source event for developers just like you to model solutions to problems we encounter in our daily lives.',
}) => {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>Did You Git It ? || {title} </title>
				<meta name="description" content={description} />
				<link
					rel="canonical"
					href={`${process.env.NEXT_PUBLIC_SITE_URL}${router.pathname}`}
				/>
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:type" content={'website'} />
				<meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
				<meta
					property="og:image"
					content={`${process.env.NEXT_PUBLIC_SITE_URL}/og-image.png`}
				/>
				{children}
			</Head>
		</>
	);
};

export default Seo;
