import { Container, theme, media } from 'assets/styles';
import Button from 'components/Button';
import { useState } from 'react';
import styled from 'styled-components';
import Modal from 'components/Modal';
import { RegisterForm } from 'components/auth';
import { SnippetsSlider, SnippetsTitle } from 'components/snippets';

const { colors, fontSizes } = theme;

const StyledHero = styled.div`
	text-align: center;
`;

const StyledParagraph = styled.p`
	color: ${colors.blue200};
	max-width: 70rem;
	margin: 0 auto;
`;

const StyledButton = styled(Button)`
	margin-top: 3.3rem;
`;

const StyledHeading = styled.h1`
	margin-bottom: 3rem;

	${media.tablet`
		font-size: ${fontSizes.xl};
	`}
`;

const Home = () => {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<Container>
			<StyledHero>
				<StyledHeading>
					Dont reinvent the wheel - just keep the code here.
				</StyledHeading>
				<StyledParagraph>
					Have you ever find yourself searching the web for the same boilerplate code
					that you use in every project? Please, save yourself some time and keep
					your code here!
				</StyledParagraph>
				<StyledButton onClick={() => setModalOpen(true)} large>
					Create an account
				</StyledButton>
				<Modal isOpen={modalOpen} handleClose={() => setModalOpen(false)}>
					<RegisterForm />
				</Modal>
			</StyledHero>
			<SnippetsTitle>Popular Snippets</SnippetsTitle>
			<SnippetsSlider />
		</Container>
	);
};

export default Home;
