import { Field } from "formik";

interface Props {
	name: string;
	label: string;
	type: string;
	placeholder: string;
	className?: string;
	visited?: boolean;
	error?: boolean;
}

const DEFAULT_CLASSNAME = "flex flex-col gap-2";

export default function Fieldset(props: Props) {
	const { name, label, type } = props;
	const className = `${props.className} ${DEFAULT_CLASSNAME}`;

	return (
		<div className={className}>
			<label htmlFor={name} className="uppercase font-medium text-gray-800">
				{label}
			</label>
			<Field
				{...props}
				id={name}
				as={type === "textarea" ? "textarea" : "input"}
				className="border border-gray-300 rounded outline-0 py-1 px-2 flex-grow"
			/>
		</div>
	);
}
