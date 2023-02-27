import AboutMe from "../AboutMe";
import Contact from "../ContactMe";
import MyExp from "../MyExp";
import Projects from "../Projects";
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
