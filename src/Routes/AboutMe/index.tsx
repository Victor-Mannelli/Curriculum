import { AboutMePage, Description, Profile, StyledAboutMe, StyledSvg, StyledToolsAndLibs } from "./style";
import { toolsAndLibraries } from "../../utils/consts/index";

export default function AboutMe() {
	return (
		<AboutMePage>
			<StyledAboutMe>
				<Profile>
					<img src="files/me.png" alt="" />
					<h1> Victor Mendes Mannelli </h1>
				</Profile>
				<Description>
					<h1> Who am I ? </h1>
					<p>
						I am a 25-year-old Full Stack Developer based in Brazil, with a strong interest in
						technologies that directly impact users, such as web and software development,
						AI, and virtual reality.
					</p>
					<p>
						My first encounter with programming was during my Nanotechnology degree,
						where I learned mathematical logic using Python.
					</p>
					<p>
						After a few years,
						I decided to follow this passion by enrolling in Driven's
						Full-Stack Web Development Bootcamp, where I confirmed my calling for this field.
					</p>
					<h2> Let's develop something cool together! </h2>
				</Description>
			</StyledAboutMe>
			<StyledToolsAndLibs>
				{toolsAndLibraries.map((e, index) => {
					return e.src ? (
						<a href={e.link} key={index} target="blank">
							<img alt={e.alt} src={e.src} />
						</a>
					) :
						<a style={{position: "relative"}} href={e.link} target="blank">
							<StyledSvg key={index}>
								{e.svg}
							</StyledSvg>
						</a>
				})}
			</StyledToolsAndLibs>
		</AboutMePage>
	);
}