import ApiImage from "../Routs Files/API.png";
import { useLocation } from "react-router-dom";
import {
	Loading,
	LoadingPage,
	ProjectsDiv,
	ProjectsPage,
	ProjectTitle,
	StyledHeader,
	StyledProject,
} from "./style";
import loading from "../Routs Files/loading.gif";
import { useProjects } from "../../Services/projects/hooks/useProjects";

export default function Projects() {
	const { pathname } = useLocation();
	const { projectsData, isFetching, isError } = useProjects();
	
	if (isError) {
		return (
			<ProjectsPage>
				<h1>Error</h1>;
			</ProjectsPage>
		);
	}
	if (isFetching) {
		return (
			<LoadingPage>
				<img alt="loading" src={loading} />
			</LoadingPage>
		);
	}

	return (
		<ProjectsPage pathname={pathname}>
			<StyledHeader>
				<h1> Some of my Projects </h1>
			</StyledHeader>
			<ProjectTitle> FrontEnd </ProjectTitle>
			<ProjectsDiv>
				{projectsData.frontEndProjects.map((e) => (
					<Project
						key={e.id}
						projectLinks={e.html_url}
						ProjectImage={`https://raw.githubusercontent.com/Victor-Mannelli/${e.name}/main/social.png`}
					/>
				))}
			</ProjectsDiv>
			<ProjectTitle> BackEnd </ProjectTitle>
			<ProjectsDiv>
				{projectsData.backEndProjects.map((e) => (
					<Project
						key={e.id}
						projectLinks={e.html_url}
						projectName={e.name}
						ProjectImage={ApiImage}
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
				<img src={ProjectImage} alt="Project-Preview" />
			</a>
			<h1>{projectName}</h1>
		</StyledProject>
	);
}
