import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { GoUnmute } from "react-icons/go";
import { GoMute } from "react-icons/go";
import backgroundMusic from "./Files/background-music.mp3";
import HomeScreen from "./Routs/HomeScreen";
import AboutMe from "./Routs/AboutMe";
import MyExp from "./Routs/MyExp";
import Projects from "./Routs/Projects";
import Contact from "./Routs/ContactMe";
import NavagationBar from "./NavagationBar";
import PopUpMenu from "./PopUpMenu";

export default function App() {
	const [popUp, setPopUp] = useState(false);
	const [musicState, setMusicState] = useState(false);
	const [musicVolume, setMusicVolume] = useState(20);
	const [showVolume, setShowVolume] = useState(false);
	const [showMusic, setShowMusic] = useState(false);

	useEffect(() => {
		playAudio();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [musicState]);
	useEffect(() => {
		document.getElementById("music-player").volume = musicVolume / 100;

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [musicVolume]);

	function handleClick() {
		if (showMusic === true) return
		setShowMusic(true);
		setMusicState(true);
	}
	function playAudio() {
		if (musicState) {
			document.getElementById("music-player").play();
		} else {
			document.getElementById("music-player").pause();
		}
	}

	return (
		<BrowserRouter>
			<div onClick={() => handleClick()}>
				<NavagationBar />
				<PopUpMenu popUp={popUp} setPopUp={setPopUp} />
				<MusicBox onMouseLeave={() => setShowVolume(false)}>
					<audio id="music-player" loop>
						<source src={backgroundMusic} type="audio/mp3" />
						Your browser does not support the audio tag.
					</audio>
					<StopMusicIcon
						style={{ display: musicState ? "initial" : "none" }}
						onClick={() => setMusicState(!musicState)}
						onMouseOver={() => setShowVolume(true)}
					/>
					<UnmuteIcon
						style={{ display: musicState ? "none" : "initial" }}
						onClick={() => setMusicState(!musicState)}
						onMouseOver={() => setShowVolume(true)}
					/>
					<VolumeInput
						onChange={(e) => setMusicVolume(e.target.value)}
						value={musicVolume}
						type="range"
						min="0"
						max="100"
						showVolume={showVolume}
					/>
				</MusicBox>
				<Routes>
					<Route path="/" element={<HomeScreen />} />
					<Route path="/about-me" element={<AboutMe />} />
					<Route path="/my-exp" element={<MyExp />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/projects" element={<Projects />} />
				</Routes>
				<GlobalStyle />
				<ToastContainer />
			</div>
		</BrowserRouter>
	);
}
const MusicBox = styled.div`
	position: fixed;
	z-index: 5;
	top: 75px;
	right: 5px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 30px;
	transition: width 1s;
	:hover {
		width: 165px;
	}

	@media (max-width: 1000px) {
		left: 10px;
		top: 10px;
		width: 165px;
	}
`;
const StopMusicIcon = styled(GoUnmute)`
	width: 25px;
	height: 25px;
	cursor: pointer;
	color: white;
`;
const UnmuteIcon = styled(GoMute)`
	color: white;
	width: 25px;
	height: 25px;
	cursor: pointer;
`;
const VolumeInput = styled.input`
	display: ${(props) => (props.showVolume ? "block" : "none")};
`;
