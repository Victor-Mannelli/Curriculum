import { useQuery } from '@tanstack/react-query'
import axios from "axios";

async function getProjects() {
	return await axios.get("https://api.github.com/users/Victor-Mannelli/repos")
}

export function useGetProjects() {
	return useQuery(['get-github'], getProjects, {
		staleTime: 1000 * 60 * 5,
		refetchOnWindowFocus: true,
		refetchInterval: 1000 * 60 * 10
	})
}
