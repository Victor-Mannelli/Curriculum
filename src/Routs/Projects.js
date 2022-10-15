import ProjectLinks from "../ProjectsLinks";
import styled from "styled-components";

export default function Projects() {
	return (
		<ProjectsPage>
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
	padding: 0 0 35px 10px;
`
const StyledHeader = styled.div`
	display: flex;
	align-items: center;
	height: 100px;
	width: 100%;
	border-bottom: 1px solid gray;
	padding: 15px 0 0 25px;

	h1 {
		color: rgb(0, 255, 255);
		font-family: 'Alkalami', serif;
		font-size: 50px;
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
	}
`;
const ProjectsDiv = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
	height: 100%;
`;
