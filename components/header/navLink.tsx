import { MouseEventHandler } from "react";

interface NavLink {
	href: string;
	active?: boolean;
	onClick: MouseEventHandler;
	children: React.ReactChild;
}

export default function NavLink({ href, active, onClick, children }: NavLink) {
	const className = `px-2 md:py-2 pr-8 md:pr-2 h-12 flex items-center cursor-pointer
    hover:bg-primary-dark border-r-2 md:border-r-0 md:border-b-2 ${
			active
				? "border-r-white md:border-r-transparent md:border-b-white"
				: "border-r-transparent md:border-b-transparent"
		}`;
	return (
		<a href={href} onClick={onClick} className={className}>
			{children}
		</a>
	);
}
