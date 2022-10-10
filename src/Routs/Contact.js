import styled from "styled-components";

export default function Contact() {
	return (
		<ContactMe>
			<h1> Contact me</h1>
			<p>
				I'm Interested in web, software and game development, AIs, virtual
				reality. Currently searching for a company to work with but also open for
				freelance opportunities. If I cross your mind don't hesitate to send me
				a message.
			</p>
			<Form>
				<NameAndEmail>
					<input name="name" />
					<input name="email" />
				</NameAndEmail>
				<input name="subject" />
				<input name="content" />
			</Form>
		</ContactMe>
	);
}
const ContactMe = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    
    width: 500px;
	height: 100vh;
    color: aqua;
    font-family: 'Roboto', sans-serif;

    h1 {
        margin: 10px 0;
        font-size: 36px;
    }
    p {
        color: white;
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 10px;
    }
`
const Form = styled.form `
    display: flex;
    flex-direction: column;
    input {
        margin: 10px;
        border-radius: 5px;
    }
`
const NameAndEmail = styled.div `
    display: flex;
    flex-direction: row;
`