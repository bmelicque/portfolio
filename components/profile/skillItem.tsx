import Image from "next/image";
import { useRef } from "react";
import { Skill } from "../../lib/data/skills";
import useViewport from "../../lib/hooks/useViewport";
import FadingWrapper from "./fadingWrapper";

const ICON_PATH_ROOT = "/assets/logos/";
const ICON_SIZE = 24;

export default function SkillItem({ icon, name, value }: Skill) {
	const ref = useRef<HTMLLIElement>();
	const visible = useViewport(ref);

	return (
		<FadingWrapper>
			<li ref={ref} className="grid grid-cols-12 items-center">
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
						className="absolute inline-block bg-primary h-2 w-full rounded-lg origin-left duration-500 delay-300"
						style={{ transform: `scaleX(${visible ? value / 100 || 1 : 0})` }}
					></span>
				</span>
			</li>
		</FadingWrapper>
	);
}