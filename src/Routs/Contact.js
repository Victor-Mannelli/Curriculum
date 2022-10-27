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
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	height: 100vh;
	padding-top: ${(props) => (props.pathname === "/contact" ? "70px" : "70px")};

	@media (max-width: 1200px) {
		flex-direction: column;
		height: 100%;
		padding: 110px 0 30px 0;
	}
`;
const ContactMe = styled.div`
	display: flex;
	flex-direction: column;
	width: 520px;
	color: aqua;
	font-family: "Roboto", sans-serif;

	h1 {
		margin: 0 8px 10px 8px;
		font-family: "Alkalami", serif;
		font-size: 40px;
		cursor: default;
	}
	p {
		color: white;
		font-size: 20px;
		line-height: 25px;
		margin: 0 0 15px 10px;
		cursor: default;
	}
`;
const StyledForm = styled.form`
	display: flex;
	flex-direction: column;

	input,
	textarea {
		height: 50px;
		width: 500px;
		margin: 5px;

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
		height: 150px;
	}
	button {
		height: 50px;
		width: 500px;
		background-color: rgb(42, 42, 42);
		border-radius: 5px;
		color: lightgray;
		font-size: 16px;
		border: none;
		margin: 5px;
		:hover {
			background-color: rgb(72, 72, 72);
			color: white;
		}
	}
`;
const NameAndEmail = styled.div`
	display: flex;
	flex-direction: row;
	input {
		width: 245px;
		margin-left: 5px;
	}
`;
const StyledImg = styled.div`
	display: flex;
	justify-content: center;

	@media (max-width: 1200px) {
		padding-top: 40px;
	}
`;
