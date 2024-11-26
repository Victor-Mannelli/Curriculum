import { ProjectDataType } from "../types";
import axios from "axios";

export function fetchProjects(): Promise<ProjectDataType> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get("https://api.github.com/users/Victor-Mannelli/repos");
      const projects = response.data.sort((a: { created_at?: string }, b: { created_at?: string }) => {
        return new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime();
      });
      const frontEndProjects = projects.filter((e: { name: string | string[] }) =>
        !e.name.includes("API") &&
        !e.name.includes("POC") &&
        !e.name.includes("Mannelli") &&
        !e.name.includes("Curriculum") &&
        !e.name.includes("Drivent") &&
        !e.name.includes("Linkr")
      );
      const backEndProjects = projects.filter((e: { name: string | string[] }) =>
        e.name.includes("API") && !e.name.includes("POC")
      );
      const pocs = projects.filter((e: { name: string | string[] }) => e.name.includes("POC"));

      resolve({
        pocs: pocs,
        frontEndProjects,
        backEndProjects,
      });
    } catch (error) {
      reject(error);
    }
  });
}
