"use client";

import { experienceLevels, skillsAndExp, SkillsAndExpType } from "@/utils";
import { usePathname, useRouter } from "next/navigation";

export default function MyExp() {
  const pathname = usePathname();
  const router = useRouter();

  function WorkPlace({ title, date, description }: SkillsAndExpType) {
    return (
      <div className={`flex flex-col gap-1 w-full sm:w-[13.6rem] h-52 p-3  [&>p]:text-gray-300 rounded-md 
        ${pathname === "/" ? "bg-[#292929]" : "bg-[#1d1d1d]"}`
      }>
        <h1 className="text-xl font-roboto_bold p-0 text-white"> {title} </h1>
        <p> {date} </p>
        {typeof description === "object" ? (
          description.map((string, index) =>
            string === "hr" ? (
              <hr className="my-2" key={"description" + index} />
            ) : (
              <p key={"description" + index} className="sm:text-sm text-md">
                {string}
              </p>
            )
          )
        ) : (
          <p className="sm:text-sm text-md">{description}</p>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center gap-5 my-auto h-full p-5 xl:px-10">
      <div className="flex flex-col 3xl:flex-row justify-center gap-7">
        <div className="flex flex-col justify-between items-center gap-3">
          <h1 className="text-start sm:pb-3"> Skills and Experiences </h1>
          <div className="flex gap-3 my-auto">
            <div className="flex flex-wrap w-48 lg:w-[24.3rem] 3xl:w-48 gap-1">
              {experienceLevels.map(({ name, level, time }) => (
                <li className="flex flex-col pb-1" key={name}>
                  <span className="font-roboto_bold">{name}:</span>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:w-48">
                    <p>{level} </p>
                    <span className="text-sm"> {time} </span>
                  </div>
                </li>
              ))}
            </div>
            <div className='flex flex-col justify-center gap-2 [&>li>span]:font-roboto_bold'>
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
            <span className="italic underline cursor-pointer hover:brightness-75" onClick={() => router.replace("/contact-me")}>contact me</span>.
          </h2>
        </div>
        <div className="flex justify-center h-fit">
          <div className="flex flex-wrap gap-3 w-full sm:w-[28rem] lg:w-[42.3rem] xl:w-[56.65rem]">
            {skillsAndExp.map((e, i) => (
              <WorkPlace
                key={i}
                date={e.date}
                title={e.title}
                description={e.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
