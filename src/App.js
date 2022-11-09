import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./Routs/HomeScreen";
import AboutMe from "./Routs/AboutMe";
import MyExp from "./Routs/MyExp";
import Projects from "./Routs/Projects";
import Contact from "./Routs/Contact";
import NavagationBar from "./NavagationBar";
import { ToastContainer } from "react-toastify";
import PopUpMenu from "./PopUpMenu";
import { useState } from "react";
import { GoUnmute } from "react-icons/go";
import { GoMute } from "react-icons/go";
import backgroundMusic from "./Files/background-music.mp3";

export default function App() {
	const [popUp, setPopUp] = useState(false);
	const [musicState, setMusicState] = useState(false);
	return (
		<BrowserRouter>
			<NavagationBar />
			<PopUpMenu popUp={popUp} setPopUp={setPopUp} />
			<MusicPlayer
				// loop="true"
				// paused={musicState}
				controls
				autoplay
			>
				<source 
					src={backgroundMusic} 
					type="audio/mp3" 
				/>
				{/* Your browser does not support the audio tag. */}
			</MusicPlayer>
			
			<StopMusicIcon
				musicState={musicState}
				onClick={() => setMusicState(!musicState)}
			/>
			<UnmuteIcon
				musicState={musicState}
				onClick={() => setMusicState(!musicState)}
			/>
			<Routes>
				<Route path="/" element={<HomeScreen />} />
				<Route path="/about-me" element={<AboutMe />} />
				<Route path="/my-exp" element={<MyExp />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
			<GlobalStyle />
			<ToastContainer />
		</BrowserRouter>
	);
}
const MusicPlayer = styled.audio`
	margin-top: 70px;
`
const StopMusicIcon = styled(GoUnmute)`
	position: fixed;
	display: ${(props) => (props.musicState ? "none" : "inicial")};
	z-index: 5;
	top: 80px;
	right: 12px;
	width: 25px;
	height: 25px;
	cursor: pointer;
	@media (max-width: 1000px) {
		left: 15px;
		top: 15px;
	}
`;
const UnmuteIcon = styled(GoMute)`
	position: fixed;
	display: ${(props) => (props.musicState ? "initial" : "none")};
	z-index: 5;
	top: 80px;
	right: 12px;
	width: 25px;
	height: 25px;
	cursor: pointer;
	@media (max-width: 1000px) {
		left: 15px;
		top: 15px;
	}
`;
