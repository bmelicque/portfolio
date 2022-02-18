import { MutableRefObject, useEffect, useState } from "react";

// Takes a ref and returns a boolean indicating whether the element is in the viewport
export default function useViewport(ref: MutableRefObject<HTMLElement>) {
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