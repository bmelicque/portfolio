interface Props {
	children: React.ReactChild;
}

export function TopHeading({ children }: Props) {
	return <h1 className="text-xl uppercase font-thin">{children}</h1>;
}

export function Heading({ children }: Props) {
	return (
		<h2 className="text-2xl uppercase text-center text-primary-dark font-normal mb-5">
			{children}
		</h2>
	);
}

export function SubHeading({ children }: Props) {
	return (
		<h3
			className="flex flex-col items-start mb-3
                uppercase text-xl text-primary-dark font-normal
                after:block after:w-16 after:h-1 after:bg-secondary"
		>
			{children}
		</h3>
	);
}
