import styled from "styled-components";

export const ProjectsPage = styled.div`
	padding-bottom: 30px;
	padding-top: ${(props) => (props.pathname === "/projects" ? "70px" : "45px")};
	background-color: #2a2a2a;
	min-height: 100vh;
	@media (max-width: 1000px) {
		padding: 30px 0 30px 0;
	}
`;
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
		padding-top: 15px;
		color: rgb(0, 255, 255);
	}
	@media (max-width: 360px) {
		padding: 0 0 0 20px;
	}
`;
export const StyledProject = styled.div`
	position: relative;
	width: 500px;
	height: 300px;
	margin-top: 35px;
	cursor: pointer;

	img {
		width: 100%;
		height: 100%;
		border-radius: 20px;
		:hover {
			border: gray 1px solid;
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
`;
export const ProjectsDiv = styled.div`
	display: flex;
	justify-content: space-evenly;
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
	padding-top: 46px;
`;
