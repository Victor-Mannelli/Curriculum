import { useLocation, useNavigate } from "react-router-dom";
import { Experiences, SkillText, StyledMyExp } from "./style";
import WorkPlaceArray from "../Routs Files/WorkPlacesArray";

export default function MyExp() {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	function WorkPlace({ title, date, description }) {
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
					python calculation logics.
				</p>
				<p>
					In the beggining I couldn't see the potential and all the fun I could
					have programming, since college can make even fun things boring...
				</p>
				<p>
					One day I found out Driven Education and my eyes were oppened to
					everything I could achieve and do with programming and how fast It
					could be with their help.
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
				{WorkPlaceArray.map((e, i) => (
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
