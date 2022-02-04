import fs from 'fs';
import matter from 'gray-matter';
import { NextPage } from 'next';
import path from 'path';
import React from 'react';
import { marked } from 'marked';

const FaqsPage: NextPage<{ content: string }> = ({ content }) => {
	return (
		<>
			<div className="mx-auto max-w-full p-5 lg:p-0">
				<h1 className="mb-20 text-left text-6xl font-bold lg:text-center">
					FAQs
				</h1>
				<div
					className="prose prose-invert mx-auto max-w-7xl columns-1 gap-x-10 prose-h2:mb-2 prose-h2:text-xl prose-h2:text-blue md:columns-2 lg:columns-3"
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
