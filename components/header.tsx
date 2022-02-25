import { MouseEventHandler, useContext, useState } from "react";
import useWindowDimensions from "../lib/hooks/useWindowDimensions";
import { NavContext, SECTION_NAMES } from "../lib/context/navContext";

interface NavLink {
	href: string;
	active?: boolean;
	onClick: MouseEventHandler;
	children: React.ReactChild;
}

interface HamburgerBar {
	transform?: string;
}

interface Hamburger {
	active?: boolean;
}

const BREAKPOINT = 768;
const ANCHOR_HEIGHT = 48;

function Bar({ transform }: HamburgerBar) {
	return (
		<span
			className={"block w-full h-0.5 bg-white duration-200 " + transform}
		></span>
	);
}

function Hamburger({ active }: Hamburger) {
	return (
		<i className="flex flex-col w-7 gap-1.5">
			<Bar transform={active ? "translate-y-2 rotate-45" : ""} />
			<Bar transform={active ? "scale-0" : ""} />
			<Bar transform={active ? "-translate-y-2 -rotate-45" : ""} />
		</i>
	);
}

function NavLink({ href, active, onClick, children }: NavLink) {
	const className =
		" px-2 md:py-2 pr-8 md:pr-2 h-12 flex items-center cursor-pointer hover:bg-primary-dark border-b-2 " +
		(active ? "border-b-white" : "border-b-transparent");
	return (
		<a href={href} onClick={onClick} className={className}>
			{children}
		</a>
	);
}

export default function Header() {
	const [isExpanded, setIsExpanded] = useState(false);
	const { currentSectionName, scrollToRef } = useContext(NavContext);
	const { windowWidth } = useWindowDimensions();

	return (
		<header className="bg-primary text-white flex content-center fixed w-full z-10 overflow-hidden">
			<div className="container mx-auto flex flex-col md:flex-row justify-end items-end">
				<button
					onClick={() => setIsExpanded((curr) => !curr)}
					className="h-12 md:hidden mr-4"
				>
					<Hamburger active={isExpanded} />
				</button>
				<nav
					className="uppercase md:flex flex-col md:flex-row md:gap-2 text-lg duration-200 md:duration-0"
					style={{
						height:
							windowWidth > BREAKPOINT
								? "auto"
								: isExpanded
								? 4 * ANCHOR_HEIGHT
								: 0,
					}}
				>
					<NavLink
						href="#Accueil"
						active={currentSectionName === SECTION_NAMES.banner}
						onClick={scrollToRef(SECTION_NAMES.banner)}
					>
						Accueil
					</NavLink>
					<NavLink
						href="#Compétences"
						active={currentSectionName === SECTION_NAMES.profile}
						onClick={scrollToRef(SECTION_NAMES.profile)}
					>
						Compétences
					</NavLink>
					<NavLink
						href="#Réalisations"
						active={currentSectionName === SECTION_NAMES.portfolio}
						onClick={scrollToRef(SECTION_NAMES.portfolio)}
					>
						Réalisations
					</NavLink>
					<NavLink href="#Contact" onClick={scrollToRef(SECTION_NAMES.contact)}>
						Contact
					</NavLink>
				</nav>
			</div>
		</header>
	);
}
