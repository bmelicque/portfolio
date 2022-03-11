import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Heading } from "../headings";
import Fieldset from "./fieldset";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ERROR_MESSAGES = {
	EMAIL: "Email invalide",
	REQUIRED: "Champ requis",
};

export default function Contact() {
	const formRef = useRef();
	const [sent, setSent] = useState(false);

	const sendEmail = () => {
		emailjs.sendForm(
			"service_shv6hpv",
			"template_um6hhmd",
			formRef.current,
			"27rBJ4PeBglO0NWC6"
		);
		setSent(true);
	};

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
				onSubmit={sendEmail}
			>
				{(formik) => (
					<Form
						ref={formRef}
						className="grid grid-cols-1 md:grid-cols-2 gap-6 w-screen max-w-2xl mx-auto"
					>
						<Fieldset
							name="name"
							label="Nom"
							type="text"
							placeholder="Votre nom"
							className="col-span-2 md:col-span-1"
							error={formik.touched.name && !!formik.errors.name}
						/>
						<Fieldset
							name="email"
							label="Adresse email"
							type="email"
							placeholder="Votre adresse email"
							className="col-span-2 md:col-span-1"
							error={formik.touched.email && !!formik.errors.email}
						/>
						<Fieldset
							name="subject"
							label="Objet"
							type="text"
							placeholder="L'objet de votre message"
							className="col-span-2"
							error={formik.touched.subject && !!formik.errors.subject}
						/>
						<Fieldset
							name="message"
							label="Message"
							type="textarea"
							placeholder="Parlez-moi de votre projet..."
							className="col-span-2 min-h-[12em]"
							error={formik.touched.message && !!formik.errors.message}
						/>
						<div className="submit-container col-span-2 mt-4 flex justify-center">
							<button
								type="submit"
								className={`${sent ? "bg-green-600" : "bg-primary hover:bg-primary-dark"} text-white  py-2 px-6 self-center rounded text-base uppercase`}
								disabled={sent}
							>
								{sent ? "Message envoyé" : "Envoyer un message"}
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</section>
	);
}
