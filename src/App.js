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

export default function App() {
	const [popUp, setPopUp] = useState(false)
	return (
		<BrowserRouter>
			<NavagationBar />
			<PopUpMenu popUp={popUp} setPopUp={setPopUp}/>
			<Main>
				<Routes>
					<Route path="/" element={<HomeScreen />} />
					<Route path="/about-me" element={<AboutMe />} />
					<Route path="/my-exp" element={<MyExp />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/projects" element={<Projects />} />
				</Routes>
			</Main>
			<GlobalStyle />
			<ToastContainer />
		</BrowserRouter>
	);
}

const Main = styled.div`
	background-color: #1d1d1d;
`;
