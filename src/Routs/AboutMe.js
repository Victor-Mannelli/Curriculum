import styled from "styled-components";
import me from "./Routs Files/me.png";
import wall from "./Routs Files/wallpaper.jpg";
export default function AboutMe() {
	return (
		<AboutMePage>
			<StyledAboutMe>
				<Profile>
					<Me src={me} alt="" />
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
				<img src={wall} alt="" />
			</StyledImg>
		</AboutMePage>
	);
}
const AboutMePage = styled.div`
	min-height: 100vh;

	display: grid;
	grid-template-columns: 50% 50%;

	padding-top: 70px;
	background-color: #2a2a2a;
	cursor: default;

	@media (max-width: 1000px) {
		padding-top: 40px;
		grid-template-columns: 100%;
	}
	@media (max-width: 360px){
		grid-template-columns: 100%;
		grid-template-rows: 100%;
	}
`;
const StyledAboutMe = styled.div`
	justify-self: center;
	align-self: center;

	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: aqua;
	font-family: "Roboto", sans-serif;
`;
const Profile = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
	justify-content: center;

	width: 200px;
	height: 200px;
	font-family: "Alkalami", serif;
	font-size: 18px;
`;
const Me = styled.img`
	width: 150px;
	height: 150px;
	border-radius: 50%;
	margin-bottom: 20px;
`;
const Description = styled.div`
	width: 100%;
	height: 100%;
	margin: 15px 20px 15px 40px;
	h1 {
		font-size: 50px;
		font-family: "Alkalami", serif;
		padding: 15px 0;
	}
	p {
		color: white;
		font-size: 17px;
		line-height: 25px;
		padding-bottom: 20px;
	}
	h2 {
		font-size: 20px;
	}
	@media (max-width: 1000px) {
		width: 80%;
	}
	@media (max-width: 360px){
		width: 93%;
	}
`;
const StyledImg = styled.div`
	justify-self: center;
	align-self: center;
	width: 80%;
	height: 50%;
	img {
		width: 100%;
		height: 100%;
	}
	@media (max-width: 1000px) {
		height: 100%;
		padding: 10px 0 10px 0;
	}
	@media (max-width: 360px) {
		display: none;
	}
`;