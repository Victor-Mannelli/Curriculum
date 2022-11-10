import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./Routs/HomeScreen";
import AboutMe from "./Routs/AboutMe";
import MyExp from "./Routs/MyExp";
import Projects from "./Routs/Projects";
import Contact from "./Routs/Contact";
import NavagationBar from "./NavagationBar";
import PopUpMenu from "./PopUpMenu";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { GoUnmute } from "react-icons/go";
import { GoMute } from "react-icons/go";
import backgroundMusic from "./Files/background-music.mp3";

export default function App() {
	const [popUp, setPopUp] = useState(false);
	const [musicState, setMusicState] = useState(false);

	useEffect(() => {
		playAudio();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [musicState]);

	function playAudio() {
		if (musicState) {
			document.getElementById("music-player").play();
		} else {
			document.getElementById("music-player").pause();
		}
	}

	return (
		<BrowserRouter>
			<NavagationBar />
			<PopUpMenu popUp={popUp} setPopUp={setPopUp} />
			<MusicPlayer id="music-player" loop>
				<source src={backgroundMusic} type="audio/mp3" />
				Your browser does not support the audio tag.
			</MusicPlayer>
			<StopMusicIcon
				style={{ display: musicState ? "initial" : "none" }}
				onClick={() => setMusicState(!musicState)}
			/>
			<UnmuteIcon
				style={{ display: musicState ? "none" : "initial" }}
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
`;
const StopMusicIcon = styled(GoUnmute)`
	position: fixed;
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
