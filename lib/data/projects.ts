export interface Project {
	name: string;
	address: string;
	github?: string;
	image: {
		src: string;
		alt: string;
	};
	context: {
		type: string;
		text: string;
	};
	missions: string[];
	stack: string[];
}

export const PROJECTS: Project[] = [
	{
		name: "Waleed Hafid – Site vitrine avec panneau admin",
		address: "https://waleedhafid.fr",
		image: {
			src: "/assets/images/waleedhafid.png",
			alt: "La page d'accueil du site, avec une sélection de photos",
		},
		context: {
			type: "Mission",
			text: "Ma première mission dans un cadre professionnel. Le client (un photographe) souhaitait un site vitrine, avec une partie privée pour livrer ses photos à ses clients.",
		},
		missions: [
			"Intégrer la maquette choisie pour la partie publique",
			"Mettre en place un formulaire de contact",
			"Créer l'architecture de la base de données MySQL (contrainte hébergeur), ainsi que l'API utilisée pour communiquer avec celle-ci",
			"Designer et développer les parties administrateur et client du site",
			"Envoyer le site en production et effectuer la maintenance le cas échéant",
		],
		stack: ["Next.js", "Typescript", "React.js", "Javascript", "Sequelize", "MySQL", "SaSS"],
	},
	{
		name: "Bastien Mélicque – Portfolio",
		address: "",
		github: "https://github.com/bmelicque/portfolio",
		image: {
			src: "/assets/images/portfolio.png",
			alt: "La page d'accueil : quelques lignes de présentation",
		},
		context: {
			type: "Projet personnel",
			text: "La construction d'un site portfolio (l'incontournable du développeur !), pour montrer ce que je vaux et ce que je sais faire.",
		},
		missions: [
			"Designer et intégrer l'interface",
			"Mettre en place un formulaire de contact simple d'utilisation",
			"Envoyer en production",
		],
		stack: ["Next.js", "Typescript", "React.js", "Javascript", "Tailwind CSS"],
	},
	{
		name: "Qere – Dictionnaire bilingue",
		address: "https://qere.fr",
		image: {
			src: "/assets/images/qere.png",
			alt: "Le moteur de recherche du site",
		},
		context: {
			type: "Projet personnel",
			text: "Le projet qui m'a donné envie de faire du web : la construction d'un dictionnaire bilingue en ligne.",
		},
		missions: [
			"Designer et intégrer l'interface",
			"Concevoir l'architecture de la base de données, et celle de tout le projet",
			"Envoyer en production et effectuer la maintenance",
		],
		stack: ["HTML", "CSS", "PHP", "MySQL", "Javascript"],
	},
];
