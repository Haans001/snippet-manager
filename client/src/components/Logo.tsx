import React from 'react';
import styled from 'styled-components';
import { theme } from 'assets/styles';

const { fontSizes, colors } = theme;

const StyledLogo = styled.a`
	text-transform: uppercase;
	color: ${colors.white};
	font-size: ${fontSizes.md};
	font-weight: 700;

	span {
		color: ${colors.blue100};
	}
`;

const Logo: React.FC<
	React.AnchorHTMLAttributes<React.HTMLAttributeAnchorTarget>
> = ({ className }) => (
	<StyledLogo className={className}>
		Snippet<span>Manager</span>
	</StyledLogo>
);

export default Logo;
