import fs from 'fs';
import matter from 'gray-matter';
import { NextPage } from 'next';
import path from 'path';
import React from 'react';
import { marked } from 'marked';

const FaqsPage: NextPage<{ content: string }> = ({ content }) => {
	return (
		<>
			<div className='max-w-full mx-auto p-5 lg:p-0'>
				<h1 className='text-6xl font-bold text-left lg:text-center mb-20'>
					FAQs
				</h1>
				<div
					className='prose max-w-7xl gap-x-10 mx-auto columns-1 md:columns-2 lg:columns-3 prose-invert prose-h2:mb-2 prose-h2:text-xl prose-h2:text-blue'
					dangerouslySetInnerHTML={{
						__html: marked(content),
					}}
				/>
			</div>
		</>
	);
};

export const getStaticProps = async () => {
	const mdData = fs.readFileSync(path.join('data/faqs.md'), 'utf8');
	const { content } = matter(mdData);

	return {
		props: {
			content,
		},
	};
};

export default FaqsPage;
