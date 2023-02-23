import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { ContactMe, ContactMePage, NameAndEmail, StyledForm, StyledImg } from "./style";
import wall from "../../Files/wallpaper.jpg";
import emailjs from "@emailjs/browser";

export default function Contact() {
	const form = useRef();
	const { pathname } = useLocation();
	const [fetchData, setFetchData] = useState({
		name: "",
		email: "",
		subject: "",
		content: "",
	});
	function HandleStateChange(e) {
		e.preventDefault();

		setFetchData({
			...fetchData,
			[e.target.name]: e.target.value,
		});
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
	return (
		<ContactMePage pathname={pathname}>
			<ContactMe>
				<h1> Contact me</h1>
				<p>
					I'm Interested in web, software and game development, AIs and virtual
					reality. Currently searching for a company to work with but also open
					for freelance opportunities.
				</p>
				<p>If I cross your mind don't hesitate to send me a message.</p>
				<StyledForm ref={form} onSubmit={HandleStateChange}>
					<NameAndEmail>
						<input
							required
							placeholder="Name"
							type="text"
							name="name"
							onChange={(e) =>
								setFetchData({ ...fetchData, name: e.target.value })
							}
							value={fetchData.name}
						/>
						<input
							required
							placeholder="Email"
							type="email"
							name="email"
							onChange={(e) =>
								setFetchData({ ...fetchData, email: e.target.value })
							}
							value={fetchData.email}
						/>
					</NameAndEmail>
					<input
						required
						placeholder="Subject"
						type="text"
						name="subject"
						onChange={(e) =>
							setFetchData({ ...fetchData, subject: e.target.value })
						}
						value={fetchData.subject}
					/>
					<textarea
						required
						cols="15"
						placeholder="Content"
						type="text"
						name="content"
						onChange={(e) =>
							setFetchData({ ...fetchData, content: e.target.value })
						}
						value={fetchData.content}
					/>
					<button type="submit"> Submit </button>
				</StyledForm>
			</ContactMe>
			<StyledImg>
				<img src={wall} alt="" />
			</StyledImg>
		</ContactMePage>
	);
}
