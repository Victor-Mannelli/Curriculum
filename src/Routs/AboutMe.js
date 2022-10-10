import styled from "styled-components";
import me from "./Routs Files/me.png";
export default function AboutMe() {
	return (
		<StyledAboutMe>
			<Profile>
				<Me src={me} alt="" />
				<h1> Victor Mendes Mannelli</h1>
			</Profile>
			<Description>
				<h1> The one who represents Myself </h1>
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
					Interested in the whole process of web and software development, AIs,
					video-game development and virtual reality.
				</p>
				<h2> Lets develop something cool together! </h2>
			</Description>
		</StyledAboutMe>
	);
}
const StyledAboutMe = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
    align-items: center;
	flex-wrap: wrap;

	height: 100vh;
	color: aqua;
    font-family: 'Roboto', sans-serif;
`;
const Profile = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;

	width: 170px;
	height: 200px;
`;
const Me = styled.img`
	border-radius: 50%;
	margin: 20px;
`;
const Description = styled.div`
	width: 600px;
	height: 300px;
	margin-top: 20px;

	h1 {
		font-size: 30px;
		padding-bottom: 24px;
	}
	p {
		color: white;
        font-size: 18px;
		padding-bottom: 20px;
	}
	h2 {
        font-size: 20px;
	}
`;
