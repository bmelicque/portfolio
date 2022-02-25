import { Heading } from "../headings";
import {
	LANGUAGES,
	DATABASES,
	ENVIRONMENT,
	METHODOLOGIES,
	HUMAN_SKILLS,
} from "../../lib/data/skills";
import SkillList from "./skillList";

// Complete component
export default function Profile() {
	return (
		<section className="container mx-auto py-16 px-4 sm:px-0.5">
			<Heading>Mes compétences</Heading>

			<div
				id="skills-container"
				className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 sm:gap-16 lg:gap-24"
			>
				<SkillList category="Langages et frameworks" skills={LANGUAGES} />
				<div>
					<SkillList category="Bases de données" skills={DATABASES} />
					<SkillList category="Environnement" skills={ENVIRONMENT} />
				</div>
				<div>
					<SkillList category="Méthodologies" skills={METHODOLOGIES} />
					<SkillList category="Qualités et valeurs" skills={HUMAN_SKILLS} />
				</div>
			</div>
		</section>
	);
}
