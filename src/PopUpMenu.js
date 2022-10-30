/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "./Files/logo.png";
import { TfiMenu } from "react-icons/tfi"

export default function PopUpMenu({ popUp, setPopUp }) {
    const navigate = useNavigate();
	if (popUp === true) {
		return (
			<PopUpScreen>
				<Header>
					<Logo src={logo} alt="" />
					<p> Victor Mannelli </p>
					<h1>FullStack Developer</h1>
				</Header>
				<Content>
					<ul>
						<li onClick={() => {navigate("/"); setPopUp(false) }} data-text="HomeScreen">
							{" "}
							<a href=""> Home Screen </a>
						</li>
						<li onClick={() => {navigate("/about-me"); setPopUp(false)}} data-text="About Me">
							{" "}
							<a href=""> About Me </a>
						</li>
						<li onClick={() => {navigate("/my-exp"); setPopUp(false)}} data-text="My Experiences">
							{" "}
							<a href=""> My Experiences </a>
						</li>
						<li onClick={() => {navigate("/projects"); setPopUp(false)}} data-text="Projects">
							{" "}
							<a href=""> Projects </a>
						</li>
						<li onClick={() => {navigate("/contact"); setPopUp(false)}} data-text="Contact Me">
							{" "}
							<a href=""> Contact Me </a>
						</li>
					</ul>
				</Content>
			</PopUpScreen>
		);
	} else {
        return (
            <>
                <MenuIcon onClick={() => setPopUp(true)}/>
            </>
        )
    }
}
const MenuIcon = styled(TfiMenu)`
    position: fixed;
    top: 20px;
    right: 20px;
    color: white;
    width: 30px;
    height: 30px;
    cursor: pointer;
    :hover {
        color: lightgray;
    }
`
const PopUpScreen = styled.div`
	position: fixed;
	z-index: 5;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	min-height: 100%;
	width: 100%;
	background-color: #2a2a2a;
	overflow: hidden;
`;
const Content = styled.div`
    padding-top: 145px;
    ul {
		display: flex;
		flex-direction: column;
	}
    ul li {
        padding: 3px;
    }
	ul li:before {
		content: attr(data-text);
		position: absolute;
		top: 60%;
		left: 50%;
		transform: translate(-50%, -50%);

		color: white;
		font-size: 6em;
		font-weight: 700;
		pointer-events: none;
		opacity: 0;
		letter-spacing: 20px;
		transition: 0.5s;
		white-space: nowrap;
	}
	ul li:hover:before {
		opacity: 0.1;
		letter-spacing: 20px;
	}
	ul li a {
		position: relative;
		z-index: 1;

		display: flex;
        justify-content: center;
        align-items: center;
        
		width: 20vw;
        height: 6vh;
		
		transition: 0.5s;
		overflow: hidden;
		background-color: #1d1d1d;

		color: cyan;
		text-transform: uppercase;
		letter-spacing: 2px;

        @media(max-width: 1000px){
            width: 30vw;
        }
        @media(max-width: 800px){
            width: 40vw;
        }
        @media(max-width: 600px){
            width: 50vw;
        }
        @media(max-width: 500px){
            width: 55vw;
        }
        @media(max-width: 400px){
            width: 70vw;
        }
	}
	ul:hover li a {
		opacity: 0;
	}
	ul li a:hover {
		transform: scale(1.4);
		z-index: 1000;
		background: cyan;
		color: #1d1d1d;
		opacity: 1;
	}
	ul li a:before {
		content: "";
		position: absolute;
		top: 0;
		left: -100px;
		width: 80px;
		height: 100%;
		background: linear-gradient(
			90deg,
			transparent,
			rgba(255, 255, 255, 0.8),
			transparent
		);
		transform: skewX(35deg);
		transition: 0s;
	}
	ul li a:hover:before {
		left: calc(100% + 100px);
		transition: 0.5s;
		transition-delay: 0.2s;
	}
`
const Logo = styled.img`
	width: 100px;
	height: 100px;
`;
const Header = styled.div`
	position: fixed;
	top: 0;
	left: 0;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	height: 22%;
	width: 100%;
	background-color: #1d1d1d;
	h1,
	p {
		font-size: 16px;
		font-family: "Alkalami", serif;
		color: cyan;
		padding-bottom: 7px;
	}
`;
