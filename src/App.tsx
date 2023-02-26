import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEffect, useRef, useState } from "react";
import { GoUnmute } from "react-icons/go";
import { GoMute } from "react-icons/go";
import backgroundMusic from "./Files/background-music.mp3";
import HomeScreen from "./Routes/HomeScreen";
import AboutMe from "./Routes/AboutMe";
import MyExp from "./Routes/MyExp";
import Projects from "./Routes/Projects";
import Contact from "./Routes/ContactMe";
import NavagationBar from "./Components/NavigationBar";
import PopUpMenu from "./Components/PopUpMenu";
import { ShowVolumeType } from "./Types";

export default function App() {
	const [popUp, setPopUp] = useState(false);
	const [musicState, setMusicState] = useState(false);
	const [volume, setVolume] = useState(15);
	const [showVolume, setShowVolume] = useState(false);
	const audioRef = useRef<HTMLAudioElement>(null);

	useEffect(() => {
		musicState === true ? audioRef.current?.play() : audioRef.current?.pause();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [musicState]);

	useEffect(() => {
		if(audioRef.current) audioRef.current.volume = volume / 100;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [volume]);

	function handleClick() {
		if (musicState === true) return;
		setMusicState(true);
	}

	return (
		<BrowserRouter>
			<div onClick={() => handleClick()}>
				<NavagationBar />
				<PopUpMenu popUp={popUp} setPopUp={setPopUp} />
				<MusicBox onMouseLeave={() => setShowVolume(false)}>
					<audio ref={audioRef} autoPlay={true} loop>
						<source src={backgroundMusic} type="audio/mp3" />
						Your browser does not support the audio tag.
					</audio>
					{musicState ? (
						<StopMusicIcon
							onClick={() => setMusicState(!musicState)}
							onMouseOver={() => setShowVolume(true)}
						/>
					) : (
						<UnmuteIcon
							onClick={() => setMusicState(!musicState)}
							onMouseOver={() => setShowVolume(true)}
						/>
					)}
					<VolumeInput
						onChange={(e) => setVolume(Number(e.target.value))}
						value={volume}
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
const VolumeInput = styled.input<ShowVolumeType>`
	display: ${(props) => (props.showVolume ? "block" : "none")};
`;
