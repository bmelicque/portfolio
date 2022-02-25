import { useContext, useState } from "react";
import { NavContext, SECTION_NAMES } from '../../lib/context/navContext';
import useWindowDimensions from '../../lib/hooks/useWindowDimensions';
import Hamburger from './hamburger';
import NavLink from "./navLink";

const BREAKPOINT = 768;
const ANCHOR_HEIGHT = 48;

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
