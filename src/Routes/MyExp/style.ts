import styled from "styled-components";
import { PathNameType } from "@/types";

export const StyledMyExp = styled.div<PathNameType>`
	display: grid;
	grid-template-columns: 55% 45%;
	min-height: 100vh;
	scroll-snap-align: start;
	padding: ${props => props.pathname === "/" ? "15px 0 30px 0" : "80px 0 30px 0"};
	padding: 80px 0 30px 0;
	color: white;
	background: #1d1d1d;
	cursor: default;

	@media (max-width: 1140px) {
		grid-template-columns: 65% 35%;
		padding: ${props => props.pathname === "/" ? "70px 0 30px 0" : "80px 0 30px 0"};
	}
	@media (max-width: 1000px) {
		grid-template-columns: 100%;
		padding: ${props => props.pathname === "/" ? "70px 0 30px 0" : "80px 0 30px 0"};
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

	@media (max-width: 1000px) {
		padding-bottom: 15px;
	}
	h1 {
		color: rgb(0, 255, 255);
		font-family: "Alkalami", serif;
		font-size: 50px;
		padding-bottom: 1rem;
	}

	h2 {
		color: rgb(0, 255, 255);
		font-size: 18.83px;

		a, span {
			font-weight: 700;
			cursor: pointer;

			:hover {
				color: rgb(0, 210, 180);
			}
		}	
	}
`;
export const StyledExpLevel = styled.ul`
	padding-bottom: 1rem;
	li {
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		font-size: 15px;
		
		p {
			padding-top: 0.4rem;
		}
		span {
			font-weight: bold;
		}
	}
`
export const StyledCompetences = styled.ul`
	padding-bottom: 2rem;
	font-size: 19px;
	li {
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		
		span {
			font-weight: bold;
		}
	}
`

export const Experiences = styled.div`
	align-self: center;
	justify-self: center;

	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	font-family: "Roboto", sans-serif;

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

	@media (max-width: 430px) {
		div {
			width: 45%;
			height: 220px;
		}
	}
`;
