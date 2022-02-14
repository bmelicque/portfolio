import { useState, useEffect } from "react";

export default function useWindowWidth() {
	const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

	useEffect(() => {
		function handleResize() {
			setWindowWidth(document.documentElement.clientWidth);
		}

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowWidth;
}
