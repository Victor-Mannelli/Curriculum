import ProjectLinks from "../../ProjectsLinks";
import { useLocation } from "react-router-dom";
import { ProjectsDiv, ProjectsPage, StyledHeader, StyledProject } from "./style";

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