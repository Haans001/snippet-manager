import styled from 'styled-components';
import SnippetCard from './SnippetCard';

const StyledSnippetsGrid = styled.div`
	margin-top: 2rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	grid-gap: 2rem;
`;

const SnippetsGrid = () => (
	<StyledSnippetsGrid>
		<SnippetCard />
		<SnippetCard />
		<SnippetCard />
		<SnippetCard />
		<SnippetCard />
		<SnippetCard />
	</StyledSnippetsGrid>
);

export default SnippetsGrid;
