import { useState, useEffect } from "react";
import { ProjectDataType } from "@/types";
import { useGetProjects } from "../index";

export function useProjects() {
	const [projectsData, setProjectsData] = useState<ProjectDataType>({
		frontEndProjects: [],
		backEndProjects: [],
	});

	const { data: response, isError, isFetching } = useGetProjects();

	useEffect(() => {
		if (response?.data) {
			const frontEndProjects = response?.data.filter((e: { name: string | string[]; }) =>
				!e.name.includes("API") &&
				!e.name.includes("Mannelli") &&
				!e.name.includes("Globo") &&
				!e.name.includes("Curriculum") &&
				!e.name.includes("Drivent") &&
				!e.name.includes("Linkr")
			);
			const backEndProjects = response?.data.filter((e: { name: string | string[]; }) =>
				e.name.includes("API")
			);
			setProjectsData({
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
