import { Dispatch } from "react";
import { ACTIONS } from ".";

interface ArrowProps {
	type: "left" | "right";
	onClick: Dispatch<any>;
}

const BUTTON_STYLE_MAP = {
	left: "left-0",
	right: "right-0",
};

const ARROW_STYLE_MAP = {
	left: "border-l-2 border-b-2 rotate-45 right-2",
	right: "border-r-2 border-b-2 -rotate-45 left-2",
};

export default function ArrowButton({ type, onClick }: ArrowProps) {
	const buttonClass =
		BUTTON_STYLE_MAP[type] +
		" absolute w-12 h-16 hover:w-16 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-70 duration-100";
	const className =
		ARROW_STYLE_MAP[type] + " absolute border-black w-5 h-5 top-1/2 -translate-y-1/2";

	return (
		<button
			className={buttonClass}
			onClick={() =>
				onClick({
					type: type === "right" ? ACTIONS.DISPLAY_NEXT : ACTIONS.DISPLAY_PREV,
				})
			}
		>
			<span className={className}></span>
		</button>
	);
}