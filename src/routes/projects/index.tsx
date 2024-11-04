import { LoadingPage, ProjectsDiv, ProjectsPage, ProjectsParentDiv, ProjectTitle, StyledHeader, StyledProject } from "./style";
import { useProjects } from "../../services/projects/hooks/useProjects";
import { ProjectComponentType } from "@/types";
import { useLocation } from "react-router-dom";

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
				<img alt="loading" src="/files/loading.gif" />
			</LoadingPage>
		);
	}

	return (
		<ProjectsPage pathname={pathname}>
			<ProjectsParentDiv>
				<StyledHeader>
					<h1> Some of my Projects </h1>
				</StyledHeader>
				<ProjectTitle> FrontEnd </ProjectTitle>
				<ProjectsDiv>
					{projectsData.frontEndProjects.map((e) => (
						<Project
							key={e.id}
							projectLinks={e.html_url}
							projectImage={`https://raw.githubusercontent.com/Victor-Mannelli/${e.name}/main/social.png` || "/files/workInProgress.jpg"}
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
							projectImage={"/files/api.png"}
						/>
					))}
				</ProjectsDiv>
				<ProjectTitle> POC </ProjectTitle>
				<ProjectsDiv>
					{projectsData.pocs.map((e) => (
						<Project
							key={e.id}
							projectLinks={e.html_url}
							projectName={e.name}
							projectImage={"/files/poc.jpeg"}
						/>
					))}
				</ProjectsDiv>
			</ProjectsParentDiv>
		</ProjectsPage>
	);
}
function Project({ projectLinks, projectName, projectImage }: ProjectComponentType) {
	return (
		<StyledProject>
			<a href={projectLinks} target="_blank" rel="noreferrer">
				<img
					src={projectImage}
					alt="Project-Preview"
					onError={(e: any) => {
						e.target.onerror = null;
						e.target.src = "/files/workInProgress.jpg";
					}}
				/>
			</a>
			<h1>{projectName}</h1>
		</StyledProject>
	);
}
