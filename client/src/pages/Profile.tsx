import React from 'react';
import { Container, media, theme } from 'assets/styles';
import styled from 'styled-components';
import { SnippetsGrid, SnippetsTitle } from 'components/snippets';
import { Link } from 'components/Button';

const { colors, fontSizes } = theme;

const StyledProfileContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledProfileImage = styled.img`
	width: 150px;
	border-radius: 1000px;
	aspect-ratio: 1 / 1;

	${media.phone`
        width: 100px;
    `}
`;

const StyledUserName = styled.h2`
	letter-spacing: 2px;
	margin-top: 2rem;
`;

const StyledProfileStats = styled.div`
	display: flex;
	margin: 3rem 0;
`;

const StyledStat = styled.div`
	margin: 0 3rem;

	${media.phone`
        margin: 0 1.5rem;
    `}
`;

const StyledStatNumber = styled.span`
	display: block;
	text-align: center;
	font-size: ${fontSizes.md};
	color: ${colors.blue100};
`;

const StyledStatNumberLabel = styled.span`
	color: ${colors.blue200};
	text-transform: uppercase;
`;

const Profile = () => (
	<Container>
		<StyledProfileContainer>
			<StyledProfileImage
				src='https://i.pravatar.cc/150?u=adasd112'
				alt='avatar'
			/>
			<StyledUserName>Jan Rapacz</StyledUserName>
			<StyledProfileStats>
				<StyledStat>
					<StyledStatNumber>115</StyledStatNumber>
					<StyledStatNumberLabel>Viewed</StyledStatNumberLabel>
				</StyledStat>
				<StyledStat>
					<StyledStatNumber>5</StyledStatNumber>
					<StyledStatNumberLabel>Published</StyledStatNumberLabel>
				</StyledStat>
				<StyledStat>
					<StyledStatNumber>21</StyledStatNumber>
					<StyledStatNumberLabel>Liked</StyledStatNumberLabel>
				</StyledStat>
			</StyledProfileStats>
			<Link to='/create' large>
				Create new snippet
			</Link>
		</StyledProfileContainer>
		<SnippetsTitle>Your Work</SnippetsTitle>
		<SnippetsGrid />
	</Container>
);

export default Profile;
