import ApiImage from "../../Files/API.png"
import loading from "../../Files/loading.gif";
import { useLocation } from "react-router-dom";
import { useProjects } from "../../Services/Projects/Hooks/useProjects";
import { LoadingPage, ProjectsDiv, ProjectsPage, ProjectTitle, StyledHeader,	StyledProject } from "./style";
import { ProjectComponentType } from "../../Types";

export default function Projects() {
	const { pathname } = useLocation();
	const { projectsData, isFetching, isError } = useProjects();
	
	if (isError) {
		return (
			<ProjectsPage pathname={pathname}>
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
						projectImage={`https://raw.githubusercontent.com/Victor-Mannelli/${e.name}/main/social.png`} 
						projectName={""}					
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
						projectImage={ApiImage}
					/>
				))}
			</ProjectsDiv>
		</ProjectsPage>
	);
}
function Project({ projectLinks, projectName, projectImage }: ProjectComponentType) {
	return (
		<StyledProject>
			<a href={projectLinks} target="_blank" rel="noreferrer">
				<img src={projectImage} alt="Project-Preview" />
			</a>
			<h1>{projectName}</h1>
		</StyledProject>
	);
}
