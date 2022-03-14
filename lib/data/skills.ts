export interface Skill {
	icon?: string;
	name: string;
	value?: number;
}

export const LANGUAGES: Skill[] = [
	{
		icon: "javascript.svg",
		name: "Javascript",
	},
	{
		icon: "typescript.svg",
		name: "Typescript",
	},
	{
		icon: "react.png",
		name: "React.js",
	},
	{
		icon: "next.png",
		name: "Next.js",
	},
	/*{
		icon: "vue.png",
		name: "Vue.js",
	},*/
	{
		icon: "node.png",
		name: "Node.js",
	},
	{
		icon: "express.png",
		name: "Express.js",
	},
	/*{
		icon: "php.png",
		name: "PHP",
		value: 10,
	},*/
	{
		icon: "html.png",
		name: "HTML",
		value: 90,
	},
	{
		icon: "css.png",
		name: "CSS",
		value: 90,
	},
	{
		icon: "sass.png",
		name: "SaSS",
		value: 60,
	},
	/*{
		icon: "bootstrap.png",
		name: "Bootstrap",
		value: 20,
	},*/
	{
		icon: "tailwind.png",
		name: "Tailwind CSS",
	},
];

export const DATABASES: Skill[] = [
	{
		icon: "mongo.png",
		name: "MongoDB",
	},
	{
		icon: "mysql.png",
		name: "MySQL",
	},
	{
		icon: "sequelize.png",
		name: "Sequelize",
	},
];

export const ENVIRONMENT: Skill[] = [
	{
		icon: "postman.png",
		name: "Postman",
	},
	{
		icon: "xampp.png",
		name: "XAMPP",
	},
	{
		icon: "ssh.png",
		name: "SSH",
	},
	/*{
		icon: "linux.png",
		name: "Linux",
		value: 10,
	},*/
	{
		icon: "vscode.png",
		name: "Visual Studio Code",
	},
];

export const METHODOLOGIES: Skill[] = [
	/*{
		icon: "agile.png",
		name: "Méthodes Agiles",
	},*/
	/*{
		icon: "trello.png",
		name: "Trello",
	},*/
	/*{
		icon: "jira.png",
		name: "Jira",
	},*/
	{
		icon: "git.png",
		name: "Git",
	},
	{
		icon: "github.png",
		name: "GitHub",
	},
];

export const HUMAN_SKILLS: Skill[] = [
	{
		name: "Rigueur",
	},
	{
		name: "Autonomie",
	},
	{
		name: "Adaptabilité",
	},
	{
		name: "Curiosité",
	},
];
