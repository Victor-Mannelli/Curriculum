/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Project } from "@/components/project";
import { ProjectType } from "@/utils";
import { Loader } from "lucide-react"
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query'
import { useProjects } from "@/utils/hooks";
// import WorkInProgress from "@/app/public/images/workInProgress.jpg"

export default function Projects() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["data"],
    // eslint-disable-next-line react-hooks/rules-of-hooks
    queryFn: () => useProjects(),
  });

  console.log(data)

  if (error) {
    return (
      <div className="flex justify-center items-center h-full sm:pb-16 md:pb-36">
        <h1>Error</h1>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full sm:pb-16 md:pb-36">
        <Loader size={60} className="animate-spin" />
      </div>
    );
  }

  return (
    <>
    </>
  )
  // return (
  //   <div className="flex justify-center items-center w-full min-h-screen">
  //     <div>
  //       <div>
  //         <h1> Some of my Projects </h1>
  //       </div>
  //       <h2> FrontEnd </h2>
  //       <div>
  //         {projectsData.frontEndProjects.map((e: ProjectType) => (
  //           <Project
  //             key={e.id}
  //             projectLinks={e.html_url}
  //             projectImage={`https://raw.githubusercontent.com/Victor-Mannelli/${e.name}/main/social.png` || "@/app/public/images/workInProgress.jpg"}
  //             projectName={""}
  //           />
  //         ))}
  //       </div>
  //       <h2> BackEnd </h2>
  //       <div>
  //         {projectsData.backEndProjects.map((e: ProjectType) => (
  //           <Project
  //             key={e.id}
  //             projectLinks={e.html_url}
  //             projectName={e.name}
  //             projectImage={"/files/api.png"}
  //           />
  //         ))}
  //       </div>
  //       <h2> POC </h2>
  //       <div>
  //         {projectsData.pocs.map((e: ProjectType) => (
  //           <Project
  //             key={e.id}
  //             projectLinks={e.html_url}
  //             projectName={e.name}
  //             projectImage={"/files/poc.jpeg"}
  //           />
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );
}
