import styled, { css } from 'styled-components';
import { theme, media } from 'assets/styles';
import { Link as RouterLink } from 'react-router-dom';

const { colors, fontSizes, easing } = theme;

const buttonBase = css<{ large?: boolean }>`
	background: ${colors.blue100};
	font-size: ${({ large }) => (large ? fontSizes.md : fontSizes.base)};
	padding: ${({ large }) => (large ? '2rem 5rem' : '1rem 4rem')};
	text-decoration: none;
	transition: background 0.4s ${easing.easeInOutCubic};

	&:hover {
		background: ${colors.blue100off};
	}

	${media.phone`
		padding: ${({ large }) => (large ? '1.5rem 3rem' : '0.6rem 2rem')};
    `};
`;

export const Link = styled(RouterLink)<{ large?: boolean }>`
	${buttonBase}
	border-radius: 1000px;
`;

const Button = styled.button<{ large?: boolean }>`
	${buttonBase}
`;

export default Button;
