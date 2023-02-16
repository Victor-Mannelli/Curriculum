import { useNavigate } from "react-router-dom";
import logo from "../../Files/logo.png";
import { StyledNavigationBar, Icons } from "./style";

export default function NavigationBar() {
	const navigate = useNavigate();

	return (
		<StyledNavigationBar>
			<div onClick={() => navigate("/")}>
				<img src={logo} alt="logo" />
				<p>FullStack Developer</p>
			</div>
			<div onClick={() => navigate("/about-me")}>
				{" "}
				<p> About me </p>{" "}
			</div>
			<div onClick={() => navigate("/my-exp")}>
				{" "}
				<p> My Exp </p>{" "}
			</div>
			<div onClick={() => navigate("/projects")}>
				{" "}
				<p> Projects</p>{" "}
			</div>
			<div onClick={() => navigate("/contact")}>
				{" "}
				<p> Contact </p>{" "}
			</div>
			<Icons>
				<a
					href="https://github.com/Victor-Mannelli"
					target="_blank"
					rel="noreferrer"
				>
					<ion-icon name="logo-github" />
				</a>
				<a
					href="https://www.linkedin.com/in/victor-mendes-mannelli-740aa2246/"
					target="_blank"
					rel="noreferrer"
				>
					<ion-icon name="logo-linkedin" />
				</a>
			</Icons>
		</StyledNavigationBar>
	);
}
