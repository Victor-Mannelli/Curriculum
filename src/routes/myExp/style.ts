import styled from "styled-components";
import { PathNameType } from "@/types";

export const StyledMyExp = styled.div<PathNameType>`
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	scroll-snap-align: center;

	padding: ${props => props.pathname === "/" ? "90px 0 30px 0" : "80px 0 10px 0"};
	color: white;
	background: #1d1d1d;
	cursor: default;

	@media (min-width: 810px) {
		gap: 5rem;
	}

	@media (max-width: 1140px) {
		padding: ${props => props.pathname === "/" ? "70px 0 30px 0" : "80px 0 30px 0"};
	}
`;
export const StyledExpPageParentDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	height: 100%;

	@media (min-width: 1345px) { 
		flex-direction: row;
	}
`;
export const StyledParentDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-self: center;
	margin: 0 1rem;

	h1 {
		color: rgb(0, 255, 255);
		font-family: "Alkalami", serif;
		font-size: 50px;
		margin: 0 1rem 0 1rem;
		word-break: normal;
	}

	h2 {
		color: rgb(0, 255, 255);
		font-size: 18.83px;
		margin: 0 1rem 0 1rem;

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
	li {
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		font-size: 15px;
		white-space: nowrap;
		
		p {
			padding-top: 0.4rem;
		}
		span {
			font-weight: bold;
		}
	}
`;
export const StyledCompetences = styled.ul`
	font-size: 19px;
	li {
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		
		span {
			font-weight: bold;
		}
	}
`;
export const StyledSkillsAndExp = styled.div`
	display: flex;
	flex-direction: row;

	padding: 1rem 1rem 2rem 1rem;
	gap: 1rem;

	@media (max-width: 640px) {
		flex-direction: column;
	}

	@media (min-width: 810px) {
		gap: 5rem;
	}
`;

export const Experiences = styled.div`
	display: flex;
	flex-direction: row;
	justify-self: center;
	align-self: center;

	flex-wrap: wrap;
	font-family: "Roboto", sans-serif;

	div {
		width: 14rem;
		height: 200px;
		background-color: rgb(42, 42, 42);
		padding: 10px;
		margin: 10px;

		@media (max-width: 500px) { 
			width: 100%;
		}

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

	@media (min-width: 1550px) { 
		width: 45.8rem;
	}
	@media (min-width: 1345px) and (max-width: 1550px) { 
		width: 30.5rem;
	}
	@media (min-width: 1050px) and (max-width: 1345px) { 
		width: 61rem;
	}
	@media (min-width: 810px) and (max-width: 1050px) { 
		width: 45.8rem;
	}
	@media (max-width: 810px) { 
		width: 95%;
	}
`;
