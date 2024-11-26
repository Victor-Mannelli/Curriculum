/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */

import { ProjectComponentType } from "@/utils";

export function Project({ projectLinks, projectName, projectImage }: ProjectComponentType) {
  return (
    <div className="relative cursor-pointer w-full h-56 sm:w-[15.5rem] sm:h-36 md:w-[20.6rem] md:h-48 lg:w-[21.85rem] xl:w-[19.5rem] xl:h-48 2xl:w-80">
      <a href={projectLinks} target="_blank" rel="noreferrer">
        <img
          src={projectImage}
          alt="Project-Preview"
          className="w-full h-full rounded-md border border-gray-500 hover:scale-105
          shadow-[rgba(100,100,100,0.5)_0px_10px_20px, rgba(100,100,100,0.5)_0px_6px_6px]"
          onError={(e: any) => {
            e.target.onerror = null;
            e.target.src = "/images/workInProgress.jpg";
          }}
        />
      </a>
      <h1 className="absolute top-1 left-1/2 -translate-x-1/2 text-black w-full text-center">{projectName}</h1>
    </div>
  );
}