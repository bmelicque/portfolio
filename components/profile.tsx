import { Heading, SubHeading } from "./headings";
import {
	Skill,
	LANGUAGES,
	DATABASES,
	ENVIRONMENT,
	METHODOLOGIES,
	HUMAN_SKILLS,
} from "../lib/data/skills";
import Image from "next/image";
import { useRef, useState, useEffect, MutableRefObject } from "react";
import useScroll from "../lib/hooks/usScroll";

const ICON_PATH_ROOT = "/assets/logos/";
const ICON_SIZE = 24;

// Unfold button
interface UnfoldButton {
	active?: boolean;
	toggleState: () => void;
}

function UnfoldButton({ active, toggleState }: UnfoldButton) {
	const rotation = active ? "rotate-45" : "-rotate-135";
	const className =
		"block sm:hidden w-3 h-3 border-gray-600 border-r-2 border-b-2 " + rotation;
	return (
		<button onClick={toggleState}>
			<span className={className}></span>
		</button>
	);
}

// Skill Item
function useViewport(ref: MutableRefObject<HTMLElement>) {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		function handleScroll() {
			const { top, bottom } = ref?.current?.getBoundingClientRect?.();
			const isInViewPort = top > 0 && bottom < window.innerHeight;
			setVisible(isInViewPort);
		}

		window.addEventListener("scroll", () => handleScroll());
		return window.removeEventListener("scroll", () => handleScroll());
	}, [ref]);

	return visible;
}

function Skill({ icon, name, value }: Skill) {
	const ref = useRef<HTMLLIElement>();
	const visible = useViewport(ref);

	useEffect(() => console.log(visible), [visible]);

	return (
		<li
			ref={ref}
			className="grid grid-cols-12 items-center duration-500 delay-200"
			style={{
				transform: `translateY(${visible ? 0 : "2rem"})`,
				opacity: visible ? 1 : 0,
			}}
		>
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
	);
}

// Sublist
interface SkillList {
	category: string;
	skills: Skill[];
}

function SkillList({ category, skills }: SkillList) {
	const [unfolded, setUnfolded] = useState(false);

	return (
		<section>
			<SubHeading>
				<span className="w-full flex justify-between">
					{category}{" "}
					<UnfoldButton
						active={unfolded}
						toggleState={() => setUnfolded((current) => !current)}
					/>
				</span>
			</SubHeading>
			<ul
				className={`${
					unfolded ? "flex" : "hidden"
				} sm:flex flex-col gap-3 mb-10`}
			>
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
