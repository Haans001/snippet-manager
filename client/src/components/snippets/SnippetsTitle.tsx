import { theme } from 'assets/styles';
import styled from 'styled-components';

const { colors } = theme;

export default styled.h3`
	margin-top: 7rem;
	border-bottom: 1px solid ${colors.blue400};
	padding: 0.8rem 0;
`;
