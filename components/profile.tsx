import { Heading, SubHeading } from "./headings";

// Skill Item
interface Skill {
	icon?: string;
	name: string;
	value: number;
}

function Skill({ icon, name, value }: Skill) {
	return (
		<li>
			{name} {value}
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
				{skills.map(({ name, value }) => (
					<Skill name={name} value={value} />
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

			<SkillList
				category="Langages et frameworks"
				skills={[
					{
						name: "Nom",
						value: 2,
					},
					{
						name: "Nom",
						value: 3,
					},
					{
						name: "Nom",
						value: 1,
					},
				]}
			/>
		</section>
	);
}
