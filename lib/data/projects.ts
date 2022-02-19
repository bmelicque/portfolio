export interface Project {
	name: string;
	address: string;
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
		name: "Waleed Hafid – Site vitrine",
		address: "https://waleedhafid.fr",
		image: {
			src: "/assets/images/waleedhafid.png",
			alt: "La page d'accueil du site, avec une sélection de photos",
		},
		context: {
			type: "Mission",
			text: "Ma première mission dans un cadre professionnel. Le client (un photographe) souhaitait un site vitrine avec une partie privée pour livrer ses photos et mettre à jour la partie publique.",
		},
		missions: [
			"Intégrer la maquette choisie pour la partie publique, comprenant des effets avancés de mise en page",
			"Mettre en place un formulaire de contact",
			"Créer une base de données MySQL (contrainte hébergeur) pour stocker les photos et données associées",
			"Concevoir et mettre en place l'API pour échanger avec la BDD",
			"Concevoir et développer les parties administrateur et client",
			"Envoyer le site en production et effectuer la maintenance le cas échéant",
		],
		stack: ["Next.js", "Typescript", "Sequelize", "SaSS Modules"],
	},
];
