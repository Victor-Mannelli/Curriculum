import styled from "styled-components";

export const AboutMePage = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	min-height: 100vh;

	scroll-snap-align: start;
	padding: 80px 0 20px 0;
	background-color: #2a2a2a;
	cursor: default;

	@media (max-width: 1200px) {
		padding-top: 70px;
	}
	@media (max-width: 1000px) {
		padding-top: 40px;
		flex-direction: column;
	}
	@media (max-width: 430px) {
		padding: 0 0 60px 0;
	}
`;
export const StyledAboutMe = styled.div`
	display: grid;
	grid-template-rows: 40% 60%;
	min-height: 100%;
	padding-top: 1rem;

	justify-self: center;
	align-self: center;
	color: aqua;
	font-family: "Roboto", sans-serif;
`;
export const Profile = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	font-family: "Alkalami", serif;
	font-size: 18px;
	margin-top: 2rem;

	@media (max-width: 430) {
		margin-top: 0rem;
	}

	img {
		width: auto;
		height: 15rem;
		border-radius: 5%;
		margin-bottom: 20px;
	}
`;
export const Description = styled.div`
	justify-self: center;
	width: 82%;

	h1 {
		margin-top: 15px;
		font-size: 50px;
		font-family: "Alkalami", serif;
		padding: 15px 0;
	}
	p {
		color: white;
		font-size: 17px;
		line-height: 25px;
		padding-bottom: 20px;
		text-align: justify;
	}
	h2 {
		font-size: 20px;
	}
	@media (max-width: 1200px) {
		width: 80%;
		align-self: center;
	}
	@media (max-width: 430px) {
		width: 93%;
		h1 {
			margin-top: 0;
		}
	}
`;
export const StyledToolsAndLibs = styled.div`
	justify-self: center;
	align-self: center;
	width: 80%;
	height: 80%;

	img {
		padding: 5px;
		width: 100px;
		height: 100px;
	}
	@media (max-width: 1000px) {
		justify-self: top;
		padding-top: 25px;
		img {
			padding: 10px 0 10px 0;
		}
	}
	@media (max-width: 430px) {
		display: none;
	}
`;

export const StyledSvg = styled.div`
	position: absolute;	
	width: 100px;
	height: 100px;
	padding: 5px;
	svg {
		padding: 5px;
		background: white;
		border-radius: 20%;
	}
`