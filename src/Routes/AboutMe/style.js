import styled from "styled-components";

export const AboutMePage = styled.div`
	min-height: 100vh;

	display: grid;
	grid-template-columns: 50% 50%;

	padding-top: 70px;
	background-color: #2a2a2a;
	cursor: default;

	@media (max-width: 1000px) {
		padding-top: 40px;
		grid-template-columns: 100%;
	}
	@media (max-width: 360px) {
		grid-template-columns: 100%;
		grid-template-rows: 100%;
	}
`;
export const StyledAboutMe = styled.div`
	justify-self: center;
	align-self: center;

	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: aqua;
	font-family: "Roboto", sans-serif;
`;
export const Profile = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
	justify-content: center;

	width: 200px;
	height: 200px;
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
	width: 100%;
	height: 100%;
	margin: 15px 20px 15px 40px;
	h1 {
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
		height: 100%;
		padding: 10px 0 10px 0;
	}
	@media (max-width: 360px) {
		display: none;
	} 
`;
