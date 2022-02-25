import Image from "next/image";
import { Project } from "../../lib/data/projects";
import ButtonLink from "../buttonLink";
import { SubHeading } from "../headings";
import ContentItem from "./contentItem";

interface Props {
	project: Project;
}

export default function ProjectCard({
	project: { name, address, github, image, context, missions, stack },
}: Props) {
	return (
		<div className="flex flex-col items-start">
			<div className="ml-24">
				<SubHeading>{name}</SubHeading>
			</div>
			<div className="relative w-full h-96 bg-black mb-8">
				<Image
					src={image.src}
					alt={image.alt}
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<div className="px-16 grid grid-cols-1 lg:grid-cols-3 gap-x-16 gap-y-4">
				<div>
					<ContentItem title="Contexte :">
						<p>{context.text}</p>
					</ContentItem>
				</div>
				<div className="lg:col-span-2">
					<ContentItem title="Mes missions">
						<ul>
							{missions.map((mission, i) => (
								<li key={i}>– {mission}</li>
							))}
						</ul>
					</ContentItem>
				</div>
				<div className="lg:col-span-3">
					<ContentItem title="Stack utilisé :">
						<ul className="flex flex-wrap gap-2 pl-5 mt-1">
							{stack.map((tech) => (
								<li
									key={tech}
									className="border border-gray-300 indent-0 rounded-r rounded-l-2xl px-2 py-1 bg-white text-primary-dark"
								>
									• {tech}
								</li>
							))}
						</ul>
					</ContentItem>
				</div>
			</div>
			<div className="mt-4 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center self-center">
				<ButtonLink
					href={github}
					target="_blank"
					color={github ? "BLACK" : "DISABLED"}
				>
					{github ? "Voir le repo" : "Repo privé"}
				</ButtonLink>
				<ButtonLink href={address} target="_blank" color="SECONDARY">
					Voir le site
				</ButtonLink>
			</div>
		</div>
	);
}
