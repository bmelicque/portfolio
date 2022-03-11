import { ErrorMessage, Field } from "formik";

interface Props {
	name: string;
	label: string;
	type: string;
	placeholder: string;
	className?: string;
	error?: boolean;
}

const DEFAULT_CLASSNAME = "flex flex-col gap-2 relative";

export default function Fieldset(props: Props) {
	const { name, label, type, error } = props;
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
				className={`${
					error ? "border-red-600" : "border-gray-300"
				} border rounded outline-0 py-1 px-2 flex-grow`}
			/>
			{!!error && (
				<div className="error-container absolute bottom-0 translate-y-7 left-1/2 -translate-x-1/2 text-red-600 font-bold">
					<ErrorMessage name={name} />
				</div>
			)}
		</div>
	);
}
