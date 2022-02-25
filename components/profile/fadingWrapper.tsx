import { useRef } from "react";
import useViewport from "../../lib/hooks/useViewport";

export default function FadingWrapper({ children }: { children: React.ReactElement }) {
	const ref = useRef<HTMLElement>();
	const visible = useViewport(ref);

	return (
		<span
			ref={ref}
			className="block duration-500 delay-100"
			style={{
				transform: `translateX(${visible ? 0 : "1rem"})
					translateY(${visible ? 0 : "-0.5rem"})`,
				opacity: visible ? 1 : 0,
			}}
		>
			{children}
		</span>
	);
}