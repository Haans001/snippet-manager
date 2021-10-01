import React from 'react';
import Slider, { Settings } from 'react-slick';
import styled from 'styled-components';
import { media } from 'assets/styles';
import SnippetCard from './SnippetCard';

const StyledSnippetsContainer = styled.div`
	margin-top: 2rem;
`;

const StyledCardContainer = styled.div`
	padding: 0 1rem;

	${media.tablet`
		padding: 0 0.3rem;
	`}
`;

const StyledSlider = styled(Slider)`
	.slick-list {
		padding: 1rem 0;
	}
`;

const settings: Settings = {
	responsive: [
		{
			breakpoint: 1000,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			},
		},
	],
};

const Snippets = () => (
	<StyledSnippetsContainer>
		<StyledSlider slidesToShow={3} autoplay autoplaySpeed={4000} {...settings}>
			<StyledCardContainer>
				<SnippetCard />
			</StyledCardContainer>
			<StyledCardContainer>
				<SnippetCard />
			</StyledCardContainer>
			<StyledCardContainer>
				<SnippetCard />
			</StyledCardContainer>
			<StyledCardContainer>
				<SnippetCard />
			</StyledCardContainer>
			<StyledCardContainer>
				<SnippetCard />
			</StyledCardContainer>
			<StyledCardContainer>
				<SnippetCard />
			</StyledCardContainer>
		</StyledSlider>
	</StyledSnippetsContainer>
);

export default Snippets;
