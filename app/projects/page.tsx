"use client";

import { useQuery } from "@tanstack/react-query";
import { Project } from "@/components/project";
import { fetchProjects } from "@/utils/hooks";
import { Loader } from "lucide-react";

export default function Projects() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  if (error) {
    return (
      <div className="flex justify-center items-center h-full">
        <h1>Error</h1>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <Loader size={60} className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-full snap-start pb-5">
      <div className="flex flex-col justify-center w-[90%] sm:w-[32.3rem] md:w-[20.6rem] lg:w-[45rem] xl:w-[61rem] 2xl:w-[83.75rem]">
        <h1 className="text-center font-alkalami pb-4"> FrontEnd </h1>
        <div className="flex flex-wrap items-center gap-5 h-full">
          {data?.frontEndProjects.map((e) => (
            <Project
              key={e.id}
              projectLinks={e.html_url}
              projectImage={`https://raw.githubusercontent.com/Victor-Mannelli/${e.name}/main/social.png`}
              projectName={""}
            />
          ))}
        </div>
        <h1 className="text-center font-alkalami pt-10 pb-4"> BackEnd </h1>
        <div className="flex flex-wrap items-center gap-5 h-full">
          {data?.backEndProjects.map((e) => (
            <Project
              key={e.id}
              projectLinks={e.html_url}
              projectName={e.name}
              projectImage={"/images/api.png"}
            />
          ))}
        </div>
        <h1 className="text-center font-alkalami pt-10 pb-4"> Proofs of Concepts </h1>
        <div className="flex flex-wrap items-center gap-5 h-full">
          {data?.pocs.map((e) => (
            <Project
              key={e.id}
              projectLinks={e.html_url}
              projectName={e.name.replace("-POC", "")}
              projectImage={"/images/poc.jpeg"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
