import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { FormData } from "../../Types";
import {
	ContactMe,
	ContactMePage,
	NameAndEmail,
	StyledForm,
	StyledImg,
} from "./style";
import email from "../../Files/email.png";
import emailjs from "@emailjs/browser";

export default function Contact() {
	const form = useRef(null);
	const { pathname } = useLocation();
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		subject: "",
		content: "",
	});

	function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		const { name, value } = event.target;
		setFormData((formData) => ({
			...formData,
			[name]: value,
		}));
	}

	function handleFormSubmit(event: React.FormEvent) {
		event.preventDefault();
		if (form.current) {
			emailjs
				.sendForm(
					"service_m8zqveq",
					"template_utz4ju7",
					form.current,
					"TuD9oztmKohwfiEZi"
				)
				.then(() =>
					toast.success("message sent", {
						position: "top-center",
						theme: "dark",
					})
				);
		}
	}

	return (
		<ContactMePage pathname={pathname}>
			<ContactMe>
				<h1> Contact me </h1>
				<p>
					I'm Interested in web, software and game development, AIs and virtual
					reality. 
				</p>
				<p>
					Currently searching for work as a Full-Stack, Back End or Front-End Junior Developer!
				</p>
				<p> If you liked my work I would love to receive a message!</p>
				<StyledForm ref={form} onSubmit={handleFormSubmit}>
					<NameAndEmail>
						<input
							required
							placeholder="Name"
							type="text"
							name="name"
							onChange={handleInputChange}
							value={formData.name}
						/>
						<input
							required
							placeholder="Email"
							type="email"
							name="email"
							onChange={handleInputChange}
							value={formData.email}
						/>
					</NameAndEmail>
					<input
						required
						placeholder="Subject"
						type="text"
						name="subject"
						onChange={handleInputChange}
						value={formData.subject}
					/>
					<textarea
						required
						cols={15}
						placeholder="Content"
						name="content"
						onChange={handleInputChange}
						value={formData.content}
					/>
					<button type="submit"> Submit </button>
				</StyledForm>
			</ContactMe>
			<StyledImg>
				<img src={email} alt="" />
			</StyledImg>
		</ContactMePage>
	);
}
