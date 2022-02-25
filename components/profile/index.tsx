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
		<section className="container mx-auto py-20 px-4 sm:px-0.5">
			<Heading>Mes compétences</Heading>

			<div
				id="skills-container"
				className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 sm:gap-16 sm:gap-y-0 lg:gap-24 lg:gap-y-0"
			>
				<SkillList category="Langages et frameworks" skills={LANGUAGES} />
				<div>
					<SkillList category="Bases de données" skills={DATABASES} />
					<SkillList category="Environnement" skills={ENVIRONMENT} />
				</div>
				<div className="grid sm:col-span-2 sm:grid-cols-2 sm:gap-24 xl:col-span-1 xl:grid-cols-1 xl:gap-0">
					<SkillList category="Méthodologies" skills={METHODOLOGIES} />
					<SkillList category="Qualités et valeurs" skills={HUMAN_SKILLS} />
				</div>
			</div>
		</section>
	);
}
