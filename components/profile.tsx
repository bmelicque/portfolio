import { Heading, SubHeading } from "./headings";
import { Skill, LANGUAGES } from "../lib/data/skills";

// Skill Item
function Skill({ icon, name, value }: Skill) {
	return (
		<li className="grid grid-cols-12 items-center">
			<span className="col-span-4">
				{!!icon && <i>I</i>}
				{name}
			</span>
			<span className="col-span-8 relative inline-block bg-gray-300 h-2 rounded">
				<span
					className="absolute inline-block bg-primary h-2 w-full rounded origin-left"
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
			<ul>
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

			<div id="skills-container" className="grid grid-cols-3">
				<SkillList category="Langages et frameworks" skills={LANGUAGES} />
			</div>
		</section>
	);
}
