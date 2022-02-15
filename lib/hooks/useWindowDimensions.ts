import { useState, useEffect } from "react";

interface Dimensions {
	windowWidth: number;
	windowHeight: number;
}

export default function useWindowDimensions() {
	const [dimensions, setDimensions] = useState<Dimensions>({
		windowWidth: undefined,
		windowHeight: undefined,
	});

	useEffect(() => {
		function handleResize() {
			setDimensions({
				windowWidth: document.documentElement.clientWidth,
				windowHeight: document.documentElement.clientHeight,
			});
		}

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return dimensions;
}
