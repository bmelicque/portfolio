import { MouseEventHandler } from "react";

interface Props {
	active?: boolean;
	onClick: MouseEventHandler;
}

export default function UnfoldButton({ active, onClick }: Props) {
	const rotation = active ? "rotate-45" : "-rotate-135";
	const className =
		"block sm:hidden w-3 h-3 border-gray-600 border-r-2 border-b-2 " + rotation;
	return (
		<button onClick={onClick}>
			<span className={className}></span>
		</button>
	);
}