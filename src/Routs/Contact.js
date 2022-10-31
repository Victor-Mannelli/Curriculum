import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import wall from "./Routs Files/wallpaper.jpg";
import { toast } from "react-toastify";

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
const ContactMePage = styled.div`
	display: grid;
	grid-template-columns: 50% 50%;
	align-items: center;
	justify-content: space-around;
	min-height: 100vh;
	padding-top: 80px;

	@media (max-width: 1000px){
		padding-top: 40px;
		grid-template-columns: 100%;
	}
	@media (max-width: 360px){
		padding-top: 0px;
		grid-template-columns: 100%;
	}
`;
const ContactMe = styled.div`
	display: flex;
	flex-direction: column;
	justify-self: center;
	width: 90%;
	color: aqua;
	font-family: "Roboto", sans-serif;

	h1 {
		margin-bottom: 10px;
		font-family: "Alkalami", serif;
		font-size: 2.5rem;
		cursor: default;
	}
	p {
		color: white;
		font-size: 1.25rem;
		line-height: 25px;
		margin-bottom: 15px;
		cursor: default;
	}
	@media (max-width: 1000px){
		width: 80%;
	}
	@media (max-width: 360px){
		width: 90%;
	}
`;
const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	input,
	textarea {
		height: 50px;
		width: 100%;
		margin: 5px 0;

		background-color: rgb(42, 42, 42);
		border-radius: 5px;
		padding: 15px;
		color: lightgray;
		font-size: 16px;
		::placeholder {
			font-family: "Roboto", sans-serif;
			font-size: 16px;
			color: lightgray;
		}
	}
	textarea {
		font-family: "Roboto", sans-serif;
		border: none;
		outline: none;
		resize: none;
		height: 20vh;
	}
	button {
		height: 50px;
		width: 100%;
		background-color: rgb(42, 42, 42);
		border-radius: 5px;
		color: lightgray;
		font-size: 16px;
		border: none;
		margin: 5px 0;
		:hover {
			background-color: rgb(72, 72, 72);
			color: white;
		}
	}
`;
const NameAndEmail = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	gap: 8px;
`;
const StyledImg = styled.div`
	justify-self: center;
	align-self: center;
	
	width: 80%;
	height: 50%;
	img {
		width: 100%;
		height: 100%;
	}
	@media (max-width: 1000px){
		height: 100%;
		padding: 10px 0 30px 0;
	}
	@media (max-width: 360px){
		display: none;
	}
`;