import { ContactMe, ContactMePage, NameAndEmail, StyledForm, StyledImg } from "./style";
import { useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { FormData } from "@/types";
import emailjs from "@emailjs/browser";
import React from "react";

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
					I'm have strong interest in technologies that directly impact users, such as web and software development, AI and virtual reality.
				</p>
				<p>
				I am seeking a software development opportunity in a company that values the flexibility of remote work and the potential for international collaboration. My priority is to work in a technology-focused environment that encourages innovation and values the contributions of its professionals, providing room for teamwork, learning, and continuous growth.
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
				<img src="files/email.png" alt="" />
			</StyledImg>
		</ContactMePage>
	);
}
