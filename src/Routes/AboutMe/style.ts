import styled from "styled-components";

export const AboutMePage = styled.div`
	display: grid;
	grid-template-columns: 55% 45%;
	min-height: 100vh;
	padding: 80px 0 20px 0;
	background-color: #2a2a2a;
	cursor: default;

	@media (max-width: 1080px) {
		padding-top: 100px;
		grid-template-columns: 100%;
	}
	@media (max-width: 1000px) {
		padding-top: 40px;
		grid-template-columns: 100%;
	}
	@media (max-width: 360px) {
		grid-template-columns: 100%;
		padding: 0px 0 60px 0;
	}
`;
export const StyledAboutMe = styled.div`
	display: grid;
	grid-template-rows: 35% 65%;
	min-height: 100%;

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
	height: 100%;

	font-family: "Alkalami", serif;
	font-size: 18px;

	img {
		width: 150px;
		height: 150px;
		border-radius: 50%;
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
	@media (max-width: 1000px) {
		padding-right: 15px;
		width: 80%;
	}
	@media (max-width: 360px) {
		width: 93%;
	}
`;
export const StyledImg = styled.div`
	justify-self: center;
	align-self: center;
	width: 75%;
	height: 70%;
	img {
		padding: 5px;
		width: 20%;
		height: 20%;
	}
	@media (max-width: 1000px) {
		padding-top: 25px;
		img {
			padding: 10px 0 10px 0;
		}
	}
	@media (max-width: 360px) {
		display: none;
	}
`;
