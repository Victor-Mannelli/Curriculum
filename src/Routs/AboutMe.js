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
						Well organised person, problem solver, independent employee with high
						attention to detail. I love anime, video-games, music, learning new
						languages, running and drawing.
					</p>
					<p>
						Interested in the whole process of web and software development, A.I.s,
						video-game development and virtual reality.
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
const AboutMePage = styled.div `
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`
const StyledAboutMe = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	height: 100vh;
	color: aqua;
    font-family: 'Roboto', sans-serif;
`;
const Profile = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	
	width: 200px;
	height: 200px;
	margin-bottom: 25px;
	font-family: 'Alkalami', serif;
	font-size: 18px;
`;
const Me = styled.img`
	border-radius: 50%;
	margin: 20px;
`;
const Description = styled.div`
	width: 500px;
	height: 300px;
	margin: 15px 20px 15px 40px;

	h1 {
		font-size: 50px;
		font-family: 'Alkalami', serif;
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
`;
const StyledImg = styled.div `
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	margin-right: 30px;
`