import { useLocation, useNavigate } from "react-router-dom";
import { Experiences, SkillText, StyledMyExp } from "./style";
import { skillsAndExp } from "../../Constants/index";
import { SkillsAndExpType } from "../../Types";

export default function MyExp() {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	function WorkPlace({ title, date, description } : SkillsAndExpType) {
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
				<p>
					My first contact with programming was through college where I studied
					python calculation logics, in the beggining I couldn't see the
					potential and all the fun I could have programming, but...
				</p>
				<p>
					One day I found out Driven Education and my eyes were oppened to
					everything I could achieve with programming and how fast It could be
					with their help.
				</p>
				<p>
					When I was with them I had +1200 hours focused on projects using
					tecnologies such as HTML, CSS, Javascript, React, Node.js,
					NoSQL(MongoDB), SQL(PostgreSQL), Prisma, Jest, Typescript, Docker,
					AWS...
				</p>
				<p>
					While also studying programming logics, data structure, object
					orientation, software architecture, tests and clean code using scrum,
					git, slack and trello whilst receiving and giving feedbacks,
					developing professional abilities and behavior
				</p>
				<p>
					Now I'm here trying to do something I really like for a living and I
					hope we can make my dreams come true.
				</p>
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
