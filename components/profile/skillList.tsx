import { useState } from "react";
import { Skill } from "../../lib/data/skills";
import { SubHeading } from "../headings";
import FadingWrapper from "./fadingWrapper";
import SkillItem from "./skillItem";
import UnfoldButton from "./unfoldButton";

interface SkillList {
	category: string;
	skills: Skill[];
}

export default function SkillList({ category, skills }: SkillList) {
	const [unfolded, setUnfolded] = useState(false);

	return (
		<section>
			<FadingWrapper>
				<SubHeading>
					<span className="w-full flex justify-between">
						{category}{" "}
						<UnfoldButton
							active={unfolded}
							onClick={() => setUnfolded((current) => !current)}
						/>
					</span>
				</SubHeading>
			</FadingWrapper>
			<ul
				className={`${
					unfolded ? "grid" : "hidden sm:grid"
				} grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4 mb-10`}
			>
				{skills.map(({ icon, name, value }) => (
					<SkillItem key={name} icon={icon} name={name} value={value} />
				))}
			</ul>
		</section>
	);
}