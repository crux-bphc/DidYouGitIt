import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

interface SeoProps {
	title?: string;
	description?: string;
}

const Seo: React.FC<SeoProps> = ({
	title,
	children,
	description = 'Open source event for developers just like you to model solutions to problems we encounter in our daily lives.',
}) => {
	const router = useRouter();

	const fullTitle = `Did You Git It ? | Open Source Event ${
		title ? `| ${title}` : ''
	}`.trim();

	return (
		<>
			<Head>
				<title>{fullTitle}</title>
				<meta name="description" content={description} />
				<link
					rel="canonical"
					href={`${process.env.NEXT_PUBLIC_SITE_URL}${router.pathname}`}
				/>
				<meta property="og:title" content={fullTitle} />
				<meta property="og:description" content={description} />
				<meta property="og:type" content={'website'} />
				<meta
					property="og:url"
					content={`${process.env.NEXT_PUBLIC_SITE_URL}${router.pathname}`}
				/>
				<meta
					property="og:image"
					content={`${process.env.NEXT_PUBLIC_SITE_URL}/og-image.jpg`}
				/>
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content={fullTitle} />
				<meta name="twitter:description" content={description} />
				{children}
			</Head>
		</>
	);
};

export default Seo;
