import styled from 'styled-components';
import media from './media';

export default styled.div`
	max-width: 1400px;
	padding: 0 1.5rem;
	margin: 10rem auto 0 auto;

	${media.tablet`
		margin: 5rem auto 0 auto;
	`}
`;
