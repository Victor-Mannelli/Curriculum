import { Experiences, SkillText, StyledCompetences, StyledExpLevel, StyledMyExp } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { experienceLevels, skillsAndExp } from "@/utils";
import { SkillsAndExpType } from "@/types";

export default function MyExp() {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	function WorkPlace({ title, date, description }: SkillsAndExpType) {
		return (
			<div>
				<h1> {title} </h1>
				<p> {date} </p>
				<p> {description} </p>
			</div>
		);
	}

	return (
		<StyledMyExp pathname={pathname}>
			<SkillText>
				<h1> Skills and Experiences </h1>
				<StyledExpLevel>
					{experienceLevels.map(({ name, level, time }) => (
						<li key={name}>
							<span>{name}:</span>
							<p>{level} {time}</p>
						</li>
					))}
				</StyledExpLevel>
				<StyledCompetences className='pl-5 pb-3 gap-5'>
					<li> <span> Programming Languages: </span> HTML, CSS, JavaScript, Typescript, Go, Python; </li>
					<li> <span> Frameworks: </span> React.js, Node.js, Next.js, Nest.js, Tailwind.css; </li>
					<li> <span> ORMs: </span> Prisma; </li>
					<li> <span> Code Versioning: </span> Git; </li>
					<li> <span> Methodologies: </span> Scrum, Slack, Trello; </li>
					<li> <span> Data Banks: </span> PostgreSQL, MongoDB; </li>
					<li> <span> Tools: </span> Styled-Components, React-Icons; </li>
				</StyledCompetences>
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
					<span onClick={() => navigate("/contact")}>contact me</span>.
				</h2>
			</SkillText>
			<Experiences>
				{skillsAndExp.map((e, i) => (
					<WorkPlace
						key={i}
						title={e.title}
						date={e.date}
						description={e.description}
					/>
				))}
			</Experiences>
		</StyledMyExp>
	);
}
