import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PopUpMenu, NavigationBar } from "./components";
import { useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import { GoUnmute, GoMute } from "@/utils";
import HomeScreen from "./routes/homeScreen";
import Projects from "./routes/projects";
import Contact from "./routes/contactMe";
import GlobalStyle from "./GlobalStyle";
import AboutMe from "./routes/aboutMe";
import styled from "styled-components";
import MyExp from "./routes/myExp";

export default function App() {
	const [musicState, setMusicState] = useState(false);
	const [firstClick, setFirstClick] = useState(true);
	const [popUp, setPopUp] = useState(false);
	const [volume, setVolume] = useState(15);
	const audioRef = useRef<HTMLAudioElement>(null);

	useEffect(() => {
		musicState ? audioRef.current?.play() : audioRef.current?.pause();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [musicState]);

	useEffect(() => {
		if (audioRef.current) audioRef.current.volume = volume / 100;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [volume]);

	function handleClick() {
		if (musicState || !firstClick) return;
		setFirstClick(false)
		setMusicState(true);
	}

	return (
		<BrowserRouter>
			<div onClick={() => handleClick()}>
				<NavigationBar />
				<PopUpMenu popUp={popUp} setPopUp={setPopUp} />
				<MusicBox>
					<audio ref={audioRef} autoPlay={true} loop>
						<source src="/files/bg-music.mp3" type="audio/mp3" />
						Your browser does not support the audio tag.
					</audio>
					{musicState && volume !== 0 ? (
						<StopMusicIcon onClick={() => setMusicState(!musicState)} />
					) : (
						<UnmuteIcon onClick={() => setMusicState(!musicState)} />
					)}
					<input
						onChange={(e) => setVolume(Number(e.target.value))}
						style={{ cursor: "pointer" }}
						value={volume}
						type="range"
						max="100"
						min="0"
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
	top: 80px;
	left: 15px;

	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 7px;

	&:hover input {
		width: 150px;
	}

	input {
		width: 0px;
		transition: width 0.5s ease;
		overflow: hidden;
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
