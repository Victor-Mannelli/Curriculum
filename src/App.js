import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeScreen from "./Routs/HomeScreen";
import AboutMe from "./Routs/AboutMe"
import MyExp from "./Routs/MyExp"
import Projects from "./Routs/Projects"
import Contact from "./Routs/Contact";
import VerticalNavBar from "./VerticalNavBar";

export default function App() {
  return (
    <BrowserRouter>
      <VerticalNavBar />
      <Main>
        <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path="/aboutMe" element={<AboutMe />} /> 
          <Route path="/myExp" element={<MyExp />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/projects" element={<Projects />} /> 
        </Routes>
        <GlobalStyle />
      </Main>
    </BrowserRouter>
  );
}

const Main = styled.div `
  background-color: #1d1d1d;
  padding-left: 110px;
`