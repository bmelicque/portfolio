interface Props {
	children: React.ReactChild;
}

export function TopHeading({ children }: Props) {
	return <h1 className="text-xl uppercase font-thin">{children}</h1>;
}
