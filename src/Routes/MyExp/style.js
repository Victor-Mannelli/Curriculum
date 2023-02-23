import styled from "styled-components";

export const StyledMyExp = styled.div`
	display: grid;
	grid-template-columns: 55% 45%;

	min-height: 100vh;
	padding-top: 80px;

	min-height: 100vh;
	color: white;
	background: #1d1d1d;
	cursor: default;

	@media (max-width: 1000px) {
		grid-template-columns: 100%;
	}
`;
export const SkillText = styled.div`
	align-self: center;
	justify-self: center;

	display: flex;
	flex-direction: column;
	width: 80%;
	margin-right: 25px;
	font-family: "Roboto", sans-serif;
	h1 {
		color: rgb(0, 255, 255);
		font-family: "Alkalami", serif;
		font-size: 50px;
		padding-bottom: 20px;
	}
	p {
		color: white;
		font-size: 18px;
		line-height: 23px;
		padding-bottom: 15px;
		text-align: justify;
	}
	h2 {
		color: rgb(0, 255, 255);
		font-size: 18.83px;
	}
	a,
	span {
		font-weight: 700;
		cursor: pointer;
		:hover {
			color: rgb(0, 210, 180);
		}
	}
`;
export const Experiences = styled.div`
	align-self: center;
	justify-self: center;

	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	font-family: "Roboto", sans-serif;
	justify-content: center;

	div {
		width: 220px;
		height: 200px;
		background-color: rgb(42, 42, 42);
		padding: 10px;
		margin: 10px;
		h1 {
			font-weight: 700;
			font-size: 19px;
			padding: 8px 0 15px 0;
		}
		p {
			font-size: 16px;
			color: lightgray;
			padding-bottom: 15px;
			line-height: 20px;
		}
	}
`;
