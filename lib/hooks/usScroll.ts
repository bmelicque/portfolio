import { useEffect, useState } from "react";

export default function useScroll() {
	const [scrolled, setScrolled] = useState<number>(undefined);

	useEffect(() => {
		function handleScroll() {
			setScrolled(window.scrollY);
		}

		handleScroll();
		window.addEventListener("scroll", () => handleScroll());
		return window.removeEventListener("scroll", () => handleScroll());
	}, []);

	return scrolled;
}
