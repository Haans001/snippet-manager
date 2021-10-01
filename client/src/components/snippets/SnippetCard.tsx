import React from 'react';
import styled from 'styled-components';
import { theme } from 'assets/styles';
import { ReactComponent as LikeIcon } from 'assets/Icons/LikeIcon.svg';
import { ReactComponent as ViewsIcon } from 'assets/Icons/ViewsIcon.svg';

const { colors, fontSizes, easing } = theme;

const StyledSnippetCardContainer = styled.div`
	background: ${colors.blue400};
	padding: 1.4rem 2rem;
	border-radius: 10px;
	transition: transform 0.3s ${easing.easeInOutCubic};

	&:hover {
		transform: translateY(-1rem);
	}
`;

const StyledSnippetTitle = styled.a`
	color: ${colors.white};
	text-decoration: none;
	font-size: ${fontSizes.md};
	display: block;
	font-weight: 700;
`;

const StyledLanguage = styled.small`
	color: ${colors.blue100};
	font-size: ${fontSizes.sm};
	font-weight: 600;
`;
const StyledDescription = styled.p`
	color: ${colors.blue200};
	border-bottom: 1px solid #3c4e63;
	padding-bottom: 2rem;
`;

const StyledCardFooter = styled.footer`
	padding: 0.6rem 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledBreadcrumb = styled.div`
	color: ${colors.white};
	background: ${colors.blue500};
	padding: 0.3rem 0.6rem;
	display: inline-block;
	border-radius: 5px;
	margin-right: 0.8rem;
	cursor: pointer;

	svg {
		margin-right: 0.5rem;
	}
`;

const StyledProfileData = styled.a`
	display: flex;
	align-items: center;
	text-decoration: none;
`;

const StyledUserName = styled.span`
	color: ${colors.blue300};
	font-weight: 600;
`;

const StyledUserImage = styled.img`
	border-radius: 1000px;
	margin-right: 0.6rem;
`;

const SnippetCard = () => (
	<StyledSnippetCardContainer>
		<StyledSnippetTitle href='/'>Snippet Title</StyledSnippetTitle>
		<StyledLanguage>Language</StyledLanguage>
		<StyledDescription>
			Short description of snippet. Can contain up to 150 characters, then i gets
			cut.
		</StyledDescription>
		<StyledCardFooter>
			<div>
				<StyledBreadcrumb>
					<LikeIcon />
					32
				</StyledBreadcrumb>
				<StyledBreadcrumb>
					<ViewsIcon />
					103
				</StyledBreadcrumb>
			</div>
			<StyledProfileData href='/'>
				<StyledUserImage src='https://i.pravatar.cc/40?u=adasd112' alt='avatar' />
				<StyledUserName>Jan Rapacz</StyledUserName>
			</StyledProfileData>
		</StyledCardFooter>
	</StyledSnippetCardContainer>
);

export default SnippetCard;
