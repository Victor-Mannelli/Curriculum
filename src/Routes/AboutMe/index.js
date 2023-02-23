import me from "../../Files/me.png";
import {
	AboutMePage,
	Description,
	Profile,
	StyledAboutMe,
	StyledImg,
} from "./style";
import { toolsAndLibraries } from "../../Constants/index";

export default function AboutMe() {

	return (
		<AboutMePage>
			<StyledAboutMe>
				<Profile>
					<img src={me} alt="" />
					<h1> Victor Mendes Mannelli</h1>
				</Profile>
				<Description>
					<h1> Who am I ? </h1>
					<p>
						I'm a Full Stack Developer located in Brazil. I'm passionate about
						solving problems and eager to learn more.
					</p>
					<p>
						Well organised person, problem solver, independent employee with
						high attention to detail. I love anime, video-games, music, learning
						new languages, running and drawing.
					</p>
					<p>
						Interested in the whole process of web and software development,
						A.I.s, video-game development and virtual reality.
					</p>
					<h2> Let's develop something cool together! </h2>
				</Description>
			</StyledAboutMe>
			<StyledImg>
				{toolsAndLibraries.map((e) => (
					<a href={e.link} key={e.id} target="blank">
						<img alt={e.alt} src={e.src}/>
					</a>
				))}
			</StyledImg>
		</AboutMePage>
	);
}
