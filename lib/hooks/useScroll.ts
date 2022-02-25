import { useEffect, useState } from "react";

export default function useScroll() {
	const [scrollY, setScrollY] = useState<number>(undefined);

	useEffect(() => {
		function handleScrollChange() {
			setScrollY(window.scrollY);
		}

		const events = ["scroll", "resize"];
		handleScrollChange();
		events.forEach((e) =>
			window.addEventListener(e, () => handleScrollChange())
		);

		return events.forEach((e) =>
			window.removeEventListener(e, () => handleScrollChange())
		);
	}, []);

	return scrollY;
}
