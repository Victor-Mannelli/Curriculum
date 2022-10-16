import { useState } from "react";
import styled from "styled-components";
import wall from "./Routs Files/wallpaper.jpg";

export default function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [content, setContent] = useState("");

	function HandleSubmit() {}
	return (
		<ContactMePage>
			<ContactMe>
				<h1> Contact me</h1>
				<p>
					I'm Interested in web, software and game development, AIs and virtual
					reality. Currently searching for a company to work with but also open
					for freelance opportunities.
				</p>
				<p>If I cross your mind don't hesitate to send me a message.</p>
				<Form onSubmit={HandleSubmit}>
					<NameAndEmail>
						<input
							required
							placeholder="Name"
							name="name"
							onChange={(e) => setName(e.target.value)}
							value={name}
						/>
						<input
							required
							placeholder="Email"
							type="email"
							name="email"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
					</NameAndEmail>
					<input
						required
						placeholder="Subject"
						name="subject"
						onChange={(e) => setSubject(e.target.value)}
						value={subject}
					/>
					<textarea
						required
						cols="15"
						placeholder="Content"
						name="content"
						onChange={(e) => setContent(e.target.value)}
						value={content}
					/>
					<button type="submit"> Submit </button>
				</Form>
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
	justify-content: space-between;
	margin-left: 40px;
`;
const ContactMe = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	width: 520px;
	height: 100vh;
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
const Form = styled.form`
	display: flex;
	flex-direction: column;

	input,
	textarea {
		height: 50px;
		width: 500px;
		margin: 10px;

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
		border: none;
		outline: none;
		resize: none;
		height: 200px;
	}
	button {
		height: 50px;
		width: 500px;
		background-color: rgb(42, 42, 42);
		border-radius: 5px;
		color: lightgray;
		font-size: 16px;
		border: none;
		margin: 10px;
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
		width: 240px;
		margin-left: 10px;
	}
`;
const StyledImg = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	margin-right: 30px;
`;
