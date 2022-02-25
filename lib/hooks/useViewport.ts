import { MutableRefObject, useEffect, useState } from "react";

// Takes a ref and returns a boolean indicating whether the element is in the viewport
export default function useViewport(ref: MutableRefObject<HTMLElement>) {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		function handleScrollChange() {
			const { top, bottom } = ref?.current?.getBoundingClientRect?.() ?? {
				top: undefined,
				bottom: undefined,
			};
			const isInViewPort = top > 0 && bottom < window.innerHeight;
			setVisible(isInViewPort);
		}

		const events = ["scroll", "resize"];
		handleScrollChange();
		events.forEach((e) =>
			window.addEventListener(e, () => handleScrollChange())
		);

		return events.forEach((e) =>
			window.removeEventListener(e, () => handleScrollChange())
		);
	}, [ref]);

	return visible;
}
