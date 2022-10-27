import ProjectLinks from "../ProjectsLinks";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

export default function Projects() {
	const { pathname } = useLocation()
	return (
		<ProjectsPage pathname={pathname}>
			<StyledHeader>
				<h1> My GitHub Projects </h1>
			</StyledHeader>
			<ProjectsDiv>
				{ProjectLinks.map((e, i) => (
					<Project
						key={i}
						projectLinks={e.link}
						projectName={e.name}
						ProjectImage={e.image}
					/>
				))}
			</ProjectsDiv>
		</ProjectsPage>
	);
}
function Project({ projectLinks, projectName, ProjectImage }) {
	return (
		<StyledProject>
			<a href={projectLinks} target="_blank" rel="noreferrer">
				{ProjectImage}
			</a>
			<h1>{projectName}</h1>
		</StyledProject>
	)
}
const ProjectsPage = styled.div `
	padding: 0px 0 30px 0;
	padding-top: ${props => props.pathname === "/projects" ? "70px" : "45px"};
	background-color: #2a2a2a;
	height: 100%;
`
const StyledHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100px;
	width: 100%;
	padding-top: 27px;
	cursor: default;

	h1 {
		color: rgb(0, 255, 255);
		font-family: 'Alkalami', serif;
		font-size: 50px;
		padding-top: 15px;
	}
`;
const StyledProject = styled.div`
	position: relative;
	width: 500px;
	height: 300px;
    margin-top: 35px;

	img {
		width: 100%;
		height: 100%;
	}
	h1 {
		position: absolute;
		bottom: 0;
		left: 0;

		font-family: "Roboto", sans-serif;
		color: #ffffff;
		cursor: pointer;
	}
`;
const ProjectsDiv = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
	height: 100%;
`;
