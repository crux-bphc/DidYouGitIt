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
