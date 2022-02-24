interface Props {
	active: boolean;
	onClick: () => void;
}

const DEFAULT_CLASS =
	"inline-block rounded-full w-5 h-5 border-2 border-primary";

export default function BulletButton({ active, onClick }: Props) {
	const className = DEFAULT_CLASS + " " + (active ? "bg-primary" : "");

	return (
		<button
			onClick={onClick}
			className={className}
			title="Voir le projet"
		></button>
	);
}
