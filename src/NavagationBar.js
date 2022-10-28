import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "./Files/logo.png"

export default function NavagationBar() {
	const navigate = useNavigate();

	return (
		<StyledNavagationBar>
			<div onClick={() => navigate("/")}>
				<img src={logo} alt="logo"/>
				<p>FullStack Developer</p>
			</div>
			<div onClick={() => navigate("/about-me")}> About me </div>
			<div onClick={() => navigate("/my-exp")}> My Exp </div>
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
		</StyledNavagationBar>
	);
}
const StyledNavagationBar = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	z-index: 3;
	padding-bottom: 70px;

	display: flex;
	border-bottom: gray solid 1px;
	width: 100%;
	height: 70px;
	
	font-size: 24px;
	font-family: "Alkalami", serif;
	background-color: #1d1d1d;

	div {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;

		height: 70px;
		width: 100%;
		padding-top: 10px;
		color: aqua;
		border-right: gray solid 1px;
		cursor: pointer;

		&:nth-child(1) {
			justify-content: space-evenly;
			text-align: center;
			padding: 10px 20px 0 20px;
			
			img {
				width: 80px;
				height: 90px;
				padding-bottom: 10px;
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