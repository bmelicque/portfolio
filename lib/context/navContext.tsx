import { createContext, MouseEventHandler, useRef } from "react";

interface NavContext {
	refs: any;
	scrollToRef: (sectionName: string) => MouseEventHandler;
}

export const SECTION_NAMES = {
	banner: "banner",
	profile: "profile",
	portfolio: "portfolio",
};

export const NavContext = createContext<NavContext>(undefined!);

export default function NavProvider({ children }: React.PropsWithChildren<{}>) {
	const sectionNames = Object.values(SECTION_NAMES);
	const refs = useRef(sectionNames);
    
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
