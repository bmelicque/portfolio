import Image from "next/image";
import Photo from "../public/assets/banner_photo.jpg";
import ButtonLink from "./buttonLink";
import { TopHeading } from "./headings";
import { useContext } from "react";
import { NavContext, SECTION_NAMES } from "../lib/context/navContext";

export default function Banner() {
	const { scrollToRef } = useContext(NavContext);

	return (
		<section className="relative">
			<div id="image-wrapper" className="relative h-screen">
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
							<ButtonLink
								href="#Réalisations"
								onClick={scrollToRef(SECTION_NAMES.portfolio)}
								color="WHITE"
							>
								En savoir plus...
							</ButtonLink>
							<ButtonLink
								href="#Contact"
								onClick={scrollToRef(SECTION_NAMES.contact)}
								color="SECONDARY"
							>
								Contactez-moi !
							</ButtonLink>
						</div>
					</div>
				</div>
			</div>
			<button
				className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-gray-100 shadow rounded-full animate-bounce w-12 h-12"
				onClick={scrollToRef(SECTION_NAMES.profile, { behavior: "smooth" })}
			>
				<span className="inline-block h-1/3 w-1/3 border-b-2 border-l-2 border-gray-900 -rotate-45"></span>
			</button>
		</section>
	);
}
