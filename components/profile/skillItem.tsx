import Image from "next/image";
import { useRef } from "react";
import { Skill } from "../../lib/data/skills";
import FadingWrapper from "./fadingWrapper";

const ICON_PATH_ROOT = "/assets/logos/";
const ICON_SIZE = 24;

export default function SkillItem({ icon, name }: Skill) {
	const ref = useRef<HTMLLIElement>();

	return (
		<FadingWrapper>
			<li ref={ref} className="items-center">
				<span className="flex gap-2">
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
			</li>
		</FadingWrapper>
	);
}