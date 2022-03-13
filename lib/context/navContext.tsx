import {
	createContext,
	MouseEventHandler,
	useEffect,
	useRef,
	useState,
} from "react";
import useScroll from "../hooks/useScroll";

interface NavContext {
	refs: any;
	currentSectionName: string;
	scrollToRef: (sectionName: string, params?: any) => MouseEventHandler;
}

const HEADER_MARGIN_SIZE = 32;

export const SECTION_NAMES = {
	banner: "banner",
	profile: "profile",
	portfolio: "portfolio",
	contact: "contact",
};

export const NavContext = createContext<NavContext>(undefined!);

export default function NavProvider({ children }: React.PropsWithChildren<{}>) {
	const sectionNames = Object.values(SECTION_NAMES);
	const [currentSectionName, setCurrentSectionName] =
		useState<string>(undefined);
	const refs = useRef(sectionNames);
	const windowScroll = useScroll();

	// Actual refs are accessible at refs.current[refName]
	// Needs to use ref={(el) => (refs.current[sectionName] = el)}, which is a pain to write every time
	// This aarray of functions is used as would be regular refs for assignement ref={refs[sectionName]}
	const refGetters = Object.values(sectionNames).reduce(
		(getters, sectionName) => ({
			...getters,
			[sectionName]: (el) => (refs.current[sectionName] = el),
		}),
		{}
	);

	const scrollToRef =
		(
			sectionName: string,
			params?: any
		): MouseEventHandler =>
		(e) => {
			e.preventDefault();
			refs.current[sectionName].scrollIntoView(params);
		};

	// This effect keeps track of the currently displayed section
	useEffect(() => {
		const sectionsOffsets = sectionNames.map((section) => {
			if (refs.current[section])
				return refs.current[section].getBoundingClientRect().y;
		});

		// The visible/current section is the last one with a non-positive index (with some margin to account for the header)
		const negativeOffsets = sectionsOffsets.filter(
			(offset) => offset <= window.innerHeight / 4
		);
		setCurrentSectionName(refs.current[negativeOffsets.length - 1]);
	}, [windowScroll, refs, sectionNames]);

	return (
		<NavContext.Provider
			value={{ refs: refGetters, currentSectionName, scrollToRef }}
		>
			{children}
		</NavContext.Provider>
	);
}
