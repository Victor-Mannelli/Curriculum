import AboutMe from "../aboutMe";
import Contact from "../contactMe";
import MyExp from "../myExp";
import Projects from "../projects";
import { HomeScreenPage } from "./style";

export default function HomeScreen() {
	return (
		<HomeScreenPage>
			<AboutMe />
			<MyExp />
			<Projects />
			<Contact />
		</HomeScreenPage>
	);
}
