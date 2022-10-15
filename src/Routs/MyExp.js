import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function MyExp() {
	const navigate = useNavigate();
	return (
		<StyledMyExp>
			<SkillText>
				<h1> Skills and Experiences </h1>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry.
				</p>
				<p>
					Lorem Ipsum has been the industry's standard dummy text ever since the
					1500s, when an unknown printer took a galley of type and scrambled it
					to make a type specimen book.
				</p>
				<p>
					It has survived not only five centuries, but also the leap into
					electronic typesetting, remaining essentially unchanged.
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
			<Experience>
				<></>
				<WorkPlaces>
					<div>
						<h1>Driven</h1>
						<p> August / 2022 - April / 2023</p>
						<p>
							{" "}
							+25 projects on: HTML, CSS, Javascript, React,
							Node.js, MongoDB, SQL, Prisma, Typescript, Docker, AWS
						</p>
					</div>
				</WorkPlaces>
			</Experience>
		</StyledMyExp>
	);
}
const StyledMyExp = styled.div`
	display: flex;
	flex-direction: row;

	height: 100vh;
	margin-left: 25px;
	color: white;
`;
const SkillText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
	width: 500px;
    margin-right: 25px;
	font-family: "Roboto", sans-serif;
	h1 {
		color: rgb(0, 255, 255);
		font-size: 50px;
		padding-bottom: 24px;
	}
	p {
		color: white;
		font-size: 18px;
		line-height: 25px;
		padding-bottom: 20px;
	}
	h2 {
		color: rgb(0, 255, 255);
		font-size: 18px;
	}
	a,
	span {
		text-decoration: underline;
		cursor: pointer;
		:hover {
			color: rgb(0, 210, 180);
		}
	}
`;
const Experience = styled.div`
    display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
`;
const WorkPlaces = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
    font-family: "Roboto", sans-serif;
	div {
		width: 210px;
		height: 200px;
		background-color: rgb(42,42,42);
        padding: 10px;
        h1 {
            font-weight: 700;
            font-size: 19px;
            padding: 8px 0 20px 0;
        }
        p {
            font-size: 16px;
            color: lightgray;
            padding-bottom: 15px;
            line-height: 19px;
        }
	}
`;
