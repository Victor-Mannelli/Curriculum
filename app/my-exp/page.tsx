"use client";

import { experienceLevels, skillsAndExp, SkillsAndExpType } from "@/utils";
import { useRouter } from "next/navigation";

export default function MyExp() {
  const router = useRouter();

  function WorkPlace({ title, date, description }: SkillsAndExpType) {
    return (
      <div className="flex flex-col gap-1 w-full sm:w-60 h-52 p-3 bg-[#1d1d1d] [&>p]:text-gray-300 rounded-md">
        <h1 className="text-xl font-roboto_bold p-0 text-white"> {title} </h1>
        <p> {date} </p>
        <p className="sm:text-sm text-md"> {description} </p>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center gap-5 my-auto h-full p-5 xl:px-10">
      <h1 className="text-[3rem]"> Skills and Experiences </h1>
      <div className="flex flex-col lg:flex-row justify-center gap-7">
        <div className="flex flex-col justify-between gap-3">
          <div className="flex sm:flex-row flex-col sm:justify-between gap-3 my-auto">
            <div className="flex flex-col gap-1">
              {experienceLevels.map(({ name, level, time }) => (
                <li key={name}>
                  <span className="font-roboto_bold">{name}:</span>
                  <p className="w-48">{level} <span className="text-sm"> {time} </span> </p>
                </li>
              ))}
            </div>
            <div className='flex flex-col justify-center gap-2 [&>li>span]:font-roboto_bold'>
              <li> <span> Languages: </span> HTML, CSS, JavaScript, Typescript, Go, Python; </li>
              <li> <span> Frameworks: </span> React.js, Node.js, Next.js, Nest.js, Tailwind.css; </li>
              <li> <span> ORMs: </span> Prisma; </li>
              <li> <span> Code Versioning: </span> Git; </li>
              <li> <span> Methodologies: </span> Scrum - Slack, Trello, Monday; </li>
              <li> <span> Databases: </span> PostgreSQL, MySql, MongoDB; </li>
              <li> <span> Platforms: </span> Google Cloud Platform; </li>
              <li> <span> Tools: </span> Styled-Components, React-Icons; </li>
            </div>
          </div>
          <h2>
            Visit my&nbsp;
            <a
              href="https://www.linkedin.com/in/victor-mendes-mannelli-740aa2246/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{" "}
            profile for more details or just{" "}
            <span className="italic underline" onClick={() => router.replace("/contact-me")}>contact me</span>.
          </h2>
        </div>
        <div className="flex justify-center h-fit">
          <div className="flex flex-wrap gap-3 w-full sm:w-[30.75rem] lg:w-[30.75rem] xl:w-[46.5rem]">
            {skillsAndExp.map((e, i) => (
              <WorkPlace
                key={i}
                title={e.title}
                date={e.date}
                description={e.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
