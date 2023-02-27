import styled from "styled-components";
import { PathNameType } from "../../Types";

export const ContactMePage = styled.div<PathNameType>`
	display: grid;
	grid-template-columns: 70% 30%;
	align-items: center;
	justify-content: space-around;
	
	min-height: 100vh;
	scroll-snap-align: center;
	padding-top: 80px;
	background: #1d1d1d;
	@media (max-width: 1000px){
		padding-top: 40px;
		grid-template-columns: 100%;
	}
	@media (max-width: 360px){
		padding-top: 10px;
		grid-template-columns: 100%;
	}
`;
export const ContactMe = styled.div`
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
		text-align: justify;
	}
	@media (max-width: 1000px){
		width: 80%;
	}
	@media (max-width: 360px){
		width: 90%;
	}
`;
export const StyledForm = styled.form`
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
export const NameAndEmail = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	gap: 8px;
`;
export const StyledImg = styled.div`
	justify-self: center;
	align-self: center;
	
	width: 100%;
	height: 70%;
	padding-right: 50px;
	img {
		width: 100%;
		height: 100%;
	}
	@media (max-width: 1000px){
		height: 100%;
		padding: 10px 0 30px 0;
		display: none;
	}
`;