interface BarProps {
	transform?: string;
}

interface HamburgerProps {
	active?: boolean;
}

function Bar({ transform }: BarProps) {
	return (
		<span
			className={"block w-full h-0.5 bg-white duration-200 " + transform}
		></span>
	);
}

export default function Hamburger({ active }: HamburgerProps) {
	return (
		<i className="flex flex-col w-7 gap-1.5">
			<Bar transform={active ? "translate-y-2 rotate-45" : ""} />
			<Bar transform={active ? "scale-0" : ""} />
			<Bar transform={active ? "-translate-y-2 -rotate-45" : ""} />
		</i>
	);
}
