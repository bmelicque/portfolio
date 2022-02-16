import { Heading, SubHeading } from "./headings";
import { Skill, LANGUAGES } from "../lib/data/skills";
import Image from "next/image";

const ICON_PATH_ROOT = "/assets/logos/";
const ICON_SIZE = 24;

// Skill Item
function Skill({ icon, name, value }: Skill) {
	return (
		<li className="grid grid-cols-12 items-center">
			<span className="col-span-5 flex gap-2">
				{!!icon && (
					<Image
						src={ICON_PATH_ROOT + icon}
						width={ICON_SIZE}
						height={ICON_SIZE}
						objectFit="contain"
						alt=""
					/>
				)}
				{name}
			</span>
			<span className="col-span-7 relative inline-block bg-gray-300 h-2 rounded overflow-hidden">
				<span
					className="absolute inline-block bg-primary h-2 w-full rounded-lg origin-left"
					style={{ transform: `scaleX(${value / 100})` }}
				></span>
			</span>
		</li>
	);
}

// Sublist
interface SkillList {
	category: string;
	skills: Skill[];
}

function SkillList({ category, skills }: SkillList) {
	return (
		<section>
			<SubHeading>{category}</SubHeading>
			<ul className="flex flex-col gap-3	">
				{skills.map(({ icon, name, value }) => (
					<Skill key={name} icon={icon} name={name} value={value} />
				))}
			</ul>
		</section>
	);
}

// Complete component
export default function Profile() {
	return (
		<section className="container mx-auto py-16 px-0.5">
			<Heading>Mes compétences</Heading>

			<div id="skills-container" className="grid grid-cols-3 gap-24">
				<SkillList category="Langages et frameworks" skills={LANGUAGES} />
			</div>
		</section>
	);
}
