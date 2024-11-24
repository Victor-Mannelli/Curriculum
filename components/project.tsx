/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import WorkInProgress from "@/app/public/images/workInProgress.jpg"
import { ProjectComponentType } from "@/utils";

export function Project({ projectLinks, projectName, projectImage }: ProjectComponentType) {
  return (
    <div className="relative w-full h-52 cursor-pointer">
      <a href={projectLinks} target="_blank" rel="noreferrer">
        <img
          src={projectImage}
          className="w-full"
          alt="Project-Preview"
          onError={(e: any) => {
            e.target.onerror = null;
            e.target.src = WorkInProgress;
            // e.target.src = "/files/workInProgress.jpg";
          }}
        />
      </a>
      <h1>{projectName}</h1>
    </div>
  );
}