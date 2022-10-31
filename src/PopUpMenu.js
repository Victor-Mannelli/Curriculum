import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "./Files/logo.png";
import { TfiMenu } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";

export default function PopUpMenu({ popUp, setPopUp }) {
	const navigate = useNavigate();
	if (popUp === true) {
		return (
			<PopUpScreen>
				<Header>
					<MenuIconClose onClick={() => setPopUp(false)} />
					<Logo src={logo} alt="logo" />
					<p> Victor Mannelli </p>
					<h1>FullStack Developer</h1>
				</Header>
				<Content>
					<ul>
						<li
							onClick={() => {
								navigate("/");
								setPopUp(false);
							}}
							data-text="HomeScreen"
						>
							<p> Home Screen </p>
						</li>
						<li
							onClick={() => {
								navigate("/about-me");
								setPopUp(false);
							}}
							data-text="About Me"
						>
							<p> About Me </p>
						</li>
						<li
							onClick={() => {
								navigate("/my-exp");
								setPopUp(false);
							}}
							data-text="Experiences"
						>
							<p> My Experiences </p>
						</li>
						<li
							onClick={() => {
								navigate("/projects");
								setPopUp(false);
							}}
							data-text="Projects"
						>
							<p> Projects </p>
						</li>
						<li
							onClick={() => {
								navigate("/contact");
								setPopUp(false);
							}}
							data-text="Contact Me"
						>
							<p> Contact Me </p>
						</li>
					</ul>
				</Content>
				<Footer>
					<a
						href="https://github.com/Victor-Mannelli"
						target="_blank"
						rel="noreferrer"
					>
						<ion-icon alt="github" name="logo-github" />
					</a>
					<a
						href="https://www.linkedin.com/in/victor-mendes-mannelli-740aa2246/"
						target="_blank"
						rel="noreferrer"
					>
						<ion-icon alt="linkedin" name="logo-linkedin" />
					</a>
				</Footer>
			</PopUpScreen>
		);
	} else {
		return <MenuIconOpen onClick={() => setPopUp(true)} />;
	}
}
const MenuIconClose = styled(IoClose)`
	position: fixed;
	top: 15px;
	right: 15px;

	width: 40px;
	height: 40px;
	cursor: pointer;
	color: white;
	
	:hover {
		color: lightgray;
	}
`;
const MenuIconOpen = styled(TfiMenu)`
	position: fixed;
	display: none;
	z-index: 5;
	top: 20px;
	right: 20px;
	color: white;
	width: 30px;
	height: 30px;
	cursor: pointer;
	:hover {
		color: lightgray;
	}
	@media (max-width: 1000px) {
		display: initial;
	}
`;
const PopUpScreen = styled.div`
	position: fixed;
	z-index: 5;

	display: grid;
	grid-template-columns: 100%;

	min-height: 100%;
	width: 100%;
	background-color: #2a2a2a;
	overflow: hidden;
`;
const Content = styled.div`
	padding-top: 145px;
	width: 250px;
	align-self: center;
	justify-self: center;

	ul li {
		padding: 3px;
		cursor: pointer;
	}
	ul li:before {
		content: attr(data-text);
		position: absolute;
		top: 31%;
		left: 50%;
		transform: translate(-50%, -50%);

		color: white;
		font-size: 6em;
		font-weight: 700;
		pointer-events: none;
		opacity: 0;
		letter-spacing: 20px;
		transition: 0.5s;
		white-space: nowrap;
	}
	ul li:hover:before {
		opacity: 0.1;
		letter-spacing: 20px;
	}
	ul li p {
		position: relative;
		z-index: 1;

		display: flex;
		justify-content: center;
		align-items: center;
		height: 6vh;

		transition: 0.5s;
		overflow: hidden;
		background-color: #1d1d1d;

		color: cyan;
		text-transform: uppercase;
		letter-spacing: 2px;
	}
	ul:hover li p {
		opacity: 0;
	}
	ul li p:hover {
		transform: scale(1.4);
		z-index: 1000;
		background: cyan;
		color: #1d1d1d;
		opacity: 1;
	}
	ul li p:before {
		content: "";
		position: absolute;
		top: 0;
		left: -100px;
		width: 80px;
		height: 100%;
		background: linear-gradient(
			90deg,
			transparent,
			rgba(255, 255, 255, 0.8),
			transparent
		);
		transform: skewX(35deg);
		transition: 0s;
	}
	ul li p:hover:before {
		left: calc(100% + 100px);
		transition: 0.5s;
		transition-delay: 0.2s;
	}
	@media (max-width: 1000px) {
		padding-top: 70px;
	}
`;
const Logo = styled.img`
	width: 100px;
	height: 100px;
`;
const Header = styled.div`
	position: fixed;
	top: 0;
	left: 0;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	height: 22%;
	width: 100%;
	background-color: #1d1d1d;
	h1,
	p {
		font-size: 16px;
		font-family: "Alkalami", serif;
		color: cyan;
		padding-bottom: 7px;
		cursor: default;
	}
`;
const Footer = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;

	display: flex;
	justify-content: center;
	width: 100%;
	a {
		padding: 40px 20px;
		cursor: default;
	}
	ion-icon {
		width: 30px;
		height: 30px;
		color: cyan;
		cursor: pointer;
		:hover {
            transition: 0.5s;
			transform: scale(1.4);
			z-index: 1000;
			color: white;
		}
	}
`;
