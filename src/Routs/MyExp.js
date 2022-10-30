import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import WorkPlaceArray from "../WorkPlacesArray";

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
const StyledMyExp = styled.div`
	display: grid;
	grid-template-columns: 55% 45%;

	min-height: 100vh;
	padding-top: 70px;

	min-height: 100vh;
	color: white;
	cursor: default;

	@media (max-width: 1000px) {
		grid-template-columns: 100%;
	}
`;
const SkillText = styled.div`
	align-self: center;
	justify-self: center;

	display: flex;
	flex-direction: column;
	width: 80%;
	margin-right: 25px;
	font-family: "Roboto", sans-serif;
	h1 {
		color: rgb(0, 255, 255);
		font-family: "Alkalami", serif;
		font-size: 50px;
		padding-bottom: 20px;
	}
	p {
		color: white;
		font-size: 18px;
		line-height: 25px;
		padding-bottom: 20px;
	}
	h2 {
		color: rgb(0, 255, 255);
		font-size: 18.83px;
	}
	a,
	span {
		font-weight: 700;
		cursor: pointer;
		:hover {
			color: rgb(0, 210, 180);
		}
	}
`;
const Experiences = styled.div`
	align-self: center;
	justify-self: center;

	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	font-family: "Roboto", sans-serif;
	justify-content: center;

	div {
		width: 220px;
		height: 200px;
		background-color: rgb(42, 42, 42);
		padding: 10px;
		margin: 10px;
		h1 {
			font-weight: 700;
			font-size: 19px;
			padding: 8px 0 15px 0;
		}
		p {
			font-size: 16px;
			color: lightgray;
			padding-bottom: 15px;
			line-height: 20px;
		}
	}
`;