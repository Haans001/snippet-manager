import styled from 'styled-components';
import { theme } from 'assets/styles';

const { fonts, colors, fontSizes } = theme;

const Input = styled.input`
	background: ${colors.blue400};
	color: ${colors.white};
	border-radius: 10px;
	width: 100%;
	padding: 1rem 2rem;
	font-size: ${fontSizes.base};
	font-family: ${fonts.primary};
	font-weight: 600;
	border: 0;
	outline: 0;

	::placeholder {
		color: ${colors.blue200};
	}
`;

export default Input;
