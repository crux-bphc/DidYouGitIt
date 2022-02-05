export type Project = {
	title: string;
	domain: string;
	description: string;
	link: string;
	logo: string;
};

export type Workflow = {
	title: string;
	desc: string;
	orientation?: 'left' | 'right';
	icon: string;
};

export type Team = {
	name: string;
	subtitle: string;
	coverPic: string;
	github: string;
};

export type Style = {
	height: number | string;
	width: number | string;
};

export type Club = {
	name: string;
	image: string;
	alt: string;
	style: Style;
};

export type Schedule = {
	title: string;
	date: string;
	year: string;
	orientation?: 'left' | 'right';
};
