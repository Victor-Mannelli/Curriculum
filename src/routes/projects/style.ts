import { PathNameType } from "@/types";
import styled from "styled-components";

export const ProjectsPage = styled.div<PathNameType>`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	min-height: 100vh;
	padding-bottom: 30px;
	padding-top: 70px;
	background-color: #2a2a2a;
	scroll-snap-align: start;
	
	@media (max-width: 1000px) {
		padding: 30px 0 30px 0;
	}
`;

export const ProjectsParentDiv = styled.div`
	display: flex-col;
	justify-content: center;
	width: 90%;
	
	@media (min-width: 1280px) { 
		width: 62.6rem;
	}
	@media (min-width: 1024px) and (max-width: 1279px) { 
		width: 52rem;
	}
	@media (min-width: 768px) and (max-width: 1023px) { 
		width: 41.4rem;
	}
	@media (min-width: 640px) and (max-width: 767px) { 
		width: 30.8rem;
	}
`
export const StyledHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100px;
	width: 100%;
	padding-top: 27px;
	cursor: default;

	h1 {
		font-family: "Alkalami", serif;
		font-size: 50px;
		text-align: center;
		padding: 15px;
		color: rgb(0, 255, 255);
	}

	@media (max-width: 360px) {
		padding: 0 0 0 20px;
	}
`;
export const StyledProject = styled.div`
	position: relative;
	width: 100%;
	height: 13rem;
	cursor: pointer;

	img {
		width: 100%;
		height: 100%;
		border-radius: 5px;
		border: gray 1px solid;

		:hover {
			width: 100.5%;
			height: 100.5%;
			box-shadow: rgba(100, 100, 100, 0.5) 0px 10px 20px, rgba(100, 100, 100, 0.5) 0px 6px 6px;
		}
	}
	h1 {
		position: absolute;
		top: 10%;
		left: 50%;
		transform: translate(-50%, -10%);
		font-family: "Alkalami", serif;
		font-size: 20px;
		/* color: #2a2a2a; */
	}
	@media (min-width: 1280px) { 
		width: 20.6rem;
		height: 12rem;
	}
	@media (min-width: 1024px) and (max-width: 1279px) { 
		width: 25.7rem;
		height: 12.5rem;
	}
	@media (min-width: 768px) and (max-width: 1023px) { 
		width: 20.5rem;
		height: 12rem;
	}
	@media (min-width: 640px) and (max-width: 767px) { 
		width: 15.2rem;
		height: 9rem;
	}
`;
export const ProjectsDiv = styled.div`
	display: flex;
	gap: 0.4rem;
	align-items: center;
	flex-wrap: wrap;
	height: 100%;
`;
export const LoadingPage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #2a2a2a;
	min-height: 100vh;
	img {
		width: 100px;
		height: 100px;
	}
`;
export const ProjectTitle = styled.h2`
	color: rgb(0, 255, 255);
	font-family: "Alkalami", serif;
	font-size: 30px;
	text-align: center;
	padding: 40px 0 15px 0;
`;
