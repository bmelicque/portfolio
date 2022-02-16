// Fixer menu mobile
// Responsive

import Image from "next/image";
import Photo from "../public/assets/banner_photo.jpg";
import { TopHeading } from "./headings";

// Links
interface BannerLink {
	href: string;
	color: string;
	children: React.ReactChild;
}

const COLORS_MAP = {
	PRIMARY: "bg-primary hover:bg-primary-dark text-white",
	SECONDARY: "bg-secondary hover:bg-secondary-dark text-white",
	WHITE: "bg-white hover:bg-gray-200 text-gray-900",
};

function BannerLink({ href, color, children }: BannerLink) {
	const colorClass = COLORS_MAP[color];
	if (!colorClass) return null;
	return (
		<a
			href={href}
			className={`${colorClass} py-4 px-6 self-center rounded text-base uppercase`}
		>
			{children}
		</a>
	);
}

// Complete component
export default function Banner() {
	return (
		<section className="relative">
			<div
				id="image-wrapper"
				className="bg-red-900 relative h-screen"
			>
				{/* Image by Arnold Francisca @clark-fransa */}
				<Image src={Photo} layout="fill" objectFit="cover" alt="" />
			</div>
			<div
				id="text-wrapper"
				className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-70"
			>
				<div
					id="banner-text-container"
					className="container mx-auto relative w-full h-full"
				>
					<div className="absolute w-full md:w-2/3 lg:w-1/2 xl:w-2/5 px-8 md:px-0 text-white h-full top-0 right-0 flex flex-col justify-center gap-8">
						<TopHeading>Bastien Mélicque – Développeur web</TopHeading>
						<p className="text-3xl font-bold">
							Je développe votre projet web en utilisant des technologies
							modernes et robustes.
						</p>
						<p className="text-xl">
							Passionné par le développement, je me forme en permanence pour
							faire vivre vos projets en m&apos;adaptant aux contraintes.
						</p>
						<div id="link-wrapper" className="flex gap-6 mt-4">
							<BannerLink href="" color="WHITE">
								En savoir plus...
							</BannerLink>
							<BannerLink href="" color="SECONDARY">
								Contactez-moi !
							</BannerLink>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
