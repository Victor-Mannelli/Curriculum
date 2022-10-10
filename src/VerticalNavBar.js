import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import github from "./Files/Github.png";
import linkedin from "./Files/LinkedIn.png";

export default function VerticalNavBar() {
    const navigate = useNavigate();

	return (
		<StyledVerticalNavBar>
			<div>
				<h1> Vm </h1>
				<p>FullStack Developer</p>
			</div>
			<div onClick={() => navigate("/aboutMe")}> About me </div>
			<div onClick={() => navigate("/myExp")}> My Exp </div>
			<div onClick={() => navigate("/projects")}> Projects </div>
			<div onClick={() => navigate("/contact")}> Contact </div>
			<div>
				<a
					href="https://github.com/Victor-Mannelli"
					target="_blank"
					rel="noreferrer"
				>
					<Git src={github} alt="icon" />
				</a>
				<a
					href="https://www.linkedin.com/in/victor-mendes-mannelli-740aa2246/"
					target="_blank"
					rel="noreferrer"
				>
					<LinkedIn src={linkedin} alt="icon" />
				</a>
			</div>
		</StyledVerticalNavBar>
	);
}
const StyledVerticalNavBar = styled.div`
    position: fixed;
    left: 0;
    top: 0;

	display: flex;
	flex-direction: column;
	border-right: gray solid 1px;
    width: 110px;
	height: 100%;

	font-size: 24px;
	font-family: "Calligraffitti", cursive;

	div {
		display: flex;
		justify-content: center;
		align-items: center;

		height: 50px;
		width: 100%;
        padding-top: 5px;
		color: aqua;
		border-bottom: gray solid 1px;
		cursor: pointer;

		&:nth-child(1) {
			flex-direction: column;
			justify-content: space-evenly;
			text-align: center;
			height: 170px;
			width: 100%;
			cursor: initial;
			h1 {
				font-size: 56px;
			}
			p {
				font-size: 22px;
			}
		}
		&:nth-child(6) {
			justify-content: space-evenly;
			background-color: aqua;
			cursor: initial;
		}
	}
`;
const Git = styled.img`
	width: 30px;
	height: 30px;
`;
const LinkedIn = styled.img`
	width: 38px;
	height: 38px;
`;