import styled from "styled-components";

export const StyledNavigationBar = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	z-index: 3;
	padding-bottom: 70px;

	display: flex;
	border-bottom: gray solid 1px;
	width: 100%;
	height: 70px;

	font-size: 24px;
	font-family: "Alkalami", serif;
	background-color: #1d1d1d;

	div {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;

		height: 70px;
		width: 100%;
		padding-top: 10px;
		color: aqua;
		border-right: gray solid 1px;
		cursor: pointer;

		:hover p {
			color: white;
			transition: 0.5s;
			transform: scale(1.2);
		}
		&:nth-child(1) {
			justify-content: space-evenly;
			text-align: center;
			padding: 10px 25px 0 20px;
			:hover p {
				color: white;
				transition: 0.5s;
				transform: scale(1.1);
			}
			img {
				width: 80px;
				height: 90px;
				padding-bottom: 10px;
			}
			p {
				font-size: 22px;
			}
		}
	}
	@media (max-width: 1000px) {
		display: none;
		/* padding-bottom: 0; */
	}
`;
export const Icons = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 100%;
	height: 70px;
	border: none;

	font-size: 28px;
	background-color: rgb(29, 29, 29);
	color: aqua;
	cursor: initial;

	a {
		height: 30px;
	}

	ion-icon {
		cursor: pointer;
		border-radius: 10px;

		:hover {
			color: white;
			transition: 0.5s;
			transform: scale(1.4);
		}
	}
`;
