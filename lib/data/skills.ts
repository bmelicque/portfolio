export interface Skill {
	icon?: string;
	name: string;
	value: number;
}

export const LANGUAGES: Skill[] = [
	{
		icon: "javascript.svg",
		name: "Javascript",
		value: 90,
	},
	{
		icon: "typescript.svg",
		name: "Typescript",
		value: 50,
	},
	{
		icon: "react.png",
		name: "React.js",
		value: 65,
	},
	{
		icon: "next.png",
		name: "Next.js",
		value: 65,
	},
	{
		icon: "vue.png",
		name: "Vue.js",
		value: 10,
	},
	{
		icon: "node.png",
		name: "Node.js",
		value: 60,
	},
	{
		icon: "express.png",
		name: "Express.js",
		value: 60,
	},
	{
		icon: "php.png",
		name: "PHP",
		value: 10,
	},
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
	{
		icon: "bootstrap.png",
		name: "Bootstrap",
		value: 20,
	},
	{
		icon: "tailwind.png",
		name: "Tailwind CSS",
		value: 65,
	},
];

export const DATABASES: Skill[] = [
	{
		icon: "mongo.png",
		name: "MongoDB",
		value: 40,
	},
	{
		icon: "mysql.png",
		name: "MySQL",
		value: 60,
	},
	{
		icon: "sequelize.png",
		name: "Sequelize",
		value: 50,
	},
];

export const ENVIRONMENT: Skill[] = [
	{
		icon: "git.png",
		name: "Git",
		value: 75,
	},
	{
		icon: "github.png",
		name: "GitHub",
		value: 60,
	},
	{
		icon: "postman.png",
		name: "Postman",
		value: 30,
	},
	{
		icon: "xampp.png",
		name: "XAMPP",
		value: 20,
	},
	{
		icon: "ssh.png",
		name: "SSH",
		value: 70,
	},
	{
		icon: "linux.png",
		name: "Linux",
		value: 10,
	},
	{
		icon: "vscode.png",
		name: "Visual Studio Code",
		value: 70,
	},
];
