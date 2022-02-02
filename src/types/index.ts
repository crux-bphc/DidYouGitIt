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
}
