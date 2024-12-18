import { useState, useEffect } from "react";
import { ProjectDataType } from "@/types";
import { useGetProjects } from "../index";

export function useProjects() {
	const [projectsData, setProjectsData] = useState<ProjectDataType>({
		pocs: [],
		frontEndProjects: [],
		backEndProjects: [],
	});

	const { data: response, isError, isFetching } = useGetProjects();
	console.log(response?.data, "a")

	useEffect(() => {
		if (response?.data) {
			const projects = response.data.sort((a: { created_at?: string }, b: { created_at?: string }) => {
				return new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime();
			});
			const frontEndProjects = projects.filter((e: { name: string | string[]; }) =>
				!e.name.includes("API") &&
				!e.name.includes("POC") &&
				!e.name.includes("Mannelli") &&
				!e.name.includes("Curriculum") &&
				!e.name.includes("Drivent") &&
				!e.name.includes("Linkr")
			)
			const backEndProjects = projects.filter((e: { name: string | string[]; }) =>
				e.name.includes("API") &&
				!e.name.includes("POC")
			)
			const pocs = projects.filter((e: { name: string | string[]; }) =>
				e.name.includes("POC")
			)
			setProjectsData({
				pocs: pocs,
				frontEndProjects,
				backEndProjects,
			});
		}
	}, [response]);

	return {
		projectsData,
		isFetching,
		isError,
	};
}
