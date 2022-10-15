import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function VerticalNavBar() {
	const navigate = useNavigate();

	return (
		<StyledVerticalNavBar>
			<div onClick={() => navigate("/")}>
				<h1> Vm </h1>
				<p>FullStack Developer</p>
			</div>
			<div onClick={() => navigate("/aboutMe")}> About me </div>
			<div onClick={() => navigate("/myExp")}> My Exp </div>
			<div onClick={() => navigate("/projects")}> Projects </div>
			<div onClick={() => navigate("/contact")}> Contact </div>
			<Icons>
				<a
					href="https://github.com/Victor-Mannelli"
					target="_blank"
					rel="noreferrer"
				>
					<ion-icon name="logo-github"/>
				</a>
				<a
					href="https://www.linkedin.com/in/victor-mendes-mannelli-740aa2246/"
					target="_blank"
					rel="noreferrer"
				>
					<ion-icon name="logo-linkedin"/>
				</a>
			</Icons>
		</StyledVerticalNavBar>
	);
}
const StyledVerticalNavBar = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	z-index: 3;

	display: flex;
	flex-direction: column;
	border-right: gray solid 1px;
	width: 120px;
	height: 100%;

	font-size: 24px;
	font-family: "Alkalami", serif;

	div {
		display: flex;
		justify-content: center;
		align-items: center;

		height: 70px;
		width: 100%;
		padding-top: 10px;
		color: aqua;
		border-bottom: gray solid 1px;
		cursor: pointer;

		&:nth-child(1) {
			flex-direction: column;
			justify-content: space-evenly;
			text-align: center;
			height: 170px;
			width: 100%;
			h1 {
				font-size: 56px;
			}
			p {
				font-size: 22px;
			}
		}
		:hover {
			/* background-color: rgb(62, 62, 62); */
			color: white;
		}
	}
`;
const Icons = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 100%;
	height: 70px;
	border: none;
	border-bottom: gray solid 1px;
	
	font-size: 28px;
	background-color: rgb(29,29,29);
	color: aqua;
	cursor: initial;

	a {
		height: 30px;
	}
	
	ion-icon {
		cursor: pointer;
		border-radius: 10px;

		:hover {
			color: white;
		}
	}
`;
