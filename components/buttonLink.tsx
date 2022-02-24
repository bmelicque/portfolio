import { MouseEventHandler } from "react";

interface Props {
	href: string;
	target?: string;
	onClick?: MouseEventHandler;
	color: string;
	disabled?: boolean;
	children: React.ReactChild;
}

const COLORS_MAP = {
	PRIMARY: "bg-primary hover:bg-primary-dark text-white",
	SECONDARY: "bg-secondary hover:bg-secondary-dark text-white",
	WHITE: "bg-white hover:bg-gray-200 text-gray-900",
	BLACK: "bg-gray-900 hover:bg-gray-700 text-white",
	DISABLED: "bg-gray-500 text-white",
};

export default function ButtonLink({
	href,
	target,
	onClick,
	color,
	children,
}: Props) {
	const colorClass = COLORS_MAP[color];
	if (!colorClass) return null;

	const className = `${colorClass} py-4 px-6 self-center rounded text-base uppercase`;

	return (
		<a href={href} target={target} onClick={onClick} className={className}>
			{children}
		</a>
	);
}
