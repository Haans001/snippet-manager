import { media, theme } from 'assets/styles';
import styled from 'styled-components';

const { colors } = theme;

export default styled.div`
	text-align: center;
	padding: 3rem;
	background: ${colors.blue500};
	border-radius: 25px;
	width: 600px;

	${media.phone`
        padding: 3rem 1.5rem;
    `}

	${media.thone`
        width:100%;    
    `}
`;
