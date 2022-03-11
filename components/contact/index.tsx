import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Heading } from "../headings";
import Fieldset from "./fieldset";

const ERROR_MESSAGES = {
	EMAIL: "Email invalide",
	REQUIRED: "Champ requis",
};

export default function Contact() {
	return (
		<section className="py-20 px-4">
			<Heading>Me contacter</Heading>
			<Formik
				initialValues={{ name: "", email: "", subject: "", message: "" }}
				validationSchema={Yup.object({
					name: Yup.string().required(ERROR_MESSAGES.REQUIRED),
					email: Yup.string()
						.email(ERROR_MESSAGES.EMAIL)
						.required(ERROR_MESSAGES.REQUIRED),
					subject: Yup.string().required(ERROR_MESSAGES.REQUIRED),
					message: Yup.string().required(ERROR_MESSAGES.REQUIRED),
				})}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{() => (
					<Form className="grid grid-cols-2 gap-6 w-screen max-w-2xl mx-auto">
						<Fieldset
							name="name"
							label="Nom"
							type="text"
							placeholder="Votre nom"
						/>
						<Fieldset
							name="email"
							label="Adresse email"
							type="email"
							placeholder="Votre adresse email"
						/>
						<Fieldset
							name="subject"
							label="Objet"
							type="text"
							placeholder="L'objet de votre message"
							className="col-span-2"
						/>
						<Fieldset
							name="message"
							label="Message"
							type="textarea"
							placeholder="Parlez-moi de votre projet..."
							className="col-span-2 min-h-[12em]"
						/>
						<div className="submit-container col-span-2 flex justify-center">
							<button
								type="submit"
								className="bg-primary hover:bg-primary-dark text-white  py-2 px-6 self-center rounded text-base uppercase"
							>
								Envoyer
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</section>
	);
}
