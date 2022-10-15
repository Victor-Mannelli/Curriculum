import ProjectLinks from "../ProjectsLinks";
import styled from "styled-components";

export default function Projects() {
	return (
		<>
			<StyledHeader>
				<></>
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
		</>
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
const StyledHeader = styled.div`
	height: 100px;
	border-bottom: 1px solid gray;
    margin-bottom: 25px;
`;
const StyledProject = styled.div`
	position: relative;
	width: 300px;
	height: 160px;
    margin: 0 0 25px 12.5px;

	img {
		width: 300px;
		height: 160px;
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
	flex-wrap: wrap;
	height: 100%;
`;
