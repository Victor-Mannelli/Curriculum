import logo from "../../Files/logo.png";
import { useNavigate } from "react-router-dom";
import { Content, Footer, Header, Logo, MenuIconClose, MenuIconOpen, PopUpScreen } from "./style";

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
