interface Props {
	title: string;
	children: React.ReactElement;
}

export default function ContentItem({ title, children }) {
	const styledChildren = { ...children, props: { ...children.props } };
    styledChildren.props.className += " indent-8 ";
	return (
		<div className="mb-4">
			<h4 className="font-bold text-primary-darker">{title}</h4>
			{styledChildren}
		</div>
	);
}
