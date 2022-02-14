import { useState } from "react";
import useWindowWidth from "../lib/hooks/useWindowWidth";

interface NavLink {
	href: string;
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

function NavLink({ href, children }: NavLink) {
	return (
		<a
			href={href}
			className="px-2 md:py-2 pr-8 md:pr-2 h-12 flex items-center cursor-pointer hover:bg-primary-dark"
		>
			{children}
		</a>
	);
}

export default function Header() {
	const [isExpanded, setIsExpanded] = useState(false);
	const windowWidth = useWindowWidth();

	return (
		<header className="bg-primary text-white flex content-center">
			<div className="container mx-auto flex flex-col md:flex-row justify-end items-end">
				<button
					onClick={() => setIsExpanded((curr) => !curr)}
					className="h-12 md:hidden mr-4"
				>
					<Hamburger active={isExpanded} />
				</button>
				<nav
					className="uppercase md:flex flex-col md:flex-row md:gap-2 text-xl duration-200 md:duration-0"
					style={{
						height:
							windowWidth > BREAKPOINT
								? "auto"
								: isExpanded
								? 4 * ANCHOR_HEIGHT
								: 0,
					}}
				>
					<NavLink href="">Accueil</NavLink>
					<NavLink href="">Compétences</NavLink>
					<NavLink href="">Réalisations</NavLink>
					<NavLink href="">Contact</NavLink>
				</nav>
			</div>
		</header>
	);
}
