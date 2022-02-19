interface Props {
	href: string;
	target?: string;
	color: string;
	children: React.ReactChild;
}

const COLORS_MAP = {
	PRIMARY: "bg-primary hover:bg-primary-dark text-white",
	SECONDARY: "bg-secondary hover:bg-secondary-dark text-white",
	WHITE: "bg-white hover:bg-gray-200 text-gray-900",
};

export default function ButtonLink({ href, target, color, children }: Props) {
	const colorClass = COLORS_MAP[color];
	if (!colorClass) return null;
	return (
		<a
			href={href}
			target={target}
			className={`${colorClass} py-4 px-6 self-center rounded text-base uppercase`}
		>
			{children}
		</a>
	);
}
