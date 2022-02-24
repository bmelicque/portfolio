import { createContext, MouseEventHandler, useRef } from "react";

interface NavContext {
	refs: any;
	scrollToRef: (sectionName: string) => MouseEventHandler;
}

export const SECTION_NAMES = {
	banner: "banner",
	profile: "profile",
	portfolio: "portfolio",
	contact: "contact",
};

export const NavContext = createContext<NavContext>(undefined!);

export default function NavProvider({ children }: React.PropsWithChildren<{}>) {
	const sectionNames = Object.values(SECTION_NAMES);
	const refs = useRef(sectionNames);

	// Actual refs are accessible at refs.current[refName]
	// Needs to use ref={(el) => (refs.current[sectionName] = el)}, which is a pain to write every time
	// This function array is used as would be regular refs for assignement ref={refs[sectionName]}
	const refGetters = Object.values(sectionNames).reduce(
		(getters, sectionName) => ({
			...getters,
			[sectionName]: (el) => (refs.current[sectionName] = el),
		}),
		{}
	) as any;

	const scrollToRef =
		(sectionName: string): MouseEventHandler =>
		(e) => {
			e.preventDefault();
			refs.current[sectionName].scrollIntoView();
		};

	return (
		<NavContext.Provider value={{ refs: refGetters, scrollToRef }}>
			{children}
		</NavContext.Provider>
	);
}
