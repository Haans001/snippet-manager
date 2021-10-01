import { theme } from 'assets/styles';
import styled from 'styled-components';

const { colors, fontSizes } = theme;

export default styled.label`
	color: ${colors.blue100};
	font-size: ${fontSizes.base};
	font-weight: 600;
	display: block;
	margin-bottom: 1rem;
`;
